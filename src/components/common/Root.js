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

export default Root;