import React from "react";
import Task from "./Task";
const TaskList = (props) => {
	const active = props.tasks.filter((task) => task.active);
	const done = props.tasks.filter((task) => !task.active);

	// method - sort() 1
	// done.sort((a, b) => b.finishDate - a.finishDate);

	// method - sort() 2
	done.sort((a, b) => {
		if (a.finishDate < b.finishDate) {
			return 1;
		}
		if (a.finishDate > b.finishDate) {
			return -1;
		}
		return 0;
	});

	if (active.length > 2) {
		active.sort((a, b) => {
			a = a.text.toLowerCase();
			b = b.text.toLowerCase();
			if (a < b) {
				return -1;
			}
			if (a > b) {
				return 1;
			}
			return 0;
		});
	}

	const activeTasks = active.map((task) => (
		<Task
			key={task.id}
			task={task}
			changeStatus={props.changeStatus}
			deleteTask={props.deleteTask}
		/>
	));
	const doneTasks = done.map((task) => (
		<Task
			key={task.id}
			task={task}
			changeStatus={props.changeStatus}
			deleteTask={props.deleteTask}
		/>
	));
	return (
		<div>
			<h2>To Do List</h2>
			{activeTasks.length > 0 ? (
				activeTasks
			) : (
				<em>Don't have any tasks. Well done!</em>
			)}

			<hr />
			<h4>Already Done [{done.length}]</h4>
			{done.length > 5 && <p>The last 5 completed tasks</p>}
			{doneTasks.slice(0, 5)}
		</div>
	);
};

export default TaskList;
