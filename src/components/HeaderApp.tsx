import { useNavigate } from "react-router-dom";
import { Header, Button } from "@mantine/core";

export default function HeaderApp() {
  const navigate = useNavigate();

  const onClickSignInUp = () => {
    navigate("/auth");
  }

  return (
    <>
      <Header height="3rem" className="headerApp">
        <h2>GraphiQL - Team #6</h2>
        <Button onClick={onClickSignInUp}>Sigh In / Sign Up</Button>
      </Header>
    </>
  );
}
