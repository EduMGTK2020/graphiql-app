import { Loader as LoaderApp } from "@mantine/core";
import "./Loader.css";

interface Props {
  children?: React.ReactNode;
}
const Loader: React.FC<Props> = ({ children }) => {
  return (
    <>
    <div className="loader">
      <LoaderApp size="xl" variant="dots" />
      {children && (<h4>{children}</h4>)}
    </div>
    </>
  );
}

export default Loader;
