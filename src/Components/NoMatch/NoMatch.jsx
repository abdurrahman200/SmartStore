import React from 'react';
import classes from './NoMatch.css'

const NoMatch = () => {
    return (
        <>
            <div id="main">
                <div className={classes.fof}>
                    <h1>Error 404</h1>
                    <h5>Page not found</h5>
                </div>
            </div>
        </>
    );
};

export default NoMatch;