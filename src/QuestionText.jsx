// import React, { useState } from 'react'
// import { useForm } from './useForm';

// export const QuestionText = ({ type, label, name, required, options }) => {

//   const onSubmitNewAnswer = (e) => {
//     e.preventDefault();
//     console.log('respuesta guardada');
//     console.log(e);
//   }

//   const { formState,onInputChange } = useForm();

//   return (

        
//         <div>
//             {
//               (type === 'select') 
//               ? <div class="mb-3">
//                   <label for="exampleFormControlInput1" class="form-label">{ label }</label>
//                   <select name={name} onChange={ onInputChange }> { options.map( o => ( <option value={ o.value } >{ o.label }</option> ) ) } </select>
//                 </div> 
//               : ''
//             }

//             {
//               ( type === 'text' || type === 'email' || type === 'date' )
//               ? <div class="mb-3">
//                   <label for="exampleFormControlInput1" class="form-label">{ label }</label>
//                   {( required ) ? 
//                     <input type={ type } class="form-control" id="exampleFormControlInput1" name={name} placeholder={ name } onChange={ onInputChange } required />
//                     : <input type={ type } class="form-control" id="exampleFormControlInput1" name={name} placeholder={ name } onChange={ onInputChange } />
//                   }
//                 </div> 
//               : ''
//             }

//             {
//               ( type === 'checkbox' )
//               ? <div class="form-check">
//                   {( required ) ?  <input class="form-check-input"  type={ type } name={name} value="" id="invalidCheck" required/> :  <input onChange={ onInputChange } class="form-check-input" name={name} type={ type } value="" id="invalidCheck" /> }
//                   <label class="form-check-label" for="invalidCheck">
//                     { label }
//                   </label>
//                 </div>
//               : ''
//             }

//             {
//               ( type === 'submit' )
//               ? <div>
//                 <button className='btn btn-outline-primary' type={ type }> { label } </button>
//               </div>
//               : ''
//             }
//           </div>

            
//   )
// }
