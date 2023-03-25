import React from 'react';

const Box = ({ hex, isDarkText }) => {
  return (
    <div
      className="square"
      style={{
        backgroundColor: hex,
        color: isDarkText ? '#000' : '#FFF',
      }}
    >
      <p>{hex ? hex : 'Empty Value'}</p>
    </div>
  );
};

Box.defaultProps = {
  hex: ' Empty Color Value',
};

export default Box;
