<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
        <v-card
            class="ma-4"
        >
        <v-row>
        <v-col md="2">
        <v-img src="http://www.petersfruit.com/application/files/7614/4623/8976/featured-grocery-03.jpg" />
        </v-col>
        <v-col>
        <v-card-title>
          {{ item.label }}
        </v-card-title>
        <v-card-text>
          <!--div class="mb-5">
            {{ item.description }}
          </div-->
          <div>
            {{ item.price }} €
          </div>
        </v-card-text>
        <v-btn
        color="warning">
          Voir plus
        </v-btn>
        </v-col>
        </v-row>
        </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items:  this.$http.get('http://localhost:3000/'),
    };
  },
};
</script>
