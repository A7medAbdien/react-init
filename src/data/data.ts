import { CardType } from "../types/Types";
import { ellipse, square, triangle } from 'ionicons/icons';

export const TabsData = [
    { name: 'Tab 1', path: '/tab1', icon: ellipse, },
    { name: 'Tab 2', path: '/tab2', icon: square, },
    { name: 'Tab 3', path: '/tab3', icon: triangle, },
]
export const Tab1CardList: CardType[] = [
    { id: '1', title: 'Card 1', subtitle: 'Subtitle 1', content: 'Content for Card 1', image: "https://docs-demo.ionic.io/assets/madison.jpg" },
    { id: '2', title: 'Card 2', subtitle: 'Subtitle 2', content: 'Content for Card 2', image: "https://docs-demo.ionic.io/assets/madison.jpg" },
    { id: '3', title: 'Card 3', subtitle: 'Subtitle 3', content: 'Content for Card 3', image: "https://docs-demo.ionic.io/assets/madison.jpg" },
    { id: '4', title: 'Card 1', subtitle: 'Subtitle 1', content: 'Content for Card 1', image: "https://docs-demo.ionic.io/assets/madison.jpg" },
    { id: '5', title: 'Card 2', subtitle: 'Subtitle 2', content: 'Content for Card 2', image: "https://docs-demo.ionic.io/assets/madison.jpg" },
    { id: '6', title: 'Card 3', subtitle: 'Subtitle 3', content: 'Content for Card 3', image: "https://docs-demo.ionic.io/assets/madison.jpg" },
];
export const Tab2CardList = Tab1CardList
export const Tab3CardList = Tab1CardList

export const CardList: { [key: string]: { list: CardType[], name: string } } = {
    'tab1': { list: Tab1CardList, name: 'Tab 1' },
    'tab2': { list: Tab2CardList, name: 'Tab 2' },
    'tab3': { list: Tab3CardList, name: 'Tab 3' },
    'vid': { list: [], name: 'Vid' },
}