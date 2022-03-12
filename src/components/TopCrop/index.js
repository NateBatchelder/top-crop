import React from 'react';

function Body() {
  return (
    // row
    <div>
      {/* column */}
      <div className="col-1-of-2">
        <h1>User Input</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" />
        </div>
      </div>
      {/* column */}
      <div className="col-2-of-2">
        <h1>Application Output</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" />
        </div>
      </div>
    </div>
  );
}

export default Body;