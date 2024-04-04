import { atom } from "recoil";

export const BlurFlag = atom({
  key: 'textBlurFlagState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const SideNavListItem = atom({
  key: 'SideNavListItem', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const SideNavListFlag = atom({
  key: 'SideNavListFlag', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

