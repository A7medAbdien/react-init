export interface CardType {
    id: string;
    image: string;
    video: string;
    title: string;
    subtitle: string;
    content: string
};

export interface SubscriptionCardType {
    id: number;
    price: number;
    duration: string;
    bgColor: string;
    textColor: string;
};
