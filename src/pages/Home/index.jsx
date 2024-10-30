import React from "react";

const Home = () => {
  const categories = [
    {
      category: "Reaction",
      score: 80,
      icon: "/assets/images/icon-reaction.svg",
    },
    {
      category: "Memory",
      score: 92,
      icon: "/assets/images/icon-memory.svg",
    },
    {
      category: "Verbal",
      score: 61,
      icon: "/assets/images/icon-verbal.svg",
    },
    {
      category: "Visual",
      score: 72,
      icon: "/assets/images/icon-visual.svg",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center sm:h-[auto] md:h-[100vh] ">
        <div className="container mx-auto">
          <div className="md:w-9/12 lg:w-6/12 mx-auto">
            <div className="flex flex-col md:flex-row bg-white md:shadow-lg min-h-[400px] rounded-[12px]">
              {/* Left Section - Result */}
              <div className="md:w-6/12">
                <div className="flex flex-col items-center justify-center bg-custom-gradient h-full rounded-b-[24px] md:rounded-[12px] p-[40px]">
                  <h2 className="text-[20px] text-white mb-[20px]">
                    Your Result
                  </h2>
                  <div className="w-[170px] h-[170px] flex items-center flex-col gap-2 justify-center text-white bg-[#0000001a] leading-[1] text-[60px] rounded-[99px] font-[700] mb-5">
                    76
                    <span className="text-[#ffffff4d] text-[16px]">of 100</span>
                  </div>
                  <p className="text-[24px] text-[#fff] font-semibold mb-2">
                    Great
                  </p>
                  <p className="text-center text-[#ffffff7d] text-[16px]">
                    You scored higher than 65% of the people who have taken
                    these tests.
                  </p>
                </div>
              </div>

              {/* Right Section - Summary */}
              <div className="md:w-6/12">
                <div className="flex flex-col justify-between  h-full 1024:p-[20px] lg:p-[40px]">
                  <h3 className="text-[22px] font-bold text-gray-700 mb-5">
                    Summary
                  </h3>
                  <ul className="space-y-4">
                    {categories.map((item, i) => {
                      return (
                        <>
                          <li
                            className={`flex justify-between items-center text-gray-600 p-3 rounded-[8px] ${
                              i == 0
                                ? "bg-[#fff6f5]"
                                : i == 1
                                ? "bg-[#fffbf2]"
                                : i == 2
                                ? "bg-[#f2fbfa]"
                                : "bg-[#f3f3fd]"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <img
                                className="h-[20px]"
                                src={item.icon}
                                alt=""
                              />
                              <div
                                className={` text-[16px] font-[500] ${
                                  i == 0
                                    ? "text-[#F55]"
                                    : i == 1
                                    ? "text-[#FFB21E]"
                                    : i == 2
                                    ? "text-[#00BB8F]"
                                    : "text-[#1125D6]"
                                }`}
                              >
                                {item.category}
                              </div>
                            </div>
                            <span className="font-semibold text-[#9e9b9c]">
                              <span className="text-[#333646]">
                                {item.score}
                              </span>{" "}
                              / 100
                            </span>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                  <button className="mt-6 bg-[#303b59] text-white font-bold text-[18px] py-3 px-6 rounded-[90px] transition-all duration-500 ease-in-out hover:bg-custom-gradient hover:scale-105">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
