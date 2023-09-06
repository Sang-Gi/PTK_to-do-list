import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { groupListState, isSelectedGroupState } from "../recoil/index";
import FormGroup from "@mui/material/FormGroup";
import GroupListItem from "./GroupListItem";

// 아이콘추가예정
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function GroupList({ group }) {
  const [groups, setGroups] = useRecoilState(groupListState);
  const [isSelectedId, setIsSelectedId] = useRecoilState(isSelectedGroupState);
  const [groupDrop, setGroupDrop] = useState(true);

  const handleIsDroped = () => {
    setGroupDrop((cur) => !cur);
  };

  const handleIsSelected = () => {
    console.log(group.groupId);
    setIsSelectedId(group.groupId);
  };

  useEffect(() => {
    setGroups((prev) => {
      // 새로운 배열을 생성하여 상태를 업데이트합니다.
      const updatedGroups = prev.map((item) => {
        // 현재 그룹의 isSelected 값을 현재 선택된 그룹과 비교하여 설정
        return {
          ...item, // 기존 속성들을 그대로 유지
          isSelected: item.groupId === isSelectedId,
        };
      });
      return updatedGroups;
    });
  }, [isSelectedId, setGroups]);

  return (
    <Root>
      <GroupNameBox status={groups[group.groupId - 1].isSelected.toString()}>
        <div className="leftBox" onClick={handleIsSelected}>
          <span className="name">{group.groupName}</span>
          <span className="number"> ({group.toDoList.length})</span>
        </div>
        <span onClick={handleIsDroped}>드롭</span>
      </GroupNameBox>
      <GroupTodoBox status={groupDrop.toString()}>
        <FormGroup>
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
  }

  .number {
    font-size: 1rem;
    font-weight: bold;
    padding-top: 0.2rem;
    padding-left: 0.2rem;
  }

  .leftBox {
    width: 87%;
  }
`;

const GroupTodoBox = styled.div`
  display: ${(props) => (props.status === "true" ? "flex" : "none")};
`;
