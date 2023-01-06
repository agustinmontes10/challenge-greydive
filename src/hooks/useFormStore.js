import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore/lite"
import { useDispatch } from 'react-redux'
import { Navigate } from "react-router-dom";
import { firebaseDB } from "../firebase/config";
import { setAnswers, setEmailExist, setIsSend } from "../store/formSlice";

export const useFormStore = () => {
        
    const dispatch = useDispatch();
    
    const newAnswer = async( answer ) => {
       
        const newDoc = doc( collection( firebaseDB, `${ answer.email }/`  ) );
        await setDoc( newDoc, answer );

        dispatch(setAnswers(answer));

       
    }

  
     
    return {
        newAnswer,
        
    }

        
}