import logo from '../assets/images/logo.svg'
export default function Header() {
    return(
        <header>
            <img src={logo} alt="logo du site SportSee" />
            <ul>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </header>
    )
}