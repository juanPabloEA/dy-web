export const getShop = (state) => {
  return state.shop
}

export const getCurrentSelectShop = (state) => {
  return state.shop.data[state.shop.page.currentSelect]
}

export const getShopData = (state) => {
  return state.shop.data
}

export const getCurrentSelectCakeOption = (state) => {
  return state.shop.data[state.shop.page.currentSelect].content.options
}

export const getUser = (state) => {
  return state.shop.form.user
}

export const getCurrentQuotation = (state) => {
  return {
    size: state.shop.data[0].content.options.filter(data => data.checked)[0],
    bizcuit: state.shop.data[1].content.options.filter(data => data.checked)[0],
    cover: state.shop.data[2].content.options.filter(data => data.checked)[0],
    filled: state.shop.data[3].content.options.filter(data => data.checked),
    user: state.shop.form.user
  }
}