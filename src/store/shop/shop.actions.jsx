// PAGE

export const nextPage = (state) => {
  state.page.currentSelect++ 
}

export const previusPage = (state) => {
  state.page.currentSelect-- 
}

export const setMinAndMaxPage = (state) => {
  state.page.minPage = state.page.currentSelect <= 0
  state.page.maxPage = state.page.currentSelect >= (state.page.number - 1)
}

// DATA

export const configureDisableOption = (state) => {
  for (let opt of state.data[state.page.currentSelect].content.options) {
    opt.disable = false 
  }
}


// FORMS 

export const setCakeSize = (state, params) => {
}

export const setCakeBiz = (state, params) => {
}

export const setCakeCover = (state, params) => {
}

export const setCakeRelleno = (state, params) => {
}
