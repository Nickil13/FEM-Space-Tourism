import React from "react";

export default function Home() {
    return (
        <div className="bg-home-mobile min-h-screen bg-no-repeat bg-cover pt-nav px-6">
            <div className="flex flex-col items-center mt-6 text-white">
                <h5 className=" uppercase mb-4 tracking-2.7">
                    So, you want to travel to
                </h5>
                <h1 className="text-h1-mobile uppercase mb-4">Space</h1>
                <p className="mb-20 text-xs-15 leading-relaxed text-center">
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
            </div>
            <div className="flex items-center justify-center bg-white rounded-full w-[150px] h-[150px] mb-12 mx-auto">
                <span className="uppercase text-lg font-secondary tracking-1.25">
                    explore
                </span>
            </div>
        </div>
    );
}
