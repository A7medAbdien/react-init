import account from '../../public/imgs/account.svg'
import angry from '../../public/imgs/angry.svg'
import badge from '../../public/imgs/badge.svg'
import bad from '../../public/imgs/bad.svg'
// import bicycle-svg from '../../public/imgs/bicycle-svgrepo-com.svg.svg'
// import account from '../../public/imgs/clothes.svg'
// import account from '../../public/imgs/crying.svg'
// import account from '../../public/imgs/'
// import account from '../../public/imgs/account.svg'
// import account from '../../public/imgs/account.svg'
// import account from '../../public/imgs/account.svg'
// const images = import.meta.glob("../../public/imgs/*")


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
    tabs: '/tabs',
    contact: '/contact',
    about: '/about',
}


export const HeaderStrings = {
    defaultProfileIcon: account,
    // defaultProfileIcon: "https://ionicframework.com/docs/img/demos/avatar.svg",
    appIcon: 'https://docs-demo.ionic.io/assets/madison.jpg'
}

export const LandingStrings = {
    title: 'Welcome',
    icon: 'https://docs-demo.ionic.io/assets/madison.jpg',
    loginButton: 'Login',
    registerButton: 'Register',
    footerImage: 'https://docs-demo.ionic.io/assets/madison.jpg'
}

export const LoginStrings = {
    title: 'Login',
    icon: 'https://docs-demo.ionic.io/assets/madison.jpg',
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    loginButton: 'Login',
    registerButton: 'Register',
    username: 'asd@gmail.com',
    password: 'asdasd',
    loginSuccessLink: Links.tabs,
    loginFailLink: Links.register
}

export const RegisterStrings = {
    title: 'Register',
    icon: 'https://docs-demo.ionic.io/assets/madison.jpg',
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    confirmPasswordLabel: 'Confirm Password',
    registerButton: 'Register',
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

export const PaymentStrings = {
    title: 'Payment',
    icon: 'https://docs-demo.ionic.io/assets/madison.jpg',
    inputLabel: 'Location Link',
    inputPlaceholder: 'Enter Location Link',
    paymentButton: 'Done',
    footerImage: 'https://docs-demo.ionic.io/assets/madison.jpg',
    link: Links.category
}

export const CategoryStrings = {
    bgColor: Colors.beige,
    title: 'Category',
    icon: 'https://docs-demo.ionic.io/assets/madison.jpg',
    header: "What are you using the app for?",
    footerImage: 'https://docs-demo.ionic.io/assets/madison.jpg'
}

export const ProfileStrings = {
    title: 'Profile',
    icon: 'https://docs-demo.ionic.io/assets/madison.jpg',
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    saveButton: 'Save',
    defaultProfileImage: 'https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    username: 'asd@gmail.com',
    password: 'asdasd',
}