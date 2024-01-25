// src/components/CardContainer.tsx

import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent, IonGrid, IonRow, IonCol, IonImg, IonIcon } from '@ionic/react';
import { CardType, IconCardType } from '../types/Types';
import { Link } from 'react-router-dom';

interface IconCardContainerProps {
    cardList: IconCardType[];
    parent?: string
}

const IconCardContainer: React.FC<IconCardContainerProps> = ({ cardList, parent = 'vid' }) => {

    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    {cardList.map((card, index) => (
                        <IonCol key={index} size="6">
                            <Link to={`${parent}/${card.id}`} style={{ textDecoration: 'none' }}>
                                <IonCard style={{ backgroundColor: card.bgColor }} className="tabs-icon-card fade-in">
                                    <IonIcon
                                        style={{ color: card.textColor }}
                                        className='icon-card-image-container'
                                        src={card.icon}
                                    ></IonIcon>
                                    <h2
                                        style={{ color: card.textColor }}
                                        className='tabs-icon-card-title'
                                    >
                                        {card.title}
                                    </h2>
                                </IonCard>
                            </Link>
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default IconCardContainer;
