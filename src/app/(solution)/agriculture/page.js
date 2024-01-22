import React from "react";

const SolutionAgriculture = () => {
  return (
    <>
      <section className=" w-screen relative -ml-50vw left-1/2 overflow-hidden bg-no-repeat bg-cover ">
        <div className=" flex-wrap bg-blue-top flex ">
          <div className=" md:w-45% md:bg-blue-top md:m-0 md:py-20 my-10 w-full ">
            <div className=" md:pr-100px md:ml-calc-1200px text-center px-15px ">
              <h2 className=" md:text-40px md:text-left text-center text-white text-xl font-segoe font-normal uppercase mb-5 leading-tight ">
                Càng nắng to – Càng nhiều nước
              </h2>
              <div className=" text-15px text-justify text-white text-sm font-normal leading-22px ">
                <p className=" text-justify mb-6 ">
                  Hệ thống điện mặt trời cho bơm nước cung cấp nguồn điện sạch
                  để phục vụ hoạt động bơm tưới cây trồng. Hệ thống tận dụng
                  nguồn điện từ mặt trời để điều khiển trực tiếp máy bơm nước.
                  Nước được bơm từ sông, suối, ao, hồ, giếng để tưới cho cây
                  trồng hoặc được dự trữ vào các hồ chứa để sẵn sàng cho việc
                  tưới tiêu vào bất kỳ thời điểm nào trong ngày.
                </p>
              </div>
              <a
                href="/"
                className=" md:float-left md:mt-5 md:py-13px md:px-45px md:min-w-120px md:text-base text-white text-xs py-5px px-15px text-center min-w-150px font-normal leading-6 uppercase inline-block relative overflow-hidden z-40 rounded-25px bg-orange bg-transparent cursor-pointer before:absolute before:top-0 before:-left-3/4 before:z-20 before:w-1/2 before:h-full before:bg-rgba before:-skew-x-25 before:hover:animate-shine "
              >
                nhận tư vấn và báo giá
                <span className=" md:bg-white md:h-1px md:w-10px md:mx-auto md:cursor-pointer md:absolute md:top-6 md:right-5  md:before:-right-2px md:before:-bottom-2px md:before:-rotate-45 md:before:content-[''] md:before:bg-white md:before:absolute md:before:h-1px md:before:w-6px md:after:-right-2px md:after:-top-2px md:after:rotate-45 md:after:content-[''] md:after:bg-white md:after:absolute md:after:h-1px md:after:w-6px "></span>
              </a>
            </div>
          </div>
          <div className=" md:w-55% w-full ">
            <div className=" md:h-full md:float-right float-left h-auto relative w-full object-cover ">
              <img
                className=" h-full "
                src="/images/agriculture/agriculture.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionAgriculture;
