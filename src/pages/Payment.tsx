import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonButton, IonAvatar, IonInput, IonImg } from '@ionic/react';
import { useLocation, useParams } from 'react-router-dom';
import { TabsData } from '../data/data';
import { useGlobal } from '../context/GlobalContext';
import { LoginStrings } from '../data/Strings';

const Payment: React.FC = () => {
    // Use useParams hook to retrieve parameters from the URL
    const { subscriptionId } = useParams<{ subscriptionId: string }>();

    return (
        <IonPage >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{LoginStrings.title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <div className='landing-icon-container'>
                            <IonImg className='landing-icon' src={LoginStrings.icon} />
                        </div>
                        <IonButtons className='toolbar-button' slot="start">
                            <IonBackButton defaultHref="/" />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>


                <div className="login-container">
                    <div className="ion-margin-horizontal login-title-container">
                        <IonTitle size='large'>{LoginStrings.title}</IonTitle>
                    </div>

                    <div className="ion-margin-horizontal login-input-container">
                        <h2 className='login-input-label'>
                            {LoginStrings.usernameLabel}
                        </h2>
                        <IonInput
                            className='login-input'
                            placeholder="username"
                            type="text"
                        // value={username}
                        // onIonChange={(e) => setUsername(e.detail.value!)}
                        />
                    </div>
                    <div className="ion-margin-horizontal login-input-container">
                        <h2 className='login-input-label'>
                            {LoginStrings.passwordLabel}
                        </h2>
                        <IonInput
                            className='login-input'
                            placeholder="password"
                            type="password"
                        // value={password}
                        // onIonChange={(e) => setPassword(e.detail.value!)}
                        />
                    </div>

                    <div className="ion-margin-horizontal login-button">
                        <IonButton expand="block" size='large' >
                            {LoginStrings.loginButton}
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>)
};

export default Payment;
