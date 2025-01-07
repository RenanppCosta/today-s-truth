import { useState } from "react";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../../schemas/signInSchema";
import { signUpSchema } from "../../schemas/signUpSchema";
import { signIn, signUp } from "../../services/userService";
import Cookies  from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Authentication() {
  const [activeTab, setActiveTab] = useState("login");
  const [loginError, setLoginError] = useState("");

  const { register: registerSignUp, handleSubmit: handleSubmitSignUp, formState: { errors: errorSignUp } } = useForm({resolver: zodResolver(signUpSchema)});
  const { register: registerSignIn, handleSubmit: handleSubmitSignIn, formState: { errors: errorSignIn } } = useForm({resolver: zodResolver(signInSchema)});

  const inHandleSubmit = async (data) => {
    try {
        const response = await signIn(data);
        Cookies.set("token", response.data, {expires: 1});
        navigate("/");
        console.log(response);
    } catch (error) {
        console.log(error);
        setLoginError("Credenciais inválidas. Verifique seu email e senha.");
    }
  };

  const navigate = useNavigate();

  const upHandleSubmit = async (data) => {
    try {
        const response = await signUp(data);
        Cookies.set("token", response.data.token, {expires: 1});
        navigate("/");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  };

  

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg">
          <div className="grid grid-cols-2 border-b">
            <button
              onClick={() => setActiveTab("login")}
              className={`py-3 text-lg font-medium transition-colors
                        ${activeTab === "login" ? "border-b-2 border-gray-900 text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`py-3 text-lg font-medium transition-colors
                        ${activeTab === "register" ? "border-b-2 border-gray-900 text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
            >
              Cadastro
            </button>
          </div>

          {activeTab === "login" && (
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Login</h2>
                <p className="text-sm text-gray-500 mt-1">Entre com suas credenciais para acessar sua conta</p>
              </div>

              <form className="space-y-4 mb-2" onSubmit={handleSubmitSignIn(inHandleSubmit)}>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    register={registerSignIn} 
                  />
                  { errorSignIn.email && <span className="text-red-500 mt-2 text-sm font-bold">{errorSignIn.email.message} </span>}
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    register={registerSignIn} 
                  />
                  { errorSignIn.password && <span className="text-red-500 mt-2 text-sm font-bold">{errorSignIn.password.message} </span>}
                </div>
                {loginError &&  <div className="text-red-500 text-sm font-bold">{loginError}</div>}
                <button type="submit" className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">
                  Entrar
                </button>
              </form>
              <a href="/" className="text-sm text-gray-900">
                Voltar a página principal
              </a>
            </div>
          )}

          {activeTab === "register" && (
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Cadastro</h2>
                <p className="text-sm text-gray-500 mt-1">Crie sua conta para começar</p>
              </div>

              <form className="space-y-4 mb-2" onSubmit={handleSubmitSignUp(upHandleSubmit)}>
                <div>
                  <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    register={registerSignUp} 
                  />
                  { errorSignUp.name && <span className="text-red-500 mt-2 text-sm font-bold">{errorSignUp.name.message} </span>}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    register={registerSignUp} 
                  />
                  { errorSignUp.email && <span className="text-red-500 mt-2 text-sm font-bold">{errorSignUp.email.message} </span>}
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    register={registerSignUp} 
                  />
                  { errorSignUp.password && <span className="text-red-500 mt-2 text-sm font-bold">{errorSignUp.password.message} </span>}
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Confirmar Senha"
                    name="confirmPassword"
                    register={registerSignUp} 
                  />
                  { errorSignUp.confirmPassword && <span className="text-red-500 mt-2 text-sm font-bold">{errorSignUp.confirmPassword.message} </span>}
                </div>
                <button type="submit" className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">
                  Criar conta
                </button>
              </form>
              <a href="/" className="text-sm text-gray-900">
                Voltar a página principal
              </a>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
