import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonList, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useGlobal } from '../context/GlobalContext';
import { Redirect, useHistory } from 'react-router-dom';
import { close } from 'ionicons/icons';
import { Links, ProfileStrings } from '../data/Strings';

const Profile: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setLoggedIn, setRegistered, profileOpen, setProfileOpen, loggedIn } = useGlobal();
    const history = useHistory();
    if (!loggedIn) {
        return <Redirect to={Links.base} />
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
                        <IonTitle>{ProfileStrings.title}</IonTitle>
                    </IonToolbar>
                </IonHeader>


                <div className="login-container">
                    <div className="profile-img-container">
                        <IonAvatar className='profile-img' >
                            <img
                                className='profile-img'
                                alt="Profile image"
                                src={ProfileStrings.defaultProfileImage}
                            />
                        </IonAvatar>
                    </div>

                    <IonList inset={true}>
                        <IonItem>
                            <IonInput
                                label={ProfileStrings.usernameLabel} labelPlacement="floating" fill="outline" placeholder="username"
                                type="text"
                                value={username}
                                onIonChange={(e) => setUsername(e.detail.value!)}
                            />
                        </IonItem>
                        <IonItem>
                            <IonInput
                                label={ProfileStrings.passwordLabel} labelPlacement="floating" fill="outline" placeholder="password"
                                type="password"
                                value={password}
                                onIonChange={(e) => setPassword(e.detail.value!)}
                            />
                        </IonItem>
                        <IonItem>
                            <IonInput
                                label={ProfileStrings.confirmPasswordLabel} labelPlacement="floating" fill="outline" placeholder="Confirm Password"
                                type="password"
                                value={password}
                                onIonChange={(e) => setPassword(e.detail.value!)}
                            />
                        </IonItem>
                    </IonList>

                    <div className="ion-margin-horizontal">
                        <IonButton expand="block" onClick={handleSave}>
                            {ProfileStrings.saveButton}
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonModal>
    );
};

export default Profile;
