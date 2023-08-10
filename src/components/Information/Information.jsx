export const Info = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col items-center ">
        <p className="text-lg font-bold text-white mr-14">VEDL Looks Weak</p>
        <p className="text-white text-sm text-[#EBECEC4D]">
          28 Jan 2023 | 13:18|{" "}
          <span className="text-[#01C36D]">By: Gaurav S.</span>
        </p>
      </div>
      <div className="flex items-center justify-evenly w-[3.3rem] h-[1.5rem] bg-[#1B3C37] rounded-2xl">
        {/* a dot  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5"
          height="6"
          viewBox="0 0 5 6"
          fill="none"
        >
          <circle cx="2.46512" cy="2.62918" r="2.46512" fill="#01C36D" />
        </svg>

        <p className="text-[#01C36D] ">Live</p>
      </div>
    </div>
  );
};
