import React, { useCallback, useReducer } from 'react';
import { VALIDATOR_MINLENGTH } from '../../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './NewPlace.css';
import Button from '../shared/FormElements/Button';

const NewPlace = () => {
 
  const formReducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_CHANGE':
        let formIsValid = true;
        for (const inputId in state.inputs) {
          if(inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          }
        }
        return {
          ...state,
          input: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid }
          },
          isValid: formIsValid
        };
      default:
        return state;
    }
  }

 const [formState, dispatch] =  useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value:'',
        isValid: false
      }
    },
    isValid: false
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id})
  }, [dispatch]);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs)
  }

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
       <Input
        element="textarea"
        id="description"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 caracteres)."
        onInput={inputHandler}
      />
      <Input
        element="address"
        id="description"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Button 
      type='submit'
      disabled={!formState.isValid}
      >
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;