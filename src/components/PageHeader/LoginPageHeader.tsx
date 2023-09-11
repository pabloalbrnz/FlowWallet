import { ChatCircleText, House, SignIn } from "@phosphor-icons/react";
import { PageHeader } from ".";

export function LoginPageHeader() {
  return (
    <PageHeader.Root>
      <div className="flex gap-4 box-border w-[30rem]">
        <PageHeader.Button
          style="primary"
          icon={{ side: "left", element: <House weight="fill" /> }}
          placeholder={{ text: "Início", visible: false }}
          cursor="pointer"
        />
        <PageHeader.Button
          style="primary"
          icon={{ side: "right", element: <ChatCircleText weight="fill" /> }}
          placeholder={{ text: "Suporte", visible: true }}
          cursor="alias"
        />
      </div>
      <span className="font-saira text-3xl text-flow-green-dark-50 transition-all ease-linear hover:text-flow-green-dark-500">
        Flow Wallet
      </span>
      <div className="flex gap-4 justify-end w-[30rem]">
        <PageHeader.Button
          style="secondary"
          placeholder={{ text: "Entrar", visible: true }}
          icon={{ side: "right", element: <SignIn /> }}
          cursor="pointer"
        />
        <PageHeader.Button
          style="primary"
          placeholder={{ text: "Cadastre-se" }}
          cursor="pointer"
        />
      </div>
    </PageHeader.Root>
  );
}
