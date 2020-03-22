<template>
  <div class="app">
    <div class="header">
      <div class="header_container">
        <div class="header_logo"><img src="https://i.ibb.co/0GBSfG8/logo-3.png" alt="logo"></div>
        <div class="header_item">
          <div
          v-scroll-to="{el: '#about', offset: -70}"
          :class="{ active: this.menu.about.tab}"
        >About</div></div>
        <div class="header_item">
          <div
          v-scroll-to="{el: '#uiux', offset: -50}"
          :class="{ active: this.menu.uiux.tab}"
        >UI/UX</div></div>
        <div class="header_item">
          <div
          v-scroll-to="{el: '#project', offset: -50}"
          :class="{ active: this.menu.project.tab}"
        >Project</div></div>
        <div class="header_item">
          <div
          v-scroll-to="{el: '#illustration', offset: -50}"
          :class="{ active: this.menu.illustration.tab}"
        >Illustration</div></div>
        <div class="header_item">
          <div
          v-scroll-to="{el: '#webtoon', offset: -50}"
          :class="{ active: this.menu.webtoon.tab}"
        >Webtoon</div></div>
        <div class="header_item">
          <div
          v-scroll-to="{el: '#game', offset: -50}"
          :class="{ active: this.menu.game.tab}"
        >Game</div></div>
      </div>
    </div>
    <About />
    <UIUX />
    <Project />
    <Illustration />
    <Webtoon />
    <Game />
    <div class="footer">Contact : rlehd159@naver.com 01029404298<br/>Copyright &copy; 2020. GGirong. All rights reserved</div>
  </div>
</template>

<script>
import About from './components/About.vue'
import UIUX from './components/UIUX.vue'
import Project from './components/Project.vue'
import Illustration from './components/Illustration.vue'
import Webtoon from './components/Webtoon.vue'
import Game from './components/Game.vue'

export default {
  name: 'App',
  components: {
    About,
    UIUX,
    Project,
    Illustration,
    Webtoon,
    Game
  },
  data() {
      return {
        menu: {
          about: {
            idx: 1,
            tab: true,
          },
          uiux: {
            idx: 2,
            tab: false,
          },
          project: {
            idx: 3,
            tab: false,
          },
          illustration: {
            idx: 4,
            tab: false,
          },
          webtoon: {
            idx: 5,
            tab: false,
          },
          game: {
            idx: 6,
            tab: false,
          },
        },
      }
  },
  methods: {
      changeTab() {
          window.scrollTo(0, 0)
      },
      onScroll() {
        const scrollY =
          document.documentElement.scrollTop

          if (scrollY < 906){
            this.menu.about.tab = true
            this.menu.uiux.tab = false
          }
          else if(scrollY>=906 && scrollY <1812){
            this.menu.about.tab = false
            this.menu.uiux.tab = true
            this.menu.project.tab = false
          }
          else if(scrollY>=1812 && scrollY <2718){
            this.menu.uiux.tab = false
            this.menu.project.tab = true
            this.menu.illustration.tab = false
          }
          else if(scrollY>=2718 && scrollY <3624){
            this.menu.project.tab = false
            this.menu.illustration.tab = true
            this.menu.webtoon.tab = false
          }
          else if(scrollY>=3624 && scrollY <4530){
            this.menu.illustration.tab = false
            this.menu.webtoon.tab = true
            this.menu.game.tab = false
          }
          else if(scrollY>=4530 && scrollY <5436){
            this.menu.webtoon.tab = false
            this.menu.game.tab = true
          }
      }
  },
  created() {
    window.addEventListener('scroll', this.onScroll)
    },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>
