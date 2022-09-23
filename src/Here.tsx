import React from 'react';

function Here() {

  // (window as { [key: string]: any })["plausible"]("test event")
  // (window as { [key: string]: any })["myFunc"]("test event")  

  return (
    <div className="Here">
      <header className="Here-header">
        <p>
          Here
        </p>
      </header>
    </div>
  );
}

export default Here;
