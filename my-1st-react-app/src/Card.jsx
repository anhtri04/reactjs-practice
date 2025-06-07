import profilePic from "./assets/img_avatar.png";


function Card() {
    return(
        <div className="card">
            <img className="card-image" alt="profile image" src={profilePic}></img>
            <h2>Anh Tri</h2>
            <p>CS Student</p>
        </div>
    );
}

export default Card;