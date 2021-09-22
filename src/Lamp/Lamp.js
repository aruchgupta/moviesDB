import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  left: ${(props) => (props.position === "left" ? "20px" : "380px")};
  height: 100px;
  width: 100px;
  top: 20px;
  border-radius: 9999px;
  background-color: ${(props) => (props.lampOn ? "orange" : "lightgrey")};
`;

const Lamp = ({ position, lampOn }) => (
  <Wrapper lampOn={lampOn} position={position}>
    <div />
  </Wrapper>
);

export default Lamp;
