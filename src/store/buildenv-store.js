/**
 * This class is used for holing the buildInfo
 * store
 */

import { createStore } from 'redux';
import buildenvReducer from '../reducers/buildenv-reducer';

const buildenvStore = createStore(buildenvReducer);

export default buildenvStore;

