import React from 'react';
import { Box, Button, Checkbox } from '@mui/material';

export default function ToDoItem(props) {
	function handleChange() {
		props.toggleCompleted(props.task.id);
	}

	return (
		<Box
			color='#D4A373'
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				textAlign: 'center',
				borderRadius: '25px',
				padding: '20px',
				backgroundColor: '#E9EDC9',
				margin: '5vh 5vw',
				height: '10vh',
				width: '80vw'
			}}>
			<Checkbox
				checked={props.task.completed}
				onClick={handleChange} />
			<Box>{props.task.text}</Box>
			<Button
				sx={{ alignSelf: 'left' }}
				onClick={() => props.deleteTask(props.task.id)}
			>
				X
			</Button>
		</Box>
	)
}