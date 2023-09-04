import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { groupListState } from "../recoil/index";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled as mstyled } from "@mui/material/styles";
import GroupListItem from "./GroupListItem";

// 아이콘추가예정
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function GroupList({ group }) {
  const [groups, setGroups] = useRecoilState(groupListState);
  const [groupStatus, setGroupStatus] = useState(true);

  const handleIsSelected = () => {
    setGroupStatus((cur) => !cur);
  };

  useEffect(() => {}, [groupStatus]);

  return (
    <Root>
      <GroupNameBox status={groups[group.groupId - 1].isSelected.toString()}>
        <span className="name">{group.groupName}</span>
        <span className="number"> ({group.toDoList.length})</span>
        <span onClick={handleIsSelected}>드롭</span>
      </GroupNameBox>
      <GroupTodoBox status={groupStatus.toString()}>
        <FormGroup fullwidth>
          {group.toDoList.map((list) => {
            return <GroupListItem list={list} key={list.toDoId} />;
          })}
        </FormGroup>
      </GroupTodoBox>
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
`;

const GroupNameBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.status === "true" ? "#2F80ED" : "")};
  color: ${(props) => (props.status === "true" ? "white" : "")};
  padding: 0.4rem 0.3rem;
  border-radius: 5px;
  cursor: pointer;

  .name {
    font-size: 1.3rem;
    font-weight: bold;
    width: 30%;
  }

  .number {
    width: 57%;
    font-size: 1rem;
    font-weight: bold;
    padding-top: 0.2rem;
    padding-left: 0.2rem;
  }
`;

const GroupTodoBox = styled.div`
  display: ${(props) => (props.status === "true" ? "flex" : "none")};
`;
