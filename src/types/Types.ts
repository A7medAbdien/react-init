export interface CardType {
    id: string;
    image: string;
    video: string;
    title: string;
    subtitle: string;
    content: string
};

export interface IconCardType {
    id: string;
    icon: string;
    video: string;
    title: string;
    content: string;
    bgColor: string;
    textColor: string;
};

export interface ItemCardType {
    id: string;
    image: string;
    price: string;
    title: string;
    description: string;
    quantity: number;
    bgColor: string;
    textColor: string;
};

export interface SubscriptionCardType {
    id: number;
    price: number;
    duration: string;
    bgColor: string;
    textColor: string;
    code: string;
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

export interface ContactType {
    path: string;
    icon: string;
    text: string;
    color: string;
}
