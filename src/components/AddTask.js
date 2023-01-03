import React, { Component } from "react";
import "./AddTask.css";
class AddTask extends Component {
	minDate = new Date().toISOString().slice(0, 10);

	state = {
		addText: "",
		checked: false,
		date: this.minDate,
	};
	handleAddText = (e) => {
		this.setState({
			addText: e.target.value,
		});
	};
	handleCheckbox = (e) => {
		this.setState({
			checked: e.target.checked,
		});
	};

	handleDate = (e) => {
		this.setState({
			date: e.target.value,
		});
	};

	handleClick = () => {
		const { addText, date, checked } = this.state;
		if (addText.length > 2 && addText !== "   ") {
			const add = this.props.add(addText, date, checked);
			if (add) {
				this.setState({
					addText: "",
					checked: false,
					date: this.minDate,
				});
			}
		} else {
			alert("Too short text"); // Ultimately, text under the input
		}
	};

	render() {
		let maxDate = this.minDate.slice(0, 4) * 1 + 2;
		maxDate = maxDate + "-12-31";
		return (
			<div className='form'>
				<input
					type='text'
					placeholder='add task'
					value={this.state.addText}
					onChange={this.handleAddText}
				/>
				<input
					type='checkbox'
					checked={this.state.checked}
					id='important'
					onChange={this.handleCheckbox}
				/>
				<label htmlFor='important'>Priority</label>
				<br />
				<label htmlFor='date'>Select the task date.</label>
				<input
					type='date'
					value={this.state.date}
					min={this.minDate}
					max={maxDate}
					onChange={this.handleDate}
				/>
				<br />
				<button onClick={this.handleClick}>Add Task</button>
				<hr />
			</div>
		);
	}
}

export default AddTask;
