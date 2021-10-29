import axios from 'axios';

import React, { Component } from 'react';

class Upload extends Component {

	state = {
		// Initially, no file is selected
		currentFile: null
	};

	// On file select (from the pop up)
	stateChange = event => {

		// Update the state
		this.setState({ currentFile: event.target.files[0] });

	};

	// On file upload (click the upload button)
	uploading = () => {

		// Create an object of formData
		const formData = new FormData();

		// Update the formData object
		formData.append(
			"myFile",
			this.state.currentFile,
			this.state.currentFile.name
		);

		// Details of the uploaded file
		console.log(this.state.currentFile);

		// Request made to the backend api
		// Send formData object
		axios.post("api/uploadfile", formData);
	};

	// File content to be displayed after
	// file upload is complete
	fileData = () => {

		if (this.state.currentFile) {

			return (
				<div>
					<h2>
						File Details:
					</h2>
					<p>
						File Name: {this.state.currentFile.name}
					</p>
					<p>
						File Type: {this.state.currentFile.type}
					</p>
				</div>
			);
		} else {
			return (
				<div>
					<br />
					<h3>
						Choose before Pressing the Upload button
					</h3>
				</div>
			);
		}
	};

	render() {

		return (
			<div>
				<h1>
					Upload your file
				</h1>
				<div>
					<input type="file" onChange={this.stateChange} />
					<button onClick={this.uploading}>
						Upload!
					</button>
				</div>
				{this.fileData()}
			</div>
		);
	}
}

export default Upload;