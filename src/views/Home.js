import React from "react";

export default function Home() {
    return (
        <div className="bg-home-mobile bg-no-repeat bg-cover pt-nav lg:bg-home-tablet 2xl:bg-home-desktop ">
            <div className="max-w-[1110px] mx-auto w-4/5 min-h-nav-screen pb-12 lg:pb-[90px] 2xl:flex 2xl:items-end 2xl:pb-[131px]">
                <div className="flex flex-col items-center text-center text-white mt-6 mb-20 lg:mb-32 lg:mt-[106px] 2xl:mb-0 2xl:text-start 2xl:items-start">
                    <h5 className="uppercase mb-4 lg:mb-6">
                        So, you want to travel to
                    </h5>
                    <h1 className="uppercase mb-4 lg:mb-6">Space</h1>
                    <p className="text-xs-15 lg:text-sm leading-relaxed lg:max-w-[444px] 2xl:leading-loose 2xl:text-base">
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <button className="flex items-center justify-center bg-white rounded-full w-[150px] h-[150px] mx-auto lg:w-[242px] lg:h-[242px] 2xl:mr-0 2xl:w-[274px] 2xl:h-[274px]">
                    <span className="uppercase text-lg font-secondary tracking-1.25 lg:text-h4 lg:tracking-[2px]">
                        explore
                    </span>
                </button>
            </div>
        </div>
    );
}
