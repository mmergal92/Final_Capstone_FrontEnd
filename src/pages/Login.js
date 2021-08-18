import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";

function SignIn(props) {
  console.log(props.URL);

  let history = useHistory();

  const responseGoogle = (response) => {
    console.log("log out failed");
  };

  const logout = (response) => {
    
    localStorage.removeItem("sessionEmail");
    localStorage.removeItem("ProfileImg");
    localStorage.removeItem("userRealName");
    localStorage.removeItem("userfRealName");
    localStorage.clear();
    history.push("/");
  };

  const responseGoogleSuccess = (response) => {
    console.log('this func is being reach')
    fetch(props.URL + "SignIn/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        email: response.profileObj.email,
        lastName: response.profileObj.familyName,
        firstName: response.profileObj.givenName,
        imageUrl: response.profileObj.imageUrl,
        fullName: response.profileObj.name,
      }),
    });

    localStorage.setItem("sessionEmail", response.profileObj.email);
    localStorage.setItem("ProfileImg", response.profileObj.imageUrl);
    localStorage.setItem("userRealName", response.profileObj.givenName);
    localStorage.setItem("userfRealName", response.profileObj.name);
    console.log(response);
    console.log(response.profileObj);

    history.push("/");
  };

  return (
    <div className="login-page">
      {localStorage.getItem("sessionEmail") === null ? (
        <h3>Please log in below!</h3>
      ) : (
        <h3>Goodbye!</h3>
      )}

      {localStorage.getItem("sessionEmail") === null ? (
        <GoogleLogin
          clientId="376013862527-p2ee2jtu3onnm9rm5rrbcbqr2e0rskkp.apps.googleusercontent.com"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogle}
        />
      ) : (
        ""
      )}

      {localStorage.getItem("sessionEmail") !== null ? (
        <GoogleLogout
          clientId="376013862527-p2ee2jtu3onnm9rm5rrbcbqr2e0rskkp.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      ) : (
        ""
      )}
    </div>
  );
}

export default SignIn;
