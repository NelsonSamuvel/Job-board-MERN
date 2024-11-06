import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed flex justify-center items-center bg-stone-800/30 inset-0 z-50">
      <SyncLoader color="#0D92F4" size={10} />
    </div>
  );
};

export default Loader;
