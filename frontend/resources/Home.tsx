import React, { Component } from 'react';

import {
  IonApp,
  IonContent,
  IonHeader,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonMenuButton,
  IonImg
} from '@ionic/react';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

class Home extends Component {
  render() {
    return (
      <>
        <IonContent>
          <IonHeader>
            <IonButton>
              <IonMenuButton></IonMenuButton>
            </IonButton>
          </IonHeader>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
              <IonCardTitle>Running on React</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonContent>
      </>
    );
  }
}

export default Home;
