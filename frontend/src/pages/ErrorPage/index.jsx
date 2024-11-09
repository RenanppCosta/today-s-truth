import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
       <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-8xl font-bold text-gray-800 mb-4">Error 404 :(</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Página Não Encontrada</h2>
        <p className="text-gray-600 text-lg mb-8">
          A página que você está procurando não esta disponível.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          Voltar para Página Inicial
        </a>
      </div>
    </div>
  );
}