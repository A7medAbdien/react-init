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

export interface CategoryCardType {
    id: number;
    title: string;
    icon: string;
    bgColor: string;
    textColor: string;
    path: string;
};

export interface ProfileLinkType {
    path: string;
    icon: string;
    text: string;
    color: string;
}
