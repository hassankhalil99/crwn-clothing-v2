import { useContext, useState } from "react";
import { creatUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from "../../Firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";


const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm=()=>{
    const[formFields,setFormFields]=useState(defaultFormFields);
    const{displayName,email,password,confirmPassword}=formFields;
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
    const handleSubmit=async (event)=>{
        event.preventDefault();
        if(password!==confirmPassword) 
        {
            alert("Error Password");
            return;
        }
        try{
            const {user}=await createAuthUserWithEmailAndPassword(email,password);
            await creatUserDocumentFromAuth(user,{displayName});
            setCurrentUSer(user);
            resetForm();

        }catch(error) {
            if(error.code==="auth/email-already-in-use"){
                alert("cannot create user,email already in use");
            }
            else{
                console.log("user creation encoutered an error",error);

            }
           
        }
        
        
       // const userRef=await creatUserDocumentFromAuth(userSignUp);
        //console.log(userRef);    
        

    }
    

    return(


        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with youe email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="text"
                           required
                           label="Display Name"
                           name="displayName"
                           onChange={handleChange}
                           value={displayName} 
                />
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
                <FormInput type="password"
                           required
                           label="Confirm Password"
                           name="confirmPassword"
                           onChange={handleChange}
                           value={confirmPassword}

                />


                <Button buttonType='inverted' type="submit">Sign Up</Button>
                

                
            </form>
            
        </div>
    );
      
}
export default SignUpForm;  