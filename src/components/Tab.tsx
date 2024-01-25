import { IonBackButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CardContainer from '../components/CardContainer';
import Header from '../components/Header';
import { CardType, IconCardType } from '../types/Types';
import { LoginStrings } from '../data/Strings';
import BackButton from './BackButton';
import IconCardContainer from './IconCardContainer';

interface TabProps {
    icons?: boolean;
    cardList: CardType[] | IconCardType[];
    path: string;
}

const Tab: React.FC<TabProps> = ({ icons = false, path, cardList }) => {
    return (
        <IonPage>
            <IonContent>
                <Header color='tertiary' />
                {icons ?
                    <IconCardContainer parent={path} cardList={cardList as IconCardType[]} />
                    : <CardContainer parent={path} cardList={cardList as CardType[]} />
                }
            </IonContent>
        </IonPage>
    );
};

export default Tab;
