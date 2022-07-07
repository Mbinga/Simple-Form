const StepTwo = ({ name, password, email, setForm }) => {
    return (
        <div>
            <span>RESULTS</span>
            <p>
                Name:
                {name}
            </p>
            <p>Email :{email}</p>
            <p>Password :{password}</p>
            <button
                onClick={() => {
                    setForm(false);
                }}
            >
                Edit your information
            </button>
        </div>
    );
};

export default StepTwo;
