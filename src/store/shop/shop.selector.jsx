export const getShop = (state) => {
  console.log("state", state.shop)
  return state.shop
}

export const getCurrentSelectShop = (state) => {
  console.log('State option', state.shop.options[state.shop.currentSelect])
  return state.shop.options[state.shop.currentSelect]
}

export const getShopOptions = (state) => {
  return state.shop.options
}
