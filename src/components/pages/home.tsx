import React, { Fragment } from "react";
import Search from "../Users/Search";
import Users from "../Users/Users";

const home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default home;
