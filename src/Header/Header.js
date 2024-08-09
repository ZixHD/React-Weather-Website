import "./Header.css"

export default function Header() {
    return (
        <div>
            <nav className="header-container">
                <li className="logo">
                    <img className="logo-image" src={require('../icons/logo.png')} alt="logo"/>
                </li>
                <ul className="header-items">
                    <li className="item">Research</li>
                    <li className="item">Climate</li>
                    <li className="item">Service</li>
                    <li className="item">About Us</li>
                </ul>
                
            </nav>
        </div>
    )
}