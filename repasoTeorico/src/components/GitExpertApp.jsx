import { useState } from "react";
import AddCategory from "./AddCategory";
import GitGrid from "./GitGrid";

const GitExpertApp = () => {
  // const categories = ;
  const [categories, setCategories] = useState(["One punch"]);

  const handleAdd = () => {
    setCategories((cats) => [...cats, "Hunter x hunter"]);
  };

  return (
    <div>
      <h2>Git expert app</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => {
          return <GitGrid key={category} category={category} />;
        })}
      </ol>
    </div>
  );
};

export default GitExpertApp;