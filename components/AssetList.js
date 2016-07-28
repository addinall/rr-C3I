// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : AssetList.js
// System       : rr-C3I 
// Date         : July  2016
// Author       : Mark Addinall
// Synopsis     : This system is the clone of C3I using newer technology.
//                Although C3I is using VERY up to date tools and design
//                coding concepts, this takes R&D a step further by
//                basing the architecture of this version around
//                React, Redux, immutability and Bootstrap
//                This is the last of my four stack experimental builds
//                It makes use of chai and chai-immutable.  This REDUX
//                model relies heavily on a test driven development
//                paradigm.


import React, { PropTypes } from 'react';
import Asset		    from './Asset';


const AssetList = ({assets, onAssetClick }) => (
	<h2>Asset List</h2>
	<ul>
	    {assets.map(asset =>
		<Asset
		    key={Asset.id}
		    {...asset}
		    onClick={() = onAssetClick(asset.id)}
		/>
             )}
	</ul>
)


AssetList.propType = {
    assets:  PropTypes.arrayOf(PropTypes.shape({
	    id: PropTypes.number.isRequired,
    	    active: PropTypes.bool.isRequired,
    	    text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onAssetClick: PropTypes.func.isRequired
}


export default AssetList;

//-----------  EOF -------------------------------
