import {
    IonCol,
    IonContent, IonIcon, IonPage
} from "@ionic/react";
import { CategoryCardType } from "../types/Types";
import { MainCardData } from "../data/data";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const CategoryCard: React.FC<CategoryCardType> = ({
    id,
    title,
    path,
    icon,
    bgColor,
    textColor,
}) => {
    return (
        <>
            <Link
                to={path}
                className="main-card-container ion-padding"
                style={{
                    textDecoration: "none",
                    background: bgColor,
                    color: textColor,
                }}
            >
                <IonCol>
                    <h1>{title}</h1>
                </IonCol>
                <IonCol size="4">
                    <IonIcon style={{ height: "10rem", width: "100%" }} src={icon} />
                </IonCol>
            </Link>
        </>
    );
};

const Main: React.FC = () => {
    return (
        <IonPage>
            <Header color="tertiary" />
            <IonContent>
                <div className="main-cards-container">
                    {MainCardData.map((card) => (
                        <CategoryCard key={card.id} {...card} />
                    ))}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Main;
