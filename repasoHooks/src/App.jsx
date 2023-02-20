import HookApp from "./assets/HookApp";
import CounterApp from "./assets/components/01-useState/CounterApp";
import CustomWithCustomHook from "./assets/components/01-useState/CustomWithCustomHook";
import SimpleForm from "./assets/components/02-useEffect/SimpleForm";
import FormWithCustomHook from "./assets/components/02-useEffect/FormWithCustomHook";
function App() {
  return (
    <div>
      <FormWithCustomHook />
      <hr />
      <HookApp />
      <hr />
      <CounterApp />
      <hr />
      <CustomWithCustomHook />
      <hr />
      <SimpleForm />
    </div>
  );
}

export default App;
