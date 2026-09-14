import Img from "../assets/banner-stack.png"

const Banner = () => {
  return (
    <div className="container  mx-auto flex items-center justify-between gap-80">
      <div className="flex flex-col justify-start ">
        <h1 className="text-[60px] font-extrabold leading-[60px]">
          Build Your Ideal <br />
          <span className="  bg-linear-to-r from-[#FE5525] via-[#E22B66] to-[#8438E4] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-[18px] mt-8 text-slate-600">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-15 flex gap-4">
          <button className="rounded-[10px] bg-linear-to-r from-[#FE5525] to-[#e22bb4]  text-transparent px-4 py-2 text-[14px] font-semibold text-white transition ">
            Explore Technologies
          </button>
          <button className="rounded-[10px] border border-slate-300 px-11 py-2  text-[14px] font-semibold text-slate-700 transition  ">
            Learn More
          </button>
        </div>
      </div>

      
        <img src={Img} alt="Development stack illustration" className="w-[1100px]"/>
      
    </div>
  )
}

export default Banner;