import React from "react";

function ChildComponent() {
  return <h3>Child Component</h3>;
}

function ParentComponent() {
  return (
    <div>
        <h6>Task10</h6>
      <h3>First Function Component</h3>
      <ChildComponent />
    </div>
  );
}

export default ParentComponent;