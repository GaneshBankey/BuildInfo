import React, { Component } from 'react';


import Input from '../presentational/input';


class FormContainer extends Component {

    constructor() {
        super();
        this.state = {
            title : ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        });
        console.log('Target Value', event.target.value)
    }

    render(){
        const { title } = this.state;

        return (
            <form id="build-info-from">
                <Input
                    text = "Build Info"
                    label = "build_info"
                    type = "text"
                    id =  "build_info"
                    handleChange = { this.handleChange }
                />
            </form>
        );
    }
}

export default FormContainer;