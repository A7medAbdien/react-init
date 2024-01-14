import { IonContent, IonPage } from '@ionic/react';
import CardContainer from '../components/CardContainer';
import Header from '../components/Header';
import { CardType } from '../types/Types';

interface TabProps {
    cardList: CardType[];
    name: string;
    path: string;
}

const Tab: React.FC<TabProps> = ({ name, path, cardList }) => {
    return (
        <IonPage>
            <Header name={name} />
            <IonContent fullscreen>
                <CardContainer parent={path} cardList={cardList} />
            </IonContent>
        </IonPage>
    );
};

export default Tab;
