import React from "react";

const Agriculture = () => {
    return (
        <>
            <div className=" duration-200 animate-opa ">
                <div className=" min-h-450px relative ">
                    <div className=" w-full max-w-950px left-1/2 -translate-x-1/2 absolute z-10 h-full before:absolute before:bg-black-rgba before:opacity-60 before:w-full before:h-full before:top-0 before:left-0 before:z-10 ">
                        <img src="images/home/solution3.jpeg" alt="image" className=" object-cover w-full h-full " />
                    </div>
                    <div className=" md:text-left md:pt-140px md:pl-140px text-13px p-30px text-center relative z-20 text-white ">
                        <h5 className=" md:text-lg text-sm mb-10px font-goeLight font-normal uppercase ">GIẢI PHÁP</h5>
                        <h3 className=" md:text-3xl text-15px uppercase mb-5 leading-tight font-normal ">ĐIỆN MẶT TRỜI CHO<br />NÔNG NGHIỆP</h3>
                        <p className=" md:text-17px mb-6 ">Ứng dụng cho lĩnh vực nông nghiệp, đảm bảo nguồn nước cho việc tưới tiêu, các trạm bơm cấp nước</p>
                        <ul className=" md:justify-normal md:text-left justify-center list-none mt-0 -mr-38px mb-10 -ml-25px flex ">
                            <ul className=" list-none ">
                                <li className=" md:pr-38px md:pl-25px px-10px float-left inline-block ">
                                    <span className=" text-sm font-normal leading-5 uppercase ">SỬ DỤNG</span>
                                    <br />
                                    <span className=" md:text-32px text-lg font-segoe font-normal leading-normal ">30</span>
                                    <br />
                                    <span className=" text-base ">Năm</span>
                                </li>
                            </ul>
                            <ul className=" list-none ">
                                <li className=" md:pr-38px md:pl-25px px-10px float-left inline-block ">
                                    <span className=" text-sm font-normal leading-5 uppercase ">Hoàn vốn</span>
                                    <br />
                                    <span className=" md:text-32px text-lg font-segoe font-normal leading-normal ">5 – 6</span>
                                    <br />
                                    <span className=" text-base ">Năm</span>
                                </li>
                            </ul>
                        </ul>
                        <div className=" md:text-left text-center ">
                            <a href="/agriculture" className=" md:pt-25px md:pb-6 md:px-45px md:min-w-120px md:text-base text-white text-xs py-5px px-15px text-center min-w-150px font-normal leading-6 uppercase inline-block relative overflow-hidden z-40 rounded-25px bg-orange bg-transparent cursor-pointer before:absolute before:top-0 before:-left-3/4 before:z-20 before:w-1/2 before:h-full before:bg-rgba before:-skew-x-25 before:hover:animate-shine ">Xem chi tiết</a>
                            <span className=" md:top-6 top-17px hidden bg-white h-1px w-10px mx-auto cursor-pointer absolute right-5 "></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Agriculture;