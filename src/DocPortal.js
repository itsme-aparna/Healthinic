 import React from "react";
import ChatDoctor from "./chatDoctor";
import fire from "./config/firebase";
import ChatViewComponent from "./chatView";
import ChatTextBoxComponent from './chatTextBox'
import "./DocPortal.css";
import firebase from 'firebase'

class DocPortal extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chats: [],
    };
  }

  render() {
    return (
      <div className="portal__body">
        

        <div className="chat__screen">
          <ChatDoctor
            history={this.props.history}
            newChatBtnFn={this.newChatBtnClicked}
            selectChatFn={this.selectChat}
            chats={this.state.chats}
            userEmail={this.state.email}
            selectedChatIndex={this.state.selectedChat}
          ></ChatDoctor>
          {this.state.newChatFormVisible ? null : (
            <div className="chatviewbody">
              <ChatViewComponent
                user={this.state.email}
                chat={this.state.chats[this.state.selectedChat]}
              >
               
              </ChatViewComponent>
            </div>
          )}
        </div>
       {
            this.state.selectedChat !== null &&  !this.state.newChatFormVisible?
            <ChatTextBoxComponent userClickedInputFn={this.messageRead} submitMessageFn={this.submitMessage}></ChatTextBoxComponent>:
            null

       }
      </div>
    );
  }

  selectChat = (chatIndex) => {
   
    this.setState({ selectedChat: chatIndex }); 
  }; 
   

  submitMessage=(msg)=>{
      const docKey=this.buildDocKey(this.state.chats[this.state.selectedChat].users.filter(_usr=>_usr!==this.state.email)[0])
  fire.firestore()
  .collection('chats')
  .doc(docKey)
  .update({
      messages: firebase.firestore.FieldValue.arrayUnion({
      sender:this.state.email,
      message:msg,
    timestamp: Date.now()
  }),
  receiverHasRead:false
});
    }

  buildDocKey=(friend)=>[this.state.email,friend].sort().join(':')

  newChatBtnClicked = () =>
    this.setState({ newChatFormVisible: true, selectedChat: null });

  componentDidMount = () => {
    fire.auth().onAuthStateChanged(async (_usr) => {
      if (!_usr) this.props.history.push("/signup");
      else {
        await fire
          .firestore()
          .collection("chats")
          .where("users", "array-contains", _usr.email)
          .onSnapshot(async (res) => {
            const chats = res.docs.map((_doc) => _doc.data());
            await this.setState({
              email: _usr.email,
              chats: chats,
            });
            console.log(this.state);
          });
      }
    });
  };
}

export default DocPortal;
