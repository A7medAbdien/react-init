import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonIcon, IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Login from './pages/Login';
import { GlobalProvider, useGlobal } from './context/GlobalContext';
import Register from './pages/Register';
import CardDetail from './pages/CardDetail';
import { TabsData } from './data/data';
import Tab from './components/Tab';
import Profile from './pages/Profile';
import { Links } from './data/Strings';
import Landing from './pages/Landing';
import Subscription from './pages/Subscription';
import Payment from './pages/Payment';
import Category from './pages/Category';
import Contact from './pages/Contact';
import About from './pages/About';
import Main from './pages/Main';

setupIonicReact();

const Taps: React.FC = () => {

    const { loggedIn } = useGlobal();
    if (!loggedIn) {
        return <Redirect to={Links.base} />
    }
    const baseUrl = Links.tabs

    return <>
        <IonTabs>
            <IonRouterOutlet>

                <Route exact path={[baseUrl]}>
                    <Redirect to={baseUrl + TabsData[0].path} />
                </Route>
                {TabsData.map((tab) => (
                    <Route exact path={baseUrl + tab.path} key={tab.name}>
                        <Tab type={tab.type} path={baseUrl + tab.path} cardList={tab.cardList} />
                    </Route>
                ))}
                {TabsData.map((t, i) =>
                    <Route key={i} exact path={`${baseUrl}${t.path}/:cardId`} >
                        <CardDetail type={t.type} />
                    </Route>
                )}

            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                {TabsData.map((tab) => (
                    <IonTabButton className='b' key={tab.name} tab={baseUrl + tab.name} href={baseUrl + tab.path}>
                        <IonIcon aria-hidden="true" icon={tab.icon} />
                    </IonTabButton>
                ))}
            </IonTabBar>
        </IonTabs>
    </>
}

const App: React.FC = () => {
    return <IonApp>
        <IonReactRouter>
            <GlobalProvider>
                <IonRouterOutlet>
                    <Route exact path={Links.base}>
                        <Landing />
                    </Route>
                    <Route exact path={Links.login}>
                        <Login />
                    </Route>
                    <Route exact path={Links.register}>
                        <Register />
                    </Route>
                    <Route exact path={Links.subscription}>
                        <Subscription />
                    </Route>
                    <Route exact path={`${Links.payment}/:subscriptionId`}>
                        <Payment />
                    </Route>
                    <Route exact path={Links.category}>
                        <Category />
                    </Route>
                    <Route exact path={Links.main}>
                        <Main />
                    </Route>
                    <Route path={Links.tabs}>
                        <Taps />
                        <Profile />
                    </Route>
                    <Route exact path={Links.contact}>
                        <Contact />
                    </Route>
                    <Route exact path={Links.about}>
                        <About />
                    </Route>

                </IonRouterOutlet>

            </GlobalProvider>
        </IonReactRouter>
    </IonApp>
};

export default App;


