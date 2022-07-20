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

export const disableNextPage = (state) => {
  let disable = true;
  
  switch(state.shop.page.currentSelect) {
    case 0: {
      let countCheckedOption = state.shop.data[0].content.options.filter(data => data.checked).length
      disable = countCheckedOption < state.shop.page.cakeSizePick; 
      break;
    }
    case 1: {
      let countCheckedOption = state.shop.data[1].content.options.filter(data => data.checked).length
      disable = countCheckedOption < state.shop.page.cakeBizPick; 
      break;
    }
    case 2: {
      let countCheckedOption = state.shop.data[2].content.options.filter(data => data.checked).length
      disable = countCheckedOption < state.shop.page.cakeCoverPick;
      break;
    }
    case 3: {
      let countCheckedOption = state.shop.data[3].content.options.filter(data => data.checked).length
      disable = countCheckedOption === 0; 
      break;
    }
    case 4: {
      let nameIsEmpty = state.shop.form.user.name.length === 0;
      let phoneIsValid = state.shop.form.user.phone.length > 0 && state.shop.form.user.phone.length > 11;

      disable = nameIsEmpty || !phoneIsValid;
      break;
    }
    default: {
      disable = false;
      break;
    }
  }

  return disable;
} 
