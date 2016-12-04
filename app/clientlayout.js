import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="rb-main-container">
                {this.props.children}
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Layout;
