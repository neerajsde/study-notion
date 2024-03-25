import Template from "../components/Template";
import signupImg from "../assets/signup.png";

function Signup({ setIsLoggedIn, getFormData }) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
      getFormData = {getFormData}
    />
  );
}

export default Signup;
