import React, {Component} from 'react';
import './Legend.css';

class Legend extends Component {
	componentDidMount() {
		var video = document.querySelector('#videoElement');
		const myCanvas = document.querySelector('#myCanvas');
		const context = myCanvas.getContext('2d');
		setTimeout(function captureImage() {
			context.drawImage(video, 0, 0, 456, 345);
			const data = myCanvas.toDataURL('image/png');
			// document.getElementById('captured').src = data;
			setTimeout(captureImage, 3000);
		}, 3000);
	}

	render() {
		return (
			<div id='legend' className=''>
				Legend
				<img hidden id='captured' style={{height: '100%', width: '100%'}} />
				<canvas hidden id='myCanvas' width='456' height='345'></canvas>
			</div>
		);
	}
}

export default Legend;