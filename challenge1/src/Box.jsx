import React from 'react';

export default function Box({ hex }) {
  return (
    <div>
      <div className="square" style={{ backgroundColor: hex }}>
        <p>{hex}</p>
      </div>
    </div>
  );
}

Box.defaultProps = {
  hex: ' Empty Color Value',
};
