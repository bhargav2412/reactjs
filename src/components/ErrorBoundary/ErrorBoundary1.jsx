import React from "react";
import UserProfile from "./UserProfile";
import HandleErrorBoundary from "./HandleErrorBoundary";

const ErrorBoundary1 = () => {
  const userData = {
    username: "Bhargav",
    age: 30,
  };
  const userData1 = null;
  return (
    <div>
      <HandleErrorBoundary>
        <UserProfile userData={userData} />
      </HandleErrorBoundary>
      <HandleErrorBoundary fallback={<p>Error in User Profile Page</p>}>
        <UserProfile userData={userData1} />
      </HandleErrorBoundary>
    </div>
  );
};

export default ErrorBoundary1;
