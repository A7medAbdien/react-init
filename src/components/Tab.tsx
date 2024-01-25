import { IonBackButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CardContainer from '../components/CardContainer';
import Header from '../components/Header';
import { CardType, IconCardType, ItemCardType } from '../types/Types';
import { LoginStrings } from '../data/Strings';
import BackButton from './BackButton';
import IconCardContainer from './IconCardContainer';
import ItemCardContainer from './ItemCardContainer';


interface TabProps {
    type: string;
    cardList: CardType[] | IconCardType[] | ItemCardType[];
    path: string;
}

const Tab: React.FC<TabProps> = ({ type, path, cardList }) => {
    const cardTypes: { [key: string]: React.ReactElement } = {
        'card': <CardContainer parent={path} cardList={cardList as CardType[]} />,
        'icon': <IconCardContainer parent={path} cardList={cardList as IconCardType[]} />,
        'item': <ItemCardContainer parent={path} cardList={cardList as ItemCardType[]} />,
    }

    return (
        <IonPage>
            <IonContent>
                <Header color='tertiary' />
                {cardTypes[type]}
            </IonContent>
        </IonPage>
    );
};

export default Tab;
