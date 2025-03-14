"use client";

import { useState } from "react";
import OtpVerification from "../OtpVerification/OtpVerification";
import SignupForm from "../SignupForm/SignupForm";
import LoginForm from "../LoginForm/LoginForm";

export default function AuthForm({ isLoginModal, onClose }) {
  const [authState, setAuthState] = useState({ type: "login", email: null });

  const handleOtpSent = (email) => {
    setAuthState({ type: "otp", email, isLogin: true });
  };

  const handleSignupSuccess = (email) => {
    setAuthState({ type: "otp", email, isLogin: false });
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">
        {authState.type === "login"
          ? "Login"
          : authState.type === "signup"
          ? "Sign Up"
          : "Verify OTP"}
      </h1>
      {authState.type === "login" && <LoginForm onOtpSent={handleOtpSent} />}
      {authState.type === "signup" && <SignupForm onSignupSuccess={handleSignupSuccess} />}
      {authState.type === "otp" && <OtpVerification email={authState.email} isLogin={authState.isLogin} />}
      {authState.type !== "otp" && (
        <p className="mt-4 text-center">
          {authState.type === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                className="text-blue-500"
                onClick={() => setAuthState({ type: "signup" })}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                className="text-blue-500"
                onClick={() => setAuthState({ type: "login" })}
              >
                Login
              </button>
            </>
          )}
        </p>
      )}
    </>
  );
}