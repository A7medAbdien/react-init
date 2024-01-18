import { IonCard, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { Links, CategoryStrings } from '../data/Strings';
import { CategoryCardType } from '../types/Types';
import { CategoryCardData } from '../data/data';
import { Link } from 'react-router-dom';


const CategoryCard: React.FC<CategoryCardType> = ({ id, title, path, icon, bgColor, textColor }) => {
    return <>
        <Link style={{ textDecoration: 'none' }} to={path}>
            <IonCard className='category-card' routerLink={Links.login} style={{ color: textColor, backgroundColor: bgColor }}>
                <IonItem lines={'none'} >
                    <IonThumbnail slot="end">
                        <img alt="Silhouette of mountains" src={icon} />
                    </IonThumbnail>
                    <IonLabel>{title}</IonLabel>
                </IonItem>
            </IonCard>
        </Link>
    </>
}

const Category: React.FC = () => {
    return (
        <IonPage >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{CategoryStrings.title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <div className='landing-icon-container'>
                            <IonImg className='landing-icon' src={CategoryStrings.icon} />
                        </div>
                    </IonToolbar>
                </IonHeader>


                <div className="category-container">
                    <div className="ion-margin-horizontal">
                        <h2>{CategoryStrings.header}</h2>
                        {CategoryCardData.map((card) =>
                            <CategoryCard key={card.id} {...card} />
                        )}
                    </div>
                </div>
                <IonImg className='category-footer-image' src={CategoryStrings.footerImage} />
            </IonContent>
        </IonPage >
    );
};

export default Category;
