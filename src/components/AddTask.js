import React, { Component } from "react";
import "./AddTask.css";
class AddTask extends Component {
	state = {
		addText: "",
		checked: false,
		date: "02.01.2023",
	};

	render() {
		return (
			<div className='form'>
				<input type='text' placeholder='add task' value={this.state.addText} />
				<input type='checkbox' checked={this.state.checked} id='important' />
				<label htmlFor='important'>Priority</label>
				<br />
				<label htmlFor='date'>Select the task date.</label>
				<input type='date' />
				<br />
				<button>Add Task</button>
				<hr />
			</div>
		);
	}
}

export default AddTask;
