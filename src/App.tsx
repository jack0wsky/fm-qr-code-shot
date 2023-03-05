import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col bg-white w-full max-w-min rounded-3xl px-4 pt-4 pb-6 shadow-2xl shadow-dark-blue/20">
        <div className="bg-white w-[300px] h-[300px] rounded-xl overflow-hidden">
          <img className='w-full h-full' src="/image-qr-code.png" alt="qr code" />
        </div>
        <h1 className="text-dark-blue font-bold text-2xl my-4 px-2">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-grey-blue font-normal px-3">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
