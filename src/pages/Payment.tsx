import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonImg, IonInput, IonButtons, IonIcon } from '@ionic/react';
import { useParams } from 'react-router-dom';
import { PaymentStrings } from '../data/Strings';
import { chevronBackOutline } from 'ionicons/icons';
import BackButton from '../components/BackButton';
import Header from '../components/Header';

const Payment: React.FC = () => {
    // Use useParams hook to retrieve parameters from the URL
    const { subscriptionId } = useParams<{ subscriptionId: string }>();


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

export default Payment;