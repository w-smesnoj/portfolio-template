<template>
  <div class="item">
    <!-- <h4>Projects</h4> -->
    <div class="group sidebargroup">
      <ol v-for="(category, index) in options" :key="category">
        <h4>{{ index }}</h4>
        <li v-for="subcat in category" :key="subcat">
          <input class="checkbox" type="checkbox" :id="subcat" :name="subcat" />
          <label :for="subcat">{{ subcat }}</label>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Object,
  },
};
</script>

<style scoped>
.sidebargroup > ol {
  flex: 1 1 10em !important;
}
.sidebargroup {
  margin-left: 0.5rem;
}
.sidebargroup h4 {
  margin: 0.2em 0em 0.4rem 0rem;
  text-transform: capitalize;
  color: #b2b2b2;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
  font-size: 12px !important;
  font-weight: 700 !important;
  cursor: default;
}
.sidebargroup label {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.9rem;
  padding: 0.3rem 0rem;
}
.sidebargroup li {
  color: hsl(210 1% 45% / 1);
}
.sidebargroup {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem !important;
  /* background: hsl(0 0% 99% / 1); */
  padding: 1rem 0rem;
  overflow: hidden;
  border-radius: 0.5rem;
}
.item > h4 {
  margin: 0.2em 0em 0.2rem 0rem;
  text-transform: capitalize;
  color: #2d2d2d;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
}

input[type='checkbox'] {
  display: none;
}
label {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.9rem;
  padding: 0.5rem 0rem;
}
input[type='checkbox'] + label::before {
  -webkit-mask-box-image-repeat: round;
  -webkit-mask-repeat: no-repeat;
  height: 16px;
  width: 16px;
  background-color: #dadada;
  -webkit-mask-image: url(/svg/check-square-regular.svg);
  mask-image: url(/svg/check-square-regular.svg);
  display: block;
  content: '';
  float: left;
}
input[type='checkbox'] + label:hover {
  /* text-shadow: 1px 0 0 red; */
  /* outline: solid 5px #fc5185; */
  -webkit-text-stroke: 0.02rem black;
}
input[type='checkbox'] + label:hover::before {
  background-color: gray !important;
}
input[type='checkbox']:checked + label::before {
  /* box-shadow: inset 0px 0px 0px 3px #fff; */
  /* background-image: url('/svg/check-square-solid.svg'); */
  -webkit-mask-image: url(/svg/check-square-solid.svg);
  mask-image: url(/svg/check-square-solid.svg);
  background-color: #595959;
  /* background-color: gray; */
}
input[type='checkbox']:checked + label {
  font-weight: bold;
}

.group li > label,
.group li > input {
  cursor: pointer;
}
.group li {
  /* display: grid; */
  /* grid-auto-flow: column; */
  /* grid-template-columns: auto 1fr; */
  /* align-items: center; */
  /* gap: 0.9rem; */
  color: hsl(210 1% 33% / 1);
  /* font-size: 14px; */
  letter-spacing: 0.2px;
  font-size: 14px;
  font-weight: 500;
  /* padding: 0.5rem 0rem;*/
}

/* .group button:focus {
  outline: 0;
} */
/* .group button:hover {
  -webkit-text-stroke: 0.04rem black;
} */
/* .group button {
  border: 0;
  background: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  padding: 0.4rem 0rem;
  white-space: nowrap;
} */
.group h4 {
  margin: 0.2em 0em 1rem 0rem;
  text-transform: capitalize;
  color: #b2b2b2;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.02rem;
}
.group {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  /* background: hsl(0 0% 99% / 1); */
  padding: 1rem 0rem;
  overflow: hidden;
  border-radius: 0.5rem;
  /* box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)!important; */
}
.group > ol {
  flex: 1 1 7em;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
