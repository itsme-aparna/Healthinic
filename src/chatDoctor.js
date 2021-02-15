/*
import React from "react"

import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import Button from "@material-ui/core/Button";
import fire from './config/firebase'
import firebase from "firebase"





class ChatDoctor extends React.Component {
    
    
    constructor() {
      super();
      this.state = {
        messages: [],
        user: {},
        isAuthenticated: false,
      }
    }
  
async signIn() {
    var googleProvider =new firebase.auth.GoogleAuthProvider();
    try {
      await fire.auth().signInWithPopup(googleProvider);
    } catch (error) {
      console.error(error);
    }
  }

    componentDidMount(){
        fire.auth().onAuthStateChanged(user => {
          if (user) {
            this.setState({ isAuthenticated: true, user });
          } else {
            this.setState({ isAuthenticated: false, user: {}, messages: [] });
          }
        });
      }

      


      renderPopup() {
        return (
          <Dialog open={!this.state.isAuthenticated}>
            <DialogTitle id="simple-dialog-title">Sign in</DialogTitle>
            <div>
              <List>
                <ListItem button onClick={() => this.signIn()}>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: "#eee" }}>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        height="30"
                        alt="G"
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Sign in with Google" />
                </ListItem>
              </List>
            </div>
          </Dialog>
        );
      }

      signOut() {
        fire.auth().signOut();
      }
      
      renderSignOutButton() {
        if (this.state.isAuthenticated) {
          return <Button onClick={() => this.signOut()}>Sign out</Button>;
        }
        return null;
      }


      render() {
        return (
          <div className="App">
            {this.renderPopup()}
            {this.renderSignOutButton()}
          </div>
        );
      }
    


} //class ChatDoctor closes here


  

 
  export default ChatDoctor;

  */

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import styles from "./chatDoctorStyle";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import NotificationImportant from "@material-ui/icons/NotificationImportant";

class ChatDoctor extends React.Component {
  render() {
    const { classes } = this.props;

    if (this.props.chats.length > 0) {
      return (
        <main className={classes.root}>
          <Button
            variant="contained"
            fullWidth
            color="gray"
            className={classes.newChatBtn}
            onClick={this.newChat}
          >
            New Message
          </Button>

          <List>
            {this.props.chats.map((_chat, _index) => {
              return (
                <div key={_index}>
                  <ListItem
                    onClick={() => this.selectChat(_index)}
                    className={classes.listItem}
                    selected={this.props.selectedChatIndex === _index}
                    alignItems="flex-start"
                  >
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp">
                        {
                          _chat.users
                            .filter(
                              (_user) => _user !== this.props.userEmail
                            )[0]
                            .split("")[0]
                        }
                      </Avatar>
                    </ListItemAvatar>

                    <ListItemText
                      primary={
                        _chat.users.filter(
                          (_user) => _user !== this.props.userEmail
                        )[0]
                      }
                      secondary={
                        <React.Fragment>
                          <Typography component="span" color="textPrimary">
                            {_chat.messages[
                              _chat.messages.length - 1
                            ].message.substring(0, 30) + " ..."}
                          </Typography>
                        </React.Fragment>
                      }
                    ></ListItemText>
                  </ListItem>
                  <Divider></Divider>
                </div>
              );
            })}
          </List>
        </main>
      );
    } else {
      return (
        <main className={classes.root}>
          <Button
            variant="contained"
            fullWidth
            color="gray"
            onClick={this.newChat}
            className={classes.newChatBtn}
          >
            New message
          </Button>
          <List></List>
        </main>
      );
    }
  }
  newChat = () => {
    console.log("new chat click");
  };

  selectChat = (index) => {
    this.props.selectChatFn(index);
  };
}

export default withStyles(styles)(ChatDoctor);
