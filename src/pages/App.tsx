import { LoggedPageHeader } from "../components/PageHeader/LoggedPageHeader";
import { LoginPageHeader } from "../components/PageHeader/LoginPageHeader";

interface AppProps {
  logged?: boolean;
}

export function App({ logged = true }: AppProps) {
  return (
    <div className="bg-gradient-to-b from-flow-green-dark-night to-flow-green-dark-950 w-screen h-screen flex flex-col gap-2">
      <div className="h-16 w-screen">
        {logged ? <LoggedPageHeader /> : <LoginPageHeader />}
      </div>
      <div className="flex h-full w-[calc(100%-8rem)] mt-4 bg-flow-green-dark-night bg-opacity-80 self-center rounded-sm border-[1px] border-flow-green-dark-100 overflow-y-scroll">
        <div className="flex w-full h-[32rem] p-16 ">
          <div className="flex w-[50%]">
            <h1 className="font-bold font-poppins text-5xl tracking-tighter text-flow-green-dark-700 mt-16 leading-[3.5rem]">
              Mantenha seus{" "}
              <b className="text-flow-green-dark-500 underline">gastos</b>
              <br />
              sob{" "}
              <b className="text-flow-green-dark-500 tracking-tight underline">
                controle
              </b>
              <br />
              com o{" "}
              <b className="text-flow-green-dark-100 tracking-tight underline decoration-flow-green-dark-500">
                Flow Wallet
              </b>
              !!
            </h1>
          </div>
          <div className="flex w-[50%] items-center justify-center">
            <span className="font-bold font-poppins text-[10rem] text-pink-500 -translate-y-28 translate-x-16 rotate-[-20deg] drop-shadow-md">
              $
            </span>
            <span className="font-bold font-poppins text-[10rem] text-green-500 translate-y-24  translate-x-4 rotate-12 drop-shadow-md">
              +
            </span>
            <span className="font-bold font-poppins text-[10rem] text-red-500 -translate-y-16  translate-x-20 rotate-6 drop-shadow-md">
              -
            </span>
            <span className="font-bold font-poppins text-[10rem] text-yellow-500 translate-y-16  translate-x-4 -rotate-12 drop-shadow-md">
              %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
