import { useState } from "react";

export default function Authentication() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg">
          <div className="grid grid-cols-2 border-b">
            <button
              onClick={() => setActiveTab("login")}
              className={`py-3 text-lg font-medium transition-colors
                        ${activeTab === "login" 
                        ? "border-b-2 border-gray-900 text-gray-900" 
                        : "text-gray-500 hover:text-gray-700"
                        }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`py-3 text-lg font-medium transition-colors
                        ${activeTab === "register" 
                        ? "border-b-2 border-gray-900 text-gray-900" 
                        : "text-gray-500 hover:text-gray-700"
                        }`}
            >
              Cadastro
            </button>
          </div>

          {activeTab === "login" && (
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Login</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Entre com suas credenciais para acessar sua conta
                </p>
              </div>

              <form className="space-y-4 mb-2">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Senha"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Entrar
                </button>
              </form>
              <a href="/" className="text-sm text-gray-900">Voltar a página principal</a>
            </div>
          )}

          {activeTab === "register" && (
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Cadastro</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Crie sua conta para começar
                </p>
              </div>

              <form className="space-y-4 mb-2">
                <div>
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Senha"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirmar senha"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Criar conta
                </button>
              </form>
              <a href="/" className="text-sm text-gray-900">Voltar a página principal</a>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
