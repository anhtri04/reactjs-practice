import profilePic from "./assets/img_avatar.png";


function Card() {
    return(
        <div className="card">
            <img className="card-image" alt="profile image" src={profilePic}></img>
            <h2 className="card-title">Anh Tri</h2>
            <p className="card-text">CS Student</p>
        </div>
    );
}

export default Card;