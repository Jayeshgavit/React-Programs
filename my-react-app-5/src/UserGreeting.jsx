import PropTypes from "prop-types";

function UserGreeting(props){
   
        // if (props.isLoggedIn){
        //  return <h1 className="bg-slate-400">Welcome, {props.username}!</h1>
        // }else{
        //     return <h1 className="bg-red-400">Please log in to see your username.</h1>
        // }


        // other way

        // return(props.isLoggedIn ?  <h1 className="bg-green-400 ">Welcome, {props.username}!</h1> :  <h1 className="bg-red-500">Please log in to see your username.</h1>);
    


        const WelcomeMessage = <h1 className="bg-green-400 ">Welcomem {props.username}!</h1>

        const loginPrompt = <h1 className="bg-red-500">Please log in to see your username.</h1>

        return props.isLoggedIn? WelcomeMessage : loginPrompt;
    
}

UserGreeting.propTypes = {
    username: PropTypes.string.isRequired, // Must be a string
    age: PropTypes.number,
    isLoggedIn: PropTypes.bool,            // Must be a number
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest'
};

export default UserGreeting;