import React, { Component, PropTypes } from 'react';
import { IconMenu, MenuItem, IconButton } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class ArrayContainerItem extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        onAction: PropTypes.func.isRequired
    };

    handleAction = (event, child) => {
        let { onAction, index } = this.props;
        console.log("This is the array container Index: " + index);
        onAction(event, child, index);
    };

    render() {
        let { children } = this.props;
        let iconButton = (
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        );

        return (
            <div className="array-container-item">
                <div className="row">
                    <div className="col-xs-11">
                        <div className="array-container-item-content">
                            {children}
                        </div>
                    </div>
                    <div className="col-xs-1">
                        <div className="array-container-item-options">
                            <IconMenu
                                iconButtonElement={iconButton}
                                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                onItemTouchTap={this.handleAction}
                                useLayerForClickAway
                                animated
                            >
                                <MenuItem key={0} primaryText="Remove"/>
                                <MenuItem key={1} primaryText="Move Up"/>
                                <MenuItem key={2} primaryText="Move down"/>
                                <MenuItem key={3} primaryText="Move first"/>
                                <MenuItem key={4} primaryText="Move last"/>
                            </IconMenu>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArrayContainerItem;