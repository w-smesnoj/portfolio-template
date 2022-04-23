<template>
  <div>
    <div class="main-view" :class="{ hidden: scrolledDown }">
      <div class="sider sidebar">
        <div class="holder">
          <div class="xx">
            <div class="title">Inhaltsverzeichnis</div>
            <a class="listitem" href="#intro">Intro</a>
            <a class="listitem" href="#Intro">Über Mich</a>
            <a class="listitem" href="#Projekte">Projekte</a>
            <a class="listitem" href="#Lebenslauf">Lebenslauf</a>
            <a class="listitem" href="#Kontakt">Kontakt</a>
            <br />
            <div class="contact">
              <a href="mailto:yourmail@gmail.com"> yourmail@gmail.com</a>
              <a href="https://github.com/your-github/"
                >github.com/your-github</a
              >
              <a href="tel:+1-202-555-0179">+1-202-555-0179</a>
              <br />
              <a href="/impressum">Impressum</a>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <section id="intro">
          <div class="txt">
            <h1>
              Hi, Ich bin Name.
              <br />
              Ich komme aus Göttingen und code zum Spaß.
            </h1>
            <br />
            <a href="#Intro">Über Mich <Fa fa="arrow-down" /></a>
          </div>
        </section>
        <section id="Intro" aria-labelledby="intro-heading">
          <h2 id="intro-heading">Über Mich</h2>
          <span>
            Ursprünglich komme ich aus der Grafik- & Medienbranche. Mein Bedarf
            nach Kreativität war damit gedeckt, aber Pixel schieben reicht mir
            nicht mehr aus. Viel lieber beschäftige ich mich mit den scheinbar
            unendlich vielen fordernden Problemstellungen, die das Programmieren
            bietet.
          </span>
        </section>
        <section id="Projekte" aria-labelledby="projekte-heading">
          <h2 id="projekte-heading">Projekte</h2>
          <div class="cards">
            <div class="card-col">
              <Card :item="projects[0]" :txt="select" />
              <Card :item="projects[1]" :txt="select" />
            </div>
            <div class="card-col">
              <Card :item="projects[2]" :txt="select" />
              <Card :item="projects[3]" :txt="select" />
            </div>
          </div>
        </section>
        <section id="Erfahrungen"></section>
        <section id="Lebenslauf" aria-labelledby="lebenslauf-heading">
          <h2 id="lebenslauf-heading">Lebenslauf</h2>
          <div class="lebenslauf">
            <h3>Berufserfahrung</h3>
            <div class="cont" v-for="i in erfahrungen" :key="i.ort">
              <span>{{ i.datum }}</span>
              <span>{{ i.extra }}</span>
              <span>{{ i.titel }}</span>
              <span>{{ i.ort }}</span>
              <span>{{ i.txt }}</span>
            </div>
          </div>
          <div class="bildungsweg">
            <h3>Bildungsweg</h3>
            <div class="cont" v-for="i in bildung" :key="i.titel">
              <span>{{ i.datum }}</span>
              <span>{{ i.extra }}</span>
              <span>{{ i.titel }}</span>
              <span>{{ i.ort }}</span>
              <span>{{ i.txt }}</span>
            </div>
          </div>
          <br />
          <a href="/cv.pdf"> <Fa fa="file-pdf" /> PDF herunterladen </a>
        </section>
        <section id="Kontakt" aria-labelledby="kontakt-heading">
          <h2 id="kontakt-heading">Kontakt</h2>
          yourmail@gmail.com
          <br />
          <a href="mailto:yourmail@gmail.com">
            <Fa fa="envelope-o" /> Email schreiben
          </a>
          <br />
          <br />
          +1-202-555-0179
          <br />
          <a href="tel:+1-202-555-0179"> <Fa fa="phone" /> Anrufen</a>
        </section>
      </div>
    </div>
    <PopOver :selected="selected" :closeWindow="closePopOver" />
  </div>
</template>

<script>
import Card from './globals/Card.vue';
import Fa from './globals/Fa.vue';
import PopOver from './PopOver.vue';

