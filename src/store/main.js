const state = {
  leftDrawerOpen: false,
  toolbar: null,
  editor: null
}

const getters = {
  toolbar: (state) => state.toolbar,
  editor: (state) => state.editor
}

const actions = {
  setToolbar: (context, toolbar) => {
    context.commit('setToolbar', toolbar)
  },
  setEditor: (context, editor) => {
    context.commit('setEditor', editor)
  }
}

const mutations = {
  setToolbar: (state, toolbar) => {
    state.toolbar = toolbar
  },
  setEditor: (state, editor) => {
    state.editor = editor
  }
}
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
