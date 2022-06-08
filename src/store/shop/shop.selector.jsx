export const getShop = (state) => {
  return state.shop
}

export const getCurrentSelectShop = (state) => {
  return state.shop.options[state.shop.currentSelect]
}

export const getShopOptions = (state) => {
  return state.shop.options
}
