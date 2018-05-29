import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Message from './Message';

class Chatlog extends React.Component {
  static propTypes = {
    data: PropTypes.array,
    main: PropTypes.string //primary chat participant
  }

  render() {
    const gossip = this.props.data
    const gossips = gossip.map((chit) => {
      return (
        <Message
        main={this.props.main}
        sender={chit.sender}
        key={chit.timeStamp}
        body={chit.body}
        time={chit.timeStamp}
        />
      )
    })

    return (
      <article>
      {gossips}
      </article>
    )
  }
}

export default Chatlog;
