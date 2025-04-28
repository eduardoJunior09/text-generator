import { useState } from "react";
import "./App.css";
import Buttontext from "./components/Buttons/ButtonText";
import TextArea from "./components/TextArea/TextArea";

const textAPI =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, iure distinctio cupiditate ullam omnis dignissimos laudantium voluptatum recusandae sunt quas voluptas quibusdam delectus. Reiciendis delectus maiores nulla ab distinctio consectetur. ";

export default function App() {
  const [copySuccess, setCopySuccess] = useState(false);

  const copiarTexto = async (textApi: string) => {
    try {
      await navigator.clipboard.writeText(textApi);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000); // Reset após 3 segundos
    } catch (error) {
      console.error("Erro ao copiar para a área de transferência: ", error);
    }
  };

  return (
    <div className="flex items-start justify-center w-full h-screen bg-background-60 text-text p-2">
      <main className="flex flex-col items-center gap-8 w-full lg:max-w-3/6 p-2 lg:p-3 rounded-md">
        <section className="flex items-start justify-center flex-col gap-4 w-full">
          <div className="flex items-center justify-center gap-1 w-full text-3xl lg:text-4xl">
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
            <Buttontext
              icon={<i className="bi bi-copy"></i>}
              label={copySuccess ? "Copiado!" : "Copiar"}
              onClick={() => copiarTexto(textAPI)}
            />

            <Buttontext
              icon={<i className="bi bi-arrow-clockwise"></i>}
              label="Redefinir"
            />

            <Buttontext
              icon={<i className="bi bi-cloud-arrow-down"></i>}
              label="Baixar"
            />
          </div>
          <TextArea text={textAPI} />
        </section>
      </main>
    </div>
  );
}
