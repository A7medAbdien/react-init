import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { Links, SubscriptionStrings } from '../data/Strings';
import { SubscriptionCardData } from '../data/data';
import { SubscriptionCardType } from '../types/Types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const SubscriptionCard: React.FC<SubscriptionCardType> = ({ id, price, duration, bgColor, textColor }) => {
    return <>
        <IonCol size='5' className='subscription-card' style={{ borderColor: bgColor, backgroundColor: bgColor }}>
            <Link style={{ textDecoration: 'none' }} to={`${Links.payment}/${id}`}>
                <div className="subscription-price-container" style={{ borderColor: bgColor }}>
                    <div style={{ color: textColor }} className="subscription-price-container inner">
                        <h3>{price} {SubscriptionStrings.concurrency}</h3>
                    </div>
                </div>
                <h2 style={{ color: textColor }}>{duration}</h2>
            </Link>
        </IonCol>
    </>
}

const Subscription: React.FC = () => {
    return (
        <IonPage >
            <IonContent>
                <Header />
                <div className="login-container">
                    <div className="ion-margin-horizontal">
                        <IonTitle size='large'>{SubscriptionStrings.title}</IonTitle>
                    </div>

                    <IonGrid fixed={true}>
                        <IonRow style={{ alignItem: 'center', justifyContent: 'center' }}>
                            <SubscriptionCard {...SubscriptionCardData[0]} />
                            <SubscriptionCard {...SubscriptionCardData[1]} />
                        </IonRow>
                        <IonRow style={{ alignItem: 'center', justifyContent: 'center' }}>
                            <SubscriptionCard {...SubscriptionCardData[2]} />
                            <SubscriptionCard {...SubscriptionCardData[3]} />
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage >
    );
};

export default Subscription;
