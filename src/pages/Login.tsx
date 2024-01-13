import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Login.css';
import { useState } from 'react';
import { useLogin } from '../context/LoginContext';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const { setLoggedIn, loggedIn } = useLogin();
    const history = useHistory();

    const handleLogin = () => {
        setLoggedIn(true);
        setShowAlert(true);
        history.replace('/');
    };

    return (
        <IonModal isOpen={!loggedIn} >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            {/* <IonContent color="light"> */}
            <div className="login-container">
                <IonList inset={true}>
                    <IonItem>
                        <IonInput
                            label="Username" labelPlacement="floating" fill="outline" placeholder="username"
                            type="text"
                            value={username}
                            onIonChange={(e) => setUsername(e.detail.value!)}
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            label="Password" labelPlacement="floating" fill="outline" placeholder="password"
                            type="password"
                            value={password}
                            onIonChange={(e) => setPassword(e.detail.value!)}
                        />
                    </IonItem>
                </IonList>

                <div className="ion-margin-horizontal">
                    <IonButton expand="block" onClick={handleLogin}>
                        Login
                    </IonButton>
                    <IonButton expand="block" fill="outline" onClick={handleLogin}>
                        Register
                    </IonButton>
                </div>
            </div>

            {/* <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header={'Login Successful'}
                    subHeader={'Welcome!'}
                    message={'You have successfully logged in.'}
                    buttons={['OK']}
                /> */}
            {/* </IonContent> */}
        </IonModal>
    );
};

export default Login;
