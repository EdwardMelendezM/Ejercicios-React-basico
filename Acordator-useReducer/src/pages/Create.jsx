import { useEffect } from "react";
import CreateForm from "../components/CreateForm";
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
      <div>
        {state.items ? (
          state.items.map((item) => (
            <div key={item.url}>
              <div>{item.shortUrl}</div>
              <div>{item.url} </div>
              <div>{item.view} </div>
              <div>------</div>
            </div>
          ))
        ) : (
          <p>No hay datos</p>
        )}
      </div>
    </MainContainer>
  );
};

export default Create;
