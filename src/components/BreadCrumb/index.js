import React from "react";
import { Link } from "react-router-dom";
import { Content } from "./BreadCrumb.style";
import { Wrapper } from "./BreadCrumb.style";

const BreadCrumb = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">Home</Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
