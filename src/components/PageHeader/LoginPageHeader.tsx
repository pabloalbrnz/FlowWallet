import { House, SignIn } from "@phosphor-icons/react";
import { PageHeader } from ".";

export function LoginPageHeader() {
  return (
    <PageHeader.Root>
      <div className="flex gap-4 box-border">
        <PageHeader.Button
          style="primary"
          icon={{ side: "left", element: <House weight="fill" /> }}
          placeholder={{ text: "Home", visible: false }}
        />
      </div>
      <div className="flex gap-4">
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
