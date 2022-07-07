import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [form, setForm] = useState(false);
    return (
        <div className="App">
            {form ? (
                <StepTwo
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    setForm={setForm}
                />
            ) : (
                <Form
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    name={name}
                    setName={setName}
                    confirmpassword={confirmpassword}
                    setConfirmPassword={setConfirmPassword}
                    setForm={setForm}
                />
            )}
            <Footer />
        </div>
    );
}

export default App;
