import React from 'react';
import { Box, Button } from '@mui/material';

export default function RPS(props) {
	return (
		<Button
			color='#D4A373'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				borderColor: 'black',
				borderRadius: '25px',
				padding: '20px',
				backgroundColor: '#E9EDC9',
				margin: '5vh 5vw'
			}}>
			<img style={{ height: '35vh', padding: '3vh 2vw' }} draggable={false} src={props.img} alt='Error Loading' />
			<Box sx={{
				fontSize: '30px',
				color: 'black'
			}}>
				{props.title}
			</Box>
		</Button>
	)
}