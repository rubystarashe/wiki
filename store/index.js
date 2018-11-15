export const state = () => ({
  thumbnail: null
})

export const mutations = {
  SET_THUMBNAIL (state, thumbnail) {
    state.thumbnail = thumbnail
  }
}

export const getters = {
  thumbnail: state => state.thumbnail
}
