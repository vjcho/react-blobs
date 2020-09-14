import React from 'react';
import PropTypes from 'prop-types';
import Blob from './Blob';
import Player from './Player';

const Play = (props) => {
	let blobs = props.blobs.length ? true : false;
  return (
  	<g>
    	<Player playerPosition={props.playerPosition} playerSize={props.playerSize} />
    	<Blob />

    	{blobs && props.blobs.map(blob => (
    		<Blob
    			position={blob.position}
    			size={blob.size}
    		/>
    	))};
    </g>
  );
};

export default Play;
