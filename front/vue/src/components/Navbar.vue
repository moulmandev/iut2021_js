<template>
  <v-app-bar app color="#131921" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Amazon logo"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        class="mx-2"
        fab
        color="#131921"
        >
        <v-icon dark>
            fa-shopping-cart
        </v-icon>
      </v-btn>
    </v-app-bar>
</template>
