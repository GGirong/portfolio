<template>
  <div class="header">
    <div class="header_logo"><img src="https://i.ibb.co/0GBSfG8/logo-3.png" alt="logo"></div>
    <b-nav align="center">
      <b-nav-item disabled class="header_item">
        <div
        :class="{ active: this.menu.about.tab}"
      >About</div></b-nav-item>
      <b-nav-item disabled class="header_item">
        <div
        @click="changeTap()"
        :class="{ active: this.menu.uiux.tab}"
      >UI/UX</div></b-nav-item>
      <b-nav-item disabled class="header_item">
        <div
        @click="changeTap()"
        :class="{ active: this.menu.project.tab}"
      >Project</div></b-nav-item>
      <b-nav-item disabled class="header_item">
        <div
        @click="changeTap()"
        :class="{ active: this.menu.illustration.tab}"
      >Illustration</div></b-nav-item>
      <b-nav-item disabled class="header_item">
        <div
        @click="changeTap()"
        :class="{ active: this.menu.webtoon.tab}"
      >Webtoon</div></b-nav-item>
      <b-nav-item disabled class="header_item">
        <div
        @click="changeTap()"
        :class="{ active: this.menu.game.tab}"
      >Game</div></b-nav-item>
    </b-nav>
  </div>
</template>

<script>

  export default {
    
    name: 'Header',
    components: {
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

          if (scrollY < 960){
            this.menu.about.tab = true
            this.menu.uiux.tab = false
          }
          else if(scrollY>=960 && scrollY <1920){
            this.menu.about.tab = false
            this.menu.uiux.tab = true
            this.menu.project.tab = false
          }
          else if(scrollY>=1920 && scrollY <2880){
            this.menu.uiux.tab = false
            this.menu.project.tab = true
            this.menu.illustration.tab = false
          }
          else if(scrollY>=2880 && scrollY <3840){
            this.menu.project.tab = false
            this.menu.illustration.tab = true
            this.menu.webtoon.tab = false
          }
          else if(scrollY>=3840 && scrollY <4800){
            this.menu.illustration.tab = false
            this.menu.webtoon.tab = true
            this.menu.game.tab = false
          }
          else if(scrollY>=4800 && scrollY <5760){
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