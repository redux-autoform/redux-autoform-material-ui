import React, {Component, PropTypes} from 'react';

export default class FileUpload extends Component {
	static propTypes = {
		onChange: PropTypes.func.isRequired,
		url: PropTypes.string.isRequired
	};

	// state = {
	// 	files: [],
     //    disableUpload: true,
	// 	status: null,
	// 	message: null,
	// 	alertVisible: false
	// };
	//
	// onDrop = (files) => {
	// 	//TODO filter to avoid duplicates
	// 	let fileArray = [...files, ...this.state.files];
	//
	// 	this.syncFields(fileArray);
	// 	this.setState({files: fileArray, disableUpload: false});
	// };
	//
	// onClick = () => {
	// 	// TODO Handle response status for upload service
	// 	const {files} = this.state;
	// 	const {url} = this.props;
	//
	// 	let fileData = new FormData();
	//
	// 	files.forEach((file) => {
	// 		fileData.append("fileData", file);
	// 	});
	//
	// 	fetch(url, {
	// 		method: "POST",
	// 		body: fileData
	// 	})
	// 	.then(response => response.json())
     //    .then(({status, message}) => this.setState({
	//         status: status,
	//         message: message,
	//         alertVisible: true
     //    }));
	//
	// 	setTimeout(() => this.dismissAlert(), 4000);
	// };
	//
	// dismissAlert = () => {
	// 	this.setState({alertVisible: false});
	// };
	//
	// deleteItem = (position) => {
	// 	let { files } = this.state;
	// 	files.splice(position, 1);
	//
	// 	this.syncFields(files);
	// 	this.setState({files: files, disableUpload: files.length == 0});
	// };
	//
	// syncFields = (files) => {
	// 	let {onChange} = this.props;
	//
	// 	let fileNames = files.map((file) => {
	// 		return file.name;
	// 	});
	//
	// 	onChange(fileNames);
	// };
	//
	// openDropZone = () => {
	// 	this.refs.dropzone.open();
	// };
	//
	// render() {
	// 	let {files, disableUpload, status, message, alertVisible} = this.state;
	//
	// 	const attachmentStyle = {
	// 		marginTop: "6px",
	// 		color: "#616161"
	// 	};
	//
	// 	const messageContainerStyle = {
	// 		marginTop: "10px"
	// 	};
	//
	// 	const messageStyle = {
	// 		textAlign: "center",
	// 		color: "#616161"
	// 	};
	//
	// 	const alertStyle = {
	// 		textAlign: "center"
	// 	};
	//
	// 	let rowStyle = {
	// 		padding: "0px"
	// 	};
	//
	// 	if (files) {
	// 		rowStyle = {
	// 			padding: "15px"
	// 		}
	// 	}
	//
	// 	let alert;
	//
	// 	if (status && message && alertVisible) {
	// 		alert = (
	// 			<Alert bsStyle="success" onDismiss={this.dismissAlert}>
	// 				<p style={alertStyle}>{message}</p>
	// 			</Alert>
	// 		)
	// 	} else if (!status && message && alertVisible) {
	// 		alert = (
	// 			<Alert bsStyle="warning" onDismiss={this.dismissAlert}>
	// 				<p style={alertStyle}>{message}</p>
	// 			</Alert>
	// 		)
	// 	} else {
	// 		alert = null;
	// 	}
	//
	// 	return (
	// 		<div>
	// 			<Row>
	// 				<Col xs={2} md={2}>
	// 					<div style={attachmentStyle}>
	// 						<b>Attachment</b>
	// 					</div>
	// 				</Col>
	// 				<Col xs={10} md={10}>
	// 					<DropZone ref="dropzone" onDrop={this.onDrop} disableClick>
	// 						<div style={messageContainerStyle}>
	// 							<p style={messageStyle}>
	// 								<Glyphicon glyph="cloud-upload"/> Drop files to attach, or <a
	// 								onClick={this.openDropZone}>browse</a>
	// 							</p>
	// 						</div>
	// 						<div style={rowStyle}>
	// 							<Row>{
	// 								files.map((file, index) => (
	// 									<FileInfo key={index} file={file} onClick={() => this.deleteItem(index)}/>
	// 								))
	// 							}
	// 							</Row>
	// 						</div>
	// 					</DropZone>
	// 					{alert}
	// 				</Col>
	// 			</Row>
	// 			<Col>
	// 				<GlyphButton disabled={disableUpload} type="submit" glyph="cloud-upload" text="Upload" bsSize="sm"
	// 				             bsStyle="primary" onClick={this.onClick}/>
	// 			</Col>
	// 		</div>
	// 	);
	// }
}