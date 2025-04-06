import { Box, Button, TextField } from "@mui/material";
import ToDoItem from "../components/ToDoItem";
import React, { useState } from 'react';

export default function ToDo() {
	const [text, setText] = useState('');
	const [tasks, setTasks] = useState([
		{ id: 1, text: 'Doctor Appointment', completed: true },
		{ id: 2, text: 'School Meeting', completed: false }
	]);

	function addTask(text) {
		const newTask = {
			id: Date.now(),
			text,
			completed: false
		}
		setTasks([...tasks, newTask]);
		setText('');
	}

	function deleteTask(id) {
		setTasks(tasks.filter(task => task.id !== id));
	}

	function toggleCompleted(id) {
		setTasks(tasks.map(task => {
			if (task.id === id) {
				return { ...task, completed: !task.completed };
			} else {
				return task;
			}
		}));
	}

	return (
		<Box sx={{
			backgroundColor: '#CCD5AE',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			textAlign: 'center'
		}}>
			{tasks.map(task => (
				<ToDoItem
					key={task.id}
					task={task}
					deleteTask={deleteTask}
					toggleCompleted={toggleCompleted}
				/>
			))}
			<TextField
				value={text}
				onChange={e => setText(e.target.value)}
			/>
			<Button onClick={() => addTask(text)}>Add</Button>
		</Box>
	);
}