import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import githubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from "../types";
let githubClientId: string;
let githubClientSecret: string;
if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID as string;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET as string;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID as string;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET as string;
}
const GithubState = (props: any) => {
  const initialState: any = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };
  const [state, dispatch]: any = useReducer(githubReducer, initialState);

  // search github users
  const searchUsers = async (text: string) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  // Clear users from state
  const clearUsers: () => void = () => {
    dispatch({ type: CLEAR_USERS });
  };

  // Get single github user
  const getUser = async (username: string) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Get users repos
  const getUserRepos = async (username: string) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  const setLoading: () => void = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={
        {
          users: state.users,
          user: state.user,
          repos: state.repos,
          loading: state.loading,
          searchUsers,
          clearUsers,
          getUser,
          getUserRepos
        } as any
      }>
      {props.children}
    </GithubContext.Provider>
  ) as any;
};
export default GithubState;
