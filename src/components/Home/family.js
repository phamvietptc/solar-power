import React from "react";

const Family = () => {
    return (
        <>
            <div className=" duration-200 animate-opa ">
                <div className=" min-h-450px relative ">
                    <div className=" w-full max-w-950px left-1/2 -translate-x-1/2 absolute z-10 h-full before:absolute before:bg-black-rgba before:opacity-60 before:w-full before:h-full before:top-0 before:left-0 before:z-10 ">
                        <img src="images/home/solution2.jpeg" alt="image" className=" object-cover w-full h-full " />
                    </div>
                    <div className=" text-13px p-30px text-center relative z-20 text-white ">
                        <h5 className=" text-sm mb-10px font-goeLight font-normal uppercase ">GIẢI PHÁP</h5>
                        <h3 className=" text-15px uppercase mb-5 leading-tight font-normal ">ĐIỆN MẶT TRỜI CHO<br />HỘ GIA ĐÌNH</h3>
                        <p className=" mb-6 ">Giải pháp không chỉ mang đến nguồn năng lượng sạch thân thiện với môi trường mà còn tạo ra hiệu quả kinh tế cao cho gia đình Việt, tiết kiệm đáng kể chi phí tiền điện hằng tháng.</p>
                        <ul className=" justify-center list-none mt-0 -mr-38px mb-10 -ml-25px flex ">
                            <ul className=" list-none ">
                                <li className=" px-10px float-left inline-block ">
                                    <span className=" text-sm font-normal leading-5 uppercase ">SỬ DỤNG</span>
                                    <br />
                                    <span className=" text-lg font-segoe font-normal leading-normal ">30</span>
                                    <br />
                                    <span className=" text-base ">Năm</span>
                                </li>
                            </ul>
                            <ul className=" list-none ">
                                <li className=" px-10px float-left inline-block ">
                                    <span className=" text-sm font-normal leading-5 uppercase ">Hoàn vốn</span>
                                    <br />
                                    <span className=" text-lg font-segoe font-normal leading-normal ">5 – 6</span>
                                    <br />
                                    <span className=" text-base ">Năm</span>
                                </li>
                            </ul>
                        </ul>
                        <div className=" text-center ">
                            <a href="#" className=" text-white text-xs py-5px px-15px text-center min-w-150px font-normal leading-6 uppercase inline-block relative overflow-hidden z-40 rounded-25px bg-orange bg-transparent cursor-pointer before:absolute before:top-0 before:-left-3/4 before:z-20 before:w-1/2 before:h-full before:bg-rgba before:-skew-x-25 before:hover:animate-shine ">Xem chi tiết</a>
                            <span className=" top-17px hidden bg-white h-1px w-10px mx-auto cursor-pointer absolute right-5 "></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Family;