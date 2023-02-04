import { loader } from "../assets";

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center felx-col">
    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className="font-bold text-2x1 text-white mt-2">
      {title || "Loading..."}
    </h1>
  </div>
);

export default Loader;
