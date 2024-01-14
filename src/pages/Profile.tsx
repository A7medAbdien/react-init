import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useLogin } from '../context/LoginContext';
import { useHistory } from 'react-router-dom';

const Profile: React.FC = () => {
    const { loggedIn } = useLogin();
    // if (!loggedIn) {
    //     return <Redirect to="/login" />
    // }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setLoggedIn, setRegistered } = useLogin();
    const history = useHistory();

    const handleRegister = () => {
        // post username and password to server
        setRegistered(true)
        setLoggedIn(true);
        history.replace('/');
    };

    return (
        <IonPage >
            <IonContent color={'light'}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Register</IonTitle>
                    </IonToolbar>
                </IonHeader>


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
                        <IonItem>
                            <IonInput
                                label="Confirm Password" labelPlacement="floating" fill="outline" placeholder="Confirm Password"
                                type="password"
                                value={password}
                                onIonChange={(e) => setPassword(e.detail.value!)}
                            />
                        </IonItem>
                    </IonList>

                    <div className="ion-margin-horizontal">
                        <IonButton expand="block" onClick={handleRegister}>
                            Register
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
