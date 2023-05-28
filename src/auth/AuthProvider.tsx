import "./firebaseSetup";

interface Props {
  children: React.ReactNode;
}
const AuthProvider: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default AuthProvider;
