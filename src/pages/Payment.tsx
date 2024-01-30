import React from "react";
import {
    IonContent,
    IonPage,
    IonButton,
    IonImg,
    IonInput,
    IonIcon,
} from "@ionic/react";
import { useParams } from "react-router-dom";
import { PaymentStrings, PaymentWhatsappMassage } from "../data/Strings";
import Header from "../components/Header";
import { SubscriptionCardData } from "../data/data";
import { logoWhatsapp } from "ionicons/icons";

const Payment: React.FC = () => {
    // Use useParams hook to retrieve parameters from the URL
    const { subscriptionId } = useParams<{ subscriptionId: string }>();

    const subscription = SubscriptionCardData.find(
        (subscription) => subscription.id.toString() === subscriptionId
    );

    const message = PaymentWhatsappMassage(subscription)

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
                            className="payment-input"
                            placeholder={PaymentStrings.inputPlaceholder}
                            type="text"
                        />
                        <div className="payment-button-container">
                            <IonButton
                                className="payment-button"
                                routerLink={PaymentStrings.link}
                            >
                                {PaymentStrings.inputButton}
                            </IonButton>
                        </div>
                    </div>
                </div>
                <IonImg className="footer-image" src={PaymentStrings.footerImage} />
            </IonContent>
        </IonPage>
    );
};

export default Payment;
