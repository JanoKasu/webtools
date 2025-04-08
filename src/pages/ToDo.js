import { Box, Button, TextField } from "@mui/material";
import ToDoItem from "../components/ToDoItem";
import React, { useState, useEffect } from 'react';

export default function ToDo() {
	const [text, setText] = useState('');
	const [tasks, setTasks] = useState(() => {
		const storedTodos = localStorage.getItem('todos');
		return storedTodos ? JSON.parse(storedTodos) : [];
	});

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(tasks));
	}, [tasks]);

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
			alignItems: 'center',
			textAlign: 'center'
		}}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					width: '80vw',
					justifyContent: 'space-between',
					margin: '5vh 5vw'
				}}>
				<TextField
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<Button onClick={() => addTask(text)}>Add</Button>
			</Box>
			{tasks.map(task => (
				<ToDoItem
					key={task.id}
					task={task}
					deleteTask={deleteTask}
					toggleCompleted={toggleCompleted}
				/>
			))}
		</Box>
	);
}