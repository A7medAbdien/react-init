import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonList, IonModal, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { useState } from 'react';
import { useGlobal } from '../context/GlobalContext';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { close, createOutline, helpCircleOutline, pencil } from 'ionicons/icons';
import { Links, ProfileStrings } from '../data/Strings';
import { ProfileLinkType } from '../types/Types';
import { ProfileLinkData } from '../data/data';

const ProfileLink: React.FC<ProfileLinkType> = ({ path, text, icon, color }) => {
    return <Link to={path} style={{ color }}>
        <h1 className='profile-links'>
            <IonIcon icon={icon} size="large"></IonIcon>
            {text}
        </h1>
    </Link>
}

interface ProfileInputType {
    fieldLabel: string;
    value: string;
    setValue: (value: string) => void;
    type: string;
}

const ProfileInput: React.FC<ProfileInputType> = ({ fieldLabel, value, setValue, type }) => {
    const [edit, setEdit] = useState(false);
    return <>
        <div className="ion-margin-horizontal login-input-container">

            <h2 className='profile-input-label'>
                {fieldLabel}
                <IonIcon onClick={() => setEdit(!edit)} icon={createOutline} size="large"></IonIcon>
            </h2>
            <IonInput
                disabled={!edit}
                className='login-input'
                type={type as any}
                value={value}
                onIonChange={(e) => setValue(e.detail.value!)}
            />
        </div >
    </>
}
const Profile: React.FC = () => {
    const [username, setUsername] = useState(ProfileStrings.username);
    const [password, setPassword] = useState(ProfileStrings.password);

    const { profileOpen, setProfileOpen, loggedIn } = useGlobal();
    if (!loggedIn) {
        // return <Redirect to={Links.base} />
    }
    const isAndroid = isPlatform('android');

    return (
        <IonModal isOpen={profileOpen} >
            <IonContent >
                <IonHeader collapse={!isAndroid ? "condense" : undefined}>
                    <IonToolbar>
                        <div className='landing-icon-container'>
                            <IonImg className='landing-icon' src={ProfileStrings.icon} />
                        </div>
                        <IonButtons className='toolbar-button' onClick={() => setProfileOpen(false)} slot="start">
                            <IonButton color='secondary'>
                                <IonIcon icon={close} size="large"></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <div className="profile-container">

                    <div className="profile-img-container">
                        <IonAvatar className='profile-img' >
                            <img
                                className='profile-img'
                                alt="Profile image"
                                src={ProfileStrings.defaultProfileImage}
                            />
                        </IonAvatar>
                        <h4 className='profile-img-label'>Change Profile Picture</h4>
                    </div>

                    <div className="profile-data-container">

                        <ProfileInput fieldLabel={ProfileStrings.usernameLabel} value={username} setValue={setUsername} type='text' />
                        <ProfileInput fieldLabel={ProfileStrings.passwordLabel} value={password} setValue={setPassword} type='password' />

                        <div className="ion-margin-horizontal">
                            {ProfileLinkData.map((link, i) => <ProfileLink {...link} key={i} />)}
                        </div>
                    </div>

                </div>
            </IonContent>
        </IonModal >
    );
};

export default Profile;
