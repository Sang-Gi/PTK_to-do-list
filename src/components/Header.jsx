import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { styled as mstyled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import GroupAdd from "./GroupAdd";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isSelectedGroupState, groupListState } from "../recoil/index";

export default function Header() {
  // 날짜
  const [date, setDate] = useState(() => new Date());

  // 모달 제어
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Todo 추가
  const [todo, setTodo] = useState("");
  const setGroups = useSetRecoilState(groupListState);
  const isSelectedGroupId = useRecoilValue(isSelectedGroupState);

  useEffect(() => {
    const now = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(now);
    };
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 최초 렌더링 후에만 실행되도록 함

  const tick = () => {
    setDate(new Date());
  };

  // 날짜 커스텀
  const optionsDate = { year: "numeric", month: "long", day: "numeric" };
  // padStart? : ES8에 추가되었고, 첫번째 파라미터 길이 만큼 될때까지 두번쨰 파라미터를 앞에 붙여줌 | padEnd는 뒤에
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    setGroups((prev) => {
      const updatedGroups = prev.map((item) => {
        if (item.groupId === isSelectedGroupId) {
          return {
            ...item,
            toDoList: [
              ...item.toDoList,
              {
                toDoName: todo,
                toDoId: item.toDoList.length + 1,
                status: "todo",
                isRemoved: false,
              },
            ],
          };
        }
        return item;
      });
      console.log(updatedGroups);
      return updatedGroups;
    });
  };

  return (
    <Root>
      <Subject>할일 목록</Subject>
      <p>
        {date.toLocaleDateString(undefined, optionsDate)} {hours}시 {minutes}분{" "}
        {seconds}초
      </p>
      <InputBox>
        <CustomTextField
          value={todo}
          onChange={handleTodo}
          label="Todo..."
          variant="outlined"
          size="small"
          disabled={isSelectedGroupId < 0 ? true : false}
        />
        <Button
          variant="contained"
          disableElevation
          sx={{ marginLeft: "0.5rem" }}
          onClick={handleAddTodo}
          disabled={isSelectedGroupId < 0 ? true : false}
        >
          {/* disableElevation? : MUI의 z축, 즉 기본 쉐도우처리를 지워줌 */}
          등록
        </Button>
      </InputBox>
      <InputBox>
        <Button
          color="success"
          variant="contained"
          sx={{ width: "100%" }}
          disableElevation
          onClick={handleOpen}
          disabled={isSelectedGroupId < 0 ? true : false}
        >
          그룹 추가
        </Button>
        <Modal
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox>
            <GroupAdd handleClose={handleClose} />
          </ModalBox>
        </Modal>
      </InputBox>
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
`;

const Subject = styled.h1`
  margin-top: 0;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 0.5rem;
`;

const CustomTextField = mstyled(TextField)`
  width: 100%;
`;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  margin: 0 auto;
`;
