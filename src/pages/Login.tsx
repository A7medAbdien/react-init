import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonImg, IonInput, IonItem, IonList, IonModal, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useGlobal } from '../context/GlobalContext';
import { useHistory } from 'react-router-dom';
import { Links, LoginStrings } from '../data/Strings';
import Header from '../components/Header';
import { Storage } from '@ionic/storage';
import { initStorage, setItem } from '../services/storage';


const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isOpen, setIsOpen] = useState<boolean>(false);


    const { setLoggedIn, setRegistered, loggedIn, isPayed } = useGlobal();
    const history = useHistory();

    const handleLogin = () => {
        // check if there is a user with the same username and password
        if (password == '' || username == '') {
            setIsOpen(true);
        } else {
            setIsOpen(false);
            if (username == LoginStrings.username && password == LoginStrings.password) {
                setItem('username', username)
                setRegistered(true);
                setLoggedIn(true);
                history.replace(LoginStrings.loginSuccessLink);
            } else {
                console.log(username, password);
                setRegistered(false);
                history.replace(LoginStrings.loginFailLink);
            }
        }
    };

    useEffect(() => {
        if (loggedIn && isPayed)
            history.replace(LoginStrings.loginSuccessLink);
        else if (loggedIn && !isPayed)
            history.replace(Links.subscription);
    }, [])

    return (
        <IonPage >
            <IonContent>
                <Header />
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
                <IonToast
                    color={'tertiary'}
                    isOpen={isOpen}
                    message={"Some Filed is empty"}
                    onDidDismiss={() => setIsOpen(false)}
                    duration={3000}
                ></IonToast>
            </IonContent>
        </IonPage>
    );
};

export default Login;
