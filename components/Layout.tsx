import React from "react";
import NavBar from "./NavBar";

const Layout = (props: any) => {
  return (
    <>
      <NavBar />
      <div>{props.children}</div>
    </>
  );
};
export default Layout;
