import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import CardContainer from '../components/CardContainer';

const Tab1: React.FC = () => {

  const cardList = [
    { title: 'Card 1', subtitle: 'Subtitle 1', content: 'Content for Card 1' },
    { title: 'Card 2', subtitle: 'Subtitle 2', content: 'Content for Card 2' },
    { title: 'Card 3', subtitle: 'Subtitle 3', content: 'Content for Card 3' },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" /> */}

        <CardContainer cardList={cardList} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
