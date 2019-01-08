import React, { Component } from "react";
import firebase from "../../config/firebaseConfig";

class AddMessage extends Component {
  state = {
    MessagesRef: firebase.database().ref("messages"),
    userFirstName: "sathish",
    userLastName: "Swaminathan",
    MessageContent: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    const key = this.state.MessagesRef.push().key;
    let message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: 12,
        name: "sathish",
        avatar: "asdf"
      },
      content: this.state.MessageContent
    };
    e.preventDefault();
    this.state.MessagesRef
    .push()
      .set(message)
      .then(() => {
        console.log("success");
      });
  };

  render() {
    return (
      <div className="container">
        <form className=" " onSubmit={this.handleSubmit}>
          <h5>Create Message</h5>
          <div className="input-field">
            <label>Message Content</label>
            <input
              type="text"
              id="MessageContent"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMessage;
