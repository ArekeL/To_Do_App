import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
	state = {
		tasks: [
			{
				id: 0,
				text: "Zrobić zakupy",
				date: "2022-12-31",
				important: true,
				active: true,
				finishDate: null,
			},
			{
				id: 1,
				text: "Pojechac do Chronowa",
				date: "2022-12-31",
				important: false,
				active: true,
				finishDate: null,
			},
			{
				id: 2,
				text: "Wyjazd na wycieczke",
				date: "2023-01-01",
				important: true,
				active: true,
				finishDate: null,
			},
		],
	};

	changeTaskStatus = (id) => {
		const tasks = Array.from(this.state.tasks);
		tasks.forEach((task) => {
			if (task.id === id) {
				task.active = false;
				task.finishDate = new Date().getTime();
			}
		});
		this.setState({
			tasks,
		});
		console.log(this.state.tasks);
	};
	deleteTask = (id) => {
		// method 1
		// const tasks = [...this.state.tasks];
		// const index = tasks.findIndex((task) => task.id === id);
		// tasks.splice(index, 1);

		// this.setState({
		// 	tasks,
		// });

		// method 2
		let tasks = [...this.state.tasks];
		tasks = tasks.filter((task) => task.id !== id);

		this.setState({
			tasks,
		});
	};
	render() {
		return (
			<div className='App'>
				<div>To Do List</div>
				<AddTask />
				<TaskList
					tasks={this.state.tasks}
					changeStatus={this.changeTaskStatus}
					deleteTask={this.deleteTask}
				/>
			</div>
		);
	}
}

export default App;
