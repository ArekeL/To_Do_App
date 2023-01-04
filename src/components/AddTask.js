import React, { Component } from "react";
import "./AddTask.css";
class AddTask extends Component {
	minDate = new Date().toISOString().slice(0, 10);

	state = {
		addText: "",
		checked: false,
		date: this.minDate,
		error: false,
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
		if (addText.length > 2) {
			const add = this.props.add(addText, date, checked);
			if (add) {
				this.setState({
					addText: "",
					checked: false,
					date: this.minDate,
					error: false,
				});
			}
		} else {
			this.setState({
				addText: "",
				error: true,
			});
		}
	};

	render() {
		let maxDate = this.minDate.slice(0, 4) * 1 + 2;
		maxDate = maxDate + "-12-31";
		return (
			<div>
				<input
					className='textFild'
					type='text'
					placeholder={
						this.state.error ? "Sing at least 3 letters" : "add task"
					}
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
