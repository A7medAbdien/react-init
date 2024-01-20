import { IonAvatar, IonButton, IonButtons, IonHeader, IonImg, IonToolbar, isPlatform } from "@ionic/react";
import { useGlobal } from "../context/GlobalContext";
import BackButton from "./BackButton";
import { Links, LoginStrings } from "../data/Strings";
import { useLocation } from "react-router";

interface ContainerProps {
    name?: string;
    icon?: string;
    color?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
}

const Header: React.FC<ContainerProps> = ({ name, color = 'secondary' }) => {
    const isAndroid = isPlatform('android');

    const { pathname } = useLocation();
    const isBase = pathname === Links.base;
    const isTabs = pathname.includes(Links.tabs);

    const { setProfileOpen } = useGlobal()

    return <>
        <IonHeader collapse={!isAndroid ? "condense" : undefined} >
            <IonToolbar >
                <div className='landing-icon-container'>
                    <IonImg className='landing-icon' src={LoginStrings.icon} />
                </div>
                {!isBase && <BackButton color={color} />}
                {isTabs && <IonButtons collapse={true} slot="end">
                    <IonButton onClick={() => setProfileOpen(true)}>
                        <IonAvatar>
                            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                    </IonButton>
                </IonButtons>}
            </IonToolbar>
        </IonHeader>
    </>

};

export default Header;