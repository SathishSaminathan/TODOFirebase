import React, { Component } from "react";
import moment from "moment";

import firebase from "../../config/firebaseConfig";

class MessageList extends Component {
  state = {
    MessagesRef: firebase.database().ref("messages"),
    // Messages: [{ id: 123, name: "sathish" }, { id: 2323, name: "saminathan" }]
    Messages: []
  };

  componentDidMount() {
    this.addMessageListener();
  }

  addMessageListener = () => {
    let messageData = [];
    this.state.MessagesRef.orderByChild("content")
      .startAt("a")
      .endAt("a\uf8ff")
      .on("value", snap => {
        console.log("working...", snap.val());
      });
    this.state.MessagesRef.on("child_added", snap => {
      messageData.push(snap.val());
      this.setState({ Messages: messageData }, () =>
        console.log("Messages...", this.state.Messages)
      );
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

  componentDidUpdate() {
    // alert("componentDidUpdate")
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    if (this.messagesEnd)
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  timeFromNow = timestamp => moment(timestamp).fromNow();

  renderMessages = messages => {
    let loadedMessages = [];
    loadedMessages = this.state.Messages.map((message, i) => (
      // <div className="card" key={i}>
      //   {/* <span className="card-title">Sathish</span> */}
      //   <div className="card-content">
      //     <span>Sathish {this.timeFromNow(message.timestamp)}</span>
      //   </div>
      //   <div className="card-action grey lighten-2">
      //     <p className="black-text">"{message.content}"</p>
      //   </div>
      //   <div
      //     style={{ float: "left", clear: "both" }}
      //     ref={el => {
      //       this.messagesEnd = el;
      //     }}
      //   />
      // </div>
      <ul class="collection">
        <li class="collection-item avatar">
          <img src="images/yuna.jpg" alt="" class="circle" />
          <p>{message.content}</p>
          <a
            href="#!"
            class="secondary-content"
            ref={el => {
              this.messagesEnd = el;
            }}
          />
          <i class="material-icons">{this.timeFromNow(message.timestamp)}</i>
        </li>
      </ul>
    ));
    return loadedMessages;
  };

  render() {
    console.log(this.state.MessagesRef);
    return <div className=" ">{this.renderMessages(this.state.Messages)}</div>;
  }
}

export default MessageList;
