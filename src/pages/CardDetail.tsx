import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonButton, IonAvatar, IonImg } from '@ionic/react';
import { useLocation, useParams } from 'react-router-dom';
import { CardList } from '../data/data';

const vid = `https://res.cloudinary.com/dcmthd8bn/video/upload/v1694723012/react-base-vid/Blue_Sky_and_Clouds_Timelapse_0892__Videvo_preview_kx6yal.mp4`

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
                <div
                    className="ion-margin-top video-container"
                >
                    <video width="100%" height="auto" controls>
                        <source src={card?.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default CardDetail;
