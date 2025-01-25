


function Button(){


const handleClick = (e)=> console.log(e.target.textContent = 'Ouch')

    return(
        <button className="btn" onDoubleClick={(e) => handleClick(e)}>  Click Me </button>
    );
};



export default Button;