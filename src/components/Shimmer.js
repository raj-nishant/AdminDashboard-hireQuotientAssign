let myArr = new Array(10).fill("");

const Shimmer = () => {
  return (
    <>
      <div className="mt-14">
        {myArr.map((each, index) => (
          <div
            key={index}
            className="w-full h-10 ml-2 mb-3 border rounded-md shadow-md bg-zinc-300"
          ></div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
