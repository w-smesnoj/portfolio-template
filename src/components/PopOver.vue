<template>
  <div class="popover" v-if="selected">
    <div class="content">
      <button class="close" @click="closeWindow"><Fa fa="close" /></button>
      <VueAgile
        :navButtons="false"
        :centerMode="true"
        :slidesToShow="1"
        :infinite="false"
        class="imgs"
      >
        <img
          v-for="img in selected.images"
          :key="img.img"
          :src="img.img"
          alt=""
          class="slide"
        />
      </VueAgile>
      <div class="info">
        <h3>{{ selected.titel }}</h3>
        <div class="tags">
          <span v-for="tag in selected.tags" :key="tag">{{ tag }}</span>
        </div>
        <div class="tags links">
          <a :href="selected.demo" v-if="selected.demo.length > 1">Demo</a>
          <a :href="selected.source">Source</a>
        </div>
        <div class="description"></div>
      </div>
    </div>
    <div class="background" @click="closeWindow"></div>
  </div>
</template>

<script>
import Fa from './globals/Fa.vue';
import { VueAgile } from 'vue-agile';

export default {
  components: {
    Fa,
    VueAgile,
  },
  props: {
    selected: Object,
    closeWindow: Function,
  },
};
</script>

<style lang="scss" scoped>
.agile img {
  max-height: 90%;
  object-fit: contain;
}
.agile {
  button {
    background: #484848;
    border: 0;
    padding: 11px;
    margin: 0px;
    box-shadow: 0px 0px 0px 6px #1d1e21 inset;
    border-radius: 100px;
  }
}

.popover {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1001;
  overflow: auto;
  top: 0;
  display: flex;
  .background {
    background: #00000052;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
    top: 0;
  }

  .content {
    background: #1d1e21;
    max-width: 600px;
    margin: auto;
    width: -webkit-fill-available;
    position: relative;
  }
  .info {
    padding: 0 1.3rem 2rem 1.3rem;
    h3 {
      grid-area: txt;
      font-weight: 500;
      font-size: 1.7rem;
      line-height: 1.4;
      margin-bottom: 0rem;
      margin-top: 0;
    }

    .tags {
      display: flex;
      gap: 0.7rem;
      font-weight: 500;
      font-size: 0.8rem;
      color: var(--txt-med);
    }
    .tags.links {
      a {
        color: white;
        text-decoration: none;
        margin-top: 0.6rem;
      }
    }
  }
  .info > span {
    display: block;
    margin-top: 1rem;
    font-weight: 500;
    font-size: 0.8rem;
    color: var(--txt-med);
  }
  .screenshots {
    padding: 1.3rem;
    img {
      max-height: 400px;
      max-width: 100%;
      margin: auto;
    }
  }
  .close {
    background: transparent;
    border: 0;
    color: white;
    padding: 1rem;
    box-sizing: border-box;
    position: absolute;
    right: 0;
    cursor: pointer;
    z-index: 100;
    background: rgb(0 0 0 / 39%);
  }
}
</style>
