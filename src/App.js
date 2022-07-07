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
    return (
        <div className="App">
            <Form
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                name={name}
                setName={setName}
                confirmpassword={confirmpassword}
                setConfirmPassword={setConfirmPassword}
            />
            <Footer />
        </div>
    );
}

export default App;
