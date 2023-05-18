import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import Loader from "../components/Loader";
import "../pages/Main.css";

export default function Main() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) {
      navigate("/auth", { replace: true });
    }
  });

  if (loading) {
    return (
      <>
        <div className="loader">
          <Loader /> <h4>Check auth...</h4>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="main">
        <h1>Main page</h1>
        <p>
          Section - editor, variables, headers (for query), documentation,
          response
        </p>
      </div>
    </>
  );
}
