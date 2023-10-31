import Calculator from "./components/Calculator";

function App() {

  return (
    <>
      <div className="flex flex-col bg-teal-400 w-full h-screen justify-center items-center ">
        <h1 className="text-2xl max-sm:text-5xl text-blue-400 my-5 font-bold">
          Tip Calculator
        </h1>
        <Calculator />
      </div>
    </>
  );
}

export default App;
