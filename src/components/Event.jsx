import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Event = ({title}) => {
  return (
    <section className=" mx-[1rem] rounded-lg mb-[4rem]">
      <div className="mt-[6rem] mb-[4rem] items-center md:flex gap-2 ">
        <h1 className="mb-3 text-[2rem] font-bold">{title}</h1>
        <div className="w-[77%] h-[1px] bg-slate-400"></div>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center justify-between gap-5 bg-green-300 p-8 rounded-lg w-[100%]">
          <div>
            <h1 className="text-4xl font-bold">23</h1>
            <p>SEP</p>
          </div>
          <div>
            <div className="flex gap-3 items-center">
              <h1 className="capitalize">next event</h1>
              <div className="w-[60px] h-[1px] bg-black"></div>
            </div>
            <h1 className="text-2xl font-bold">
              Say no to plastic usage and save planet
            </h1>
          </div>
          <span className="text-black text-[1.2rem] bg-white rounded-[50%] p-5">
            <Link to="/event">
              <AiOutlineArrowRight />
            </Link>
          </span>
        </div>
        <div className="flex items-center justify-between gap-5 bg-green-300 p-8 rounded-lg w-[100%]">
          <div>
            <h1 className="text-4xl font-bold">25</h1>
            <p>SEP</p>
          </div>
          <div>
            <div className="flex gap-3 items-center">
              <h1 className="capitalize">next event</h1>
              <div className="w-[60px] h-[1px] bg-black"></div>
            </div>
            <h1 className="text-2xl font-bold">Weekly cleaning program</h1>
          </div>
          <span className="text-black text-[1.2rem] bg-white rounded-[50%] p-5">
            <Link to="/event">
              <AiOutlineArrowRight />
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

Event.defaultProps = {
  title: "Our Events",
};


export default Event;
