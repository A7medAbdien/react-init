import React from 'react';
import { IonContent, IonPage, IonButton, IonImg, IonInput } from '@ionic/react';
import { PaymentStrings } from '../data/Strings';
import Header from '../components/Header';

const About: React.FC = () => {

    return (
        <IonPage >
            <IonContent>
                <Header />
                <div className="payment-container">
                    <div className="ion-margin-horizontal">
                        <h2 className='payment-input-label'>
                            {PaymentStrings.inputLabel}
                        </h2>
                        <IonInput
                            className='payment-input'
                            placeholder={PaymentStrings.inputPlaceholder}
                            type="text"
                        />
                        <div className="payment-button-container">
                            <IonButton
                                className='payment-button'
                                size="large"
                                routerLink={PaymentStrings.link}
                            >
                                {PaymentStrings.paymentButton}
                            </IonButton>
                        </div>
                    </div>
                </div>
                <IonImg className='landing-footer-image' src={PaymentStrings.footerImage} />
            </IonContent>
        </IonPage >
    )
};

export default About;
