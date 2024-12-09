import axios from "axios";

export const userSignup = async (signupData) => {
  try {
    const response = await axios.post("http://localhost:8080/users/signup", signupData);
    if (response.status === 201) {
      console.log("Signup successful:", response.data);
      alert("Account created successfully!");
      return response.data; 
    }
  } catch (error) {
    if (error.response) {
      console.error("Signup error:", error.response.data);
      alert(`Signup failed: ${error.response.data.message || "Invalid details"}`);
    } else {
      console.error("Signup error:", error.message);
      alert("An error occurred during signup.");
    }
  }
};

