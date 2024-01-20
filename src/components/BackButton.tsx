import { IonButton, IonButtons, IonIcon } from "@ionic/react"
import { chevronBackOutline } from "ionicons/icons"
import { useHistory } from "react-router";

interface BackButtonProps {
    color?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
}
const BackButton: React.FC<BackButtonProps> = ({ color = 'primary' }) => {
    const history = useHistory()

    const handelBackButton = () => {
        history.goBack()
    }

    return <>
        <IonButtons className='toolbar-button' slot="start">
            <IonButton color={color} onClick={handelBackButton}>
                <IonIcon src={chevronBackOutline} />
                Back
            </IonButton>
        </IonButtons>
    </>
}

export default BackButton