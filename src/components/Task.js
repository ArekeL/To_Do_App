import React from "react";

const Task = (props) => {
	const { text, date, id } = props.task;
	return (
		<>
			<p>
				<strong>{text}</strong> - <span>{date}</span>
				<button onClick={() => props.changeStatus(id)}>Done</button>
				<button onClick={() => props.deleteTask(id)}>X</button>
			</p>
		</>
	);
};

export default Task;
