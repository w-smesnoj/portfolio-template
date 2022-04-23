<template>
  <div>
    <div id="header" :class="{ scrolled: !scrolledDown }">
      <!-- <div class="side"></div> -->
      <div class="mid">
        <div class="logo-holder">
          <button class="bar">
            <fa fas="bars"></fa>
          </button>
          <a href="fb.com">
            <img
              class="logo"
              src="/svg/personal-logo.svg"
              alt="Kiwi standing on oval"
            />
          </a>
          <!-- <div class="buttons logo">
            <button>Wjatscheslaw Smesnoj</button>
          </div> -->
        </div>

        <!-- <SearchBox /> -->
        <div class="search-holder"></div>
        <!-- <div class="links"> -->
        <div class="buttons">
          <!-- <button>Projects</button> -->
          <!-- <button>Contact</button> -->
          <!-- <button>Impressum</button> -->
        </div>
        <a class="logo-mobile" href="fb.com">
          <img
            class="logo"
            src="/svg/personal-logo.svg"
            alt="Kiwi standing on oval"
          />
        </a>
        <!-- <div class="lang">
            <div class="option">
              <input type="radio" name="Lang" id="ger-radio" />
              <label for="ger-radio">
                <img
                  src="/svg/flags/rounded/germany.svg"
                  alt="German Language"
                />
              </label>
            </div>
            <div class="option">
              <input type="radio" name="Lang" id="rus-radio" />
              <label for="rus-radio">
                <img
                  src="/svg/flags/rounded/russia.svg"
                  alt="Russian Language"
                />
              </label>
            </div>
            <div class="option">
              <input type="radio" name="Lang" id="eng-radio" checked />
              <label for="eng-radio">
                <img
                  src="/svg/flags/rounded/united-kingdom.svg"
                  alt="English Language"
                />
              </label>
            </div>
          </div> -->
        <!-- </div> -->
      </div>

      <!-- <div class="side"></div> -->
    </div>
  </div>
</template>

<script>
// import SearchBox from './SearchBox.vue';

export default {
  components: {
    // SearchBox,
  },
  props: {
    scrolledDown: Boolean,
  },
};
</script>

<style scoped>
@media screen and (max-width: 1023px) {
  .bar {
    display: grid !important;
  }
}
.logo-mobile {
  display: none;
}
@media screen and (max-width: 680px) {
  .bar {
    display: none !important;
  }
  .lang {
    display: none !important;
  }
  .mid {
    gap: 1rem;
  }
  .links {
    display: none !important;
  }
  .search-holder {
    margin: 0rem;
    grid-area: search;
  }
  .links {
    grid-template-columns: max-content !important;
    justify-self: flex-end !important;
    justify-content: end;
  }
  .buttons {
    display: none !important;
  }
}
@media screen and (max-width: 426px) {
  .mid {
    grid-template: 'logo search search' !important;
  }
}
.bar > i {
  font-size: 1.5rem;
}
.bar {
  padding: 1rem;
  height: 100%;
  background: 0;
  border: 0;
  display: none;
  align-content: center;
}
/* LANGUAGE */

.lang {
  display: grid;
  grid-auto-flow: column;
  background: #f1f1f1;
  border-radius: 100px;
  height: 100%;
  gap: 0.4rem;
}
.lang input[type='radio'] {
  display: none;
}

.lang .option {
  width: 2rem;
  height: 100%;
}
.lang:hover > .option > label > img {
  opacity: 1;
  filter: grayscale(0);
}
.lang > .option > label > img {
  width: 2rem;
  height: 100%;
  padding: 0.4rem;
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.1s, opacity 0.1s;
  opacity: 0.45;
  filter: grayscale(1);
}
.lang > .option > label > img:hover {
  filter: grayscale(0), saturate(10%);
}

input[type='radio']:checked + label > img {
  border-radius: 100px;
  transform: scale(1.45);
  filter: grayscale(0) !important;
  opacity: 1;
}

/* header */

@media screen and (max-width: 1650px) {
  #header {
    padding: 0rem 1rem;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 1023px) {
  /* .links {
    grid-template-columns: max-content !important;
    justify-self: flex-end !important;
    justify-content: end;
  }
  .buttons {
    display: none !important;
  } */
}

.buttons > button:hover {
  color: gray;
}
.buttons > button {
  margin: 0;
  height: 100%;
  background: 0;
  border: 0;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem;
  color: white;
}
.buttons {
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  width: inherit;
  max-width: 20rem;
  justify-self: end;
  /* margin: auto; */
  /* justify-self: center;*/
}

.logo-holder {
  justify-self: flex-start;
  display: grid;
  grid-auto-flow: column;
}

#header {
  display: grid;
  grid-template: 'main ';
  grid-template-columns: minmax(100px, 1080px);
  place-content: center;
  position: fixed;
  width: 100%;
  /* background-color: var(--bg-root); */
  height: 60px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  top: 0;
}
.mid {
  place-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-template: 'logo search links' / 1fr auto 1fr;
}
.links {
  gap: 1rem;
  display: grid;
  grid-auto-flow: column;
  /* grid-template-columns: 1fr auto; */
  align-items: end;
  /* justify-self: flex-end; */
  /* width: 100%; */
}
.mid > .links > a:hover {
  text-decoration: underline;
}
.mid > .links > a {
  text-decoration: none;
  color: gray;
}
.logo {
  height: 60px;
}
.scrolled {
  background-color: #212225;
}
</style>
