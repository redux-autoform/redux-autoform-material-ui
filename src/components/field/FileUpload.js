import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

import DropZone from '../common/DropZone';
import FileInfo from '../common/FileInfo';

export default class FileUpload extends React.Component {
	static propTypes = {
		onChange: PropTypes.func.isRequired,
		url: PropTypes.string.isRequired
	};

	state = {
		files: [],
		disableUpload: true,
		status: null,
		message: null,
		alertVisible: false
	};

	onDrop = (files) => {
		//TODO filter to avoid duplicates
		let fileArray = [...files, ...this.state.files];

		this.syncFields(fileArray);
		this.setState({ files: fileArray, disableUpload: false });
	};

	onClick = () => {
		// TODO Handle response status for upload service
		const { files } = this.state;
		const { url } = this.props;

		let fileData = new FormData();

		files.forEach((file) => {
			fileData.append("fileData", file);
		});

		fetch(url, {
			method: "POST",
			body: fileData
		})
			.then(response => response.json())
			.then(({ status, message }) => this.setState({
				status: status,
				message: message,
				alertVisible: true
			}));

		setTimeout(() => this.dismissAlert(), 4000);
	};

	dismissAlert = () => {
		this.setState({ alertVisible: false });
	};

	deleteItem = (position) => {
		let { files } = this.state;
		files.splice(position, 1);

		this.syncFields(files);
		this.setState({ files: files, disableUpload: files.length == 0 });
	};

	syncFields = (files) => {
		let { onChange } = this.props;

		let fileNames = files.map((file) => {
			return file.name;
		});

		onChange(fileNames);
	};

	openDropZone = () => {
		if (this.refs) {
			this.refs.dropzone.open();
		}
	};

	render() {
		let { files, disableUpload } = this.state;

		const attachmentStyle = {
			marginTop: "6px",
			color: "#616161"
		};

		const messageContainerStyle = {
			marginTop: "10px"
		};

		const messageStyle = {
			textAlign: "center",
			color: "#616161"
		};

		let rowStyle = {
			padding: "0px"
		};

		if (files) {
			rowStyle = {
				padding: "15px"
			}
		}

		return (
			<div>
				<div className="row">
					<div className="col-md-2">
						<div style={attachmentStyle}>
							<b>Attachment</b>
						</div>
					</div>
					<div className="col-md-10">
						<DropZone ref="dropzone" onDrop={this.onDrop} disableClick>
							<div style={messageContainerStyle}>
								<p style={messageStyle}>
									Drop files to attach, or <a onClick={this.openDropZone}>browse</a>
								</p>
							</div>
							<div style={rowStyle}>
								<div className="row">{
									files.map((file, index) => (
										<FileInfo key={index} file={file} onClick={() => this.deleteItem(index)} />
									))
								}
								</div>
							</div>
						</DropZone>
					</div>
				</div>
				<div className="col-md-12">
					<RaisedButton disabled={disableUpload} type="submit" label="Upload" onClick={this.onClick} primary />
				</div>
			</div>
		);
	}
}