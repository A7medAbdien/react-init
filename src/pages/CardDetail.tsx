import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';
import { useLocation, useParams } from 'react-router-dom';
import { CardList } from '../data/data';

const CardDetail: React.FC = () => {
    // Use useParams hook to retrieve parameters from the URL
    const location = useLocation();
    const { cardId } = useParams<{ cardId: string, otherParam: string }>();


    if (!Object.keys(CardList).includes(location.pathname.split('/')[1])) {
        return <div>No card ID provided</div>;
    }

    const cards = CardList[location.pathname.split('/')[1]];
    const card = cards.find(c => c.id === cardId);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>{card?.title}</IonTitle>

                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding ion-text-center">
                {/* Access the cardId here */}
                <p>Card Detail Page Content for Card ID: {cardId} {location.pathname.split('/')[1]}</p>
                <p>{card?.content}</p>
            </IonContent>
        </IonPage>
    );
};

export default CardDetail;
