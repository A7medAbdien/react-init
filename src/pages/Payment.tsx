import React, { useState } from "react";
import {
    IonContent,
    IonPage,
    IonButton,
    IonImg,
    IonInput,
    IonIcon,
    IonToast,
} from "@ionic/react";
import { useHistory, useParams } from "react-router-dom";
import { PaymentStrings, PaymentWhatsappMassage } from "../data/Strings";
import Header from "../components/Header";
import { SubscriptionCardData } from "../data/data";
import { logoWhatsapp } from "ionicons/icons";
import { useGlobal } from "../context/GlobalContext";
import { setItem } from "../services/storage";

const Payment: React.FC = () => {
    const { subscriptionId } = useParams<{ subscriptionId: string }>();
    const [code, setCode] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const { setIsPayed } = useGlobal()

    const subscription = SubscriptionCardData.find(
        (subscription) => subscription.id.toString() === subscriptionId
    );

    const message = PaymentWhatsappMassage(subscription)

    const history = useHistory();
    const handelSubmit = () => {
        if (code == subscription?.code) {
            setItem('isPayed', subscription.duration)
            setIsPayed(true);
            history.replace(PaymentStrings.link);
        } else
            setIsOpen(true);
    };


    return (
        <IonPage>
            <IonContent>
                <Header />
                <div className="payment-container">
                    <div className="ion-margin-horizontal">
                        <h2 className="payment-input-label">
                            {PaymentStrings.paymentLabel}
                        </h2>

                        <IonButton
                            href={`${PaymentStrings.paymentLink}${message}`}
                            target="_blank"
                            className="payment-button"
                        >
                            {PaymentStrings.paymentButton}
                            <IonIcon
                                slot="end"
                                src={logoWhatsapp}
                            ></IonIcon>
                        </IonButton>
                    </div>
                    <br />
                    <br />
                    <div className="ion-margin-horizontal">
                        <h2 className="payment-input-label">{PaymentStrings.inputLabel}</h2>
                        <IonInput
                            value={code}
                            onIonInput={(e) => setCode(e.detail.value!)}
                            className="payment-input"
                            placeholder={PaymentStrings.inputPlaceholder}
                            type="text"
                        />
                        <div className="payment-button-container">
                            <IonButton
                                onClick={handelSubmit}
                                className="payment-button"
                            >
                                {PaymentStrings.inputButton}
                            </IonButton>
                        </div>
                    </div>
                </div>
                <IonToast
                    color={'secondary'}
                    isOpen={isOpen}
                    message={PaymentStrings.toastMessage}
                    onDidDismiss={() => setIsOpen(false)}
                    duration={5000}
                ></IonToast>
                <IonImg className="footer-image" src={PaymentStrings.footerImage} />
            </IonContent>
        </IonPage>
    );
};

export default Payment;
