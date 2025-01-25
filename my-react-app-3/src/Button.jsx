
function Button(){
    const style = {
       
            background: "#1b86eb",
            color: "white",
            fontSize: "16px",
            padding:  " 10px 20px",
            borderRadius:" 5px",
            border: "none",
          }
          
    
    return(
        <button className="btn" style={style}>Click Me</button>
    );
}

export default Button;