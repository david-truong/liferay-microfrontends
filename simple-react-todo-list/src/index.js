import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import retargetEvents from 'react-shadow-dom-retarget-events';

function loadApplication(namespace) {
  console.log('loadApplication called');
  const container = document.getElementById(namespace);

  renderAppToContainer(container);
};

export default function renderAppToContainer(container, shadowRoot, initialState){
  if(container !== undefined && container !== null){
    ReactDOM.render(<App user={initialState ? initialState.user : undefined} />, container);

    console.log('application loaded');
  } else {
    console.log('react-app-root container not found');
  }

  if(shadowRoot !== undefined && shadowRoot !== null) {
    console.log('REATTACHING EVENTS');
    retargetEvents(shadowRoot);
  }
}

loadApplication('react-app-root-2');
