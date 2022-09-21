import React from "react";
import "./NewPlace.css";
import Input from "../../../shared/components/FormElements/Input";

const NewPlace= () => {
    return (
        <form className="place-form">
            <Input 
            type="text" 
            label="Tiltle" 
            element="input"
            validators={[]}
            errorText="Please enter a valid title"
            />
        </form>
    )
}

export default NewPlace;