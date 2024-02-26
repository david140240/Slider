export const mainStore = {
  state: () => ({
    slides:
      [
        {id: 1, name: 'gven', img: 'gven.png'},
        {id: 2, name: 'peter', img: 'peter.png'},
        {id: 3, name: 'miles', img: 'miles.png'}
      ]
  }),
  getters: {
    getSlides(state) {
      return state.slides
    }
  },
  namespaced: true
}