import shopConfig from '../../assets/conf/shop.conf.json'

export function getCakeInitConfig() {
  mapDisableAndCheckedOptionInContent(shopConfig.shop); 
  return shopConfig.shop;
}

function mapDisableAndCheckedOptionInContent(shop) {
  for(let opt of shop) {
    for(let contOpt of opt?.content?.options) {
      contOpt.disable = false
      contOpt.checked = false 
    } 
  }
}
