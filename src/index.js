import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import  Body  from "./components/Body";


const AppLayout = () => {
  return (
    <div className="app">
      <div>
        <ul>
          <h3>
            Register Here
          </h3>
        </ul>
      </div>
     
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
