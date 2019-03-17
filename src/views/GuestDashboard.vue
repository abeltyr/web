<template lang="html">
  <div class="all">
    <div class="main">
      <v-toolbar color="transparent" class="tool-bar">
        <div class="logo">
          <img src="@/assets/logo.jpg" />
        </div>
        <v-spacer></v-spacer>
        <v-btn
          outline
          color="white"
          class="btn-nav"
          v-if="name !== 'home'"
          v-on:click="name = 'home'"
        >
          <v-icon class="icons-tabs">home</v-icon>Home
        </v-btn>
        <v-btn color="white" class="btn-nav-active" v-if="name === 'home'">
          <v-icon class="icons-tabs">home</v-icon>Home
        </v-btn>
        <v-btn
          outline
          color="white"
          class="btn-nav"
          v-if="name !== 'login'"
          v-on:click="name = 'login'"
        >
          <v-icon class="icons-tabs">group_add</v-icon>Log in
        </v-btn>
        <v-btn color="white" class="btn-nav-active" v-if="name === 'login'">
          <v-icon class="icons-tabs">group_add</v-icon>Log in
        </v-btn>
        <v-btn
          outline
          color="white"
          class="btn-nav"
          v-if="name !== 'about'"
          v-on:click="name = 'about'"
        >
          <v-icon class="icons-tabs">library_books</v-icon>About
        </v-btn>
        <v-btn color="white" class="btn-nav-active" v-if="name === 'about'">
          <v-icon class="icons-tabs">library_books</v-icon>About
        </v-btn>
        <v-btn
          outline
          color="white"
          class="btn-nav"
          v-if="name !== 'contact'"
          v-on:click="name = 'contact'"
        >
          <v-icon class="icons-tabs">contacts</v-icon>Contact
        </v-btn>
        <v-btn color="white" class="btn-nav-active" v-if="name === 'contact'">
          <v-icon class="icons-tabs">contacts</v-icon>Contact
        </v-btn>
      </v-toolbar>
      <Home v-if="name === 'home'"></Home>
      <Login v-if="name === 'login'"></Login>
      <About v-if="name === 'about'"></About>
      <Contact v-if="name === 'contact'"></Contact>

      <vue-particles
        color="#fff"
        :particleOpacity="0.6"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="6"
        linesColor="#fff"
        :linesWidth="4"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="60"
        :moveSpeed="8"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
      ></vue-particles>
    </div>
  </div>
</template>

<script>
import Home from "@/components/landing/Home";
import Login from "@/components/landing/Login";
import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
export default {
  data() {
    return {
      name: "home"
    };
  },
  components: {
    Home,
    Login,
    About,
    Contact
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Century Gothic;
}
.tool-bar {
  width: 100%;
  box-shadow: 0px 0px 0px !important;
}
.all {
  width: 100%;
  background-image: linear-gradient(#2fddb775, rgba(0, 0, 0, 0.5)),
    url(../assets/t.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: 0px;
  overflow: hidden;
}
.main {
  margin: 0px;
  padding: 0px;
}
.btn-nav {
  border-radius: 0px;
  border-left: 0px !important;
  border-right: 0px !important;
  border-top: 0px !important;
  transition: 0.3s ease;
}
.btn-nav:hover {
  border: 5px solid #fff;
  border-radius: 5px;
}
.btn-nav:active {
  border: 1px;
  transition: 0s ease;
}
.btn-nav-active {
  border-radius: 9px;
  color: #fff !important;
  background: #ffffff4b !important;
}
.icons-tabs {
  text-transform: none;
  font-size: 18px;
  color: #fff !important;
  margin-right: 4px;
  font-weight: 100;
}
.logo img {
  float: left;
  height: auto;
  width: 150px;
}
</style>
