import { CategoryCardType, ContactType, IconCardType, ItemCardType, ProfileLinkType } from './../types/Types';
import { CardType, SubscriptionCardType } from "../types/Types";
import {
    alertCircleOutline,
    ellipse,
    helpCircle,
    helpCircleOutline,
    square,
    triangle
} from 'ionicons/icons';
import { Colors, Links, ContactStrings } from './Strings';
import account from '../../public/imgs/account.svg';

const _ = {
    _content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio numquam maxime sunt sit eaque error cumque sequi expedita accusamus veritatis eveniet, quo magnam, autem possimus deleniti id enim porro molestiae.`,
    _image: "https://docs-demo.ionic.io/assets/madison.jpg",
    _video: "https://res.cloudinary.com/dcmthd8bn/video/upload/v1694723012/react-base-vid/Blue_Sky_and_Clouds_Timelapse_0892__Videvo_preview_kx6yal.mp4",
}

export const CardList: CardType[] = [
    {
        id: '1',
        title: 'Card 1',
        subtitle: 'Subtitle 1',
        content: _._content,
        image: _._image,
        video: _._video,
    },
    {
        id: '2',
        title: 'Card 2',
        subtitle: 'Subtitle 2',
        content: _._content,
        image: _._image,
        video: _._video,
    },
    {
        id: '3',
        title: 'Card 3',
        subtitle: 'Subtitle 3',
        content: _._content,
        image: _._image,
        video: _._video,
    },
    {
        id: '4',
        title: 'Card 1',
        subtitle: 'Subtitle 1',
        content: _._content,
        image: _._image,
        video: _._video,
    },
    {
        id: '5',
        title: 'Card 2',
        subtitle: 'Subtitle 2',
        content: _._content,
        image: _._image,
        video: _._video,
    },
    {
        id: '6',
        title: 'Card 3',
        subtitle: 'Subtitle 3',
        content: _._content,
        image: _._image,
        video: _._video,
    },
];

export const IconCardList: IconCardType[] = [
    {
        id: '1',
        title: 'Card 1',
        icon: account,
        bgColor: Colors.yellow,
        textColor: Colors.navy,
        content: _._content,
        video: _._video,
    },
    {
        id: '2',
        title: 'Card 2',
        icon: account,
        bgColor: Colors.yellow,
        textColor: Colors.navy,
        content: _._content,
        video: _._video,
    },
    {
        id: '3',
        title: 'Card 3',
        icon: account,
        bgColor: Colors.orange,
        textColor: Colors.yellow,
        content: _._content,
        video: _._video,
    },
    {
        id: '4',
        title: 'Card 4',
        icon: account,
        bgColor: Colors.orange,
        textColor: Colors.yellow,
        content: _._content,
        video: _._video,
    },
    {
        id: '5',
        title: 'Card 5',
        icon: account,
        bgColor: Colors.sky,
        textColor: Colors.orange,
        content: _._content,
        video: _._video,
    },
    {
        id: '6',
        title: 'Card 6',
        icon: account,
        bgColor: Colors.sky,
        textColor: Colors.orange,
        content: _._content,
        video: _._video,
    },
    {
        id: '7',
        title: 'Card 7',
        icon: account,
        bgColor: Colors.navy,
        textColor: Colors.beige,
        content: _._content,
        video: _._video,
    },
    {
        id: '8',
        title: 'Card 8',
        icon: account,
        bgColor: Colors.navy,
        textColor: Colors.beige,
        content: _._content,
        video: _._video,
    },
]

export const ItemCardList: ItemCardType[] = [
    {
        id: '1',
        title: 'Card 1',
        price: '50BD',
        quantity: 50,
        image: _._image,
        bgColor: Colors.navy,
        textColor: Colors.beige,
        description: _._content,
    },
    {
        id: '1',
        title: 'Card 1',
        price: '50BD',
        quantity: 50,
        image: _._image,
        bgColor: Colors.orange,
        textColor: Colors.yellow,
        description: _._content,
    },
    {
        id: '1',
        title: 'Card 1',
        price: '50BD',
        quantity: 50,
        image: _._image,
        bgColor: Colors.yellow,
        textColor: Colors.navy,
        description: _._content,
    },
    {
        id: '1',
        title: 'Card 1',
        price: '50BD',
        quantity: 50,
        image: _._image,
        bgColor: Colors.sky,
        textColor: Colors.orange,
        description: _._content,
    },
]

export const TabsData = [
    {
        name: 'Tab 1',
        path: '/tab1',
        icon: ellipse,
        type: 'card',
        cardList: CardList,
    },
    {
        name: 'Tab 2',
        path: '/tab2',
        icon: square,
        type: 'card',
        cardList: CardList,
    },
    {
        name: 'Tab 3',
        path: '/tab3',
        icon: triangle,
        type: 'icon',
        cardList: IconCardList,
    },
    {
        name: 'Tab 4',
        path: '/tab4',
        icon: triangle,
        type: 'icon',
        cardList: IconCardList,
    },
    {
        name: 'Tab 5',
        path: '/tab5',
        icon: ellipse,
        type: 'item',
        cardList: ItemCardList,
    },
]

export const itemTabsPath = TabsData.filter((t) => t.type === 'item').map(tab => tab.path);

export const SubscriptionCardData: SubscriptionCardType[] = [
    {
        id: 1,
        duration: '1 Month',
        price: 2,
        bgColor: Colors.yellow,
        textColor: Colors.navy,
    },
    {
        id: 2,
        duration: '3 Month',
        price: 5,
        bgColor: Colors.orange,
        textColor: Colors.yellow,
    },
    {
        id: 3,
        duration: '7 Month',
        price: 16,
        bgColor: Colors.sky,
        textColor: Colors.orange,
    },
    {
        id: 4,
        duration: '1 Year',
        price: 19.5,
        bgColor: Colors.navy,
        textColor: Colors.sky,
    },
]

export const CategoryCardData: CategoryCardType[] = [
    {
        id: 1,
        title: 'Down Syndrome',
        icon: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
        bgColor: Colors.sky,
        textColor: Colors.navy,
        path: Links.main
    },
    {
        id: 2,
        title: 'Deaf-Mute',
        icon: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
        bgColor: Colors.navy,
        textColor: Colors.orange,
        path: Links.main
    },
    {
        id: 3,
        title: 'Learning Difficulty',
        icon: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
        bgColor: Colors.orange,
        textColor: Colors.sky,
        path: Links.main
    }
]
export const MainCardData: CategoryCardType[] = [
    {
        id: 1,
        title: 'Down Syndrome',
        icon: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
        bgColor: Colors.yellow,
        textColor: Colors.navy,
        path: Links.tabs
    },
    {
        id: 2,
        title: 'Deaf-Mute',
        icon: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
        bgColor: Colors.orange,
        textColor: Colors.yellow,
        path: Links.tabs
    },
    {
        id: 3,
        title: 'Learning Difficulty',
        icon: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
        bgColor: Colors.sky,
        textColor: Colors.orange,
        path: Links.tabs
    },
    {
        id: 4,
        title: 'Learning Difficulty',
        icon: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
        bgColor: Colors.navy,
        textColor: Colors.sky,
        path: Links.tabs
    }
]

export const ProfileLinkData: ProfileLinkType[] = [
    {
        path: Links.contact,
        icon: helpCircle,
        text: 'Contact Us.',
        color: Colors.orange,
    },
    {
        path: Links.about,
        icon: alertCircleOutline,
        text: 'About Us.',
        color: Colors.sky,
    },
]

export const ContactData: ContactType[] = [
    {
        path: 'https://www.instagram.com/',
        icon: helpCircle,
        text: '@menkom.bh',
        color: Colors.navy,
    },
    {
        path: 'https://www.instagram.com/',
        icon: helpCircle,
        text: 'Menkom505@gmail.com',
        color: Colors.orange,
    },
    {
        path: 'https://www.instagram.com/',
        icon: helpCircle,
        text: '+973 3389 4882',
        color: Colors.sky,
    },
]