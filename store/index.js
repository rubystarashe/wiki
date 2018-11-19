export const state = () => ({
  thumbnail: null
})

export const mutations = {
  SET_THUMBNAIL (state, thumbnail) {
    state.thumbnail = thumbnail
  }
}

export const getters = {
  thumbnail: state => state.thumbnail,
  document: state => (categori, document) => {
    return state.thumbnail[categori].find(d => d.document === document)
  }
}

export const actions = {
  nuxtServerInit ({ commit }) {
    const { thumbnail } = require('../src/db')
    commit('SET_THUMBNAIL', thumbnail)
  }
}
