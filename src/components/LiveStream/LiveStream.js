import React, {Component} from 'react';
import './LiveStream.css'

class LiveStream extends Component {
	componentDidMount() {
		this.show();
	}

	captureImage() {
	}

	show() {
		var video = document.querySelector('#videoElement');
		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({video: true})
			.then(function(stream) {
				video.srcObject = stream;
			})
			.catch(function(error) {
				console.log('Something went wrong');
			});
		}
	}

	render() {
		return (
			<div id='livestream' className=''>
				<video autoPlay={true} id='videoElement' />
			</div>
		)
	}
}

export default LiveStream;