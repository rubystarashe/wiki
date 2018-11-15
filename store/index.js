export const state = () => ({
  thumbnails: {}
})

export const getters = {
  thumbnail: state => categori => state.thumbnails[categori]
}

export const mutations = {
  SET_THUMBNAILS (state, thumbnails) {
    state.thumbnails = thumbnails
  }
}

export const actions = {
  nuxtServerInit ({ commit }) {
    const { thumbnails } = require('../db')
    commit('SET_THUMBNAILS', thumbnails)
  }
}
