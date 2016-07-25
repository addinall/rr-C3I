// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : Asset.js 
// System       : rr-C3I 
// Date         : July  2016
// Author       : Mark Addinall
// Synopsis     : This system is the clone of C3I using newer technology.
//                Although C3I is using VERY up to date tools and design
//                coding concepts, this takes R&D a step further by
//                basing the architecture of this version around
//                React, Redux, immutability and Bootstrap


import React, { PropTypes } from 'react';

const Asset = ({ onClick, active, text }) => (
    <li
        onClick={onClick}
	style={{
	    textDecoration: active ? 'bold' : 'none'
	}}
    >
        {text}
    </li>
}
	    

Asset.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export defauly Asset

//-----------  EOF  --------------------
//
//
