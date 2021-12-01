import GlobePic from "../images/globe_navbar.png"


function Navbar() {

    return(
        <div className="navbar">
            <img src={GlobePic}  className="navbar_img"alt="picture of black and white globe" />
            <h1>My Travels</h1>

        </div>
    )


}


export default Navbar