import { useGoogleAuth } from "../contexts/GoogleAuthContext";
import { SignOut as SignOutIcon } from "phosphor-react";

export function SignIn() {
  const { user, SignIn, SignOut } = useGoogleAuth();

  function handleGoogleSignIn() {
    SignIn();
  }

  function handleSignOut() {
    SignOut();
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

          <div className="bg-signin-gradient p-[3px] mt-4">
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

          <div className="bg-signout-gradient p-[3px] mt-4">
            <button
              className="p-3 flex gap-2 items-center justify-center bg-white w-full h-full"
              onClick={handleSignOut}
            >
              <SignOutIcon size={20} color="black" />
              Desconectar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
