export function BoxLogin({ function }: Props) {
  return (
    <>
      <h1 className="text-3xl font-semibold">Acesse sua conta</h1>
      <p className="text-[#707076]">
        Utilizando autenticação social, como a do Google você facilita a vida do
        usuário permitindo-o se autenticar sem necessidade de cadastro cadastro.
      </p>
      <div className="bg-nlw-gradient p-[3px] mt-4">
        <button className="p-3 flex gap-2 items-center justify-center bg-white w-full h-full">
          <img
            src="https://api.iconify.design/logos:google-icon.svg"
            alt="Google Icon"
            width={20}
            height={20}
          />
          Entrar com o Google
        </button>
      </div>
    </>
  );
}
