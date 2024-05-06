import React, {useState} from "react";



const Currency = () => {
    const {name, setName} = useState('');

    return (

        <select className="custom-select" 
            id="inputGroupSelect01" 
            onChange={(event) => setName(event.target.value)}
            style={{ backgroundColor:'#76d1a8',borderColor:'#76d1a8', borderRadius:'3px', width:'280px', height:'58px' }}
            >
            <label>Currency(Pound)</label>
            <option value="Dollar" name="dollar"> $ Dollar</option>
            <option value="Pound" name="pound">£ Pound</option>
            <option value="Euro" name="euro">€ Euro</option>
            <option value="Ruppee" name="ruppee">₹ Ruppee</option>
        </select>
    )
};
export default Currency;