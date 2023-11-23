import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import { useDeviceSize } from "@/hooks/useScreenWidth";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

const Inverter = () => {

    const { width } = useDeviceSize();
    const breakpoint = 768;
    const spaceBetween = width < breakpoint ? 0 : 40;
    const slidesPerView = width < breakpoint ? 1 : 2;
    const slider = [
        {
            image: "/images/home/panel_solar.png",
            product: "HiKu",
            introduce: "Tấm pin năng lượng mặt trời Canadian 450W",
            wattage: "450W",
            manufacturer: "Canadian Solar",
            link: "/",
        },
        {
            image: "/images/home/panel_solar.png",
            product: "HiKu",
            introduce: "Tấm pin năng lượng mặt trời Canadian 450W",
            wattage: "450W",
            manufacturer: "Canadian Solar",
            link: "/",
        }, {
            image: "/images/home/panel_solar.png",
            product: "HiKu",
            introduce: "Tấm pin năng lượng mặt trời Canadian 450W",
            wattage: "450W",
            manufacturer: "Canadian Solar",
            link: "/",
        }, {
            image: "/images/home/panel_solar.png",
            product: "HiKu",
            introduce: "Tấm pin năng lượng mặt trời Canadian 450W",
            wattage: "450W",
            manufacturer: "Canadian Solar",
            link: "/",
        },
    ];

    return (
        <>
            <div className=" animate-opa duration-200 ">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    scrollbar={{ draggable: true }}
                    spaceBetween={spaceBetween}
                    slidesPerView={slidesPerView}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {slider.map((item, index) => (
                        <SwiperSlide className=" !w-1/2 " role="tablist" aria-label={index} key={index}>
                            <div className=" relative overflow-hidden ">
                                <div className=" opacity-100 w-3150px relative top-0 left-0 mx-auto before:table before:content-[''] select-none ">
                                    <div className=" w-175px float-left h-full min-h-1px ">
                                        <div className=" w-full flex justify-center ">
                                            <div className=" flex flex-wrap min-h-150px p-3 rounded-10px border border-solid border-slate-50 bg-white my-2px shadow-rgba08 relative ">
                                                <div className=" w-full float-left text-center ">
                                                    <img src={item.image} className=" h-20 max-h-150px inline-block " alt="image" />
                                                </div>
                                                <div className=" w-full pt-10px text-center float-left ">
                                                    <h3 className=" text-lg text-slate-900 leading-5 font-segoe mb-10px font-normal normal-case ">{item.product}</h3>
                                                    <h4 className=" line-clamp-2 h-10 text-13px text-slate-900 leading-5 uppercase mb-15px ">{item.introduce}</h4>
                                                    <p className=" text-13px text-slate-900 leading-5 ">Công suất: <b>{item.wattage}</b></p>
                                                    <p className=" text-13px text-slate-900 leading-5 ">Hãng: <b>{item.manufacturer}</b></p>
                                                </div>
                                                <a href="#" className=" absolute left-0 top-0 w-full h-full bg-transparent "></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Inverter;