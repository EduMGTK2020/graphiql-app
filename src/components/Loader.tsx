import { Loader as LoaderApp } from "@mantine/core";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <LoaderApp size="xl" variant="dots" />
    </div>
  );
}
