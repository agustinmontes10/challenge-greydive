import React from 'react'
import { questions } from './questions'
import { useState } from 'react';
import { useFormStore } from './hooks/useFormStore';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const QuestionsList = () => {

    const { newAnswer } = useFormStore();
    const dispatch = useDispatch();
    const { isSend } = useSelector( state => state.form );

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        newAnswer( form );
        
    }

    const [form, setForm] = useState({})

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value})
        console.log(name, value);
        console.log(isSend);
    }

  return (
    <form onSubmit={onSubmit}>

        {
                questions.items.map( q => (            
                            
                                (q.type === 'select') 
                                ? <div class="mb-4 d-flex flex-column align-items-center">
                                    <label for="exampleFormControlInput1" class="form-label">{ q.label }</label>
                                    <select className='form-control' name={q.name} onChange={ onInputChange }> { q.options.map( o => ( <option value={ o.value } >{ o.label }</option> ) ) } </select>
                                  </div> 
                                : 
                                ( q.type === 'text' || q.type === 'email' || q.type === 'date' )
                                ? <div class="mb-4 d-flex flex-column align-items-center">
                                    <label for="exampleFormControlInput1" class="form-label">{ q.label }</label>
                                    {( q.required ) ? 
                                      <input type={ q.type } class="form-control" id="exampleFormControlInput1" name={q.name} placeholder={ q.name } onChange={ onInputChange } required />
                                      : <input type={ q.type } class="form-control" id="exampleFormControlInput1" name={q.name} placeholder={ q.name } onChange={ onInputChange } />
                                    }
                                  </div> 
                                :           
                                ( q.type === 'checkbox' )
                                ? <div class="form-check mb-3 d-flex flex-column align-items-center">
                                    {( q.required ) ?  <input class="form-check-input"  type={ q.type } name={q.name} value="" id="invalidCheck" required/> :  <input onChange={ onInputChange } class="form-check-input" name={q.name} type={ q.type } value="" id="invalidCheck" /> }
                                    <label class="form-check-label form-label" for="invalidCheck">
                                      { q.label }
                                    </label>
                                  </div>
                                :
                                ( q.type === 'submit' )
                                ? <div className='d-flex flex-column align-items-center'>
                                  <button className='btn btn-success' type={ q.type }> { q.label } </button>
                                </div>
                                : ''                             
                
                ) )
        }

        {(isSend) ? <Link to="/answers">
                        <button className='btn btn-dark animate__animated animate__fadeInUp' style={{position:'absolute', top:'50%', right:'3%', width:'20%'}}>Ver respuestas</button>
                    </Link> : ''}

       


    </form>
  )
}
