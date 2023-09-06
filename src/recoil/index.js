import { atom } from "recoil";

export const groupListState = atom({
  key: "groupList",
  default: [],
});

export const isSelectedGroupState = atom({
  key: "selectedGroup",
  default: 1,
});
