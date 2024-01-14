import { IonAvatar, IonButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { useLogin } from "../context/LoginContext";

interface ContainerProps {
    name?: string;
}

const Header: React.FC<ContainerProps> = ({ name }) => {
    const { setProfileOpen } = useLogin()
    return <>
        <IonHeader translucent={true}>
            <IonToolbar>
                <IonTitle>{name}</IonTitle>
                <IonButtons collapse={true} slot="end">
                    <IonButton onClick={() => setProfileOpen(true)}>
                        <IonAvatar>
                            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    </>

};

export default Header;
