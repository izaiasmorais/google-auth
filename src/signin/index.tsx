import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { useState } from "react";
import { auth } from "../services/firebase";

export function SignIn() {
  const [user, setUser] = useState<User>({} as User);

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((r) => {
        setUser(r.user);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="p-2">
      <div
        className="max-w-[700px] mx-auto mt-[150px] items-center
    text-center justify-center grid gap-2"
      >
        <div className="grid items-center justify-center mb-8">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="Foto do usuário"
              className="w-full mb-2 rounded-[50%] max-w-[150px] ml-8"
            />
          )}
          <strong className="text-xl">{user.displayName}</strong>
          <p>{user.email}</p>
        </div>

        <div>
          <h1 className="text-3xl font-semibold">Acesse sua conta</h1>
          <p className="text-[#707076]">
            Utilizando autenticação social, como a do Google você facilita a
            vida do usuário permitindo-o se autenticar sem necessidade de
            cadastro cadastro.
          </p>
          <div className="bg-nlw-gradient p-[3px] mt-4">
            <button
              className="p-3 flex gap-2 items-center justify-center bg-white w-full h-full"
              onClick={handleGoogleSignIn}
            >
              <img
                src="https://api.iconify.design/logos:google-icon.svg"
                alt="Google Icon"
                width={20}
                height={20}
              />
              Entrar com o Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
