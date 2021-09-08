import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>こんにちは</h1>
      <p>おやすみなさい</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
