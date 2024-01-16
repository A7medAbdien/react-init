import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonImg, IonInput, IonItem, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useGlobal } from '../context/GlobalContext';
import { useHistory } from 'react-router-dom';
import { Links, LoginStrings } from '../data/Strings';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setLoggedIn, setRegistered, loggedIn } = useGlobal();
    const history = useHistory();

    const handleLogin = () => {
        // check if there is a user with the same username and password

        if (username == LoginStrings.username && password == LoginStrings.password) {
            setRegistered(true);
            setLoggedIn(true);
            history.replace(Links.subscription);
        } else {
            console.log(username, password);
            setRegistered(false);
            history.replace(Links.register);
        }
    };

    useEffect(() => {
        if (loggedIn)
            history.replace(Links.tabs);
    }, [])

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
                            onIonChange={(e) => setUsername(e.detail.value!)}
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
                            onIonChange={(e) => setPassword(e.detail.value!)}
                        />
                    </div>

                    <div className="ion-margin-horizontal login-button">
                        <IonButton expand="block" size='large' onClick={handleLogin}>
                            {LoginStrings.loginButton}
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
