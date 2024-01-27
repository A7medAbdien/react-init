import { IonCard, IonContent, IonIcon, IonImg, IonItem, IonPage, IonThumbnail } from '@ionic/react';
import { CategoryStrings } from '../data/Strings';
import { CategoryCardType } from '../types/Types';
import { CategoryCardData } from '../data/data';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


const CategoryCard: React.FC<CategoryCardType> = ({ id, title, path, icon, bgColor, textColor }) => {
    return <>
        <Link style={{ textDecoration: 'none' }} to={path}>
            <IonCard>
                <IonItem
                    style={{ '--background': bgColor, 'color': textColor }}
                    lines={'none'}
                >
                    <IonThumbnail slot="end">
                        <IonIcon style={{ height: '100%', width: '100%' }} src={icon} />
                    </IonThumbnail>
                    <h4>{title}</h4>
                </IonItem>
            </IonCard>
        </Link>
    </>
}

const Category: React.FC = () => {

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

export default Category;
