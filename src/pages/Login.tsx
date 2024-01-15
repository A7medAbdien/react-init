import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
            history.replace(Links.tabs);
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
            <IonContent color={'light'}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{LoginStrings.title}</IonTitle>
                    </IonToolbar>
                </IonHeader>


                <div className="login-container">
                    <IonList inset={true}>
                        <IonItem>
                            <IonInput
                                label={LoginStrings.usernameLabel} labelPlacement="floating" fill="outline" placeholder="username"
                                type="text"
                                value={username}
                                onIonChange={(e) => setUsername(e.detail.value!)}
                            />
                        </IonItem>
                        <IonItem>
                            <IonInput
                                label={LoginStrings.passwordLabel} labelPlacement="floating" fill="outline" placeholder="password"
                                type="password"
                                value={password}
                                onIonChange={(e) => setPassword(e.detail.value!)}
                            />
                        </IonItem>
                    </IonList>

                    <div className="ion-margin-horizontal">
                        <IonButton expand="block" onClick={handleLogin}>
                            {LoginStrings.loginButton}
                        </IonButton>
                        <IonButton expand="block" fill="outline" routerLink={Links.register} routerDirection='forward'>
                            {LoginStrings.registerButton}
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
