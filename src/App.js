import Home from "./components/Home/Home";
import BaysicLayout from "./components/Layout/BaysicLayout";
import Projectis from "./components/Projectis/Projectis";

import Skils from "./components/skils/Skils";

function App() {
  
  return (
    <div className="">
      <BaysicLayout>
        <Home/>
        <Skils/>
        <Projectis/>
      </BaysicLayout>
    </div>
  );
}

export default App;
