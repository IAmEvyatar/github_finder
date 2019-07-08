import React, { useState } from "react";
import PropTypes from "prop-types";

const Search: (a: any, b: any, c: any, d: any) => any = ({
  searchUsers,
  showClear,
  clearUsers,
  setAlert
}) => {
  const [text, setText] = useState("");

  const onSubmit: (e: any) => any = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange: (e: any) => any = e => setText(e.target.value);

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          value={text}
          onChange={onChange}
        />
        <input type='submit' className='btn btn-dark btn-block' />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
