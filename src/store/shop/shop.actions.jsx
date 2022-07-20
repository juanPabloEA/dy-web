// PAGE
export const NEXT_PAGE = (state) => { 
  state.page.currentSelect++ 
}

export const PREVIUS_PAGE = (state) => {
  state.page.currentSelect-- 
}

export const SET_MIN_AND_MAX_PAGE = (state) => {
  state.page.minPage = state.page.currentSelect <= 0
  state.page.maxPage = state.page.currentSelect >= (state.page.number - 1)
}

// DATA

export const CONFIGURE_DISABLE_OPTION = (state, params) => {
  const count = state.data[state.page.currentSelect].content.options.filter(opt => opt.checked).length 
  for (let opt of state.data[state.page.currentSelect].content.options) {
    if(count >= params.payload.maxSelect && !opt.checked) {
      opt.disable = true;
    } else {
      opt.disable = false;
    }
  }
}


// FORMS 

export const SET_CHECK_OPTION = (state, params) => {
 for (let opt of state.data[state.page.currentSelect].content.options) {
   if (opt.id === Number(params.payload.id)) {
     opt.checked = params.payload.checked
   } 
  }
}
 
export const SET_USER = (state, params) => {
  state.form.user.name = params.payload
}

export const SET_PHONE = (state, params) => {
  state.form.user.phone = params.payload
} 

export const SET_DELIVERY = (state, params) => {
  state.form.user.delivery = params.payload
}

export const SET_ADDRESS = (state, params) => {
  state.form.user.address = params.payload
}

export const SET_COMMENTS = (state, params) => {
  state.form.user.comments = params.payload
}

export const SET_ORDER_DATE = (state, params) => {
  state.form.user.orderDate = params.payload
}
