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

import toothbrushImage from '../../public/imgs/cardIcons/toothbrush.svg'
import angry from '../../public/imgs/cardIcons/facesIcons/angry.svg'
import weakImage from '../../public/imgs/cardIcons/facesIcons/weak.svg'
import tiredImage from '../../public/imgs/cardIcons/facesIcons/tired.svg'
import tongueImage from '../../public/imgs/cardIcons/facesIcons/tongue.svg'
import sleepyImage from '../../public/imgs/cardIcons/facesIcons/sleepy.svg'
import silentImage from '../../public/imgs/cardIcons/facesIcons/silent.svg'
import silenceImage from '../../public/imgs/cardIcons/facesIcons/silence.svg'
import laughImage from '../../public/imgs/cardIcons/facesIcons/laugh.svg'
import emoticonImage from '../../public/imgs/cardIcons/facesIcons/emoticon.svg'

import soapImage from '../../public/imgs/cardIcons/soap.svg'
import shoesImage from '../../public/imgs/cardIcons/shoes.svg'
import reorderImage from '../../public/imgs/cardIcons/reorder.svg'
import groomingImage from '../../public/imgs/cardIcons/grooming.svg'
import eatingImage from '../../public/imgs/cardIcons/eating.svg'
import clothesImage from '../../public/imgs/cardIcons/clothes.svg'
import bedImage from '../../public/imgs/cardIcons/bed.svg'

import playImage from '../../public/imgs/cardIcons/play.svg'
import packingImage from '../../public/imgs/cardIcons/packing.svg'
import mailImage from '../../public/imgs/cardIcons/mail.svg'
import lockImage from '../../public/imgs/cardIcons/lock.svg'
import cryingImage from '../../public/imgs/cardIcons/crying.svg'
import bicycleImage from '../../public/imgs/cardIcons/bicycle-svgrepo-com.svg'
import badgeImage from '../../public/imgs/cardIcons/badge.svg'

import dailyTaskImage from '../../public/imgs/categoryIcons/daily tasks.svg'
import deafMuteImage from '../../public/imgs/categoryIcons/deaf-mute.svg'
import downSyndromeImage from '../../public/imgs/categoryIcons/down syndrome.svg'
import learningDifficultyImage from '../../public/imgs/categoryIcons/learning difficulty.svg'
import parentsImage from '../../public/imgs/categoryIcons/parents.svg'
import pronunciationImage from '../../public/imgs/categoryIcons/pronunciation.svg'
import gamesImage from '../../public/imgs/categoryIcons/games icon.svg'
import videosImage from '../../public/imgs/categoryIcons/videos.svg'

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

