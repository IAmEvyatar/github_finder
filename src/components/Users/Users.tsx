import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }: any) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user: any) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "0.5rem"
};
export default Users;
