import Hero from "./components/HeroSection";
import Card from "./components/CardLayout";
function App() {
  return (
    <>
      <main className="w-screen h-screen overflow-y-scroll overflow-hidden flex justify-center items-center bg-[url('./Nike-logo.webp')] ">
        <section className="flex flex-col justify-center items-center w-full h-screen "></section>
        <Hero />
        <section className="flex space-x-4 justify-center items-center w-screen h-screen bg-[url('./Nike-logo.webp')]"></section>
        <Card />
      </main>
    </>
  );
}

export default App;
