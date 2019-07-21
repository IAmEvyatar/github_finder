import React, { useReducer } from "react";
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { REMOVE_ALERT, SET_ALERT } from "../types";
const AlertState = (props: any) => {
  const initialState: any = null;
  const [state, dispatch]: any = useReducer(alertReducer, initialState);

  // Set alert
  const setAlert = (msg: any, type: any) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };
  return (
    <alertContext.Provider
      value={
        {
          alert: state,
          setAlert
        } as any
      }>
      {props.children}
    </alertContext.Provider>
  ) as any;
};
export default AlertState;
