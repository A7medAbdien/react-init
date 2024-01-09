// src/components/CardContainer.tsx

import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';

interface CardContainerProps {
    cardList: { title: string; subtitle: string; content: string }[];
}

const CardContainer: React.FC<CardContainerProps> = ({ cardList }) => {

    return (
        <IonGrid>
            <IonRow >
                {cardList.map((card, index) => (
                    <IonCol key={index} size="6">
                        <IonCard className='card'>
                            <IonCardHeader>
                                <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                                <IonCardTitle>{card.title}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>{card.content}</IonCardContent>
                        </IonCard>
                    </IonCol>

                ))}
            </IonRow>
        </IonGrid>
    );
};

export default CardContainer;
