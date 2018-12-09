import React from "react";
import { GiftedChat } from "react-native-gifted-chat";

class Chat extends React.Component {
  state = {
    messages: []
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 3,
          text: "A 19h",
          createdAt: new Date("2018-10-18T09:24:00"),
          user: {
            _id: 2,
            name: "Moi",
            avatar: "https://placeimg.com/140/140/any"
          }
        },
        {
          _id: 2,
          text: "Très bien, à quelle heure arrivrez vous ?",
          createdAt: new Date("2018-10-17T04:24:00"),
          user: {
            _id: 1,
            name: "Moi",
            avatar: "https://placeimg.com/140/140/any"
          }
        },
        {
          _id: 1,
          text: "Bonjour je souhaite réserver du 11 au 12 Novembre",
          createdAt: new Date("2018-10-17T03:24:00"),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1
        }}
      />
    );
  }
}

export default Chat;
