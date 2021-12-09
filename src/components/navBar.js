import GlobePic from "../images/globe_navbar.png"
import GitHubLogo from "../images/GitHub-Mark-Light-32px.png"

function Navbar() {

    return(
        <div className="navbar">
            <img src={GlobePic}  className="navbar_img"alt="picture of black and white globe" />
            <h1>Travel Along</h1>
            <a  className="navbar_img_gitHub" href="https://github.com/Salgado3/Travel-Blog"><img src={GitHubLogo}  alt="gitHub Logo" /></a>
        </div>
    )


}


export default Navbar