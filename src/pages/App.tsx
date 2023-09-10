import { LoggedPageHeader } from "../components/PageHeader/LoggedPageHeader";
import { LoginPageHeader } from "../components/PageHeader/LoginPageHeader";

interface AppProps {
  logged: boolean;
}

export function App(props: AppProps) {
  return (
    <div className="bg-gradient-to-b from-flow-green-dark-night to-flow-green-dark-950 w-screen h-screen">
      {props.logged ? <LoggedPageHeader /> : <LoginPageHeader />}
    </div>
  );
}
