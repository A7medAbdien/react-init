import { IonButton, IonButtons, IonContent, IonIcon, IonImg, IonItem, IonPage, IonTitle } from '@ionic/react';
import { Links, LandingStrings, ContactStrings } from '../data/Strings';
import Header from '../components/Header';
import { ContactData } from '../data/data';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {

    return (
        <IonPage >
            <Header />
            <IonContent color={'tertiary'}>
                <div className="landing-container">
                    <h1 className='content-title'>
                        {ContactStrings.title}
                    </h1>

                    <div className="content-page">
                        {ContactData.map((contact, i) =>
                            <Link
                                key={i}
                                to={contact.path}
                                style={{ textDecoration: 'none' }}
                            >
                                <IonButton
                                    className='contact-button'
                                    color={'secondary'}
                                    expand="block"
                                    shape="round"
                                    size="large"
                                >
                                    <div className="contact-content">
                                        <div className="">
                                            <IonIcon style={{ color: contact.color }} src={contact.icon} slot='start' size='large' />
                                        </div>
                                        <div className="content-text">
                                            {contact.text}
                                        </div>
                                    </div>
                                </IonButton>
                            </Link>
                        )}
                    </div>
                </div>
                <IonImg className='landing-footer-image' src={LandingStrings.footerImage} />
            </IonContent>
        </IonPage >
    );
};

export default Contact;
