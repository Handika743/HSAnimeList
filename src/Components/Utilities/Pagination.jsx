const Pagination = (props) => {
  const { page, lastPage, SetPage } = props;

  const ScrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleFirstPage = () => {
    SetPage(1);
    ScrollTop();
  };
  const handleLastPage = () => {
    SetPage(lastPage);
    ScrollTop();
  };
  const handleNextPage = () => {
    SetPage((prevState) => prevState + 1);
    ScrollTop();
  };
  const handlePrevPage = () => {
    SetPage((prevState) => prevState - 1);

    ScrollTop();
  };

  return (
    <>
      <div className="flex justify-center items-center  text-secondary  md:w-[50%] lg:w-[35%]">
        <div className="flex justify-center items-center py-3  gap-4 text-color-dark text-2xl bg-color-accent w-full rounded-lg mt-5 ">
          {page <= 1 ? null : (
            <>
              <button
                className="transition-all hover:bg-color-accent   p-3 rounded-md text-sm lg:text-xl md:text-base bg-white"
                onClick={handleFirstPage}
              >
                First
              </button>

              <button
                className="transition-all hover:bg-color-accent  p-3 rounded-md  text-sm lg:text-xl md:text-base bg-white"
                onClick={handlePrevPage}
              >
                {"<"}
              </button>
            </>
          )}
          <p className="transition-all   p-3 rounded-md text-sm sm:text-sm md:text-md lg:text-xl md:text-base bg-white">
            {page} of {lastPage}
          </p>
          {page >= lastPage ? null : (
            <>
              <button
                className="transition-all hover:bg-color-accent p-3 rounded-md  text-sm lg:text-xl md:text-base bg-white"
                onClick={handleNextPage}
              >
                {">"}
              </button>
              <button
                className=" hover:bg-color-accent bg-white rounded-md p-3  text-sm lg:text-xl md:text-base "
                onClick={handleLastPage}
              >
                Last
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Pagination;
