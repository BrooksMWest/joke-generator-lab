'use client';

import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJokes from '../api/jokes';

function Home() {
  // this sets up state to be able to hold the joke data
  const [joke, setJoke] = useState('');
  // this state is used to be able to access the joke data we want to display from the joke state which will hold joke data
  const [jokeText, setJokeText] = useState('');
  // this is for our button so we can change state when user clicks on the button
  const [buttonText, setButtonText] = useState('Get a Joke');
  // this sets a button color state to start as red
  const [buttonColor, setButtonColor] = useState('red');

  // sets up a handle click to access data when user clicks a button
  const handleClick = () => {
    // this checks if the button is set to get a joke or get a another joke which will be the state at the end of getting a joke
    if (buttonText === 'Get a Joke' || buttonText === 'Show me another knee slapper!') {
      // here is where we are making our api call to be able to access our joke data
      getJokes().then((data) => {
        // this sets our joke state to hold our joke data retrived from out api
        setJoke(data);
        // this sets our jokeText state to hold the joke set up. This is accessing a data property called setup.
        setJokeText(data.setup);
        // this sets our button to change to allow user to get a punch line
        setButtonText('Get Punchline');
        setButtonColor('green');
      });
      // this checks if the button is set to Get punchline
    } else if (buttonText === 'Get Punchline') {
      // if the button is set to get punch line this will set the joke text state to keep the joke delivery and gets rid of the joke set up
      setJokeText(<> {joke.delivery}</>);
      // this sets our button get another joke so the user can try again.
      setButtonText('Show me another knee slapper!');
      // when the user clicks this turns the button green
      setButtonColor('green');
    }
  };

  // got this from trevor!
  const handleClear = () => {
    // sets the state of joke text back to an empty string
    setJokeText('');
    // this sets the button text state back to its state of get a joke
    setButtonText('Get a Joke');
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '50px',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      {/* This is where the joke text is diplayed one a user clicks the get a joke button */}
      <div>{jokeText}</div>
      <Button style={{ backgroundColor: buttonColor, width: '400px', marginTop: '50px' }} onClick={handleClick}>
        {buttonText}
      </Button>
      <Button style={{ width: '400px', marginTop: '50px' }} onClick={handleClear}>
        clear
      </Button>
    </div>
  );
}

export default Home;
