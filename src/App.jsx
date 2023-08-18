import React, { useEffect } from "react";
import "./App.css";
function App() {
  let faceio;

  useEffect(() => {
    faceio = new faceIO("Here goes your publicID");
  }, []);

  const handleSignIn = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
          pin: "123456",
        },
      });

      console.log(` Unique facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto"
      });

      console.log(` Unique Facial ID: ${response.facialId}
      Payload: ${response.payload}`);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <h1>Face Authentication by FaceIO</h1>
      <button onClick={handleSignIn}>Sign-in</button>
      <button onClick={handleLogIn} >Log-in</button>
    </section>
  );
}

export default App;
