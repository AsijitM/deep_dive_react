import React from 'react';

export default function Button({ buttontext, reqType, setReqType }) {
  return (
    <button
      className={buttontext === reqType ? 'selected ' : null}
      type="button"
      onClick={() => setReqType(buttontext)}
    >
      {buttontext}
    </button>
  );
}
