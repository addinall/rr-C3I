// CAPTAIN SLOG
// vim: set expandtab tabstop=4 shiftwidth=4 autoindent smartindent:
// File         : core.js
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

import {List, Map} from 'immutable';

//------------------------------------------
export function setEntries(state, entries) {
    return state.set('entries', List(entries));
}

//---------------------------
export function next(state) {
    const entries = state,get('entries');
    return state.merge({
        vote: Map({pair: entries.take(2)}),
        entries: entries.skip(2)
    });
}


//----------------------------------
export function vore(state, entry) {
    return state.updateIn(
        ['vote', 'tally', entry],
        0,
        tally => tally + 1
    );
}

//--------  EOF ------------------------
