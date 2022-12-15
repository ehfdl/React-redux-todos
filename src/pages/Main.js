import Header from "../components/Header";
// import Input from "../components/Input";
import InputSec from "../components/InputSec";
import Search from "../components/Search";
import Listbox from "../components/Listbox";

// Input = id: new Date(), input div 사용
// InputSec = id: uuidv4(), input form 사용

function Main() {
  return (
    <div>
      <Header />
      {/* <Input /> */}
      <InputSec />
      <Search />
      <Listbox />
    </div>
  );
}

export default Main;
