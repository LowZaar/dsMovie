import { ReactComponent as GithubIco } from 'assets/github.svg';
import './styles.css';
function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsMovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/LowZaar">
                        <div className='dsMovie-contact-container'>

                        <GithubIco />
                        <p className='dsMovie-contact-link'>/LowZaar</p>

                        </div>
                    </a>
                </div>
            </nav>
        </header>)
}

export default Navbar;