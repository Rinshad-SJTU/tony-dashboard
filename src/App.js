import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Title from './components/Title/Title';
import MessageList from './components/MessageList/MessageList';
import Scroll from './components/Scroll/Scroll';
import SendMessageForm from './components/SendMessageForm/SendMessageForm';
import axios from 'axios';

const particlesOptions = {
  particles: {
    number: {
      value: 75,
      density: {
        enable: false,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = {
      questions: [],
      answers: [],
      query: '',
      bubbles: []
    }
    this.displayBubbles = this.displayBubbles.bind(this)
  }

  componentDidMount(){
    this._isMounted = true;
    document.title = "Tony Robbins";
    console.log('App.js mounted');
    axios.get('http://10.10.1.88:5000/reset');
  }

  onEnterSubmit = (query) => {
    const data = {text: query};
    axios.get('http://10.10.1.88:5000/tony', {
      params: {
        message: query
      }
    })
    .then(res => {
      console.log(res.data);
      const response = {'response': res.data.response};
      if (this._isMounted) {
        this.setState({
          answers: this.state.answers.concat(response),
          bubbles: response
        })
      }
      console.log('bubbles');
      console.log(this.state.bubbles);
    });
    if (this._isMounted) {
      this.setState({
        questions: this.state.questions.concat(data)
      })
    }
  }

  displayBubbles = (bubble) => {
    console.log('I am in the bubble');
    console.log(bubble);
    console.log('state');
    console.log(this.state.bubbles);
    // setTimeout(function() {
    //   this.setState({bubbles: {response: bubble[0]}});
    // }.bind(this), 3000);
    for (let i=0; i<bubble.length; i++) {
      this.setState({bubbles: {response: bubble[i]}});
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className='ma2 tc'>
        <Particles className='particles'
          params={particlesOptions}
        />
        <Title />
        <Scroll>
          <MessageList
            questions={this.state.questions}
            answers={this.state.answers}
            bubbles={this.state.bubbles}
            displayBubbles={this.displayBubbles}
          />
        </Scroll>
        <SendMessageForm
          onEnterSubmit={this.onEnterSubmit}
        />
      </div>
    );
  }
}

export default App;
