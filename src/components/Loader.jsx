import { ProgressBar } from "react-loader-spinner";

export const Loader = ({ style }) => {
  return (
    <div className="flex items-center justify-center w-full h-[64vh]">
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
        className={`${style}`}
      />
    </div>
  );
};
