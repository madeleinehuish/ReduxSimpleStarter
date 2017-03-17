import React from 'react';

const VideoListItem = ({video}) => {
	// const video = props.video; is basically what happens when we pull in {video} as props above
	//it basically takes in the props object, and because there is a props.video it assigns video: props.video
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;
