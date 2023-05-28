import { useContext, useState } from "react";
import { creatUserDocumentFromAuth} from "../../Firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import { signInWithGooglePopup,signInAuthWithEmailAndPassword } from "../../Firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";


const defaultFormFields = {

    email:'',
    password:'',
}

const SignInForm=()=>{
    const[formFields,setFormFields]=useState(defaultFormFields);
    const{email,password}=formFields;
    const {setCurrentUSer}=useContext(UserContext);
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
        const {user}= await signInWithGooglePopup();
        await creatUserDocumentFromAuth(user);
      
    }
    const handleSubmit=async (event)=>{
        event.preventDefault();

     try{
            const {user}=await signInAuthWithEmailAndPassword(email,password);
            setCurrentUSer(user);
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