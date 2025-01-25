/* eslint-disable react/prop-types */

import propTypes from 'prop-types';

function List(props){
  

    const category = props.category;

    const itemList = props.items;
    itemList.sort((a,b)=> b.calories - a.calories);
   
    

        

    const listitems = itemList.map(item => (
        <li key={item.id} className="list"> {item.name} : &nbsp; {item.calories} </li> // Return each <li> element
    ));

    return (

    <>
    <div className="category-container">
        <div className="list-divs">
        <h3>{category}</h3>
        <ol className="list-items">{listitems}</ol>
        </div>
    
    </div>
   
    
    </>
    ); 
    
}

List.propTypes = {
    category : propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number, 
                                            name: propTypes.string, 
                                            calories: propTypes.number})
                                        )
}

List.defaultProps = {
    category: "category",
    items: []
}

export default List;