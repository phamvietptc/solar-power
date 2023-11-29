"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer>
      <div className=" text-sm pt-10 clear-both bg-blue-bottom text-white ">
        <div className=" border-b border-solid border-slate-100 max-w-950px mx-auto px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 after:content-[''] after:table after:clear-both ">
          <div className=" w-full mb-30px float-left px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 ">
            <div>
              <img src="/images/home/logo_footer.png" alt="logo" />
            </div>
            <div className=" uppercase ">Kết nối với DAT Group</div>
            <ul className=" text-sm leading-26px mt-5 -mx-5px flex flex-wrap list-none ">
              <li className=" mt-5px mx-5px ">
                <a
                  className=" block w-10 h-10 border border-solid border-slate-50 rounded-full leading-38px text-center text-white cursor-pointer "
                  href="https://zalo.me/"
                  target="_blank"
                >
                  <img
                    src="/images/home/icon_zalo.png"
                    alt="logo"
                    className=" w-27px h-10 object-contain mx-auto invert "
                  />
                </a>
              </li>
              <li className=" mt-5px mx-5px ">
                <a
                  className=" block w-10 h-10 border border-solid border-slate-50 rounded-full leading-38px text-center text-white cursor-pointer "
                  href="https://www.facebook.com/dienmattroi.hatay"
                  target="_blank"
                >
                  <img
                    src="/images/home/icon_zalo.png"
                    alt="logo"
                    className=" w-27px h-10 object-contain mx-auto invert "
                  />
                </a>
              </li>
              <li className=" mt-5px mx-5px ">
                <a
                  className=" block w-10 h-10 border border-solid border-slate-50 rounded-full leading-38px text-center text-white cursor-pointer "
                  href="https://zalo.me/1065881155531362552"
                  target="_blank"
                >
                  <img
                    src="/images/home/icon_zalo.png"
                    alt="logo"
                    className=" w-27px h-10 object-contain mx-auto invert "
                  />
                </a>
              </li>
              <li className=" mt-5px mx-5px ">
                <a
                  className=" block w-10 h-10 border border-solid border-slate-50 rounded-full leading-38px text-center text-white cursor-pointer "
                  href="https://zalo.me/1065881155531362552"
                  target="_blank"
                >
                  <img
                    src="/images/home/icon_zalo.png"
                    alt="logo"
                    className=" w-27px h-10 object-contain mx-auto invert "
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className=" w-1/2 float-left mb-30px px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 ">
            <div className=" font-segoe text-15px uppercase mb-15px ">
              Sản phẩm
            </div>
            <div>
              <ul className=" text-sm leading-26px list-none ">
                <li>
                  <a
                    href="#"
                    className=" uppercase text-white bg-transparent cursor-pointer "
                    target="_blank"
                    rel="nofollow"
                  >
                    Tấm pin
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" uppercase text-white bg-transparent cursor-pointer "
                    target="_blank"
                    rel="nofollow"
                  >
                    Bộ hoà lưới
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" uppercase text-white bg-transparent cursor-pointer "
                    target="_blank"
                    rel="nofollow"
                  >
                    Biến tần bơm
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" uppercase text-white bg-transparent cursor-pointer "
                    target="_blank"
                    rel="nofollow"
                  >
                    Hybrid inverter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" uppercase text-white bg-transparent cursor-pointer "
                    target="_blank"
                    rel="nofollow"
                  >
                    Solar Light
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" uppercase text-white bg-transparent cursor-pointer "
                    target="_blank"
                    rel="nofollow"
                  >
                    Pin lưu trữ điện
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-1/2 float-left mb-30px px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 ">
            <div className=" font-segoe text-15px uppercase mb-15px ">
              Giải pháp
            </div>
            <div>
              <ul className=" text-sm leading-26px list-none ">
                <li>
                  <a
                    href="#"
                    className=" uppercase text-white bg-transparent cursor-pointer "
                    target="_blank"
                    rel="nofollow"
                  >
                    ESCO
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" uppercase text-white bg-transparent cursor-pointer "
                    target="_blank"
                    rel="nofollow"
                  >
                    Hệ thống ĐMT hoà lưới
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" uppercase text-white bg-transparent cursor-pointer "
                    target="_blank"
                    rel="nofollow"
                  >
                    Hệ thống ĐMT có lưu trữ (Hybrid)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" uppercase text-white bg-transparent cursor-pointer "
                    target="_blank"
                    rel="nofollow"
                  >
                    Hệ thống ĐMT cho bơm nước
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" uppercase text-white bg-transparent cursor-pointer "
                    target="_blank"
                    rel="nofollow"
                  >
                    GIẢI PHÁP LƯU TRỮ ĐIỆN ESS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" uppercase text-white bg-transparent cursor-pointer "
                    target="_blank"
                    rel="nofollow"
                  >
                    Giải pháp chiếu sáng NLMT
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-full mb-30px float-left px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 ">
            <div className=" font-segoe text-15px uppercase mb-15px ">
              NHẬN THÔNG TIN
            </div>
            <div>
              <p className=" mb-5 ">
                Đăng ký để nhận tin tức về sản phẩm và giải pháp mới nhất từ DAT Solar
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" flex items-stretch bg-white p-2 "
              >
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  {...register("Email", { required: true })}
                  className=" w-full bg-transparent text-black focus:border-black focus:ring-0 border-0 border-b mr-2 pb-1 "
                />
                <input
                  type="submit"
                  value="gửi"
                  className=" bg-orange uppercase text-center text-white cursor-pointer font-medium rounded px-5 py-1 "
                />
              </form>
            </div>
          </div>
        </div>
        <div className=" pt-30px flex flex-wrap max-w-950px mx-auto px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 ">
          <div className=" w-full mb-30px float-left px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 ">
            <div className=" font-segoe text-15px uppercase mb-15px ">Trụ sở chính</div>
            <div>
              <ul className=" text-sm leading-26px list-none ">
                <li className=" pl-25px relative ">
                  <a href="https://www.google.com/maps" className=" pointer-events-none text-white bg-transparent "></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-50 text-slate-700 text-xs tracking-wider after:content-[''] after:table after:clear-both "></div>
    </footer>
  );
};

export default Footer;
