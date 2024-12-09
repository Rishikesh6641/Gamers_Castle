import axios from 'axios';
export const userSignin = async (signinData) => {
    try {
      const response = await axios.post("http://localhost:8080/users/signin", signinData);
      if (response.status === 201) {
        console.log("Signin successful:", response.data);
        const { jwtToken, mesg } = response.data; 
        alert(mesg);
            localStorage.setItem("jwtToken", jwtToken);
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        console.error("Signin error:", error.response.data);
        alert(`Signin failed: ${error.response.data.message || "Invalid credentials"}`);
      } else {
        console.error("Signin error:", error.message);
        alert("An error occurred during signin.");
      }
    }
  };
  
  