import styled from "styled-components";
import GroupList from "./GroupList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ToDoList() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // fetch => group list 불러오기
    const fetchData = async () => {
      try {
        const res = await axios("/data/dummy.json");
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
