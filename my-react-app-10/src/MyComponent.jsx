import { useState} from 'react'


function MyComponent(){
    
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('Select Option');
    const [shipping, setShipping] = useState('');

    function handleNameChange(event){
        setName(event.target.value)
    };

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }
    
    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return(
        <div className='forms-layout'>
            <div className='forms'>
                
                <div className='div1'>
                    <input type="text" value={name} onChange={handleNameChange}/>
                    <p>Name : {name}</p>
                </div>
                <div className="div2">
                    <input type="number" value={quantity} onChange={handleQuantityChange}/>
                    <p>Quantity : {quantity}</p>
                </div>
            </div>
            <div className=".div-textarea">
                <div className='div3'>
                    <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'/>
                    <p>Comment : {comment}</p>
                </div>
                <div className="div-select-options">
                    <select name="" id="options" value={payment} onChange={handlePaymentChange}>
                        <option value="">Select Options</option>
                        <option value="Visa">Visa</option>
                        <option value="Master Card">Masster Card</option>
                        <option value="Upi">Upi</option>
                        <option value="Gift card">Gift Card</option>
                    </select>
                    <p> Payment : {payment}</p>

                    <label htmlFor="">
                        <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange}/>
                    Pick up 
                    </label>
                    <label htmlFor="">
                    <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                        Delivery
                    </label>
                    <p>Shipping : {shipping}</p>
            </div>
            </div>


            
           
        </div>
        
    );
}

export default MyComponent;