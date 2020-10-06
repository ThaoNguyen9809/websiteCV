import React from 'react';
import Login from './login'
import Contact from './contact'

index.propTypes = {
    
};

function index(props) {
    return (
        <div>
            <Login />
            <Contact />
        </div>
    );
}

export default index;