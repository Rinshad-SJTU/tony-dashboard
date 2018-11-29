import React, {Component} from 'react';
import './MessageList.css';
import favicon from './favicon.ico'

class MessageList extends Component {
  _isMounted = false;

  constructor() {
    super();
    this.timeout = 3000;
    this.availableMessages = [1, 2, 3, 4, 5];
    this.state = {
        itemsToShow: [],
        showLoader: false,
        messages: [1]
    };
  }

  processNextItem = () => {
    const item = this.getItemToShow();
    
    if (item) {
      this.setState({showLoader: true});

      setTimeout(() => {
        this.setState({showLoader: false});
        this.addItemToShow(item, this.processNextItem);
      }, this.timeout);
    }
  }

  getItemToShow = () => this.availableMessages.shift();

  addItemToShow = (item, onAdd) => {
    this.setState(({itemsToShow}) => ({
      itemsToShow: itemsToShow.concat(item)
    }), onAdd);
  }



  componentDidMount() {
    this._isMounted = true;
    this.addItemToShow(this.getItemToShow());
    this.processNextItem();
    let timerId = setInterval(() => {this.setState({messages: this.state.messages.concat(1)})}, 2000);
    // after 5 seconds stop
    setTimeout(() => { clearInterval(timerId);}, 5000);
  }

  displayBubbles(messages) {
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

	render () {
    const { index, bubbles } = this.state;
    return (
      <ul>                 
          {this.props.questions.map((question, index) => {
            let span = [], h5, hello = [1, 2, 3, 4, 5];
            if (this.props.answers.length === this.props.questions.length || this.props.answers.length !== this.props.questions.length && this.props.answers.length > 0 && index !== this.props.questions.length-1) {
              // h5 = <h5>Tony</h5>
              h5 = <img style={{borderRadius: '50%', height: '25px'}}src={favicon} />
              span = [];
              this.props.answers[index].response.map((res, ind) => {
                span.push(<div><span key={ind} className='right br3 shadow-5 mb3'>{res}</span><div className='clear'></div></div>)
              });
            }
            else if (this.props.answers.length !== this.props.questions.length && this.props.answers.length > 0 && index === this.props.questions.length-1) {
              h5 = <h5>Tony is typing</h5>
              span = [];
              span.push(<p className="saving mb3"><span>.</span><span>.</span><span>.</span></p>);
            }
            else if (this.props.answers.length !== this.props.questions.length && this.props.answers.length === 0) {
              h5 = <h5>Tony is typing</h5>
              span = [];
              span.push(<p key={index} className="saving mb3"><span>.</span><span>.</span><span>.</span></p>);
            }
        return (
          <li key={index}>
            <div style={{clear: 'right'}}>
              <h5>You</h5>
              <span className='br3 left shadow-5 mb3'>{question.text}</span>
            </div>
            <div className='clear'></div>
            <div style={{float: 'right'}}>
              {<div><div style={{float: 'right'}}>{h5}</div><div className='clear'></div></div>}
              {span}
              {/*<div>
                {this.state.itemsToShow.map((item, index) => (
                  <span key={index}>{item} </span>
                ))}
                {this.state.showLoader && <div><h5>Tony is typing</h5><p key={index} className="saving mb3"><span>.</span><span>.</span><span>.</span></p></div>}
             </div>*/}
            </div>
          </li>
            )
          })}
      </ul>
    )
  }
}

export default MessageList;