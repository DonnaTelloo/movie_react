import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <>
                <p>404 გვერდი</p>
                <Link to="/">მთავარი გვერდი</Link>
            </>
        );
    }
}

export default PageNotFound;