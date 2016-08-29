import React, { Component, PropTypes } from 'react';

const Root = ({children, handleSubmit}) => {
    return (
        <div className="meta-form">
            <form onSubmit={handleSubmit}>
                <div className="container-fluid">
                    {children}
                </div>
            </form>
        </div>
    );
};

Root.propTypes = {
    children: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default Root;