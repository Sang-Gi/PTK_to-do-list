import styled from "styled-components";

export default function GroupList(group) {
  return (
    <Root>
      <p>{group.group.groupName}</p>
      {group.group.toDoList.map((list) => {
        return <p key={list.toDoId}>{list.toDoName}</p>;
      })}
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
`;
