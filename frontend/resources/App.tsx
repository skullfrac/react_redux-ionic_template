import React from 'react';

import { IonApp } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

import Home from '/srv/app/frontend/src/page/Home';

const App = () => (
  <IonApp>
    <Home />
  </IonApp>
);

export default App
