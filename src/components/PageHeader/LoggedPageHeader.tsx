import "./style.css";
import { ChatCircleText, House } from "@phosphor-icons/react";
import { PageHeader } from ".";
import * as Avatar from "@radix-ui/react-avatar";

export function LoggedPageHeader() {
  return (
    <PageHeader.Root>
      <div className="flex gap-4 box-border w-[30rem]">
        <PageHeader.Button
          style="primary"
          icon={{ side: "left", element: <House weight="fill" /> }}
          placeholder={{ text: "Início", visible: false }} cursor="pointer"
        />
        <PageHeader.Button
          style="primary"
          placeholder={{ text: "Gastos/Receitas" }} cursor="pointer"
        />
        <PageHeader.Button style="primary" placeholder={{ text: "Calendário" }} cursor="pointer" />
      </div>
      <span className="font-saira text-3xl text-flow-green-dark-50 transition-all ease-linear hover:text-flow-green-dark-500 hover:drop-shadow-[0_2px_5px_rgba(210,238,222,0.25)] cursor-default">
        Flow Wallet
      </span>
      <div className="flex gap-4 w-[30rem] justify-end">
        <PageHeader.Button
          style="primary"
          icon={{ side: "right", element: <ChatCircleText weight="fill" /> }}
          placeholder={{ text: "Suporte", visible: true }}
           cursor="alias"
        />
        <PageHeader.Input />
        <Avatar.Root className="bg-flow-green-dark-700 inline-flex h-8 w-8 select-none items-center justify-center overflow-hidden rounded-full align-middle hover:border-4 hover:border-flow-green-dark-800">
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src="#"
            alt="Sua Conta"
          />
          <Avatar.Fallback
            className="text-flow-green-dark-500 leading-1 flex h-full w-full items-center justify-center bg-flow-green-dark-950 text-sm font-medium"
            delayMs={600}
          >
            AC
          </Avatar.Fallback>
        </Avatar.Root>
      </div>
    </PageHeader.Root>
  );
}
