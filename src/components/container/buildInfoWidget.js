/**
 * This is the container class for holding the BuildInfo
 * table components
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBuildEnvs } from '../../actions/buildapp-actions';
import { API_URL } from '../../constants/service-urls';
import BuildInfoTable from '../presentational/BuildInfoTable';

const mockdata = require('../../mockdata/build_env');

/**

*/
const mapDispatchToProps = (dispatch)=> {
    return {
        fetchBuildEnvs: buildEnvs => dispatch(loadBuildEnvs(buildEnvs))
    };
}

class BuildInfoWidget extends Component{

    constructor(){
        super();
        this.fetchBuildEnvs = this.fetchBuildEnvs.bind(this);
        this.refreshBuildEnvs = this.refreshBuildEnvs.bind(this);
    }
    refreshBuildEnvs(){
        this.props.fetchBuildEnvs([{"name":"Dev3"}]);
    }

    fetchBuildEnvs(){
        console.log('fetchEnv call');
        /*fetch(API_URL.buildEnv, {
            mode: 'cors'
        }).then(response => response.json())
            .then( buildEnvs=> {
                console.log('11',buildEnvs);
                this.props.fetchBuildEnvs(buildEnvs);
            }).catch( error => console.log(error))
            */
        this.props.fetchBuildEnvs(mockdata);
    }

    componentWillMount(){
        this.fetchBuildEnvs();
    }

    render(){
        return (
            <div className="card">
                <div className="card-header">
                    <div className="float-left">BuildInfo</div>
                    <div className="float-right">
                        <span className="fa fa-refresh" style={ { cursor: "pointer"}} onClick={this.refreshBuildEnvs}></span>
                    </div>
                </div>
                <div className="card-body">
                    <BuildInfoTable/>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(BuildInfoWidget);