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
        <div className=" border-b border-solid border-slate-100 max-w-950px md:max-w-7xl mx-auto px-10px md:pb-10 before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 after:content-[''] after:table after:clear-both ">
          <div className=" w-full mb-30px float-left md:w-1/4 px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 ">
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
          <div className=" w-1/2 float-left md:w-1/4 mb-30px px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 ">
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
          <div className=" w-1/2 float-left md:w-1/4 mb-30px px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 ">
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
          <div className=" w-full mb-30px float-left md:w-1/4 px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 ">
            <div className=" font-segoe text-15px uppercase mb-15px ">
              NHẬN THÔNG TIN
            </div>
            <div>
              <p className=" mb-5 ">
                Đăng ký để nhận tin tức về sản phẩm và giải pháp mới nhất từ DAT
                Solar
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
        <div className=" pt-30px flex flex-wrap max-w-950px md:max-w-7xl mx-auto px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 ">
          <div className=" w-full mb-30px float-left md:w-1/4 px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 ">
            <div className=" font-segoe text-15px uppercase mb-15px ">
              Trụ sở chính
            </div>
            <div>
              <ul className=" text-sm leading-26px list-none ">
                <li className=" pl-25px relative ">
                  <a
                    href="https://www.google.com/maps"
                    className=" cursor-pointer text-white bg-transparent "
                  >
                    <svg
                      class=" absolute left-0 top-5px h-4 w-4 text-white"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <circle cx="12" cy="11" r="3" />{" "}
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                    <span>
                      Địa chỉ: B163, Khu phố 3, Nguyễn Văn Quá, P.Đông Hưng
                      Thuận, Q.12, TP.HCM
                    </span>
                  </a>
                </li>
                <li className=" pl-25px relative ">
                  <a
                    href="tel:(+84) 399 580 085"
                    className=" cursor-pointer text-white bg-transparent "
                  >
                    <svg
                      class="absolute left-0 top-5px h-4 w-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Điện thoại: (+84) 399 580 085</span>
                  </a>
                </li>
                <li className=" pl-25px relative ">
                  <a
                    href="mailto:info@abc.com.vn"
                    className=" cursor-pointer text-white bg-transparent "
                  >
                    <svg
                      class="absolute left-0 top-5px h-4 w-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>Email: info@abc.com.vn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-50 text-slate-700 text-xs tracking-wider after:content-[''] after:table after:clear-both ">
        <div className=" py-30px flex items-center max-w-950px md:max-w-7xl mx-auto px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 ">
          <div className=" text-left md:w-1/2 px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 after:clear-both ">
            <div>Copyright © 2020 - 2023.</div>
          </div>
          <div className=" text-right md:w-1/2 px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 after:clear-both ">
            <ul className=" list-none ">
              <li className=" border-r border-solid border-r-slate-500 inline-block px-10px ">
                <a href="#">Điều khoản sử dụng</a>
              </li>
              <li className=" inline-block pl-10px ">
                <a href="#">Chính sách bảo mật</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
