<template>
  <div>
    <v-container>
      <note
        v-for="note_id in $store.state.notes_ids"
        :key="note_id"
        :note_id="note_id"
      />
    </v-container>
  </div>
</template>

<script>
import note from "./note";

export default {
  name: "notes_list",
  components: {
    note,
  },
  methods: {},
};
</script>

<style></style>
