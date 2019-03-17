<template>
  <div>
    <div class="title">
      <h1>ASTU FOOTBALL</h1>
    </div>
    <div class="button">
      <v-btn outline color="white" class="btn-white">
        <v-icon color="white" class="icons">account_box</v-icon>Register
      </v-btn>
      <v-btn outline color="white" class="btn-white">
        <v-icon color="white" class="icons">notifications_active</v-icon
        >Notification
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.title {
  position: absolute;
  top: 40%;
  text-align: center;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title h1 {
  color: #fff;
  font-size: 70px;
}
.button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn-white {
  border-radius: 5px;
  font-size: 18px;
  font-weight: 800;
}
.btn-white:hover {
  box-shadow: 0px 5px 20px #2fdd7875 !important;
  border: 2px solid #2fddb7b2;
}
.icons {
  margin-right: 10px;
  font-weight: 500;
}
</style>
