import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Emp. State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];
/* Hooks allow you to add various functionalities to function components. HOOKS MUST ONLY BE USED IN DIRECTLY IN COMPONENT FUNCTION(NOT IN loops, other functions, ifs, then block)
    useState()- hook allows us to register state which then is managed inside ofa  component, when state is changed, the component re-renders(re-evaulated and might be lead to re-rendering of DOM)
    
    useEffect() - does something different: It allows you to register some logic (i.e. a JS function) which will be executed when certain dependencies - which you define - change.
    useEffect() re-evaluates the dependency values whenever the component in which you use useEffect() is re-evaluated (i.e. whenever the component's props or state changed).
If the component is re-evaluated and the dependencies did NOT change, the logic in useEffect() won't run again.
Important: The useEffect() logic re-runs AFTER the component (including its JSX code) was re-evaluated. That means, that the first execution of the useEffect() logic 
(when a component mounts for the first time) will ALWAYS happen AFTER the component rendered for the first time.
    */
const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId; //gets params from the url, the id of the place, extracted from  <Rout path="/places/:placeId">

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId); //finds a place from dummy places with id of url

  useEffect(() => { //only trigger when dependencies setFormdata or identifiedPlace is triggered, setformdata will not trigger cause wrapped with usecallback
    if (identifiedPlace) { //checking to see if we have that specific place (the url)
      setFormData(  //changing the form data, updating
        {
          title: {
            value: identifiedPlace.title,
            isValid: true
          },
          description: {
            value: identifiedPlace.description,
            isValid: true
          }
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) { //if the place wasn't found
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) { //if we don't have formState.inputs.title.value then we don't update yet
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  //return a form for updating a place
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}  //inputHandler is returned from form-hook.js
        initialValue={formState.inputs.title.value} //old value
        initialValid={formState.inputs.title.isValid} 
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
