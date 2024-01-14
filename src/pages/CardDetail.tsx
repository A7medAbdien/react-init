import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';
import { useParams } from 'react-router-dom';

const CardDetail: React.FC = () => {
    // Use useParams hook to retrieve parameters from the URL
    const { cardId } = useParams<{ cardId: string }>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/tabs/tab1" />
                    </IonButtons>
                    <IonTitle>Card Detail</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding ion-text-center">
                {/* Access the cardId here */}
                <p>Card Detail Page Content for Card ID: {cardId}</p>
            </IonContent>
        </IonPage>
    );
};

export default CardDetail;
