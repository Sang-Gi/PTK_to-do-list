import React from "react";
import styled from "styled-components";
import { styled as mstyled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function GroupAdd({ handleClose }) {
  return (
    <ModalBox>
      <CategoryBox>
        <CustomTextField label="그룹 이름" variant="outlined" size="small" />
        <Button
          color="primary"
          variant="contained"
          sx={{ width: "100%" }}
          disableElevation
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
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.3rem;
  padding: 0.5rem 0.7rem;
`;
