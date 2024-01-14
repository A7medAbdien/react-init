import { IonContent, IonPage } from '@ionic/react';
import './Tab1.css';
import CardContainer from '../components/CardContainer';
import Header from '../components/Header';
import { Tab1CardList } from '../data/data';

const Tab1: React.FC = () => {

  return (
    <IonPage>
      <Header name='Tab 1' />
      <IonContent fullscreen>
        <CardContainer parent='Tab1' cardList={Tab1CardList} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
