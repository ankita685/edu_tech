import { useState } from "react";

import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


import { auth } from "../../../firebase-config";


export const Signup = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
      name: "",
      email: "",
      pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if (!values.name || !values.email || !values.pass) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
  
      setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          const user = res.user;
          await updateProfile(user, {
            displayName: values.name,
          });
          navigate("/");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
    };
  
   
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign up"} />
                    <SubHeading label={"Enter your information to create an account"} />
                    <InputBox  onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          } placeholder="John" value={values.name}  label={"First Name"} />
                    {/* <InputBox onChange={(e) => setLastName(e.target.value)} placeholder="Doe" label={"Last Name"} /> */}
                    <InputBox   onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          } placeholder="harkirat@gmail.com" value={values.email} label={"Email"} />
                    <InputBox  onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          } placeholder="123456" value={values.pass} label={"Password"} />
                    <div className="pt-4">
                        <Button onClick={handleSubmission} disabled={submitButtonDisabled} label={"Sign up"} />
                        <p>{errorMsg}</p>
                        
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/"} />
                </div>
            </div>
        </div>
    );
};



