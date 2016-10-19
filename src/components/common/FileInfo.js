import React, { Component, PropTypes } from 'react';
import { Dialog, FlatButton, FontIcon } from 'material-ui';
import { cyan500 } from 'material-ui/styles/colors';
import filesize from 'filesize';

class FileInfo extends Component {
	state = {
		show: false
	};

	showModal = (show) => {
		this.setState({ show: show });
	};

	render() {
		let { file, height, width, onClick } = this.props;
		let { show } = this.state;

		const containerStyle = {
			margin: "auto",
			padding: "0px",
			backgroundColor: "#eeeeee",
			borderColor: '#757575',
			borderStyle: 'solid',
			borderWidth: 2,
			borderRadius: 6,
			marginBottom: "10px"
		};

		const fileNameStyle = {
			textAlign: 'center'
		};

		const trashContainerStyle = {
			display: "inline-block",
			textAlign: "left",
			paddingLeft: "10px",
			paddingBottom: "10px"
		};

		const fileSizeContainerStyle = {
			display: "inline-block",
			float: "right",
			paddingRight: "10px",
			paddingBottom: "10px"
		};

		const imgStyle = {
			marginTop: "10px",
			display: 'block',
			marginLeft: 'auto',
			marginRight: 'auto'
		};

		const textContainerStyle = {
			marginTop: "10px",
			color: "#212121"
		};

		let image = (file.type.match(/image/))? file.preview : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/file-text-icon.png";
		let filename = (file.name.length <= 21)? file.name : file.name.substring(0, 20);

		const actions = [
			<FlatButton
				label="Delete"
				onTouchTap={() => { onClick(); this.showModal(false)}}
			/>
		];

		return (
			<div className="col-md-4">
				<Dialog
					title="Delete"
					actions={actions}
					modal={false}
					open={show}
					onRequestClose={() => this.showModal(false)}
				>
					<div>
						<p>Are you sure that you want to delete this file: <b>{file.name}</b>?</p>
					</div>
				</Dialog>
				<div style={containerStyle}>
					<img height={height} width={width} src={image} style={imgStyle}/>
					<div style={textContainerStyle}>
						<p style={fileNameStyle}>{filename}</p>
						<div>
							<div onClick={() => this.showModal(true)} style={trashContainerStyle}>
								<FontIcon className="material-icons" color={cyan500}>
									delete
								</FontIcon>
							</div>
							<div style={fileSizeContainerStyle}>
								<p>{filesize(file.size)}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

FileInfo.propTypes = {
	onClick: PropTypes.func,
	file: PropTypes.object.isRequired,
	height: PropTypes.string,
	width: PropTypes.string
};

FileInfo.defaultProps = {
	height: "150px",
	width: "150px"
};

export default FileInfo;