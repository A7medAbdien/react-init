import account from '../../public/imgs/account.svg'
import logo from '../../public/imgs/logo-pri.svg'
import logoSec from '../../public/imgs/logo-sec.svg'
import bg from '../../public/imgs/bg-pri.svg'
import bgSec from '../../public/imgs/bg-sc.svg'
import { SubscriptionCardType } from '../types/Types'


export const Colors = {
    navy: "#163440",
    sky: "#75BAB2",
    beige: "#F6E5B8",
    yellow: "#EDBF71",
    orange: "#D27151",
}

export const Links = {
    base: '/',
    login: '/login',
    register: '/register',
    profile: '/profile',
    subscription: '/subscription',
    payment: '/payment',
    category: '/category',
    main: '/main',
    tabs: '/tabs',
    contact: '/contact',
    about: '/about',
}

export const HeaderStrings = {
    defaultProfileIcon: account,
    icon: logo,
    iconSec: logoSec
}

export const LandingStrings = {
    title: 'Welcome',
    loginButton: 'Sign In',
    registerButton: 'Sign Up',
    footerImage: bg,
}

export const LoginStrings = {
    title: 'Sign in',
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    loginButton: 'Sign in',
    registerButton: 'Register',
    username: 'asd@gmail.com',
    password: 'asdasd',
    loginSuccessLink: Links.main,
    loginFailLink: Links.register
}

export const RegisterStrings = {
    title: 'Sing Up',
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    confirmPasswordLabel: 'Confirm Password',
    registerButton: 'Sing Up',
}

export const SubscriptionStrings = {
    title: 'Subscription',
    icon: 'https://docs-demo.ionic.io/assets/madison.jpg',
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    confirmPasswordLabel: 'Confirm Password',
    registerButton: 'Register',
    concurrency: 'BD',
}

export const PaymentWhatsappMassage = (subscription?: SubscriptionCardType) => {
    return subscription ?
        `Hi Menkom, I'm interested in subscribing for your ${subscription?.duration} plane, that is for ${subscription?.price}BD.`
        : 'Hi Menkom, I am trying to Pay'
}

export const PaymentStrings = {
    title: 'Payment',
    paymentLabel: '1. Pay and Get your code',
    paymentButton: 'Pay by',
    paymentLink: 'https://wa.me/97366988803?text=',
    inputLabel: '2. Enter the code to access',
    inputPlaceholder: 'Enter code here',
    inputButton: 'Done',
    footerImage: bg,
    link: Links.category
}

export const CategoryStrings = {
    bgColor: Colors.beige,
    title: 'Category',
    header: "What are you using the app for?",
    footerImage: bgSec,
}

export const ProfileStrings = {
    title: 'Profile',
    icon: logo,
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    saveButton: 'Save',
    // defaultProfileImage: 'https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    defaultProfileImage: account,
    username: 'asd@gmail.com',
    password: 'asdasd',
}

export const ContactStrings = {
    title: 'Contact us',
    icon: 'https://docs-demo.ionic.io/assets/madison.jpg',
    loginButton: 'Login',
    registerButton: 'Register',
    footerImage: bg,
}

export const AboutStrings = {
    title: 'About Menkom',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quae non eius dicta consectetur! Animi, itaque ea. Laudantium iste eos, unde nihil excepturi sapiente repudiandae, mollitia consectetur modi eligendi ex.`,
    footerImage: bg,
}

export const CardDetailsStrings = {
    buyButton: 'Buy Now',
    descriptionTitle: "Description"
}