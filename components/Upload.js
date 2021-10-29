/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';=

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 15
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

    return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> Upload </Button>
      </CardActions>
    </Card>
  );
}
*/

import axios from 'axios';

import React, { Component } from 'react';

class Upload extends Component {

	state = {

		// Initially, no file is selected
		selectedFile: null
	};

	// On file select (from the pop up)
	onFileChange = event => {

		// Update the state
		const files = Array.from(event.target.files)
		this.setState({ selectedFile: event.target.files[0] });

		const formData = new FormData()

		files.forEach((file, i) =>{
			formData.append(i, file)
		})


	};

	// On file upload (click the upload button)
	onFileUpload = () => {

		// Create an object of formData
		const formData = new FormData();

		// Update the formData object
		formData.append(
			"myFile",
			this.state.selectedFile,
			this.state.selectedFile.name
		);

		// Details of the uploaded file
		console.log(this.state.selectedFile);

		// Request made to the backend api
		// Send formData object
		axios.post("api/uploadfile", formData);
	};

	// File content to be displayed after file upload is complete
	fileData = () => {

		if (this.state.selectedFile) {

			return (
				<div>
					<h2>
						File Details:
					</h2>
					<p>
						File Name: {this.state.selectedFile.name}
					</p>
					<p>
						File Type: {this.state.selectedFile.type}
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
					File Upload
				</h1>
				<div>
					<input type="file" onChange={this.onFileChange} />
					<button onClick={this.onFileUpload}>
						Upload!
					</button>
				</div>
				{this.fileData()}
			</div>
		);
	}
}

export default Upload;