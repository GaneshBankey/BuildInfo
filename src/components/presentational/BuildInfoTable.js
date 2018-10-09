import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BuildInfoRow from './BuildInfoRow';

const mapStateToProps = (state) => {
    return {
        buildEnvs: state.buildEnvs
    };
}


const ConnectedBuildInfoTable = ( {buildEnvs }) => (

    <div className="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Environment</th>
                </tr>
            </thead>
            <tbody>
                {
                    buildEnvs.map(
                        (el,index) => (
                            <BuildInfoRow key={index} index={index} buildEnv={el}/>
                        )
                    )
                }
            </tbody>
        </table>
    </div>

);

const BuildInfoTable = connect(mapStateToProps)(ConnectedBuildInfoTable);

ConnectedBuildInfoTable.propTypes = {
    buildEnvs: PropTypes.array.isRequired
};

export default BuildInfoTable;