export default {
  components: {
    Card,
    Fa,
    PopOver,
  },
  data: () => ({
    erfahrungen: [
      {
        datum: '01 / 2020 – heute',
        extra: '',
        titel: 'Maschinenbediener im Metallbau',
        ort: 'YourJobsLocation Ldt, TX',
        txt: '',
      },
      {
        datum: '11 / 2016',
        extra: '(8 Wochen Praktikum)',
        titel: 'Als Mediengestalter (Digital & Print)',
        ort: 'YourJobsLocation Ldt, TX',
        txt: 'Print-Design, Web-Development, UI/UX',
      },
      {
        datum: '09 / 2014',
        extra: '(3 Wochen Praktikum)',
        titel: 'Als Mediengestalter (Digital & Print)',
        ort: 'YourJobsLocation Ldt, TX',
        txt: 'Bildbearbeitung, Logo & CI Entwicklung',
      },
    ],
    bildung: [
      {
        datum: '04 / 2019 – 06 / 2020',
        extra: '',
        titel: 'Wirtschaftsinformatik Studium',
        ort: 'YourUniversity Ldt, TX',
        txt: '',
      },
      {
        datum: '08 / 2015 – 06 / 2018',
        extra: '',
        titel:
          'Fachabitur Berufsschulabschluss zum gestaltungstechnischen Assistenten',
        ort: 'YourSchool Ldt, TX',
        txt: '',
      },
      {
        datum: '08 / 2009 – 07 / 2015',
        extra: '',
        titel: 'Realschulabschluss',
        ort: 'YourSchool Ldt, TX',
        txt: '',
      },
    ],
    projects: [
      {
        id: 0,
        images: [
          {
            img: '/images/demo-nuance-small.gif',
          },
          {
            img: '/images/01.png',
          },
        ],
        titel: 'Social Networking Plattform',
        tags: ['VueJS', 'NodeJS', 'mongoDB'],
        demo: '',
        source: 'https://github.com/w-smesnoj/BehanceApp',
      },
      {
        id: 1,
        images: [
          {
            img: '/images/demo-diprella-cropped.gif',
          },
          {
            img: '/images/03.png',
          },
        ],
        titel: 'Semantic Form Application',
        tags: ['VueJS', 'NodeJS', 'mongoDB'],
        demo: 'https://diprella-login.herokuapp.com/',
        source: 'https://github.com/w-smesnoj/diprella-login',
      },
      {
        id: 2,
        images: [
          {
            img: '/images/demo-parallax.gif',
          },
          {
            img: '/images/02.png',
          },
        ],
        titel: 'CMS Frontend Webstore',
        tags: ['VueJS', 'Contentful'],
        demo: 'https://fierce-island-96798.herokuapp.com/',
        source: 'https://github.com/w-smesnoj/parallax-swipe',
      },
      {
        id: 3,
        images: [
          {
            img: '/images/04.png',
          },
          {
            img: '/images/04.png',
          },
        ],
        titel: 'Whiteboard Collaboration App',
        tags: ['React', 'NodeJS', 'PostgreSQL', 'WebSockets'],
        demo: '',
        source: 'https://github.com/w-smesnoj/visual-collaboration-platform',
      },
    ],
    selected: null,
  }),
  mounted() {
    window.onscroll = this.lodash.debounce(this.scrollcalc, 5);
    this.scrollcalc();
    let anchorlinks = document.querySelectorAll('a[href^="#"]');

    for (let item of anchorlinks) {
      item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href');
        let target = document.querySelector(hashval);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        history.pushState(null, null, hashval);
        e.preventDefault();
      });
    }
  },
  methods: {
    select: function (id) {
      this.selected = this.projects.find((x) => x.id === id);
    },
    closePopOver() {
      this.selected = null;
    },
    scrollcalc() {
      let mainNavLinks = document.querySelectorAll('.xx a');
      let fromTop = document.documentElement.scrollTop;
      let navbarHeight = 200;

      mainNavLinks.forEach((link) => {
        if (link.hash == '') return;

        let section = document.querySelector(link.hash);
        if (section == null) return;
        if (
          section.offsetTop <= fromTop + window.innerHeight &&
          section.offsetTop + section.offsetHeight > fromTop + navbarHeight
        ) {
          link.classList.add('current');
          let allCurrents = document.querySelectorAll('.current');
          let allFirsts = document.querySelector('.first');
          if (allFirsts != null) {
            allFirsts.classList.remove('first');
          }
          allCurrents[0].classList.add('first');
        } else {
          link.classList.remove('current');
        }
      });
    },
  },
  props: {
    scrolledDown: Boolean,
  },
};
</script>

