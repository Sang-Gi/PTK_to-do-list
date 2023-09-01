import styled from "styled-components";
import { useRecoilState } from "recoil";
import GroupList from "./GroupList";
import { useEffect } from "react";
import { fetchGetGroupList } from "../api/index";
import { groupListState } from "../recoil/index";

export default function ToDoList() {
  const [groups, setGroups] = useRecoilState(groupListState);

  useEffect(() => {
    // fetch => group list 불러오기
    const fetchData = async () => {
      try {
        const res = await fetchGetGroupList();
        setGroups(res.data.groups);
      } catch (err) {
        console.error("Error: ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <Root>
      <h2>리스트</h2>
      {groups.map((group) => {
        return <GroupList key={group.groupId} group={group} />;
      })}
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
  height: 70%;
`;
