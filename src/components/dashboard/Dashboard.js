import React from "react";

import AddMessage from "../message/AddMessage";
import MessageList from "../message/MessageList";

import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col m12 s12  messagelist_style"><MessageList/></div>
        <div className="col m12 s12"><AddMessage/></div>
      </div>
    </div>
  );
};

export default Dashboard;
