import { PageHeader } from "../components/PageHeader";
import * as Avatar from "@radix-ui/react-avatar";

export function App() {
  return (
    <div className="bg-gradient-to-b from-flow-green-dark-night to-flow-green-dark-950 w-screen h-screen">
      <PageHeader.Header>
        <div className="flex gap-4 box-border">
          <PageHeader.Button placeholder="Home" />
          <PageHeader.Button placeholder="In/Outflows" />
          <PageHeader.Button placeholder="Calendar" />
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
      </PageHeader.Header>
    </div>
  );
}
