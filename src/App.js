import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <ItemListContainer greeting={"ItemListContainer"} />
      <ItemCount initial={1} stock={10}/>
    </div>
  );
}

export default App;
