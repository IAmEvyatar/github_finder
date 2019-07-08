import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos: any = (props: any) => {
  return props.repos.map((repo: any) => <RepoItem repo={repo} key={repo.id} />);
};
Repos.propTypes = {
  repos: PropTypes.array.isRequired
};
export default Repos;
