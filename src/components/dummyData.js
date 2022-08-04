import { faEnvelope, faHome, faUser, } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons';

export const Navlinkdata = [
    {
        icon: faHome,
        color: "#4d4d4b",
        to: "/"
    },
    {
        icon: faUser,
        color: "#4d4d4b",
        to: "/about"
    },
    {
        icon: faEnvelope,
        color: "#4d4d4b",
        to: "/contact"
    }
];

export const Socialicaondata = [
    {
        href: "https://www.linkedin.com/in/mahadidev7/",
        icon: faLinkedin,
        color: "#4d4d4e",
    },
    {
        href: "https://github.com/mahadidev7",
        icon: faGithub,
        color: "#4d4d4e",
    },
    {
        href: "./",
        icon: faYoutube,
        color: "#4d4d4e",
    },
    {
        href: "./",
        icon: faSkype,
        color: "#4d4d4e",
    },
]