<style lang="scss" scoped>
#intro {
  .txt {
    a {
      display: none;
      text-decoration: none;
      color: white;
    }
  }
}
@media screen and (max-width: 680px) {
  .cards {
    display: block !important;
  }
  .card {
    width: 100% !important;
    height: 33rem !important;
  }
  #intro {
    .txt {
      a {
        display: hidden;
      }
    }
  }
  .hidden {
    #intro {
      .txt {
        a {
          display: block;
        }
      }
    }
  }
  .cont {
    grid-template-areas:
      'datum'
      'extra'
      'titel'
      'ort'
      'txt' !important;
    grid-template-columns: 100% !important;
  }
  .txt h1 {
    font-size: 7vw !important;
  }
}
#Kontakt,
#Lebenslauf {
  a {
    color: white;
    i {
      font-size: 0.9rem;
    }
  }
  a:hover {
    color: hsl(0deg 0% 63%);
  }
}
.bildungsweg,
.lebenslauf {
  h3 {
    font-size: 0.9rem;
  }
  cursor: default;
}
.cont {
  display: grid;
  grid-template-areas:
    'datum titel'
    'extra ort'
    '. txt';
  grid-template-columns: 11rem 370px;
  gap: 0rem 1rem;
  margin-bottom: 1.3rem;
  span:nth-child(1) {
    grid-area: datum;
    font-weight: 600;
    font-size: 0.9rem;
    color: hsl(0deg 0% 63%);
    letter-spacing: -0.02rem;
  }
  span:nth-child(2) {
    grid-area: extra;
    font-size: 0.87rem;
    color: hsl(0deg 0% 63%);
    letter-spacing: -0.02rem;
  }
  span:nth-child(3) {
    grid-area: titel;
  }
  span:nth-child(4) {
    grid-area: ort;
    font-size: 0.9rem;
    color: hsl(0deg 0% 63%);
  }
  span:nth-child(5) {
    grid-area: txt;
    font-size: 0.9rem;
    color: hsl(0deg 0% 63%);
  }
}

