import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
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
import { LoginProvider, useLogin } from './context/LoginContext';
import Register from './pages/Register';
import CardDetail from './pages/CardDetail';
import { TabsData } from './data/data';
import Tab from './components/Tab';
import Profile from './pages/Profile';

setupIonicReact();

const Taps: React.FC = () => {
    const { loggedIn } = useLogin();
    if (!loggedIn) {
        return <Redirect to="/login" />
    }

    return <>
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path={[...TabsData.map((t) => `${t.path}/:cardId`)]} >
                    <CardDetail />
                </Route>
                {TabsData.map((tab) => (
                    <Route exact path={tab.path} key={tab.name}>
                        <Tab name={tab.name} path={tab.path} cardList={tab.cardList} />
                    </Route>
                ))}
                <Route exact path="/">
                    <Redirect to={TabsData[0].path} />
                </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                {TabsData.map((tab) => (
                    <IonTabButton key={tab.name} tab={tab.name} href={tab.path}>
                        <IonIcon aria-hidden="true" icon={tab.icon} />
                        <IonLabel>{tab.name}</IonLabel>
                    </IonTabButton>
                ))}
            </IonTabBar>
        </IonTabs>
    </>
}

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <LoginProvider>
                <IonRouterOutlet>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                </IonRouterOutlet>

                <Taps />
            </LoginProvider>
        </IonReactRouter>
    </IonApp>
);

export default App;


