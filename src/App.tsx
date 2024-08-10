function App() {
  return (
    <main className="w-screen h-screen overflow-y-scroll overflow-hidden">
      <section className="flex flex-col justify-center items-center w-screen h-screen bg-red-500 bg-gradient-to-b from-neutral-700 to-neutral-900">
        <div className="flex justify-center items-center">
          <div className="text-white flex flex-col">
            <h1 className="text-5xl font-bold">Hi, I'm Axcel</h1>
            <p>Student of BSIT 2-2 in Application Development</p>
          </div>
          <img src="./vite.svg" className="w-32 h-32" />
        </div>
      </section>
      <section className="flex space-x-2 justify-center items-center w-screen h-screen bg-neutral-900">
        <div className="hover:bg-black p-5 bg-neutral-700 text-white rounded-lg">
          <img src="./vite.svg" className="w-20 h-20" />
          <h1 className="font-bold">Title</h1>
          <p className="tet-sm">Details</p>
        </div>
        <div className="hover:bg-black p-5 bg-neutral-700 text-white rounded-lg">
          <img src="./vite.svg" className="w-20 h-20" />
          <h1 className="font-bold">Title</h1>
          <p className="tet-sm">Details</p>
        </div>
        <div className="hover:bg-black p-5 bg-neutral-700 text-white rounded-lg">
          <img src="./vite.svg" className="w-20 h-20" />
          <h1 className="font-bold">Title</h1>
          <p className="tet-sm">Details</p>
        </div>
        <div className="hover:bg-black p-5 bg-neutral-700 text-white rounded-lg">
          <img src="./vite.svg" className="w-20 h-20" />
          <h1 className="font-bold">Title</h1>
          <p className="tet-sm">Details</p>
        </div>
      </section>
    </main>
  );
}

export default App;
