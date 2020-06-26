<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>
          <v-text-field v-model="title" @keydown="changed = true">
          </v-text-field>
        </v-card-title>
        <v-card-text>
          <v-textarea v-model="body" @keydown="changed = true"></v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-row justify="end">
            <v-col cols="2" v-if="changed">
              <v-btn @click="save_changes" color="success">
                save changes
              </v-btn>
            </v-col>
            <v-col cols="2" v-if="changed">
              <v-btn @click="discard_changes" color="warning">
                discard changes
              </v-btn>
            </v-col>

            <v-col cols="2">
              <v-btn @click="delete_note" color="error"> delete note</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "note",
  props: ["note_id"],
  data() {
    return {
      title: "",
      body: "",
      tags: [],
      changed: false,
    };
  },
  computed: {
    ...mapGetters(["get_note"]),
  },
  mounted() {
    const note = this.get_note(this.note_id);
    this.title = note["title"];
    this.body = note["body"];
    this.tags = note["tags"];
  },
  methods: {
    save_changes() {
      let res = this.$store.dispatch("update_note", {
        note_id: this.note_id,
        title: this.title,
        tags: this.tags,
        body: this.body,
      });
      if (res == "err") {
        this.discard_changes();
        console.log("some error appeared");
        return;
      }
      this.changed = false;
    },
    discard_changes() {
      const note = this.get_note(this.note_id);
      this.title = note["title"];
      this.body = note["body"];
      this.tags = note["tags"];
      this.changed = false;
    },
    delete_tag(index) {
      this.tags.splice(index, 1);
      this.changed = true;
    },
    new_tag() {
      this.tags;
    },
    delete_note() {
      this.$store.dispatch("delete_note", this.note_id);
    },
  },
};
</script>

<style>
.chip_container {
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: flex-end;
  left: 0;
}
</style>
