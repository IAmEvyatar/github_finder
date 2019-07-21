import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert: any = () => {
  const alertContext: any = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-intfo-cirle' />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
