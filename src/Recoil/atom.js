import { atom } from "recoil";

export const CartListCounts = atom({
  key: 'CartListCounts',
  default: 0,
});

export const WishListCounts = atom({
  key: 'WishListCounts',
  default: 0,
});

export const loginState = atom({
  key: 'loginState',
  default: 'false',
})

export const HeaderData = atom({
  key: 'HeaderData',
  default: []
})

export const HeaderData2 = atom({
  key: 'HeaderData2',
  default: []
})

export const productDataNew = atom({
  key:'productDataNew',
  default:[]
})

export const searchData = atom({
  key: 'searchData',
  default: []
})

export const priceData = atom({
  key:'priceData',
  default:[]
})

export const designSet = atom({
  key:'designSet',
  default:[]
})

export const metalTypeG = atom({
  key:'metalType',
  default: ''
})

export const diamondQualityColorG = atom({
  key:'diamondQualityColor',
  default: ''
})

export const colorstoneQualityColorG = atom({
  key:'colorstoneQualityColor',
  default: ''
})

export const newMenuData = atom({
  key:'newMenuData',
  default:{}
})
