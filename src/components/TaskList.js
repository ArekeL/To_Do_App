import React from "react";
import Task from "./Task";
const TaskList = (props) => {
	const tasks = props.tasks.map((task) => (
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
			{tasks}

			<hr />
			<h2>Already Done (0)</h2>
		</div>
	);
};

export default TaskList;
