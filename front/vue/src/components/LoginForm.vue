<template>
    <div class="w-50 center mt-16">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >

            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            single-line
            outlined
            required
            ></v-text-field>

            <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
            single-line
            outlined
            ></v-text-field>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >
            Validate
            </v-btn>

            <v-btn
            color="error"
            class="mr-4"
            @click="reset"
            >
            Reset Form
            </v-btn>

        </v-form>
    </div>
</template>

<script>
  import router from '../router'
  export default {
    data: () => ({
      valid: true,
      show1: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
    }),

    methods: {
      validate () {
        console.log(this.email);
        console.log(this.password);
        this.$refs.form.validate();
        console.log(this.$http.post('http://localhost:3000/user/login', {
            email: this.email,
            password: this.password
        }));
        //TODO connection validation
        sessionStorage.setItem('isConnected', true);
        router.push({name: "Home"});
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>
.w-50 {
    width: 50%;
}

.center {
    display: block;
    margin: auto;
}
</style>