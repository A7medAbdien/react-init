import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonButton, IonAvatar, IonImg, IonItem, IonLabel, IonIcon, IonFab } from '@ionic/react';
import { useLocation, useParams } from 'react-router-dom';
import { TabsData } from '../data/data';
import { useGlobal } from '../context/GlobalContext';
import Header from '../components/Header';
import { CardType, IconCardType, ItemCardType } from '../types/Types';
import { add, remove } from 'ionicons/icons';

const CardDetailsStrings = {
    buyButton: 'Buy Now',
    descriptionTitle: "Description"
}

export interface CardDetailProps {
    type: string;
}

const CardDetail: React.FC<CardDetailProps> = ({ type }) => {
    // Use useParams hook to retrieve parameters from the URL
    const location = useLocation();
    const { cardId } = useParams<{ cardId: string, otherParam: string }>();
    const cardCategory = location.pathname.split('/')[2]

    const tab = TabsData.find(t => t.path === `/${cardCategory}`)
    if (!tab) {
        return <div>No card ID provided</div>;
    }
    const card = tab?.cardList.find(c => c.id === cardId)
    const cardTypes: { [key: string]: React.ReactElement } = {
        'card': <VideoCardDetail card={card as CardType} />,
        'icon': <VideoCardDetail card={card as IconCardType} />,
        'item': <ItemCardDetail card={card as ItemCardType} />,
    }

    return (
        <IonPage>
            <Header color={'tertiary'} />

            <IonContent className="ion-text-center" >
                {cardTypes[type]}
            </IonContent>
        </IonPage>
    );
};

export default CardDetail;

interface VideoCardDetailProps {
    card: CardType | IconCardType;
}
export const VideoCardDetail: React.FC<VideoCardDetailProps> = ({ card }) => {
    return <>
        <div className="detail-container">

            <div className="ion-padding ">
                {/* <h1 className='fade-in'>{card?.title}</h1> */}
                <div
                    className="ion-margin-top video-container fade-in"
                >
                    <video width="100%" height="100%" controls>
                        <source src={card?.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="detail-content-container">
                <p className='fade-in'>{card?.content}</p>
            </div>
        </div>
    </>
}

interface ItemCardDetailProps {
    card: ItemCardType;
}
export const ItemCardDetail: React.FC<ItemCardDetailProps> = ({ card }) => {
    return <>
        <div className="detail-container">

            <div className="ion-padding ">
                {/* <h1 className='fade-in'>{card?.title}</h1> */}
                <div
                    className="ion-margin-top video-container fade-in"
                >
                    <IonImg
                        src={card.image}
                        alt={card.title}
                    ></IonImg>
                </div>
            </div>
            <div className="detail-content-container item">
                <h1>{card.title}</h1>
                <IonItem className='price-container' lines='none'>
                    <h1>{card.price}</h1>
                    <IonButtons slot='end'>
                        <IonButton color={'primary'} fill='solid'>
                            <IonIcon className='item-details-icon' src={remove} />
                        </IonButton>
                        <h4 className='card-quantity'>{card.quantity}</h4>
                        <IonButton color={'primary'} fill='solid'>
                            <IonIcon className='item-details-icon' src={add} />
                        </IonButton>
                    </IonButtons>
                </IonItem>
                <h4>{CardDetailsStrings.descriptionTitle}</h4>
                <p className='fade-in'>{card?.description}</p>
            </div>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonButton color='primary' className='item' size='small' fill='solid'><h4 className='item-details-button'>{CardDetailsStrings.buyButton}</h4></IonButton>
            </IonFab>
        </div >
    </>
}