import React from 'react';
import coffeeBeansImg from './../Img/coffeeBeans.png';

function Header({ onHomeClick }) {
    return(
        <React.Fragment>
            <h1>Lucky Cat Coffee Co.</h1>
            <img src={coffeeBeansImg} alt="coffee beans bag"  style={{resizeMode: 'cover', height: 350, width: 1000, borderRadius:20 }}/>
            <button onClick={onHomeClick}>Home</button>
        </React.Fragment>
    );
}

export default Header;