import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonButton, IonAvatar, IonImg } from '@ionic/react';
import { useLocation, useParams } from 'react-router-dom';
import { CardList } from '../data/data';

const CardDetail: React.FC = () => {
    // Use useParams hook to retrieve parameters from the URL
    const location = useLocation();
    const { cardId } = useParams<{ cardId: string, otherParam: string }>();
    const cardCategory = location.pathname.split('/')[1]

    if (!Object.keys(CardList).includes(cardCategory)) {
        return <div>No card ID provided</div>;
    }
    const card = CardList[cardCategory].list.find(c => c.id === cardId);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>{CardList[cardCategory].name}</IonTitle>
                    <IonButtons collapse={true} slot="end">
                        <IonButton>
                            <IonAvatar>
                                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </IonAvatar>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding ion-text-center" color={'light'}>
                <h1>{card?.title}</h1>
                <IonImg
                    className="ion-margin-top"
                    style={{ height: '300px' }}
                    src={card?.image}
                    alt={card?.title}
                />
            </IonContent>
        </IonPage>
    );
};

export default CardDetail;
