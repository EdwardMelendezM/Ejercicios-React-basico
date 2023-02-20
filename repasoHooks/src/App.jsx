import HookApp from "./assets/HookApp";
import CounterApp from "./assets/components/01-useState/CounterApp";
import CustomWithCustomHook from "./assets/components/01-useState/CustomWithCustomHook";
import SimpleForm from "./assets/components/02-useEffect/SimpleForm";
import FormWithCustomHook from "./assets/components/02-useEffect/FormWithCustomHook";
import MultipleHooks from "./assets/components/03-Examples/MultipleHooks";
import FocusScreen from "./assets/components/04-useRef/FocusScreen";
import RealExampleRef from "./assets/components/04-useRef/RealExampleRef";
function App() {
  return (
    <div>
      <RealExampleRef />
      <hr />
      <FocusScreen />
      <hr />
      <MultipleHooks />
      <hr />
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
