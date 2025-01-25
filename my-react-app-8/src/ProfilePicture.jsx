

function ProfilePicture(){

    
    const imgurl = './src/assets/image informal.jpg';
    const handleClick = (e) => e.target.style.display = 'none';

    return(
        <img src={imgurl} alt="hello" onClick={(e) => handleClick(e)}/>
    );
}


export default ProfilePicture;