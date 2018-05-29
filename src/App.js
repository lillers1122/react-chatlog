import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Chatlog from './components/Chatlog';

class App extends Component {

  // helper to get chat participants
  isParticipant = () => {
    const participants = [];
    chatMessages.forEach(chat => {
      if (!(participants.includes(chat.sender))) {
        participants.push(chat.sender);
      }
    })
    return participants;
  }

  //main program
  render() {
    const data = chatMessages
    const chatters = this.isParticipant()


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">🐶 {chatters[0]} & {chatters[1]} ChatLog 🐶</h1>
        </header>
        <main className="App-main">
        <Chatlog data={data} main={chatters[0]}/>
        </main>
      </div>
    );
  }
}

export default App;
