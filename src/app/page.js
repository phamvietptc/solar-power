import { allBlogs } from "contentlayer/generated";
// import HomeCoverSection from "../components/Home/HomeCoverSection";
// import FeaturedPosts from "../components/Home/FeaturedPosts";
// import RecentPosts from "../components/Home/RecentPosts";
import Tabs from "@/src/components/Home/tabs";
import TabsProject from "@/src/components/Home/tabsProject";
import TabsProduct from "@/src/components/Home/tabsProduct";

export default function Home() {
  console.log(allBlogs);
  return (
    <main>
      {/* <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} /> */}

      {/* banner */}
      <section className=" max-h-183px md:max-h-none overflow-hidden relative h-auto md:h-calc-28px w-screen -ml-50vw left-1/2 mb-0 bg-no-repeat bg-cover ">
        <div className=" relative overflow-hidden ">
          <div className=" opacity-100 w-390px md:w-1440px relative mx-auto top-0 left-0 ">
            <div className=" w-390px md:w-1440px relative left-0 top-0 z-40 opacity-100 float-left h-full min-h-1px ">
              <div className=" w-full h-full inline-block relative overflow-hidden ">
                <img src="/images/home/banner.jpeg" />
                <div className=" max-w-950px md:max-w-7xl mx-auto px-10px ">
                  <div className=" absolute top-1/2 w-full left-0 text-center -translate-y-1/2 md:-mt-35px ">
                    <h2></h2>
                    <a
                      href="#"
                      className=" leading-3 md:leading-6 text-sm md:text-base py-5px md:py-13px px-15px md:px-11 text-white text-center min-w-120px font-normal uppercase inline-block relative overflow-hidden z-40 rounded-3xl bg-gradient-to-r bg-transparent from-orange-600 to-orange-400 cursor-pointer "
                    >
                      Khám phá hệ sinh thái năng lượng Solarht
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video */}
      <section className=" md:-mt-88px pt-30px md:pt-0 relative z-20 md:z-40 w-screen -ml-50vw left-1/2 overflow-hidden bg-no-repeat bg-cover ">
        <div className=" max-w-950px md:max-w-7xl mx-auto px-10px md:before:content-none before:content-['.'] before:block before:overflow-hidden before:invisible after:clear-both ">
          <div className=" px-10px md:before:content-none before:content-['.'] before:block before:overflow-hidden before:invisible after:clear-both ">
            <div className=" items-center md:items-start h-auto md:max-h-165px flex flex-wrap w-full md:mb-50px bg-white rounded-10px justify-center ">
              <div className=" p-10px md:p-0 w-calc-20px md:w-1/4 flex items-center float-left h-full relative ">
                <div className=" w-full md:w-auto h-full inline-block ">
                  <a
                    className=" text-orange-500 absolute w-full h-full top-0 left-0 z-50 cursor-pointer bg-transparent "
                    href="https://www.youtube.com/watch?v=h6-VubFRoIM"
                  ></a>
                  <img
                    src="/images/home/video.png"
                    alt="video"
                    className=" md:h-auto h-full object-cover max-h-165px max-w-full rounded-10px "
                  />
                  <a
                    href="#"
                    className=" w-10 md:w-60px h-10 md:h-60px border border-solid border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-10 text-orange-500 bg-transparent cursor-pointer "
                  >
                    <span className=" border-y-8 md:border-y-15px border-r-0 border-l-15px md:border-l-20px absolute w-0 h-0 border-solid border-t-transparent border-r-transparent border-b-transparent border-l-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 before:content-[''] before:absolute before:visited:text-orange-500 "></span>
                  </a>
                </div>
              </div>
              <div className=" w-calc-20px md:w-1/4 p-10px md:p-0 flex md:inline-block items-center text-center md:text-left justify-center float-left h-full relative ">
                <div className=" inline-block md:pt-45px md:px-10 ">
                  <div className=" mb-10px md:mb-0 md:mr-15px md:w-47px w-full float-left relative top-2 ">
                    <img
                      src="/images/home/energy.png"
                      alt="icon"
                      className=" h-30px md:h-auto inline-block "
                    />
                  </div>
                  <div className=" float-none md:float-left ">
                    <h3 className=" text-sm md:text-40px md:leading-1.2 text-blue-500 uppercase mb-10px font-normal ">
                      800MW
                    </h3>
                    <p className=" text-10px md:text-sm leading-normal text-slate-900 uppercase ">
                      TỔNG CÔNG SUẤT
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-calc-20px md:w-1/4 md:p-0 p-10px flex md:inline-block items-center md:text-left text-center justify-center float-left h-full relative ">
                <div className=" inline-block md:pt-45px md:px-10 ">
                  <div className=" mb-10px md:mb-0 md:mr-15px md:w-47px w-full float-left relative top-2 ">
                    <img
                      src="/images/home/system.png"
                      alt="icon"
                      className=" h-30px md:h-auto inline-block "
                    />
                  </div>
                  <div className=" float-none md:float-left ">
                    <h3 className=" text-sm md:text-40px md:leading-1.2 text-blue-500 uppercase mb-10px font-normal ">
                      10.000+
                    </h3>
                    <p className=" text-10px md:text-sm leading-normal text-slate-900 uppercase ">
                      HỆ THỐNG
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-calc-20px md:w-1/4 md:p-0 p-10px flex md:inline-block items-center md:text-left text-center justify-center float-left h-full relative ">
                <div className=" inline-block md:pt-45px md:px-10 ">
                  <div className=" mb-10px md:mb-0 md:mr-15px md:w-47px w-full float-left relative top-2 ">
                    <img
                      src="/images/home/partner.png"
                      alt="icon"
                      className=" h-30px md:h-auto inline-block "
                    />
                  </div>
                  <div className=" float-none md:float-left ">
                    <h3 className=" text-sm md:text-40px md:leading-1.2 text-blue-500 uppercase mb-10px font-normal ">
                      1.800+
                    </h3>
                    <p className=" text-10px md:text-sm leading-normal text-slate-900 uppercase ">
                      ĐỐI TÁC PHÂN PHỐI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section className=" md:pb-40 pb-10 pt-30px w-screen relative -ml-50vw left-1/2 overflow-hidden bg-no-repeat bg-cover ">
        <div className=" md:max-w-7xl max-w-950px mx-auto px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 ">
          <div className=" md:w-1/2 md:m-0 w-full flex justify-center mb-30px text-center float-left px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 after:clear-both ">
            <div className=" text-13px md:text-base md:pt-60px md:pr-60px ">
              <h2 className=" md:text-40px text-xl text-slate-900 font-normal uppercase leading-1.2 font-segoe mb-5 ">
                VỀ SOLAR HT
              </h2>
              <p className=" text-justify mb-6 text-slate-900 ">
                SOLAR HT là Tập đoàn công nghệ – thương mại dịch vụ có quy mô,
                uy tín dẫn đầu Việt Nam trong lĩnh vực tự động hóa công nghiệp
                và năng lượng tái tạo. Trong đó, Solar ht chuyên về mảng điện
                năng lượng mặt trời – lưu trữ điện, không ngừng tiên phong kiến
                tạo Hệ sinh thái, gia tăng hiệu quả, mang đến giá trị tối ưu cho
                khách hàng, đối tác.
              </p>
              <div className=" md:text-xl md:leading-6 text-sm leading-22px text-left pl-15px border-l-8 border-solid border-slate-100 inline-block mb-50px mt-10px text-slate-900 ">
                Solar ht đã cung cấp và triển khai hơn <b>10.000 hệ thống</b>{" "}
                điện mặt trời có tổng công suất hơn <b>800MWp</b>, mang đến cho
                khách hàng, đối tác và nhà đầu tư những giải pháp điện mặt trời
                thông minh, tối ưu chi phí đầu tư nhưng vẫn đảm bảo tính hiệu
                quả cao.
              </div>
            </div>
          </div>
          <div className=" md:w-1/2 md:m-0 w-full flex justify-center mb-30px text-center float-left px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 after:clear-both ">
            <div className=" relative ">
              <img src="/images/home/about.png" alt="image" />
              <div className=" md:px-30px pt-0 pr-10 pb-5 pl-30px bg-linear-gradient text-white absolute -bottom-35px -left-35px max-w-290px before:absolute before:right-0 before:border-b-0 before:bg-[url('/images/home/before_right.png')] before:content-[''] before:w-158px before:h-152px before:bottom-0 ">
                <span className=" md:text-115px text-50px font-segoe leading-normal font-normal uppercase ">
                  17+
                </span>
                <h4 className=" md:text-base md:text-left text-sm text-white font-segoe font-normal leading-19px uppercase mb-5 ">
                  NĂM kinh nghiệm phát triển bền vững
                </h4>
                <a
                  href="#"
                  className=" md:text-17px md:text-left text-xs font-segoe font-normal leading-19px uppercase relative text-white w-full inline-block cursor-pointer "
                  target="_blank"
                >
                  hồ sơ năng lực
                  <span className=" md:right-0 md:-top-3 -right-5 w-10 h-10 border border-solid border-white absolute rounded-full -top-3 before:right-3 before:bottom-18px before:-rotate-90 before:content-[''] before:bg-white before:absolute before:h-1px before:w-14px before:z-10 after:right-3 after:top-1.2rem after:rotate-0 after:content-[''] after:bg-white after:absolute after:h-1px after:w-14px after:z-10 "></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* solution */}
      <section className=" pb-10 bg-white w-screen relative -ml-50vw left-1/2 overflow-hidden bg-no-repeat bg-cover ">
        <div className=" max-w-950px mx-auto px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 after:clear-both ">
          <div className=" pt-10 w-full flex flex-wrap text-sm mb-30px float-left before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 after:clear-both ">
            <h2 className=" w-full text-center text-xl text-slate-900 font-segoe font-normal uppercase leading-1.2 px-10px ">
              GIẢI PHÁP ĐIỆN
              <br className=" hidden " /> MẶT TRỜI
              <p className=" text-13px inline-block text-slate-900 leading-1.2 font-segoe my-5 normal-case ">
                Solar HT hiểu rõ những lợi ích của việc ứng dụng nguồn năng
                lượng sạch vào nhiều lĩnh vực khác nhau của cuộc sống.
              </p>
            </h2>
            <p className=" hidden mb-5 ">
              Solar HT hiểu rõ những lợi ích của việc ứng dụng nguồn năng lượng
              sạch vào nhiều lĩnh vực khác nhau của cuộc sống.
            </p>

            <Tabs />
          </div>
        </div>
      </section>

      {/* project */}
      <section className=" bg-[url('/images/home/bg.jpeg')] pt-50px w-screen relative -ml-50vw left-1/2 overflow-hidden bg-no-repeat bg-cover ">
        <div className=" text-center px-10px text-sm max-w-600px mx-auto ">
          <h2 className=" text-white text-xl font-segoe font-normal uppercase mb-5 leading-tight ">
            DỰ ÁN ĐÃ THỰC HIỆN
          </h2>
          <p className=" text-white mb-6 ">
            Chúng tôi cam kết phục vụ khách hàng bằng cả “trái tim” của sự nhiệt
            huyết và tinh thần trách nhiệm cao!
          </p>
        </div>
        <div>
          <TabsProject blogs={allBlogs} />
        </div>
      </section>

      {/* product */}
      <section className=" pb-70px pt-10 w-screen relative -ml-50vw left-1/2 overflow-hidden bg-no-repeat bg-cover bg-white ">
        <div className=" max-w-950px md:max-w-7xl mx-auto px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 after:clear-both ">
          <div className=" clear-both w-full px-10px ">
            <h2 className=" text-center md:text-left text-xl md:text-40px text-slate-900 font-segoe font-normal uppercase mb-5 leading-tight ">
              SẢN PHẨM NỔI BẬT
            </h2>
          </div>
          <div className=" md:mb-30px md:px-10px md:flex md:flex-wrap ">
            <TabsProduct />
          </div>
        </div>
      </section>

      {/* <section className=" bg-[url('/images/home/bg2.jpeg')] pt-10 w-screen relative -ml-50vw left-1/2 overflow-hidden bg-no-repeat bg-cover "></section>

      <section className=" pt-50px pb-70px w-screen relative -ml-50vw left-1/2 overflow-hidden bg-no-repeat bg-cover "></section>

      <section className=" bg-[url('/images/home/bg3.jpeg')] text-center text-sm pt-10 w-screen relative -ml-50vw left-1/2 overflow-hidden bg-no-repeat bg-cover "></section> */}
    </main>
  );
}
