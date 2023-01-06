import React from 'react'
import { useSelector } from 'react-redux'

export const AnswersPage = () => {

 const { answers } = useSelector(state => state.form)

    let values = Object.values(answers) ;
    let keys = Object.keys(answers);
    
  return (
    <div className='answersPage d-flex flex-column align-items-center animate__animated animate__fadeInUp'>
        <div className='mb-5 d-flex'>
            <h2 className='textAnswers me-3'>Answers</h2>
            <i class="fa-solid fa-list-check fs-1"></i>
        </div>
   
           { values.map( v => (
                <div className='mb-4 d-flex'>
                    <i class="fa-solid fa-location-pin fs-2 me-3" style={{color:'green'}}></i>
                    <p className='' style={{fontSize:'larger'}}>{v}</p>
                    
                </div>
                
           )) }
        <hr />
        
        <h4 className='textAnswers'>¡Thanks for your reply!</h4>

    </div>
  )
}
