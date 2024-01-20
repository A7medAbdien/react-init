// src/components/CardContainer.tsx

import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { CardType } from '../types/Types';
import { Link } from 'react-router-dom';

interface CardContainerProps {
    cardList: CardType[];
    parent?: string
}

const CardContainer: React.FC<CardContainerProps> = ({ cardList, parent = 'vid' }) => {

    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    {cardList.map((card, index) => (
                        <IonCol key={index} size="6">
                            <Link to={`${parent}/${card.id}`} style={{ textDecoration: 'none' }}>
                                <IonCard className="tabs-card fade-in">
                                    <IonCardHeader
                                        className='tabs-card-header'
                                    >
                                        <IonCardTitle
                                            color={'primary'}
                                            className='tabs-card-title'
                                        >
                                            {card.title}
                                            {card.title}
                                            {card.title}
                                        </IonCardTitle>
                                    </IonCardHeader>
                                    <IonImg
                                        className='card-image-container'
                                        src={card.image}
                                        alt={card.title}
                                    ></IonImg>
                                </IonCard>
                            </Link>
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default CardContainer;
