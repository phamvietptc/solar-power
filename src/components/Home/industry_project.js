import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import classNames from 'classnames';
import { useDeviceSize } from "@/src/components/Hooks/useScreenWidth";
import 'swiper/css';
import 'swiper/css/pagination';

const Industry = () => {

    const { width } = useDeviceSize();
    const breakpoint = 768;
    const spaceBetween = width < breakpoint ? 0 : 40;
    const slidesPerView = width < breakpoint ? 1 : 2;
    const slider = [
        {
            link: "/",
            project: "MAY NHÀ BÈ",
            image: "/images/home/project1.jpeg",
            date: "2020",
            performance: "993 kWp",
            output: "1428 MWh",
        },
        {
            link: "/",
            project: "MAY NHÀ BÈ",
            image: "/images/home/project1.jpeg",
            date: "2020",
            performance: "993 kWp",
            output: "1428 MWh",
        },
        {
            link: "/",
            project: "MAY NHÀ BÈ",
            image: "/images/home/project1.jpeg",
            date: "2020",
            performance: "993 kWp",
            output: "1428 MWh",
        },
        {
            link: "/",
            project: "MAY NHÀ BÈ",
            image: "/images/home/project1.jpeg",
            date: "2020",
            performance: "993 kWp",
            output: "1428 MWh",
        },
    ];

    return (
        <>
            <div>
                <div>
                    {/* <div className=" relative select-none touch-pan-y " > */}
                    <Swiper
                        modules={[Pagination]}
                        pagination={true}
                        scrollbar={{ draggable: true }}
                        spaceBetween={spaceBetween}
                        slidesPerView={slidesPerView}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {slider.map((item, index) => (
                            <SwiperSlide role="group" aria-label={index} key={index}>
                                <div className=" opacity-100 w-5460px relative top-0 left-0 mx-auto before:table after:clear-both after:table ">
                                    <div
                                        className={classNames(
                                            'w-350px opacity-100 z-50 my-0 mx-5 pt-0 pb-50px px-0 relative float-left h-full min-h-1px ',
                                            {
                                                'scale-100': index,
                                                'scale-120': !index,
                                            },
                                        )}
                                    >
                                        <div className=" w-full inline-block relative overflow-hidden before:content-[''] before:bg-black-top before:opacity-70 before:left-0 before:bottom-0 before:h-314px before:w-full before:absolute before:z-0 before:rounded-10px ">
                                            <div className=" relative before:opacity-50 before:content-[''] before:absolute before:w-full before:h-314px before:bg-black-top before:bottom-0 before:left-0 before:rounded-10px ">
                                                <img className=" w-full rounded-10px " src={item.image} alt="image" />
                                            </div>
                                            <div className=" bottom-0 absolute w-full text-center ">
                                                <div className=" top-0 opacity-100 relative ">
                                                    <h5 className=" text-13px uppercase font-goeLight font-normal text-white ">Dự án</h5>
                                                    <h4 className=" text-15px px-5 uppercase font-segoe font-normal leading-normal text-white mb-5 ">{item.project}</h4>
                                                </div>
                                                <ul className=" top-0 opacity-100 list-none -mx-7 inline-block relative ">
                                                    <li className=" px-10px float-left ">
                                                        <div className=" mb-10px w-full flex justify-center float-none relative top-10px ">
                                                            <img src="/images/home/icon_clock.png" alt="icon" className=" h-5 " />
                                                        </div>
                                                        <div className=" text-center inline-block float-none ">
                                                            <span className=" text-xs font-goeLight text-white ">Năm thi công</span>
                                                            <h5 className=" text-15px font-segoe text-white ">{item.date}</h5>
                                                        </div>
                                                    </li>
                                                    <li className=" px-10px float-left ">
                                                        <div className=" mb-10px w-full flex justify-center float-none relative top-10px ">
                                                            <img src="/images/home/icon_performance.png" alt="icon" className=" h-5 " />
                                                        </div>
                                                        <div className=" text-center inline-block float-none ">
                                                            <span className=" text-xs font-goeLight text-white ">Công suất</span>
                                                            <h5 className=" text-15px font-segoe text-white ">{item.performance}</h5>
                                                        </div>
                                                    </li>
                                                    <li className=" px-10px float-left ">
                                                        <div className=" mb-10px w-full flex justify-center float-none relative top-10px ">
                                                            <img src="/images/home/icon_output.png" alt="icon" className=" h-5 " />
                                                        </div>
                                                        <div className=" text-center inline-block float-none ">
                                                            <span className=" text-xs font-goeLight text-white ">Sản lượng/năm</span>
                                                            <h5 className=" text-15px font-segoe text-white ">{item.output}</h5>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default Industry;