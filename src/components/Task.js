import React from "react";

const Task = (props) => {
	const { text, date, id, active, important, finishDate } = props.task;
	const style = {
		color: "red",
	};
	const finishTime = new Date(finishDate).toLocaleString();
	if (active) {
		return (
			<>
				<p>
					<strong style={important ? style : null}>{text}</strong> -{" "}
					<span>{date}</span>
					<button onClick={() => props.changeStatus(id)}>Done</button>
					<button onClick={() => props.deleteTask(id)}>X</button>
				</p>
			</>
		);
	} else {
		return (
			<>
				<p>
					<strong>{text}</strong> - <span>{date}</span>
					<br />
					<em>The task has been completed - {finishTime}</em>{" "}
					<button onClick={() => props.deleteTask(id)}>X</button>
				</p>
			</>
		);
	}
};

export default Task;
