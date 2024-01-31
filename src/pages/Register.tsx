import { IonButton, IonContent, IonInput, IonPage, IonTitle, IonToast } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useGlobal } from '../context/GlobalContext';
import { useHistory } from 'react-router-dom';
import { Links, RegisterStrings } from '../data/Strings';
import Header from '../components/Header';
import { setItem } from '../services/storage';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { setLoggedIn, setRegistered } = useGlobal();
    const history = useHistory();

    const handleRegister = () => {
        if (password == '' || username == '' || confirmPassword == '') {
            setIsOpen(true);
        } else {
            setIsOpen(false);
            setItem('username', username)
            setRegistered(true);
            setLoggedIn(true);
            history.replace(Links.subscription);
        }

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
                            onIonInput={(e) => setUsername(e.detail.value!)}
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
                            onIonInput={(e) => setPassword(e.detail.value!)}
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
                            onIonInput={(e) => setConfirmPassword(e.detail.value!)}
                        />
                    </div>

                    <div className="ion-margin-horizontal login-button">
                        <IonButton expand="block" size='large' onClick={handleRegister}>
                            {RegisterStrings.registerButton}
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

export default Register;
