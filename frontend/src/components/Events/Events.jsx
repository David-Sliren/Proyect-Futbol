import { getDateUTC } from "../../utils/Date";
import Eimg from "./Eimg";

function Events({
  img1 = "",
  img2 = "",
  alt1 = "",
  alt2 = "",
  markerHome = "",
  markerVisit = "",
  date = "",
}) {
  return (
    <article className=" relative bg-gradient-to-bl from-zinc-600 to-green-600 p-6 sm:p-10 rounded-xl w-full text-white flex items-center justify-center gap-6 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-8 bg-zinc-400 xl:">
        <span className="flex gap-4 justify-center items-center text-lg text-black font-bold">
          <p>{getDateUTC(date)}</p>
        </span>
      </div>
      <Eimg img={img1} alt={alt1} />
      <div className="flex gap-4">
        <span className="text-4xl text-shadow-lg font-semibold">
          {markerHome}
        </span>
        <span className="text-4xl font-bold">
          {markerHome || markerVisit ? "-" : "VS"}
        </span>
        <span className=" text-4xl text-shadow-lg font-semibold">
          {markerVisit}
        </span>
      </div>
      <Eimg img={img2} alt={alt2} />
    </article>
  );
}

export default Events;
