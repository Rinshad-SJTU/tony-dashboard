import React from 'react';
import './Avatar.css'
import avatar from './tony.png';

const Avatar = () => {
	return (
		<div id='avatar' className=''>
			<img id='tony-avatar' alt='avatar' src={avatar} />
		</div>
	)
}

export default Avatar;