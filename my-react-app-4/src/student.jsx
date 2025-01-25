import PropTypes from 'prop-types';

function Student(props){
    return(
        <div className="flex justify-center items-center border p-6 mt-4 w-80 h-24 mx-auto shadow-lg rounded-lg gap-5">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Age: {props.isStudent ? "Yes" : "No"}</p>
    </div>
    

    );    
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};

Student.defaultProps = {
    name: 'Guest',
    age: 0,
    isStudent: false
};
export default Student;