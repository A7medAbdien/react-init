import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonList, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useLogin } from '../context/LoginContext';
import { Redirect, useHistory } from 'react-router-dom';
import { close } from 'ionicons/icons';

const Profile: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setLoggedIn, setRegistered, profileOpen, setProfileOpen, loggedIn } = useLogin();
    const history = useHistory();
    if (!loggedIn) {
        return <Redirect to="/login" />
    }

    const handleSave = () => {
        // post username and password to server
        setRegistered(true)
        setLoggedIn(true);
        history.replace('/');
    };

    return (
        <IonModal isOpen={profileOpen} >
            <IonContent color={'light'}>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons onClick={() => setProfileOpen(false)} slot="start">
                            <IonButton>
                                <IonIcon icon={close} size="large"></IonIcon>
                            </IonButton>
                        </IonButtons>
                        <IonTitle>Profile</IonTitle>
                    </IonToolbar>
                </IonHeader>


                <div className="login-container">
                    <div className="profile-img-container">
                        <IonAvatar className='profile-img' >
                            <img className='profile-img' alt="Profile image" src="https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" />
                        </IonAvatar>
                    </div>

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
                        <IonButton expand="block" onClick={handleSave}>
                            Save
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonModal>
    );
};

export default Profile;
