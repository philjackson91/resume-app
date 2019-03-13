import React, { Component } from 'react';
import axios from 'axios';

import LoginPage from './LoginPage';
import Button from '../../../components/UI/Button/Button';



class LoginForm extends Component {
    state = {
        Form: {
            Email: {
                elementType: 'email',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            Pwd: {
                elementType: 'pwd',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                },
                valid: false,
                touched: false
            },            
        },
        formIsValid: false,
        loading: false
    }

    formHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formEl in this.state.Form) {
            formData[formEl] = this.state.Form[formEl].value;
        }
        axios.post( 'http://resume-app-e1e41.firebaseio.com/', formData )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push( '/FullPost');
            })
            .catch( error => {
                this.setState( { loading: false } );
            });
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputID) => {
        const updatedForm = {
            ...this.state.Form
        };
        const updatedFormEl = {
            ...updatedForm[inputID]
        };
        updatedFormEl.value = event.target.value;
        updatedFormEl.valid = this.checkValidity(updatedFormEl.value, updatedFormEl.validation);
        updatedFormEl.touched = true;
        updatedForm[inputID] = updatedFormEl;

        let formIsValid = true;
        for (let inputID in updatedForm) {
            formIsValid = updatedForm[inputID].valid && formIsValid;
        }
        this.setState({Form: updatedForm, formIsValid: formIsValid});
    }

    render () {

        const formElementArray = [];
        for (let key in this.state.Form) {
            formElementArray.push({
                id: key,
                config: this.state.Form[key]
            });
        }

        let form = (
            <form onSubmit={this.formHandler}>
                {formElementArray.map(formElement => (
                    <LoginPage
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button disabled={!this.state.formIsValid}>Log In</Button>
            </form>
        )

        return (
            <div>
                {form}
            </div>
        )
    }
}

export default LoginForm;