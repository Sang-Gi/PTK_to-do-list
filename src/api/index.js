import axios from "axios";

const url = "/data/dummy.json";

export const fetchGetGroupList = async () => {
  return await axios(url);
};

// POST는 서버 구축후 적용 예정
// export const fetchPostNewGroup = async (groupName) => {
//   const res = await fetchGetGroupList();
//   const lastIdx = res.data.groups[res.data.groups.length - 1].groupId + 1;
//   const newGroupObj = {
//     groupName: groupName,
//     groupId: lastIdx,
//     isSelected: true,
//     toDoList: [],
//   };

//   return await axios.post(url, newGroupObj);
// };
