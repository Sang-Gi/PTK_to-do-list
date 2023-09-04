import React, { useState } from "react";
import styled from "styled-components";
import { styled as mstyled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRecoilState } from "recoil";
import { groupListState } from "../recoil/index";

export default function GroupAdd({ handleClose }) {
  const [newGroupName, setNewGroup] = useState("");
  const [groups, setGroups] = useRecoilState(groupListState);

  const handleGroupSubmit = async () => {
    console.log("등록 버튼이 눌렸습니다. 입력값:", newGroupName);
    const lastIdx = groups[groups.length - 1].groupId + 1;
    console.log(lastIdx);
    const newGroupObj = {
      groupName: newGroupName,
      groupId: lastIdx,
      isSelected: false,
      toDoList: [],
    };
    setGroups([...groups, newGroupObj]);
    handleClose();
  };

  const handleInputChange = (event) => {
    setNewGroup(event.target.value);
  };

  return (
    <ModalBox>
      <CategoryBox>
        <CustomTextField
          label="그룹 이름"
          variant="outlined"
          size="small"
          value={newGroupName}
          onChange={handleInputChange}
        />
        <Button
          color="primary"
          variant="contained"
          sx={{ width: "100%" }}
          disableElevation
          onClick={handleGroupSubmit}
        >
          등록
        </Button>
        <Button
          color="error"
          variant="contained"
          sx={{ width: "100%" }}
          disableElevation
          onClick={handleClose}
        >
          취소
        </Button>
      </CategoryBox>
    </ModalBox>
  );
}

const CustomTextField = mstyled(TextField)`
  width: 100%;
`;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  margin: 0 auto;
`;

const CategoryBox = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.3rem;
  padding: 0.5rem 0.7rem;
`;
