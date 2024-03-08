import Header from "./components/header";
import Menu from "./components/menu";

function App() {
  return (
    <>
      <Header />
      <main className="h-screen flex">
        <Menu />
        <div className="flex-1 overflow-y-scroll"></div>
      </main>
    </>
  );
}

export default App;
