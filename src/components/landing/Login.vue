<template lang="html">
  <v-flex xs12 sm10 md4 offset-sm1 offset-md4>
    <v-card class="mx-auto login-all">
      <v-card-title class="title font-weight-regular justify-space-between">
        <span>Login</span>
      </v-card-title>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          :append-icon="show ? 'visibility' : 'visibility_off'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          name="input-10-2"
          label="Password"
          v-model="password"
          hint="At least 8 characters"
          class="input-group--focused"
          @click:append="show = !show"
        ></v-text-field>

        <v-checkbox
          v-model="checkbox"
          label="Remember me"
          required
        ></v-checkbox>

        <v-btn
          :disabled="!valid"
          class="btn-sub"
          @click="validate"
          color="#3cffce"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    show: false,
    valid: true,
    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters"
    },
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>

<style scoped>
.login-all {
  margin-top: 25%;
  padding: 20px;
  border-radius: 9px;
}
.btn-sub {
  width: 100%;
  color: #212121 !important;
  font-size: 18px;
  border-radius: 9px;
}
</style>
