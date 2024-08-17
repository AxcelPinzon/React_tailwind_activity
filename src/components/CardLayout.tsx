export default function CardLayout() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-between hover:bg-orange-600 p-5 bg-neutral-350 text-white rounded-lg ">
          <img src="./af1.png" className="w-20 h-20 rounded-lg" />
          <h1 className="text-center font-bold text-sm">Nike Air Force 1</h1>
          <p className="text-sm">$180</p>
        </div>
        <div className="flex flex-col items-center justify-between hover:bg-orange-600 p-5 bg-neutral-350 text-white rounded-lg ">
          <img src="./blazermid.png" className="w-20 h-20 rounded-lg" />
          <h1 className="text-center font-bold text-sm">Nike Blazer Mid '77</h1>
          <p className="text-sm">$150</p>
        </div>
        <div className="flex flex-col items-center justify-between hover:bg-orange-600 p-5 bg-neutral-350 text-white rounded-lg ">
          <img src="./dunkh.png" className="w-20 h-20 rounded-lg" />
          <h1 className="text-center font-bold text-sm">Nike Dunk High</h1>
          <p className="text-sm">$165</p>
        </div>
        <div className="flex flex-col items-center justify-between hover:bg-orange-600 p-5 bg-neutral-350 text-white rounded-lg ">
          <img src="./dunkl.png" className="w-20 h-20 rounded-lg" />
          <h1 className="text-center font-bold text-sm">Nike Dunk Low</h1>
          <p className="text-sm">$200</p>
        </div>
      </div>
    </>
  );
}
