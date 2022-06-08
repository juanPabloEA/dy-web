export const nextPage = (state) => {
  let nextTemp = state.currentSelect + 1;
  if(nextTemp >= state.options.length) {
    state.currentSelect = nextTemp
    state.maxPage = true;
  } else {
    state.currentSelect = nextTemp
    state.maxPage = false;

  }
}

export const previusPage = (state) => {
  let previusTemp = state.currentSelect - 1;
  if(previusTemp <= 1) {
    
    state.currentSelect = previusTemp
    state.minPage = true;
  } else {
    state.currentSelect = previusTemp
    state.minPage = true;
  }
}
