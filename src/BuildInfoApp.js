require('./css/BuildInfoApp.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BuildInfoWidget from './components/container/buildInfoWidget';

import buildenvStore from './store/buildenv-store';

const BuildInfoApp = () => {

    return (
        <Provider store = {buildenvStore}>
            <div className="container">
                <BuildInfoWidget/>
            </div>
        </Provider>
    );

};

export default BuildInfoApp;

const wrapper = document.getElementById("buildInfoApp");

wrapper ? ReactDOM.render(<BuildInfoApp />, wrapper) : false;