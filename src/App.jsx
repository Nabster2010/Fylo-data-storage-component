import "./App.css";

function App() {
  return (
    <main
      dir="ltr"
      className="min-h-screen w-full text-[14px] text-white flex justify-center items-center font-Raleway  bg-VeryDarkBlue bg-mobile md:bg-desktop  bg-no-repeat md:bg-bottom md:bg-contain bg-cover "
    >
      <div className="flex flex-col lg:px-36 max-w-[450px] md:max-w-full  md:px-16 px-4 w-full md:flex-row justify-center     md:items-end gap-6">
        <div className=" btn-wrapper   flex-1  md:flex-initial bg-DarkBlue p-8 space-y-8 rounded-lg   pr-28">
          <img src="/images/logo.svg" className=" mr-auto" alt="" />
          <div className="flex gap-3  ">
            <div className=" cursor-pointer bg-VeryDarkBlue rounded-lg flex jusify-center items-center p-2">
              <img className="w-8" src="/images/icon-document.svg" alt="" />
            </div>
            <div className=" cursor-pointer bg-VeryDarkBlue rounded-lg flex justify-center items-center p-2">
              <img className="w-8" src="/images/icon-folder.svg" alt="" />
            </div>
            <div className=" cursor-pointer bg-VeryDarkBlue rounded-lg flex jusify-center items-center p-2 p-2">
              <img className=" w-8" src="/images/icon-upload.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-DarkBlue   flex-1 group p-8  rounded-lg relative">
          <p className="text-PaleBlue text-center md:text-start">
            You’ve used <span className="font-bold">815 GB</span> of your
            storage
          </p>

          <div className="peer flex-1 mt-3 h-3 rounded-lg bg-VeryDarkBlue/70 relative ">
            <span
              style={{ width: "81.5%" }}
              className="absolute top-0 left-0 h-full rounded-lg bg-gradient-to-r from-GradientFrom to-GradientTo after:absolute after:top-0.5 after:right-0.5 after:w-2 after:h-2 after:bg-white after:rounded-full "
            ></span>
          </div>
          <p className="hidden group-hover:block absolute  right-8  bg-white text-VeryDarkBlue font-bold text-xl p-2.5 rounded-md -top-6  after:absolute  after:border-transparent md:after:border-[20px] md:after:-bottom-[40%] after:right-0 after:border-r-white ">
            185{" "}
            <span className="text-xs font-normal text-GrayishBlue">
              GB LEFT
            </span>
          </p>
          <div className="m-1 flex justify-between items-center text-PaleBlue">
            <span>0GB</span>
            <span>100GB</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
