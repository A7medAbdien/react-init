import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { CardType, ItemCardType } from '../types/Types';
import { Link } from 'react-router-dom';

interface ItemCardContainerProps {
    cardList: ItemCardType[];
    parent?: string
}

const ItemCardContainer: React.FC<ItemCardContainerProps> = ({ cardList, parent = 'vid' }) => {

    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    {cardList.map((card, index) => (
                        <IonCol key={index} size="6">
                            <Link to={`${parent}/${card.id}`} style={{ textDecoration: 'none' }}>
                                <IonCard className="item-card fade-in">
                                    <IonImg
                                        className='item-card-image-container'
                                        src={card.image}
                                        alt={card.title}
                                    ></IonImg>

                                    <IonCardHeader
                                        style={{ backgroundColor: card.bgColor }}
                                        className='item-card-header'
                                    >
                                        <IonCardSubtitle
                                            style={{ '--color': card.textColor }}
                                        >
                                            {card.title}
                                        </IonCardSubtitle>
                                        <IonCardTitle
                                            style={{ '--color': card.textColor }}
                                            className='item-card-title'
                                        >
                                            {card.price}
                                        </IonCardTitle>

                                    </IonCardHeader>
                                </IonCard>
                            </Link>
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default ItemCardContainer;
