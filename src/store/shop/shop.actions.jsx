export const nextPage = (state) => {
  state.currentSelect++ 
}

export const previusPage = (state) => {
  state.currentSelect-- 
}

export const setMinAndMaxPage = (state) => {
  state.minPage = state.currentSelect <= 0
  state.maxPage = state.currentSelect >= (state.options.length - 1)
}
