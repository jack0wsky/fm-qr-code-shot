import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col bg-white w-full max-w-min rounded-3xl px-4 pt-4 pb-8 shadow-2xl shadow-dark-blue/20">
        <div className="bg-white w-[280px] h-[280px] rounded-xl overflow-hidden">
          <img className='w-full h-full' src="/image-qr-code.png" alt="qr code" />
        </div>
        <h1 className="text-dark-blue font-bold text-xl my-5 px-2">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-grey-blue font-normal px-3 text-[15px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