.contact {
  // margin: 2rem 0rem;
  display: flex;
  flex-flow: column;
  gap: 0.7rem;
  width: 100%;
  transition: opacity 0.3s;
  a {
    text-decoration: none;
    color: var(--txt-med);
    padding: 0rem 1.5rem;
  }
}
.contact {
  a:hover {
    color: white;
  }
}
#Intro {
  a {
    color: var(--accent-1);
    text-decoration: none;
    i {
      margin-left: 0.4rem;
    }
  }
}
section {
  padding: 6rem 0rem;
  &:empty {
    display: none;
  }
  span {
    display: block;
    max-width: 550px;
  }
}
.mainitem-active {
  border-radius: 6px;
  background: hsl(220 100% 71% / 0.11);
  color: hsl(220 100% 53% / 1) !important;
  margin-bottom: 0.3rem;
}
.title {
  font-size: 12px !important;
  font-weight: 700 !important;
  margin: 0.2em 0em 1rem 0rem;
  text-transform: capitalize;
  color: #b2b2b2;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
  width: 100%;
  text-align: center;
}
.xx {
  display: flex;
  flex-flow: column;
  align-items: self-end;
  gap: 0.7rem;
  a {
    transition: min-width 0.3s, border 0.3s, padding 0.3s, box-shadow 0.3s,
      background 0.15s;
    width: fit-content;
    min-width: 210px;
    max-width: -webkit-fill-available;
  }
}
.listitem:nth-child(2).first {
  background: var(--accent-1);
}
.listitem:nth-child(3).first {
  background: var(--accent-2);
}
.listitem:nth-child(4).first {
  background: var(--accent-3);
}
.listitem:nth-child(5).first {
  background: var(--accent-4);
}
.listitem:nth-child(6).first {
  background: var(--accent-5);
}
.listitem:nth-child(7).first {
  background: var(--accent-6);
}
.listitem:hover {
  background-color: hsla(0, 0%, 80%, 0.15);
}
.listitem {
  text-decoration: none;
  display: block;
  padding: 0.75rem 1.8rem;
  margin-right: 1rem;
  color: white;
  font-size: 0.95em;
  cursor: pointer;
  transition: border 0.3s, padding 0.3s, box-shadow 0.3s, background 0.15s;
  border-left: 2px solid transparent;
  font-weight: 500;
  border-radius: 0.4rem;
}
.mainitem {
  padding: 0.5rem 0.5rem;
}
.current {
  border-left: 6px solid #ffffff1c;
  // box-shadow: 0px 0px 0px 0px black;
}
.first {
  color: black;
  color: black !important;
  padding-left: 2rem;
  font-weight: 600;
  transform-origin: left;
  animation: pop 0.25s ease-out;
}
@keyframes pop {
  35% {
    transform: scale(1.05);
  }
  75% {
    transform: scale(0.96);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<style lang="scss" scoped>
.card-col:nth-child(2) {
  margin-top: 5rem;
}
.cards {
  display: flex;
  gap: 1.7rem;
}
.card-col {
  display: flex;
  flex-flow: column;
  gap: 1.7rem;
}

.sidebar,
.sideoptions {
  transition: width 0.3s;
}
@media screen and (max-width: 1300px) {
  .main-view {
    grid-template: 'siderbar main main';
  }
  .sideoptions {
    display: none;
  }
}
@media screen and (max-width: 1023px) {
  .main-view {
    grid-template: 'main main main' !important;
    grid-template-columns: 1fr !important;
    width: auto !important;
  }
  .sidebar {
    display: none;
  }
}

.holder {
  scrollbar-color: #bebebe transparent;
  scrollbar-width: thin;
}
.holder:hover {
  scrollbar-color: #bebebe #f2f2f2;

  scrollbar-width: revert !important;
}

.holder::-webkit-scrollbar {
  width: 15px;
  padding: 10px;
}

.holder::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /* background-color: #bebebe; */
  border: 5px solid transparent;
  background-clip: content-box;
}

.sider:hover .holder::-webkit-scrollbar {
  width: 15px;
}

.sider:hover .holder::-webkit-scrollbar-track {
  border-radius: 10px;
}

.sider:hover .holder::-webkit-scrollbar-thumb {
  border: 0;
  border-radius: 10px;
}

.sider:hover .holder::-webkit-scrollbar-thumb:hover {
  background: #818b99;
}
.sider {
  height: 100%;
  width: 310px;
}
.holder {
  padding: 1rem;
  position: -webkit-sticky;
  position: sticky;
  top: 60px;
  height: calc(100vh - 90px);
  overflow-y: auto;
}
.sidebar {
  justify-self: right;
}

.link .fas {
  font-size: 0.8rem;
}

.filters > .text {
  padding: 0.5em 0em;
  display: block;
}
.filters > .text > input {
  width: 125px;
  border: 0;
  background: 0;
  margin: 0rem 0.3rem;
  border-bottom: 1px solid gray;
}
.filters {
  margin: 2rem 0rem;
}

h2 {
  font-size: 1rem;
  color: var(--txt-med);
  margin-bottom: 2rem;
  cursor: default;
}
.main-view {
  display: grid;
  grid-template: 'siderbar main';
  grid-template-columns: 1fr minmax(600px, 770px);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
}
div > .main {
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
  box-sizing: border-box;
  line-height: 1.6;
  color: var(--txt);
  padding: 1.5rem 1.5rem 80vh 1.5rem;
  width: 100%;
  z-index: 100;
}
</style>
<style scoped lang="scss">
.txt h1 {
  font-size: 3rem;
  margin: 0.2rem 0;
  line-height: 1.3;
  max-width: 600px;
}
.main-view {
  transition: background 0.3s;
  section {
    transition: opacity 0.3s;
  }
}

.main-view,
.main-view {
  .main .holder,
  .sider {
    transition: background 0.3s;
  }
}
.hidden {
  .xx {
    a {
      transition: min-width 0.3s;
      min-width: 0px;
      width: fit-content;
    }

    .title {
      opacity: 0;
    }
    .listitem {
      border: 0;
      color: black;
    }
    .listitem:nth-child(2) {
      background: var(--accent-1);
    }
    .listitem:nth-child(3) {
      background: var(--accent-2);
    }
    .listitem:nth-child(4) {
      background: var(--accent-3);
    }
    .listitem:nth-child(5) {
      background: var(--accent-4);
    }
    .listitem:nth-child(6) {
      background: var(--accent-5);
    }
    .listitem:nth-child(7) {
      background: var(--accent-6);
    }
    .listitem:hover {
      background: #fbfbfb;
    }
  }
  .contact,
  section {
    opacity: 0;
  }
  .main,
  .holder,
  .sider {
    background: transparent !important;
  }
  background: transparent !important;
  box-shadow: unset !important;
}
#intro {
  opacity: 100;
}
</style>
