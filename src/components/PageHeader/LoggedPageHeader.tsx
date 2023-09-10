import { PageHeader } from ".";
import * as Avatar from "@radix-ui/react-avatar";

export function LoggedPageHeader() {
  return (
    <PageHeader.Root>
      <div className="flex gap-4 box-border">
        <PageHeader.Button style="primary" />
        <PageHeader.Button
          style="primary"
          placeholder={{ text: "In/Outflows" }}
        />
        <PageHeader.Button style="primary" placeholder={{ text: "Calendar" }} />
      </div>
      <div className="flex gap-4">
        <PageHeader.Input />
        <Avatar.Root className="bg-flow-green-dark-700 inline-flex h-8 w-8 select-none items-center justify-center overflow-hidden rounded-full align-middle hover:border-4 hover:border-flow-green-dark-800">
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src="#"
            alt="Account"
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
