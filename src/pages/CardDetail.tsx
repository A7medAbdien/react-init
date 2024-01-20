import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonButton, IonAvatar } from '@ionic/react';
import { useLocation, useParams } from 'react-router-dom';
import { TabsData } from '../data/data';
import { useGlobal } from '../context/GlobalContext';
import Header from '../components/Header';

const CardDetail: React.FC = () => {
    // Use useParams hook to retrieve parameters from the URL
    const location = useLocation();
    const { cardId } = useParams<{ cardId: string, otherParam: string }>();
    const cardCategory = location.pathname.split('/')[2]

    const tab = TabsData.find(t => t.path === `/${cardCategory}`)
    if (!tab) {
        return <div>No card ID provided</div>;
    }
    const card = tab?.cardList.find(c => c.id === cardId)

    const { setProfileOpen } = useGlobal()

    return (
        <IonPage>
            <Header color='secondary' />

            <IonContent className="ion-text-center" color={'tertiary'}>
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
            </IonContent>
        </IonPage>
    );
};

export default CardDetail;
