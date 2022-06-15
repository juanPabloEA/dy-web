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

export const getCountSelectByCurrentOption = (state) => {
  return state.shop.data[state.shop.page.currentSelect].content.options.filter(opt => opt.checked).length
}
