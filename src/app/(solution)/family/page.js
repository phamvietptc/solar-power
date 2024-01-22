import React from "react";

const SolutionFamily = () => {
  return (
    <>
      <section className=" w-screen relative -ml-50vw left-1/2 overflow-hidden bg-no-repeat bg-cover ">
        <div className=" flex-wrap bg-blue-top flex ">
          <div className=" md:w-1/2 md:bg-blue-top md:m-0 md:py-20 my-10 w-full ">
            <div className=" md:pr-100px md:ml-calc-1200px text-center px-15px ">
              <h2 className=" md:text-40px md:text-left text-center text-white text-xl font-segoe font-normal uppercase mb-5 leading-tight ">
                GIẢI PHÁP
                <br />
                cho Hộ gia đình
              </h2>
              <div className=" text-15px text-justify text-white text-sm font-normal leading-22px ">
                <p className=" text-justify mb-6 ">
                  Hệ thống điện năng lượng mặt trời hòa lưới cho hộ gia đình có
                  tấm pin hấp thu ánh sáng mặt trời chuyển hóa thành dòng điện 1
                  chiều; dòng điện này sẽ được bộ inverter chuyển thành nguồn
                  điện sạch để cấp cho các thiết bị điện, giúp nhiều gia đình
                  Việt tiết kiệm đáng kể chi phí tiền điện hằng tháng.
                </p>
                <p className=" text-justify mb-6 ">
                  Giải pháp không chỉ mang đến nguồn năng lượng sạch thân thiện
                  với môi trường mà còn tạo ra hiệu quả kinh tế cao cho gia
                  đình.
                </p>
                <p className=" text-justify mb-6 ">
                  Hệ thống điện mặt trời không chiếm quá nhiều diện tích nên chỉ
                  cần một khoảng không gian nhỏ trên mái nhà hoặc sân thượng
                  (không bị che bóng) là đã có thể lắp đặt, an tâm hưởng nhiều
                  lợi ích thiết thực từ nguồn năng lượng xanh.
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
          <div className=" md:w-1/2 w-full ">
            <div className=" md:h-full md:float-right float-left h-auto relative w-full object-cover ">
              <img
                className=" h-full "
                src="/images/family/about-us.jpeg"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap bg-white ">
          <div className=" md:w-1/2 w-full md:order-none order-2 relative before:bg-shadow-video before:absolute before:left-0 before:top-0 before:w-full before:h-full before:content-[''] before:z-20 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-111px after:h-111px after:bg-[url('/images/family/play-button-video.png')] after:content-[''] after:z-20 after:bg-contain ">
            <img
              className=" w-full h-full object-cover float-left "
              src="/images/family/put-data.jpeg"
              alt="image"
            />
            <a
              className=" absolute left-0 top-0 w-full h-full z-50 "
              href="https://www.youtube.com/watch?v=Pqd9StrGdvQ"
            ></a>
          </div>
          <div className=" md:w-1/2 text-center w-full ">
            <div className=" md:py-50px md:pl-150px md:mr-calc-1200px py-30px px-15px ">
              <div className=" md:my-0 bg-transparent text-lef my-50px mx-auto ">
                <div className=" text-left mb-47px ">
                  <h3 className=" md:text-25px md:mb-45px text-xl mb-30px text-slate-900 leading-tight font-normal uppercase tracking-wide ">Dự toán hệ thống</h3>
                  <div>
                    <h4 className=" text-slate-900 text-base mb-10px pl-5px ">Số tiền điện trung bình mỗi tháng</h4>
                    <input className=" bg-white mb-15px h-45px rounded-23px text-slate-700 leading-normal font-normal text-base border-none py-10px px-15px max-w-full " type="text" placeholder="Số tiền điện" tabIndex={11}></input>
                  </div>
                </div>
                <a
                  href="#"
                  className=" md:float-left md:mt-5 md:py-13px md:px-45px md:min-w-120px md:text-base text-white text-xs py-5px px-15px text-center min-w-150px font-normal leading-6 uppercase inline-block relative overflow-hidden z-40 rounded-25px bg-orange bg-transparent cursor-pointer before:absolute before:top-0 before:-left-3/4 before:z-20 before:w-1/2 before:h-full before:bg-rgba before:-skew-x-25 before:hover:animate-shine "
                >
                  Xem kết quả
                  <span className=" md:bg-white md:h-1px md:w-10px md:mx-auto md:cursor-pointer md:absolute md:top-6 md:right-5  md:before:-right-2px md:before:-bottom-2px md:before:-rotate-45 md:before:content-[''] md:before:bg-white md:before:absolute md:before:h-1px md:before:w-6px md:after:-right-2px md:after:-top-2px md:after:rotate-45 md:after:content-[''] md:after:bg-white md:after:absolute md:after:h-1px md:after:w-6px "></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className=" md:pt-20 md:pb-100px pt-10 w-screen relative -ml-50vw left-1/2 overflow-hidden bg-no-repeat bg-cover ">
        <div className=" md:max-w-7xl max-w-950px mx-auto px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:h-0 before:w-0 after:clear-both ">
          <h2 className=" md:text-40px mb-15px text-center text-xl text-slate-900 font-segoe font-normal uppercase leading-tight ">CÁC GÓI GIẢI PHÁP</h2>
          <h3 className=" md:text-lg md:mb-45px text-sm mb-5 text-slate-900 uppercase text-center leading-tight font-normal ">Lựa chọn hệ thống phù hợp với nhu cầu của bạn</h3>
          <div></div>
        </div>
      </section> */}
    </>
  );
};

export default SolutionFamily;
