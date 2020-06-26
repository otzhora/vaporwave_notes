import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

const server_url = process.env.VUE_APP_SERVER_URL || "http://localhost:5000";

export default new Vuex.Store({
  state: {
    server_url,
    notes: {},
    notes_ids: [],
  },
  getters: {
    get_note: (state) => (note_id) => {
      return state.notes[note_id];
    },
  },
  mutations: {
    LOADED_NOTES(state, notes) {
      state.notes = notes;
      state.notes_ids = Object.keys(notes);
    },
    UPDATE_NOTE(state, note) {
      state.notes[note["note_id"]] = {
        title: note["title"],
        body: note["body"],
        tags: note["tags"],
      };
    },
    DELETE_NOTE(state, note_id) {
      delete state.notes[note_id];
      let index_to_delete = 0;
      for (let index in state.notes_ids) {
        if (state.notes_ids[index] == note_id) {
          index_to_delete = index;
          break;
        }
      }
      state.notes_ids.splice(index_to_delete, 1);
    },
    ADD_NEW_NOTE(state, note_id) {
      state.notes[note_id] = {
        title: "",
        body: "",
      };
      state.notes_ids.push(note_id);
    },
  },
  actions: {
    async load_notes({ state, commit }) {
      const res = await axios.get(`${state.server_url}/notes`);
      const notes_res = res["data"];

      commit("LOADED_NOTES", notes_res);
    },
    async update_note({ state, commit }, note) {
      const res = await axios.put(
        `${state.server_url}/notes/${note["note_id"]}`,
        {
          title: note["title"],
          body: note["body"],
          tags: note["tags"],
        }
      );
      if (res.data != "ok") {
        console.log(res);
        return "err";
      }
      commit("UPDATE_NOTE", note);
    },
    async delete_note({ state, commit }, note_id) {
      console.log(note_id);
      console.log(state);

      const res = await axios.delete(`${state.server_url}/notes/${note_id}`);

      if (res.data != "ok") {
        console.log(res);
        return "err";
      }
      commit("DELETE_NOTE", note_id);
    },
    async add_new_note({ state, commit }) {
      const res = await axios.post(`${state.server_url}/notes`, {
        title: "",
        body: "",
      });
      const data = res.data;
      console.log(data);
      if (data.res != "ok") {
        console.log(res);
        return "err";
      }
      commit("ADD_NEW_NOTE", data.id);
    },
  },
  modules: {},
});
