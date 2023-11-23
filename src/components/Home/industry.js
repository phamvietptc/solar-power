import React from "react";

const Industry = () => {
    return (
        <>
            <div className=" duration-200 animate-opa ">
                <div className=" min-h-450px relative ">
                    <div className=" w-full max-w-950px left-1/2 -translate-x-1/2 absolute z-10 h-full before:absolute before:bg-black-rgba before:opacity-60 before:w-full before:h-full before:top-0 before:left-0 before:z-10 ">
                        <img src="images/home/solution1.jpeg" alt="image" className=" object-cover w-full h-full " />
                    </div>
                    <div className=" text-13px p-30px text-center relative z-20 text-white ">
                        <h5 className=" text-sm mb-10px font-goeLight font-normal uppercase ">GIẢI PHÁP</h5>
                        <h3 className=" text-15px uppercase mb-5 leading-tight font-normal ">ĐIỆN MẶT TRỜI CHO<br />CÔNG NGHIỆP</h3>
                        <p className=" mb-6 ">Điện mặt trời giúp doanh nghiệp tiết kiệm đến hàng tỷ đồng tiền điện mỗi năm, nâng cao uy tín, giá trị thương hiệu, hướng đến hình ảnh doanh nghiệp xanh thân thiện với môi trường.</p>
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
                                    <span className=" text-lg font-segoe font-normal leading-normal ">4 – 5</span>
                                    <br />
                                    <span className=" text-base ">Năm</span>
                                </li>
                            </ul>
                        </ul>
                        <ul className=" flex flex-wrap w-full justify-center list-none ">
                            <li className=" mx-2px flex items-center p-10px float-left rounded-15px bg-white text-slate-900 relative cursor-pointer ">
                                <div className=" w-30px float-left inline-block mr-15px ">
                                    <img src="/images/home/ESCO.png" alt="icon" />
                                </div>
                                <div className=" float-left inline-block ">
                                    <h5 className=" text-xs font-goeLight font-normal uppercase ">Giải pháp</h5>
                                    <h4 className=" font-segoe uppercase ">ESCO</h4>
                                </div>
                                <a href="#" className=" absolute left-0 top-0 w-full h-full visited:text-orange-600 "></a>
                            </li>
                        </ul>
                        <div className=" text-center "></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Industry;