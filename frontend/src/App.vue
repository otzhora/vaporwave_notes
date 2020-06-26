<template>
  <v-app>
    <notes_list />
    <v-container> <v-btn @click="new_note"> Add new note </v-btn> </v-container>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import notes_list from "./components/notes_list";

export default {
  name: "App",
  components: {
    notes_list,
  },
  methods: {
    ...mapActions(["load_notes", "add_new_note"]),
    new_note() {
      this.add_new_note();
    },
  },
  created: function() {
    this.load_notes();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
