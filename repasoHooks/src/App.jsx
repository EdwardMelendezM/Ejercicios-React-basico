import HookApp from "./assets/HookApp";
import CounterApp from "./assets/components/01-useState/CounterApp";
import CustomWithCustomHook from "./assets/components/01-useState/CustomWithCustomHook";
function App() {
  return (
    <div>
      <HookApp />
      <hr />
      <CounterApp />
      <hr />
      <CustomWithCustomHook />
    </div>
  );
}

export default App;
