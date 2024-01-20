import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonImg, IonInput, IonItem, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useGlobal } from '../context/GlobalContext';
import { useHistory } from 'react-router-dom';
import { Links, RegisterStrings } from '../data/Strings';
import Header from '../components/Header';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setLoggedIn, setRegistered } = useGlobal();
    const history = useHistory();

    const handleRegister = () => {
        // post username and password to server
        setRegistered(true)
        setLoggedIn(true);
        history.replace(Links.subscription);
    };

    return (
        <IonPage >
            <IonContent>
                <Header />
                <div className="login-container">
                    <div className="ion-margin-horizontal login-title-container">
                        <IonTitle size='large'>{RegisterStrings.title}</IonTitle>
                    </div>

                    <div className="ion-margin-horizontal login-input-container">
                        <h2 className='login-input-label'>
                            {RegisterStrings.usernameLabel}
                        </h2>
                        <IonInput
                            className='login-input'
                            placeholder="username"
                            type="text"
                            // value={username}
                            onIonChange={(e) => setUsername(e.detail.value!)}
                        />
                    </div>
                    <div className="ion-margin-horizontal login-input-container">
                        <h2 className='login-input-label'>
                            {RegisterStrings.passwordLabel}
                        </h2>
                        <IonInput
                            className='login-input'
                            placeholder="password"
                            type="password"
                            // value={password}
                            onIonChange={(e) => setPassword(e.detail.value!)}
                        />
                    </div>
                    <div className="ion-margin-horizontal login-input-container">
                        <h2 className='login-input-label'>
                            {RegisterStrings.confirmPasswordLabel}
                        </h2>
                        <IonInput
                            className='login-input'
                            placeholder="password"
                            type="password"
                            // value={password}
                            onIonChange={(e) => setPassword(e.detail.value!)}
                        />
                    </div>

                    <div className="ion-margin-horizontal login-button">
                        <IonButton expand="block" size='large' onClick={handleRegister}>
                            {RegisterStrings.registerButton}
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Register;
