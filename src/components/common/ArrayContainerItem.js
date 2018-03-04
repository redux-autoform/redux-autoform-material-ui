import React from 'react';
import PropTypes from 'prop-types';
import IconMenu from 'material-ui/IconMenu/IconMenu';
import MenuItem from 'material-ui/MenuItem/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class ArrayContainerItem extends React.Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        onAction: PropTypes.func.isRequired,
        children: PropTypes.node
    };

    handleAction = (event, child) => this.props.onAction(event, child, this.props.index);

    render() {
        return (
            <div className="array-container-item">
                <div className="row">
                    <div className="col-xs-11">
                        <div className="array-container-item-content">
                            {this.props.children}
                        </div>
                    </div>
                    <div className="col-xs-1">
                        <div className="array-container-item-options">
                            <IconMenu
                                iconButtonElement={(
                                    <IconButton>
                                        <MoreVertIcon />
                                    </IconButton>
                                )}
                                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                                onItemTouchTap={this.handleAction}
                                useLayerForClickAway
                                animated
                            >
                                <MenuItem key="remove" primaryText="Remove" />
                                <MenuItem key="move_up" primaryText="Move Up" />
                                <MenuItem key="move_down" primaryText="Move down" />
                                <MenuItem key="move_first" primaryText="Move first" />
                                <MenuItem key="move_last" primaryText="Move last" />
                            </IconMenu>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}