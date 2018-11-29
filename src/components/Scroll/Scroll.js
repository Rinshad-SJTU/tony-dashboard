import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Avatar from '../Avatar/Avatar';
import LiveStream from '../LiveStream/LiveStream';
import Legend from '../Legend/Legend';
import VideoRetrieval from '../VideoRetrieval/VideoRetrieval';
import './Scroll.css'

class Scroll extends Component {
	componentDidUpdate() {
		ReactDOM.findDOMNode(this.refs.scroll).scrollTop = this.refs.scroll.scrollHeight;
	}

	render () {
		return (
			<div style={{display: 'flex', justifyContent: 'center', minHeight: '700px'}}>
				<div id='1st' style={{width:'25%', maxHeight: '345px', minHeight: '345px', marginRight: '7.5%'}} className='ma2 mb0 shadow-5'>
					<LiveStream className='shadow-5' />
					<div style={{marginTop: '10px'}} className='shadow-5'>
						<Legend />
					</div>
				</div>
				<div
					id='scroll'
					ref='scroll'
					className='tl bg-white dib pa3 mb0 ma2 bw1 shadow-5'
					style={{maxHeight: '700px', minHeight: '700px', minWidth: '30%', overflowY: 'auto', background: 'rgba(232, 253, 245, 0.1)'}}>
					{this.props.children}
				</div>
				<div id='2nd' style={{marginLeft: '7.5%', width:'25%', maxHeight: '345px', minHeight: '345px'}} className='ma2 mb0 shadow-5'>
					<Avatar className='shadow-5' />
					<div style={{marginTop: '9px'}} className='shadow-5'>
						<VideoRetrieval />
					</div>
				</div>
			</div>
		)
	}
}

export default Scroll;