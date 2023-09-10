import { House, SignIn } from "@phosphor-icons/react";
import { PageHeader } from ".";

export function LoginPageHeader() {
  return (
    <PageHeader.Root>
      <div className="flex gap-4 box-border w-[30rem]">
        <PageHeader.Button
          style="primary"
          icon={{ side: "left", element: <House weight="fill" /> }}
          placeholder={{ text: "Home", visible: false }}
        />
      </div>
      <span className="font-saira text-3xl text-flow-green-dark-50 transition-all ease-linear hover:text-flow-green-dark-500">
        Flow Wallet
      </span>
      <div className="flex gap-4 justify-end w-[30rem]">
        <PageHeader.Button
          style="secondary"
          placeholder={{ text: "Login", visible: true }}
          icon={{ side: "right", element: <SignIn /> }}
        />
        <PageHeader.Button style="primary" placeholder={{ text: "Register" }} />
      </div>
    </PageHeader.Root>
  );
}
