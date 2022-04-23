<template>
  <div class="search-holder">
    <input
      type="search"
      name="search"
      id="search"
      ref="search"
      placeholder="Search"
      maxlength="150"
      spellcheck="false"
    />
    <div class="search">
      <fa fas="search" class="search-icon"></fa>
      <div class="field"></div>
      <button class="go-search" ref="btn">
        <fa fas="arrow-right"></fa>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
.search-holder {
  background: #f1f1f1;
  position: relative;
  border-radius: 100px;
  overflow: hidden;
  margin: 0rem 1rem;
}
.search {
  display: -ms-grid;
  display: grid;
  grid-auto-flow: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-grid-columns: 2.5rem auto 2.5rem;
  grid-template-columns: 2.5rem auto 2.5rem;
  justify-items: center;
  color: gray;
  cursor: text;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.search-holder:focus-within {
  border: 1px solid gray;
}
input[type='search']:focus {
  outline: 0;
}
input[type='search'] {
  margin: 0;
  background: 0;
  width: 100%;
  max-width: 300px;
  border: 1px solid transparent;
  position: relative;
  padding: 0.6rem 2.5rem;
}
.search-holder:focus-within .go-search {
  visibility: visible;
}
.search-icon {
  padding-left: 0.5rem;
  /* pointer-events: none; */
}
.go-search {
  width: 100%;
  height: 100%;
  border: 0;
  background: 0;
  visibility: hidden;
  cursor: pointer;
  pointer-events: auto;
}
</style>
