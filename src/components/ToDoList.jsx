import styled from "styled-components";
import { useRecoilState } from "recoil";
import GroupList from "./GroupList";
import { useEffect, useState } from "react";
import { fetchGetGroupList } from "../api/index";
import { groupListState } from "../recoil/index";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { styled as mstyled } from "@mui/material/styles";

export default function ToDoList() {
  const [groups, setGroups] = useRecoilState(groupListState);
  const [tabStatus, setTabStatus] = useState("list");

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
  }, [setGroups]);

  const handleHeaderAble = () => {
    // TODO : 헤더 영역 비활성화 추가
    setTabStatus("list");
  };

  const handleHeaderDisable = () => {
    // TODO : 헤더 영역 비활성화 추가
    setTabStatus("trash");
  };

  return (
    <Root>
      <ButtonGroup
        disableElevation
        variant="outlined"
        sx={{ marginBottom: "0.7rem", width: "100%" }}
      >
        <CustomButton
          variant={tabStatus === "list" ? "contained" : "outlined"}
          onClick={handleHeaderAble}
        >
          리스트
        </CustomButton>
        <CustomButton
          variant={tabStatus === "trash" ? "contained" : "outlined"}
          onClick={handleHeaderDisable}
        >
          휴지통
        </CustomButton>
      </ButtonGroup>
      {tabStatus === "list" && (
        <ListBox>
          {groups.map((group) => {
            return <GroupList key={group.groupId} group={group} />;
          })}
        </ListBox>
      )}
      {/* TODO: 쓰레기통 리스트 추가 */}
      {tabStatus === "trash" && <ListBox>쓰레기</ListBox>}
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
  height: 70%;
`;

const ListBox = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: auto;
`;

const CustomButton = mstyled(Button)`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
`;
