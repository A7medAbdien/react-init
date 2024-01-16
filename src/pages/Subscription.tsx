import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { SubscriptionStrings } from '../data/Strings';
import { SubscriptionCardData } from '../data/data';
import { SubscriptionCardType } from '../types/Types';

const SubscriptionCard: React.FC<SubscriptionCardType> = ({ price, duration, bgColor, textColor }) => {
    return <>
        <IonCol className='subscription-card' style={{ color: textColor, borderColor: bgColor, backgroundColor: bgColor }}>
            <div className="subscription-price-container" style={{ borderColor: bgColor }}>
                <div className="subscription-price-container inner">
                    {price}
                </div>
            </div>
            <h2>{duration}</h2>
        </IonCol>
    </>
}

const Subscription: React.FC = () => {
    return (
        <IonPage >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{SubscriptionStrings.title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <div className='landing-icon-container'>
                            <IonImg className='landing-icon' src={SubscriptionStrings.icon} />
                        </div>
                        <IonButtons className='toolbar-button' slot="start">
                            <IonBackButton defaultHref="/" />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>


                <div className="login-container">
                    <div className="ion-margin-horizontal">
                        <IonTitle size='large'>{SubscriptionStrings.title}</IonTitle>
                    </div>

                    <IonGrid fixed={true}>
                        <IonRow>
                            <SubscriptionCard {...SubscriptionCardData[0]} />
                            <SubscriptionCard {...SubscriptionCardData[1]} />
                        </IonRow>
                        <IonRow>
                            <SubscriptionCard {...SubscriptionCardData[2]} />
                            <SubscriptionCard {...SubscriptionCardData[3]} />
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Subscription;
