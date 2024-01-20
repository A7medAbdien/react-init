import { IonButton, IonContent, IonImg, IonPage } from '@ionic/react';
import { Links, LandingStrings } from '../data/Strings';
import Header from '../components/Header';

const Contact: React.FC = () => {

    return (
        <IonPage >
            <Header />
            <IonContent>
                <div className="landing-container">
                    <div className="ion-margin-horizontal">
                        <IonButton color={'secondary'} className='landing-button' expand="block" shape="round" size="large" routerLink={Links.login}>
                            {LandingStrings.loginButton}
                        </IonButton>
                        <IonButton color={'secondary'} className='landing-button' expand="block" shape="round" size="large" routerLink={Links.register}>
                            {LandingStrings.registerButton}
                        </IonButton>
                        <IonButton color={'secondary'} className='landing-button' expand="block" shape="round" size="large" routerLink={Links.register}>
                            {LandingStrings.registerButton}
                        </IonButton>
                    </div>
                </div>
                <IonImg className='landing-footer-image' src={LandingStrings.footerImage} />
            </IonContent>
        </IonPage >
    );
};

export default Contact;
