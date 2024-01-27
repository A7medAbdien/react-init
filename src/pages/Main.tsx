import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { Links, CategoryStrings } from '../data/Strings';
import { CategoryCardType } from '../types/Types';
import { CategoryCardData } from '../data/data';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import BackButton from '../components/BackButton';
import Header from '../components/Header';


const CategoryCard: React.FC<CategoryCardType> = ({ id, title, path, icon, bgColor, textColor }) => {
    return <>
        <Link style={{ textDecoration: 'none' }} to={path}>
            <IonCard routerLink={Links.login}>
                <IonItem
                    style={{ '--background': bgColor, '--color': textColor }}
                    lines={'none'}
                >
                    <IonThumbnail slot="end">
                        <img alt={title} src={icon} />
                    </IonThumbnail>
                    <h4>{title}</h4>
                </IonItem>
            </IonCard>
        </Link>
    </>
}

const Main: React.FC = () => {

    return (
        <IonPage >
            <IonContent>
                <Header color='tertiary' />
                <div className="category-container">
                    <div className="ion-margin-horizontal">
                        <h2>{CategoryStrings.header}</h2>
                        {CategoryCardData.map((card) =>
                            <CategoryCard key={card.id} {...card} />
                        )}
                    </div>
                </div>
                <IonImg className='footer-image' src={CategoryStrings.footerImage} />
            </IonContent>
        </IonPage >
    );
};

export default Main;
