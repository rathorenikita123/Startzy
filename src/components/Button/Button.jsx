export const Button = ({ text, style }) => {
  return (
    <div
      className={`w-[10rem] h-[3.43rem] border border-[rgba(235, 236, 236, 0.60)] rounded-lg flex justify-center items-center text-white ${style}`}
    >
      <p>{text}</p>
    </div>
  );
};
