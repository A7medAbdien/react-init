import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import CardContainer from '../components/CardContainer';
import { Tab3CardList } from '../data/data';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <Header name='Tab 3' />
      <IonContent fullscreen>
        <CardContainer cardList={Tab3CardList} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
