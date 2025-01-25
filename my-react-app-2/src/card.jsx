import profilepic from './assets/profilepic.jpg'
function Card(){
    return(
        <div className='flex justify-center flex-grow drop-shadow-2xl font-sans '>
            <div className="flex flex-col items-center justify-center w-80 h-80 m-5 p-5 border border-blue-600 rounded-lg shadow-2xl
">
                <img src={profilepic} alt="Profile picture" className="w-24 h-24 rounded-full mb-4" />
                <h2 className="text-center font-semibold">It s Me Jayesh</h2>
                <p className="text-center mt-2">I am an Engineering Student from Nashik!</p>
            </div>
            <div className="flex flex-col items-center justify-center w-80 h-80 m-5 p-5 border border-blue-600 rounded-lg shadow-2xl
">
                <img src={profilepic} alt="Profile picture" className="w-24 h-24 rounded-full mb-4" />
                <h2 className="text-center font-semibold">It s Me Jayesh</h2>
                <p className="text-center mt-2">I am an Engineering Student from Nashik!</p>
            </div>
            <div className="flex flex-col items-center justify-center w-80 h-80 m-5 p-5 border border-blue-600 rounded-lg shadow-2xl
">
                <img src={profilepic} alt="Profile picture" className="w-24 h-24 rounded-full mb-4" />
                <h2 className="text-center font-semibold">It s Me Jayesh</h2>
                <p className="text-center mt-2">I am an Engineering Student from Nashik!</p>
            </div>
        </div>
        
      
    );
}



export default Card;