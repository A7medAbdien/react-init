import { IonContent, IonPage } from '@ionic/react';
import './Tab2.css';
import CardContainer from '../components/CardContainer';
import { Tab2CardList } from '../data/data';
import Header from '../components/Header';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <Header name='Tab 2' />
      <IonContent fullscreen>
        <CardContainer cardList={Tab2CardList} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
