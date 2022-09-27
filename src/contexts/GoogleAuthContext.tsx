import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../services/firebase";

interface ProviderProps {
  children: ReactNode;
}

interface ContextProps {
  user: User;
  SignIn: () => void;
  SignOut: () => void;
}

export const GoogleAuthContext = createContext({} as ContextProps);

export function GoogleAuthContextProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<any>({} as any);

  useEffect(() => {
    function loadStorageData() {
      const storageUser = localStorage.getItem("@AuthFirebase:user");
      const storageToken = localStorage.getItem("@AuthFirebase:token");
      if (storageToken && storageUser) {
        setUser(JSON.parse(storageUser));
        console.log(JSON.parse(storageUser));
      }
    }

    loadStorageData();
  }, []);

  function SignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((r) => {
        const credential = GoogleAuthProvider.credentialFromResult(r);
        const token = credential?.accessToken;
        const user = r.user;
        localStorage.setItem("@AuthFirebase:token", token!);
        localStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
        setUser(user);
      })
      .catch((err) => console.log(err));
  }

  function SignOut() {
    localStorage.clear();
    setUser({});
  }

  return (
    <GoogleAuthContext.Provider value={{ user, SignIn, SignOut }}>
      {children}
    </GoogleAuthContext.Provider>
  );
}

export function useGoogleAuth() {
  const context = useContext(GoogleAuthContext);

  return context;
}
