import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import "./firebaseSetup";

interface Props {
  children: React.ReactNode;
}
const AuthProvider: React.FC<Props> = ({ children }) => {
  const auth = getAuth();
  // const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      //setUser(firebaseUser);
      //console.log(firebaseUser);
    });
    return unsubscribe;
  }, [auth]);

  return <>{children}</>;
};

export default AuthProvider;
