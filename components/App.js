// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : App.js 
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
//


import React		from 'react';
import Header		from '/Header';
import AddAsset 	from'../containers/AddAsset';
import AssetList 	from '../containers/AssetList';
import AssetMap		from '../containers/AssetMap';
import Footer		from './Footer';

const App = () => (
		<div>
			<Header		/>
			<AddAsset	/>
			<AssetList	/>
			<AssetMap	/>
			<Footer		/>
		</div>
);

export default App;

//------------------   EOF ------------------------------
