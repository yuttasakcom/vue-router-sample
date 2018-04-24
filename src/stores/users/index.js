const state = {
  user: null
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  }
};

const actions = {
  SET_USER({ commit }, user) {
    commit("SET_USER", user);
  }
};

const getters = {
  isAuth({ user }) {
    return user !== null && user !== undefined;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
