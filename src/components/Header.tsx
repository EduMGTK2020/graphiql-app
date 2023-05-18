import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

import { Button } from "@mantine/core";
import "./Header.css";

export default function HeaderApp() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const onClickSignInUp = () => {
    navigate("/auth");
  };

  const onClickSignOut = () => {
    auth.signOut().then(() => {
      navigate("/auth");
    });
  };

  return (
    <>
      <header className="header_app">
        <h2>GraphiQL - Team #6</h2>
        <div className="header_buttons">
          {!user && !loading && (
            <Button onClick={onClickSignInUp} className="header_sign_button">
              Sigh In / Sign Up
            </Button>
          )}

          {user && !loading && (
            <>
              <div className="header_user">{user.email}</div>
              <Button onClick={onClickSignOut} className="header_sign_button">
                Sigh Out
              </Button>
            </>
          )}
        </div>
      </header>
    </>
  );
}
