<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
        <v-card
            class="ma-4"
        >
        <v-row>
        <v-col md="2">
        <v-img v-bind:src=item.img />
        </v-col>
        <v-col>
        <v-card-title>
          {{ item.titre }}
        </v-card-title>
        <v-card-text>
          <div class="mb-5">
            {{ item.description }}
          </div>
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
      items: [{
          titre: "test",
          description: "lfdngoiedhighdiughidsvhieuh",
          price: 10,
          img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HDqUzSYTxejLcUgedyajAwHaEh%26pid%3DApi&f=1"
      }, {
          titre: "vudcqsgsdfuyogs",
          description: "fnbfjobvjdoibjdpkjb^pdjbdjnobpijnbondb",
          price: 20,
          img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HDqUzSYTxejLcUgedyajAwHaEh%26pid%3DApi&f=1"

      },{
          titre: "hvishiuv",
          description: "lfdngoiedhighdiughidsvhieuh",
          price: 10,
          img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HDqUzSYTxejLcUgedyajAwHaEh%26pid%3DApi&f=1"
      },{
          titre: "test",
          description: "lfdngoiedhighdiughidsvhieuh",
          price: 10,
          img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HDqUzSYTxejLcUgedyajAwHaEh%26pid%3DApi&f=1"
      },{
          titre: "test",
          description: "lfdngoiedhighdiughidsvhieuh",
          price: 10,
          img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HDqUzSYTxejLcUgedyajAwHaEh%26pid%3DApi&f=1"
      }, {
          titre: "test",
          description: "lfdngoiedhighdiughidsvhieuh",
          price: 10,
          img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HDqUzSYTxejLcUgedyajAwHaEh%26pid%3DApi&f=1"
      },
      ],
    };
  },
};
</script>
