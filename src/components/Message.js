import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

import Timestamp from './Timestamp';

class Message extends React.Component {

  static propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string,
    time: PropTypes.string.isRequired,
    main: PropTypes.string
  }

  //helper to determine which side to display message & what css
  getSide = () => {
    if (this.props.sender === this.props.main) {
      return 'chat-entry remote'
    }
    return 'chat-entry local'
  }

  //main program
  render() {
    const author = this.props.sender;
    const body = this.props.body;
    const time = <Timestamp time={this.props.time} />;

    return (
      <article className={this.getSide()}>
        <p className='entry-name'>{author}</p>
        <div className=' entry-bubble'>
          <p className='entry-body'>{body}</p>
          <p className='entry-time'>{time}</p>
        </div>
      </article>
    )
  }
}

export default Message;
