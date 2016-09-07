import React, { Component, PropTypes } from 'react';
import { Dialog, FlatButton } from 'material-ui';

class SubmitDialog extends Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        args: PropTypes.any
    };

    render() {
        const { open, handleClose, args } = this.props;

        const actions = [
            <FlatButton
                label="Hide"
                onTouchTap={handleClose}
            />
        ];

        return (
            <div>
                <Dialog
                    title="Submit Values"
                    actions={actions}
                    modal={false}
                    open={open}
                    onRequestClose={handleClose}
                    autoScrollBodyContent
                >
                    <div className="submit-dialog">
                        <pre className="roboto">
                            {JSON.stringify(args[0], null, 2)}
                        </pre>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default SubmitDialog;