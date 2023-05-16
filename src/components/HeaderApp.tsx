import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import "./HeaderApp.css";

export default function HeaderApp() {
  const navigate = useNavigate();

  const onClickSignInUp = () => {
    navigate("/auth");
  }

  return (
    <>
      <header className="headerApp">
        <h2>GraphiQL - Team #6</h2>
        <Button onClick={onClickSignInUp} className="headerSignButton">Sigh In / Sign Up</Button>
      </header>
    </>
  );
}
