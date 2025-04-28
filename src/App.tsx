import "./App.css";

export default function App() {
  return (
    <div className="flex items-start justify-center w-full h-screen bg-background-60 text-text p-2">
      <main className=" flex flex-col items-center gap-8 w-full lg:max-w-3/6 p-2 lg:p-3 rounded-md">
        <section className="flex items-start justify-center flex-col gap-4 w-full">
          <div className="flex items-center justify-center  gap-1 w-full text-3xl lg:text-4xl">
            <i className="bi bi-globe text-text-destaque"></i>
            <h2>LinguaGen</h2>
          </div>
          <p className="text-center text-text-destaque">
            Criar textos de aprendizado de idiomas personalizados, adaptados ao
            seu nível e preferências.
          </p>
        </section>
        <section className="w-full p-2 lg:p-3 rounded-md bg-background-30">
          <p>Inputs, Select e Botão</p>
        </section>
        <section className="flex flex-col items-start justify-start w-full p-2 lg:p-3 rounded-md bg-background-30">
          <div className="flex items-center justify-center sm:justify-end gap-3 w-full p-3">
            <button className="flex items-center justify-center flex-col text-sm cursor-pointer transition duration-300 ease-in-out hover:text-text-destaque">
              <i className="bi bi-copy"></i>
              Copiar
            </button>
            <button className="flex items-center justify-center flex-col text-sm cursor-pointer transition duration-300 ease-in-out hover:text-text-destaque">
              <i className="bi bi-arrow-clockwise"></i>
              Redefinir
            </button>

            <button className="flex items-center justify-center flex-col text-sm cursor-pointer transition duration-300 ease-in-out hover:text-text-destaque">
              <i className="bi bi-cloud-arrow-down"></i>
              Baixar
            </button>
          </div>
          <div className="w-full h-auto p-2 border-2 border-text-destaque rounded-md shadow-lg">
            textos
          </div>
        </section>
      </main>
    </div>
  );
}
