import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Header() {
  const [date, setDate] = useState(() => new Date());

  useEffect(() => {
    const now = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(now);
    };
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 최초 렌더링 후에만 실행되도록 함

  const tick = () => {
    setDate(new Date());
  };

  const optionsDate = { year: "numeric", month: "long", day: "numeric" };
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return (
    <Root>
      <Subject>할일 목록</Subject>
      <span>
        {date.toLocaleDateString(undefined, optionsDate)} {hours}시 {minutes}분{" "}
        {seconds}초
      </span>
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
`;

const Subject = styled.h1`
  margin-top: 0;
`;
