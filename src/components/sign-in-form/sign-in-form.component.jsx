import {useState } from "react";
import "./sign-in-form.styles.scss";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import { signInWithGooglePopup,signInAuthWithEmailAndPassword} from "../../utils/Firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";


const defaultFormFields = {

    email:'',
    password:'',
}

const SignInForm=()=>{
    const[formFields,setFormFields]=useState(defaultFormFields);
    const{email,password}=formFields;


    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormFields({

            ...formFields,
            [name]:value
        }
               
        );   
    }
    const resetForm=()=>{
        setFormFields(defaultFormFields);
    }
   
    const signInWithGoogle=async()=>{
         await signInWithGooglePopup();
        //await creatUserDocumentFromAuth(user);
      
    }
    const handleSubmit=async (event)=>{
        event.preventDefault();

     try{
            await signInAuthWithEmailAndPassword(email,password);
            //setCurrentUSer(user);
            resetForm();

        }catch(error) {    

            switch(error.code){
                case 'auth/wrong-passwor':alert("Incorrect password for email");break;
                case 'auth/user-not-found':alert("Email dosen't exist");break;
                default:console.log(error);
            }     
        }
    }

    
    return(

        <div className="sign-in-container">
            <h2>Already  have an account?</h2>
            <span>Sign in with youe email and password</span>
            <form onSubmit={handleSubmit}>
            
                <FormInput type="email"
                           required
                           label="Email"
                           name="email"
                           onChange={handleChange}
                           value={email} 
                />
                <FormInput type="password"
                           required
                           label="Pasword"
                           name="password"
                           onChange={handleChange}
                           value={password}

                />
                <div className="buttons-container">
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">
                    Sign In
                </Button>

                <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >
                    Google sign in
                </Button>
                </div>      
            </form>       
        </div>
    );
    }          
export default SignInForm;  