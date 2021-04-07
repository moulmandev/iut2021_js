<template>
    <div class="w-50 center mt-16">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >

            <v-text-field
            v-model="label"
            label="Label"
            single-line
            outlined
            required
            ></v-text-field>

            <v-text-field
            v-model="description"
            label="Description"
            outlined
            required
            ></v-text-field>

            <v-text-field
            v-model="price"
            label="Amount"
            value="10.00"
            :rules="number"
            prefix="€"
            single-line
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
export default {
    data: () => ({
      valid: true,
      price: 0,
      label: '',
      description: '',
      number: [
        v => !!v || 'Un nombre est requis',
        v => /^\d+$/.test(v) || 'La valeur rentrée doit être un nombre',
      ],
    }),

    methods: {
      validate () {
        console.log('ok');
        this.$refs.form.validate();
        console.log('test réussis');
        this.$http.post('http://localhost:3000/', {
            label: this.label,
            description: this.description,
            price: this.price
        })
        console.log('post réussi');
        alert('Ajout réussi');
      },
      reset () {
          console.log('reset');
        this.$refs.form.reset()
      },
    },
}
</script>