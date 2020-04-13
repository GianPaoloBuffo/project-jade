<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="12"
        md="4"
      >
        <v-card>
          <v-img
            :src="card.src"
            :lazy-src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      cards: [
        { title: 'Caitlin Dixon', src: 'https://picsum.photos/id/1005/800/800' },
        { title: 'Giselle Riley', src: 'https://picsum.photos/id/1011/800/800' },
        { title: 'Aniyah Montes', src: 'https://picsum.photos/id/1014/800/800' },
      ],
    };
  },
};
</script>
