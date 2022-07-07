import StepTwo from "./StepTwo";

const Form = ({
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    confirmpassword,
    setConfirmPassword,
}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        console.log("submitted !");
    };
    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
    };
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    };
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
    };
    const handleConfirmPasswordChange = (event) => {
        const value = event.target.value;
        setConfirmPassword(value);
    };

    return (
        <div>
            <h1>CREATE ACCOUNT</h1>
            <form onSubmit={handleSubmit}>
                <p>Name :</p>
                <input
                    placeholder="Name"
                    type="text"
                    name="Name"
                    value={name}
                    onChange={handleNameChange}
                />
                <p>Email</p>
                <input
                    placeholder="Email"
                    type="email"
                    name="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <p>Password :</p>
                <input
                    placeholder="Password"
                    type="password"
                    name="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className={
                        confirmpassword === password ? "same" : "different"
                    }
                />
                <p>Confirm Password :</p>
                <input
                    placeholder="Confirm Password"
                    type="password"
                    name="ConfirmPassword"
                    value={confirmpassword}
                    onChange={handleConfirmPasswordChange}
                    className={
                        confirmpassword === password ? "same" : "different"
                    }
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;