export const IconCardListTab1: IconCardType[] = [
    {
        id: '1',
        title: 'Brushing Teeth',
        icon: toothbrushImage,
        bgColor: Colors.yellow,
        textColor: Colors.navy,
        content: _._content,
        video: _._video,
    },
    {
        id: '2',
        title: 'Combing Hair',
        icon: groomingImage,
        bgColor: Colors.yellow,
        textColor: Colors.navy,
        content: _._content,
        video: _._video,
    },
    {
        id: '3',
        title: 'Making Bed ',
        icon: bedImage,
        bgColor: Colors.orange,
        textColor: Colors.yellow,
        content: _._content,
        video: _._video,
    },
    {
        id: '4',
        title: 'Eating',
        icon: eatingImage,
        bgColor: Colors.orange,
        textColor: Colors.yellow,
        content: _._content,
        video: _._video,
    },
    {
        id: '5',
        title: 'Getting Dressed',
        icon: clothesImage,
        bgColor: Colors.sky,
        textColor: Colors.orange,
        content: _._content,
        video: _._video,
    },
    {
        id: '6',
        title: 'Wearing Shoes',
        icon: shoesImage,
        bgColor: Colors.sky,
        textColor: Colors.orange,
        content: _._content,
        video: _._video,
    },
    {
        id: '7',
        title: 'Facial Wash',
        icon: soapImage,
        bgColor: Colors.navy,
        textColor: Colors.beige,
        content: _._content,
        video: _._video,
    },
    {
        id: '8',
        title: 'Arranging',
        icon: reorderImage,
        bgColor: Colors.navy,
        textColor: Colors.beige,
        content: _._content,
        video: _._video,
    },
]
export const IconCardListTab2: IconCardType[] = [
    {
        id: '1',
        title: 'Angry Child',
        icon: angry,
        bgColor: Colors.yellow,
        textColor: Colors.navy,
        content: _._content,
        video: _._video,
    },
    {
        id: '2',
        title: 'Stubborn Child',
        icon: emoticonImage,
        bgColor: Colors.yellow,
        textColor: Colors.navy,
        content: _._content,
        video: _._video,
    },
    {
        id: '3',
        title: 'Naughty Child',
        icon: tongueImage,
        bgColor: Colors.orange,
        textColor: Colors.yellow,
        content: _._content,
        video: _._video,
    },
    {
        id: '4',
        title: 'Weak Child',
        icon: weakImage,
        bgColor: Colors.orange,
        textColor: Colors.yellow,
        content: _._content,
        video: _._video,
    },
    {
        id: '5',
        title: 'Isolated Child',
        icon: silentImage,
        bgColor: Colors.sky,
        textColor: Colors.orange,
        content: _._content,
        video: _._video,
    },
    {
        id: '6',
        title: 'Messy Child',
        icon: tiredImage,
        bgColor: Colors.sky,
        textColor: Colors.orange,
        content: _._content,
        video: _._video,
    },
    {
        id: '7',
        title: 'Hyperactive Child',
        icon: laughImage,
        bgColor: Colors.navy,
        textColor: Colors.beige,
        content: _._content,
        video: _._video,
    },
    {
        id: '8',
        title: 'Lethargic Child',
        icon: sleepyImage,
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
        icon: pronunciationImage,
        type: 'card',
        cardList: CardList,
    },
    {
        name: 'Tab 2',
        path: '/tab2',
        icon: videosImage,
        type: 'card',
        cardList: CardList,
    },
    {
        name: 'Tab 3',
        path: '/tab3',
        icon: parentsImage,
        type: 'icon',
        cardList: IconCardListTab1,
    },
    {
        name: 'Tab 4',
        path: '/tab4',
        icon: gamesImage,
        type: 'icon',
        cardList: IconCardListTab2,
    },
    {
        name: 'Tab 5',
        path: '/tab5',
        icon: dailyTaskImage,
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
        icon: downSyndromeImage,
        bgColor: Colors.sky,
        textColor: Colors.navy,
        path: Links.main
    },
    {
        id: 2,
        title: 'Deaf-Mute',
        icon: deafMuteImage,
        bgColor: Colors.navy,
        textColor: Colors.orange,
        path: Links.main
    },
    {
        id: 3,
        title: 'Learning Difficulty',
        icon: learningDifficultyImage,
        bgColor: Colors.orange,
        textColor: Colors.sky,
        path: Links.main
    }
]

export const MainCardData: CategoryCardType[] = [
    {
        id: 1,
        title: 'Pronunciation Exercises',
        icon: pronunciationImage,
        bgColor: Colors.yellow,
        textColor: Colors.navy,
        path: Links.tabs
    },
    {
        id: 2,
        title: `Educational Videos`,
        icon: videosImage,
        bgColor: Colors.orange,
        textColor: Colors.yellow,
        path: Links.tabs
    },
    {
        id: 3,
        title: 'Directions to Guardian',
        icon: parentsImage,
        bgColor: Colors.sky,
        textColor: Colors.orange,
        path: Links.tabs
    },
    {
        id: 4,
        title: 'Educational Games',
        icon: gamesImage,
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