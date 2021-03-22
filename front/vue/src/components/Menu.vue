<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
        <v-card
            class="ma-4"
        >
            {{ item.titre }}
            {{ item.num }}
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
          num: 10
      }, {
          titre: "vudcqsgsdfuyogs",
          num: 2054
      }],
    };
  },
};
</script>
