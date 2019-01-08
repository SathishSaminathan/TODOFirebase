import React, { Component } from "react";
import moment from "moment";

import firebase from "../../config/firebaseConfig";

class MessageList extends Component {
  state = {
    MessagesRef: firebase.database().ref("messages"),
    // Messages: [{ id: 123, name: "sathish" }, { id: 2323, name: "saminathan" }]
    Messages:[]
  };

  timeFromNow = timestamp => moment(timestamp).fromNow();

  componentDidMount() {
    this.addMessageListener();
  }

  addMessageListener = () => {
    let messageData = [];
    this.state.MessagesRef.on("child_added", snap => {
      messageData.push(snap.val());
      this.setState({ Messages: messageData },()=>console.log("Messages...",this.state.Messages));
    });
    console.log("messagesData....", messageData);
    this.setState(
      {
        Messages: messageData
      },
      () => console.log("this.state.message...", this.state.Messages)
    );
    // console.log("this.state.message...", this.state.Messages)
  };

  renderMessages = messages => {
    let loadedMessages = [];
    loadedMessages = this.state.Messages.map((message, i) => (
      <div className="card" key={i}>
        {/* <span className="card-title">Sathish</span> */}
        <div className="card-content">
          <span>Sathish {this.timeFromNow(message.timestamp)}</span>
        </div>
        <div className="card-action grey lighten-2">
          <p className="black-text">"{message.content}"</p>
        </div>
      </div>
    ));
    return loadedMessages;
  };

  render() {
    console.log(this.state.MessagesRef);
    return <div className=" ">{this.renderMessages(this.state.Messages)}</div>;
  }
}

export default MessageList;
