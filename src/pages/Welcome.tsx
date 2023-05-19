import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

import { Button } from "@mantine/core";
import "./Welcome.css";

export default function Welcome() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const goToMainPage = () => {
    navigate("/main");
  };

  return (
    <>
      <section className="welcome">
        <h1>Welcome page</h1>
        <p>Developers, project, course</p>
        {user && !loading && (
          <Button onClick={goToMainPage}>Go to Main page</Button>
        )}
      </section>
    </>
  );
}
