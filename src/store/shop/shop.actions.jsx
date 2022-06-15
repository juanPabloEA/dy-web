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

export const configureDisableOption = (state, params) => {
  const count = state.data[state.page.currentSelect].content.options.filter(opt => opt.checked).length 
  for (let opt of state.data[state.page.currentSelect].content.options) {
    if(count >= params.payload.maxSelect && !opt.checked) {
      opt.disable = true;
    } else {
      opt.disable = false;
    }
  }
}

export const configureEnableOption = (state, params) => { 
  for (let opt of state.data[state.page.currentSelect].content.options) {
    opt.disable = false; 
  }
}



// FORMS 

export const setCheckOption = (state, params) => {
 for (let opt of state.data[state.page.currentSelect].content.options) {
   if (opt.id == params.payload.id) {
     opt.checked = params.payload.checked
   } 
  }
}

