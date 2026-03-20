import { Home } from "./pages/Home";
import { Toaster } from "./components/ui/toaster";
import ClickSpark from "./components/ClickSpark";

function App() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={14}
      sparkRadius={45}
      sparkCount={8}
      duration={400}
    >
      <Toaster />
      <Home />
    </ClickSpark>
  );
}

export default App;
