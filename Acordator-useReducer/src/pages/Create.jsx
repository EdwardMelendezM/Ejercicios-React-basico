import { useEffect } from "react";
import CreateForm from "../components/CreateForm";
import Item from "../components/Item";
import ItemContainer from "../components/ItemContainer";
import MainContainer from "../components/MainContainer";
import useReducerApp from "../store/store";

const Create = () => {
  const [state, dispatch] = useReducerApp();

  useEffect(() => {
    dispatch({ type: "LOAD" });
    console.log(state.items);
  }, []);
  return (
    <MainContainer>
      <CreateForm dispatch={dispatch} />
      <ItemContainer>
        {state.items.map((item) => (
          <Item item={item} key={crypto.randomUUID()} />
        ))}
      </ItemContainer>
    </MainContainer>
  );
};

export default Create;
