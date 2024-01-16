import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Links, LandingStrings } from '../data/Strings';

const Category: React.FC = () => {

    return (
        <IonPage >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{LandingStrings.title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <div className='landing-icon-container'>
                            <IonImg className='landing-icon' src={LandingStrings.icon} />
                        </div>
                    </IonToolbar>
                </IonHeader>


                <div className="landing-container">
                    <div className="ion-margin-horizontal">
                        <IonButton className='landing-button' expand="block" shape="round" size="large" routerLink={Links.login}>
                            {LandingStrings.loginButton}
                        </IonButton>
                        <IonButton className='landing-button' expand="block" shape="round" size="large" routerLink={Links.register}>
                            {LandingStrings.registerButton}
                        </IonButton>
                    </div>
                </div>
                <IonImg className='landing-footer-image' src={LandingStrings.footerImage} />
            </IonContent>
        </IonPage >
    );
};

export default Category;
