import { IonBackButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CardContainer from '../components/CardContainer';
import Header from '../components/Header';
import { CardType } from '../types/Types';
import { LoginStrings } from '../data/Strings';
import BackButton from './BackButton';

interface TabProps {
    cardList: CardType[];
    name: string;
    path: string;
}

const Tab: React.FC<TabProps> = ({ name, path, cardList }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <div className='landing-icon-container'>
                            <IonImg className='landing-icon' src={LoginStrings.icon} />
                        </div>
                        <BackButton color='tertiary' />
                    </IonToolbar>
                </IonHeader>
                <CardContainer parent={path} cardList={cardList} />
            </IonContent>
        </IonPage>
    );
};

export default Tab;
