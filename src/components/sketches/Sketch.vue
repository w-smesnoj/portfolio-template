<template>
  <vue-p5 @sketch="sketch"> </vue-p5>
</template>

<script>
import VueP5 from 'vue-p5';

export default {
  components: {
    VueP5,
  },
  methods: {
    sketch(sk) {
      class Mover {
        constructor(x, y, m) {
          this.pos = sk.createVector(x, y);
          this.vel = sk.constructor.Vector.random2D();
          this.vel.mult(5);
          this.acc = sk.createVector(0, 0);
          this.mass = m;
          this.r = sk.sqrt(this.mass * 2);
        }

        applyForce(force) {
          let f = sk.constructor.Vector.div(force, this.mass);
          this.acc.add(f);
        }

        update() {
          this.vel.add(this.acc);
          this.pos.add(this.vel);
          this.acc.set(0, 0);
        }

        show() {
          sk.fill('#212225');
          sk.ellipse(this.pos.x, this.pos.y, this.r * 2);
        }
      }
      class Attractor {
        constructor(x, y, m) {
          this.pos = sk.createVector(x, y);
          this.mass = m;
          this.r = sk.sqrt(this.mass) * 2;
        }

        attract(mover) {
          let force = sk.constructor.Vector.sub(this.pos, mover.pos);
          let distanceSq = sk.constrain(force.magSq(), 100, 1000);
          let G = 10;
          let strength = (G * (this.mass * mover.mass)) / distanceSq;
          force.setMag(strength * 0.01);
          mover.applyForce(force);
        }

        show() {
          sk.noStroke();
          sk.fill('#2e2f31');
          sk.ellipse(this.pos.x, this.pos.y, this.r * 2);
        }
      }
      let movers = [];
      let attractors = [];
      const width = document.body.clientWidth;
      const height = window.innerHeight;

      sk.setup = () => {
        sk.createCanvas(width, height);
        for (let i = 0; i < 8; i++) {
          let x = sk.random(width);
          let y = sk.random(height);
          let m = sk.random(150, 350);
          movers.push(new Mover(x, y, m));
          if (i < 3) {
            attractors.push(
              new Attractor(
                sk.random(height),
                sk.random(height),
                sk.random(150, 350)
              )
            );
          }
        }
      };
      sk.draw = () => {
        sk.background('#1d1e21');
        for (let mover of movers) {
          mover.update();
          mover.show();
          for (const attractor of attractors) {
            attractor.attract(mover);
          }
        }
        for (const attractor of attractors) {
          attractor.show();
        }
      };
      sk.windowResized = () => {
        sk.resizeCanvas(document.body.clientWidth, window.innerHeight);
      };
      sk.mouseClicked = () => {
        movers.push(new Mover(sk.mouseX, sk.mouseY, sk.random(150, 350)));
        if (movers.length > 13) {
          movers.shift();
        }
      };
      sk.keyPressed = (e) => {
        if (e.key !== 'a') return;
        attractors.push(
          new Attractor(sk.mouseX, sk.mouseY, sk.random(150, 350))
        );
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
