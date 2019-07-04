import React, { Component } from "react";

export class search extends Component<any, any> {
  state = {
    text: ""
  };
  onChange: (e: any) => any = e =>
    this.setState({ [e.target.name]: e.target.value });
  onSubmit: (e: any) => any = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type='submit' className='btn btn-dark btn-block' />
        </form>
      </div>
    );
  }
}

export default search;
