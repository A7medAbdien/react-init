import { CategoryCardType, ProfileLinkType } from './../types/Types';
import { CardType, SubscriptionCardType } from "../types/Types";
import {
    alertCircleOutline,
    ellipse,
    helpCircle,
    helpCircleOutline,
    square,
    triangle
} from 'ionicons/icons';
import { Colors, Links } from './Strings';

export const Tab1CardList: CardType[] = [
    {
        id: '1',
        title: 'Card 1',
        subtitle: 'Subtitle 1',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio numquam maxime sunt sit eaque error cumque sequi expedita accusamus veritatis eveniet, quo magnam, autem possimus deleniti id enim porro molestiae.`,
        image: "https://docs-demo.ionic.io/assets/madison.jpg",
        video: "https://res.cloudinary.com/dcmthd8bn/video/upload/v1694723512/react-base-vid/Beauty_of_sea_beach_nature_WhatsApp_status_relaxing_video_shorts_bpesvs.mp4"
    },
    {
        id: '2',
        title: 'Card 2',
        subtitle: 'Subtitle 2',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio numquam maxime sunt sit eaque error cumque sequi expedita accusamus veritatis eveniet, quo magnam, autem possimus deleniti id enim porro molestiae.`,
        image: "https://docs-demo.ionic.io/assets/madison.jpg",
        video: "https://res.cloudinary.com/dcmthd8bn/video/upload/v1694723012/react-base-vid/Blue_Sky_and_Clouds_Timelapse_0892__Videvo_preview_kx6yal.mp4"
    },
    {
        id: '3',
        title: 'Card 3',
        subtitle: 'Subtitle 3',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio numquam maxime sunt sit eaque error cumque sequi expedita accusamus veritatis eveniet, quo magnam, autem possimus deleniti id enim porro molestiae.`,
        image: "https://docs-demo.ionic.io/assets/madison.jpg",
        video: "https://res.cloudinary.com/dcmthd8bn/video/upload/v1694723512/react-base-vid/Beauty_of_sea_beach_nature_WhatsApp_status_relaxing_video_shorts_bpesvs.mp4"
    },
    {
        id: '4',
        title: 'Card 1',
        subtitle: 'Subtitle 1',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio numquam maxime sunt sit eaque error cumque sequi expedita accusamus veritatis eveniet, quo magnam, autem possimus deleniti id enim porro molestiae.`,
        image: "https://docs-demo.ionic.io/assets/madison.jpg",
        video: "https://res.cloudinary.com/dcmthd8bn/video/upload/v1694723512/react-base-vid/Beauty_of_sea_beach_nature_WhatsApp_status_relaxing_video_shorts_bpesvs.mp4"
    },
    {
        id: '5',
        title: 'Card 2',
        subtitle: 'Subtitle 2',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio numquam maxime sunt sit eaque error cumque sequi expedita accusamus veritatis eveniet, quo magnam, autem possimus deleniti id enim porro molestiae.`,
        image: "https://docs-demo.ionic.io/assets/madison.jpg",
        video: "https://res.cloudinary.com/dcmthd8bn/video/upload/v1694723512/react-base-vid/Beauty_of_sea_beach_nature_WhatsApp_status_relaxing_video_shorts_bpesvs.mp4"
    },
    {
        id: '6',
        title: 'Card 3',
        subtitle: 'Subtitle 3',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio numquam maxime sunt sit eaque error cumque sequi expedita accusamus veritatis eveniet, quo magnam, autem possimus deleniti id enim porro molestiae.`,
        image: "https://docs-demo.ionic.io/assets/madison.jpg",
        video: "https://res.cloudinary.com/dcmthd8bn/video/upload/v1694723512/react-base-vid/Beauty_of_sea_beach_nature_WhatsApp_status_relaxing_video_shorts_bpesvs.mp4"
    },
];
export const Tab2CardList = Tab1CardList
export const Tab3CardList = Tab1CardList

export const TabsData = [
    {
        name: 'Tab 1',
        path: '/tab1',
        icon: ellipse,
        cardList: Tab1CardList,
    },
    {
        name: 'Tab 2',
        path: '/tab2',
        icon: square,
        cardList: Tab2CardList,
    },
    {
        name: 'Tab 3',
        path: '/tab3',
        icon: triangle,
        cardList: Tab3CardList,
    },
]

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
        path: Links.tabs
    },
    {
        id: 2,
        title: 'Deaf-Mute',
        icon: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
        bgColor: Colors.navy,
        textColor: Colors.orange,
        path: Links.tabs
    },
    {
        id: 3,
        title: 'Learning Difficulty',
        icon: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
        bgColor: Colors.orange,
        textColor: Colors.sky,
        path: Links.tabs
    }
]

export const ProfileLinkData: ProfileLinkType[] = [
    {
        path: Links.contact,
        icon: helpCircle,
        text: 'Contact Us.',
        color: '#fff'
    },
    {
        path: Links.about,
        icon: alertCircleOutline,
        text: 'About Us.',
        color: '#000'
    },
]