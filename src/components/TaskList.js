import React from "react";
import Task from "./Task";
const TaskList = (props) => {
	const active = props.tasks.filter((task) => task.active);
	const done = props.tasks.filter((task) => !task.active);
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
