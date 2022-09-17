import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <ItemListContainer/>
      <ItemCount initial={1} stock={10}/>
    </div>
  );
}

export default App;
