
import './App.css'
import { QuestionsList } from './QuestionsList'

function FormPage() {

  return (
    
      
      <div className="formPage d-flex flex-column align-items-center animate__animated animate__fadeIn animate__slow">
        
        <div className='mb-4 d-flex align-items-center'>
          <h3 className='textForm me-2'>Form Name</h3>
          <i class="fa-sharp fa-solid fa-list fs-3 " style={{color:'white'}}></i>
        </div>

        <QuestionsList />

      </div>

    
  )
}

export default FormPage
