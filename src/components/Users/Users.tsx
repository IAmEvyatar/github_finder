import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component<any, any> {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user: any) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
}
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "0.5rem"
};
export default Users;
