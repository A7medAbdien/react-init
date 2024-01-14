// src/components/CardContainer.tsx

import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import { CardType } from '../types/Types';
import { Link } from 'react-router-dom';

interface CardContainerProps {
    cardList: CardType[];
    parent: string
}

const CardContainer: React.FC<CardContainerProps> = ({ cardList, parent = 'vid' }) => {

    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    {cardList.map((card, index) => (
                        <IonCol key={index} size="6">
                            <Link to={`${parent}/${card.id}`} style={{ textDecoration: 'none' }}>
                                <IonCard className="card fade-in">
                                    <IonCardHeader>
                                        <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                                        <IonCardTitle>{card.title}</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>{card.content}</IonCardContent>
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
