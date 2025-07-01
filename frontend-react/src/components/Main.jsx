import React from 'react'
import Button from './Button'

const Main = () =>{
return(
    <>
    <div className='container'>
        <div className='p-5 text-center bg-light-dark'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>This stock prediction application utilizes machine learning techniques,specifically employing keras, and LSTM model, integrated with the django framework.It forecasts future stock pricees by analyzing 100-day and 200-day moving averages, essential indicators widely used by stock analyst to inform trading and investment decisions.</p>
            <Button text="Login" class="btn-outline-info"/>
 </div>



    </div>
    
    </>

 
)

}

export default Main