import { useState } from 'react';
import {header} from'./index';
function clickMe(){
    alert('Este é um exemplo de alerta')
}
function Home(){
    return(
        <div cssClass="text-center"className="Home">
            
            <button onClick={clickMe}> Button </button>
        </div>
    )
}

export default Home