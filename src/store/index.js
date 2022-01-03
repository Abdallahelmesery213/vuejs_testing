import { createStore } from "vuex";

const likeModule = {
  state: {
    liked: false,
    likes: 0,
  },
  getters: {
    liked(state, rootState) {
      console.log(rootState);
      return state.liked;
    },
    likes(state) {
      return state.likes;
    },
  },
  mutations: {
    toggleLiked(state) {
      state.liked = !state.liked;
    },
    increaseLikes(state) {
      state.likes += 1;
    },
    decreaseLikes(state) {
      state.likes -= 1;
    },
  },
  actions: {
    toggleLike(context) {
      setTimeout(function () {
        context.commit("toggleLiked");
        if (context.state.liked) {
          return context.commit("increaseLikes");
        } else {
          return context.commit("decreaseLikes");
        }
      }, 500);
    },
  },
};

const store = createStore({
  state: {
    counter: 0,
  },
  getters: {
    doubledCounter(state) {
      return state.counter * 2;
    },
  },
  mutations: {
    increment(state) {
      return state.counter++;
    },
  },
  actions: {
    increaseAfterSec(context) {
      setTimeout(function () {
        context.commit("increment");
      }, 1000);
    },
  },
  modules: {
    a: likeModule,
  },
});
export default store;
