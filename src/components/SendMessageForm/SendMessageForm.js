import React, { Component } from 'react';
import './SendMessageForm.css';

class SendMessageForm extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.message !== '')
    this.props.onEnterSubmit(this.state.message);
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        	className='tl dib ma2 shadow-5'
			style={{color: 'white', border: '0', minHeight: '50px', minWidth: '30%', padding: '5px', background: 'rgba(232, 253, 245, 0.1)', outline: 'none'}}
			onChange={this.handleChange}
			value={this.state.message}
			placeholder="Type your message and hit ENTER"
			type="text" />
      </form>
    )
  }
}

export default SendMessageForm;