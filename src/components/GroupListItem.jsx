import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled as mstyled } from "@mui/material/styles";

export default function GroupListItem({ list }) {
  return (
    <TodoBox
      sx={{ width: "21.5rem", margin: "0", marginTop: "0.4rem" }}
      label={list.toDoName}
      control={<Checkbox />}
      value={list.toDoId}
    />
  );
}

const TodoBox = mstyled(FormControlLabel)`
  background-color: #f2f2f2;
  border-radius: 5px;
`;
