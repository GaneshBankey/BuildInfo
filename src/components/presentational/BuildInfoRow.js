import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BuildInfoRow extends Component{

    constructor(){
        super()
    }

    render(){
        return (
            <tr key={this.props.index}>
                <td>{this.props.buildEnv.name}</td>
            </tr>
        );
    }
}


BuildInfoRow.propTypes = {
    index: PropTypes.number.isRequired,
    buildEnv : PropTypes.object.isRequired
}

export default BuildInfoRow;
