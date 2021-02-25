import React, { useState } from "react";

const Checkbox = (props) => {
  const [toggle, settoggle] = useState(false);
  let handleInputChange = function (e) {
    console.log(e.target);
    settoggle(toggle ? false : true);
    props.callbackFromTable(e.target.value);
  };
  return (
    <>
      <div className="form-check">
        <input
          onChange={handleInputChange}
          className="form-check-input"
          type="checkbox"
          value={toggle}
          id="defaultCheck1"
        />
        <label className="form-check-label" htmlFor="defaultCheck1">
          Toggle employees over 65
        </label>
      </div>
    </>
  );
};

export default Checkbox;
