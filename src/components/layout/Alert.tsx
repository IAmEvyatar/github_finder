import React from "react";

const Alert: (alert: any) => any = ({ alert }: any) => {
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
