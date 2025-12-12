import React from "react";
import Chatbot3 from "./components/Chatbot3";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row ">
        <Sidebar />
        <Chatbot3 />
      </div>

    </div>
  );
}

export default App;
