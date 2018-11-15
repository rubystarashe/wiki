export const state = () => ({
  thumbnail: 0
})

export const mutations = {
  SET_THUMBNAIL (state, thumbnail) {
    state.thumbnail = thumbnail
  }
}

export const actions = {
  nuxtServerInit ({ commit }) {
    const { thumbnail } = require('../db')
    commit('SET_THUMBNAIL', thumbnail)
  }
}
