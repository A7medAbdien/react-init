import React from 'react';
import { IonContent, IonPage, IonButton, IonImg, IonInput } from '@ionic/react';
import { AboutStrings, PaymentStrings } from '../data/Strings';
import Header from '../components/Header';

const About: React.FC = () => {

    return (
        <IonPage >
            <IonContent color={'tertiary'}>
                <Header />
                <div className="payment-container">
                    <div className="ion-margin-horizontal">
                        <h2 className='content-title'>
                            {AboutStrings.title}
                        </h2>
                        <p className='about-content'>
                            {AboutStrings.content}
                        </p>
                    </div>
                </div>
                <IonImg className='landing-footer-image' src={PaymentStrings.footerImage} />
            </IonContent>
        </IonPage >
    )
};

export default About;
