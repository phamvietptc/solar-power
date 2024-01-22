"use client";
import React from "react";
import { useForm } from "react-hook-form";

const SolutionEsco = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <section className=" py-10 ">
        <div className=" md:max-w-7xl max-w-950px mx-auto px-10px before:content-['.'] before:block before:overflow-hidden before:invisible before:w-0 before:h-0 after:clear-both ">
          <div className=" w-full px-10px ">
            <div className=" pb-15px border-b border-solid mb-25px ">
              <div className=" text-slate-900 text-sm tracking-wide inline-block mb-5 ">
                10.10.2020{" "}
              </div>
              <h1 className=" md:text-25px text-xl text-slate-900 font-segoe font-normal uppercase leading-5 ">
                Giải pháp ESCO
              </h1>
            </div>
            <div className=" md:text-15px text-justify text-sm text-slate-900 font-normal leading-22px ">
              <p className=" text-justify mb-5 ">
                Hiện nay mô hình ESCO trong lĩnh vực điện mặt trời là một trong
                những giải pháp đầu tư rất hiệu quả về mặt kinh tế và đã được
                nhiều doanh nghiệp ứng dụng. Nhờ ESCO, doanh nghiệp sẽ không
                phải lo lắng về nguồn vốn, được lắp điện mặt trời có giá trị
                hàng chục tỷ đồng hoàn toàn miễn phí, an tâm thụ hưởng nhiều lợi
                ích thiết thực từ nguồn năng lượng xanh.
              </p>
              <p className=" mb-5 ">
                <img
                  className=" mx-auto "
                  src="/images/esco/solar-esco.png"
                  alt="image"
                />
              </p>
              <h3 className=" text-justify text-xl mb-5 leading-5 font-normal normal-case ">
                <span className=" text-blue-500 ">
                  <strong>
                    Với ESCO, doanh nghiệp được lắp điện mặt trời hoàn toàn miễn
                    phí
                  </strong>
                </span>
              </h3>
              <p className=" text-justify mb-5 ">
                ESCO là mô hình đầu tư điện mặt trời dành cho các doanh nghiệp
                có lượng tiêu thụ điện năng lớn để phục vụ cho công việc sản
                xuất và kinh doanh; sở hữu phần mái nhà kho, nhà xưởng nhàn rỗi
                với diện tích hơn 5.000m², có nhu cầu lắp điện mặt trời để sử
                dụng và mong muốn tiết kiệm thêm nhiều chi phí tiền điện hằng
                năm.
              </p>
              <p className=" mb-5 ">
                <img
                  className=" mx-auto "
                  src="/images/esco/map-esco.png"
                  alt="image"
                />
              </p>
              <p className=" text-justify mb-5 ">
                Bằng cách tận dụng phần diện tích mái nhàn rỗi, doanh nghiệp sẽ
                được lắp hệ thống điện mặt trời mà không cần bỏ vốn. Toàn bộ
                kinh phí lắp đặt hệ thống sẽ do đối tác tài chính chi trả. DAT
                Solar sẽ là tổng thầu EPC cho dự án, khảo sát, thiết kế, cung
                cấp thiết bị, lắp đặt, vận hành và bảo dưỡng cho toàn hệ thống
                điện mặt trời. Hằng tháng, doanh nghiệp chỉ cần trả tiền điện từ
                hệ thống cho đối tác tài chính với giá thấp hơn giá của EVN. Khi
                kết thúc hợp đồng, doanh nghiệp có quyền ký thuê tiếp hoặc thừa
                hưởng lại hệ thống với giá tượng trưng 1 USD.
              </p>
              <h3 className=" text-justify text-xl mb-5 leading-5 font-normal normal-case ">
                <span className=" text-blue-500 ">
                  <strong>
                    Doanh nghiệp có thể tiết kiệm hơn 2 tỷ đồng tiền điện mỗi
                    năm
                  </strong>
                </span>
              </h3>
              <p className=" text-justify mb-5 ">
                Với mô hình ESCO của DAT Solar và các đối tác tài chính sẽ giúp
                doanh nghiệp sử dụng điện với giá thấp hơn của EVN đến 30%.
              </p>
              <p className=" text-justify mb-5 ">
                Doanh nghiệp sở hữu phần diện tích mái nhàn rỗi từ 5.000m² trở
                lên, doanh nghiệp có thể tham gia mô hình ESCO và lắp được
                khoảng 1MWp. Trường hợp, lắp hệ thống từ 5MWp (tương đương diện
                tích mái khoảng 30.000m² trở lên), doanh nghiệp có thể tiết kiệm
                hơn 2 tỷ đồng tiền điện mỗi năm đối với doanh nghiệp dùng điện
                sản xuất; và có thể hơn 5 tỷ đồng mỗi năm đối với điện kinh
                doanh. Quy mô dự án càng lớn, tiết kiệm càng nhiều.
              </p>
              <p className=" mb-5 ">
                <img
                  className=" mx-auto "
                  src="/images/esco/graph-esco.png"
                  alt="image"
                />
              </p>
              <h3 className=" text-xl mb-5 leading-5 font-normal normal-case ">
                <span className=" text-blue-500 ">
                  <strong>
                    An tâm, thoải mái tận hưởng nhiều lợi ích thiết thực cùng
                    ESCO
                  </strong>
                </span>
              </h3>
              <p className=" text-justify mb-5 ">
                <span className=" text-justify inline-flex pr-2 ">
                  <img
                    className=" h-3 "
                    src="/images/esco/icon-esco.png"
                    alt="icon"
                  />
                </span>
                Không cần bỏ vốn đầu tư và không chịu bất kỳ rủi ro tài chính
                nào.
                <br />
                <span className=" text-justify inline-flex pr-2 ">
                  <img
                    className=" h-3 "
                    src="/images/esco/icon-esco.png"
                    alt="icon"
                  />
                </span>
                Sử dụng điện với giá thấp hơn của EVN đến 30%.
                <br />
                <span className=" text-justify inline-flex pr-2 ">
                  <img
                    className=" h-3 "
                    src="/images/esco/icon-esco.png"
                    alt="icon"
                  />
                </span>
                Doanh nghiệp có diện tích mái từ 5.000m2 trở lên có thể tham gia
                ESCO và lắp được 1MWp. Trường hợp diện tích mái từ 30.000m² sẽ
                lắp được hệ thống điện mặt trời 5MWp, doanh nghiệp có thể tiết
                kiệm hơn 2 tỷ đồng tiền điện mỗi năm (đối với doanh nghiệp sử
                dụng điện sản xuất).
                <br />
                <span className=" text-justify inline-flex pr-2 ">
                  <img
                    className=" h-3 "
                    src="/images/esco/icon-esco.png"
                    alt="icon"
                  />
                </span>
                Tự phòng vệ tăng giá điện hàng năm.
                <br />
                <span className=" text-justify inline-flex pr-2 ">
                  <img
                    className=" h-3 "
                    src="/images/esco/icon-esco.png"
                    alt="icon"
                  />
                </span>
                Được sử dụng hệ thống điện mặt trời hoàn toàn miễn phí, giúp
                tiết kiệm hàng tỷ đồng tiền điện mỗi năm sau khi hết hạn hợp
                đồng.
                <br />
                <span className=" text-justify inline-flex pr-2 ">
                  <img
                    className=" h-3 "
                    src="/images/esco/icon-esco.png"
                    alt="icon"
                  />
                </span>
                Làm mát phần mái nhà xưởng khoảng 5 độ C.
                <br />
                <span className=" text-justify inline-flex pr-2 ">
                  <img
                    className=" h-3 "
                    src="/images/esco/icon-esco.png"
                    alt="icon"
                  />
                </span>
                Tăng giá trị thương hiệu nhờ ứng dụng năng lượng xanh, chung tay
                bảo vệ môi trường.
              </p>
              <p className=" mb-5 ">
                <img
                  className=" mx-auto "
                  src="/images/esco/solution-esco.png"
                  alt="image"
                />
              </p>
              <h3 className=" text-xl mb-5 leading-5 font-normal normal-case ">
                <span className=" text-blue-500 ">
                  <strong>
                    Mô hình ESCO có tiêu chí đơn giản, xét duyệt nhanh chóng
                  </strong>
                </span>
              </h3>
              <p className=" text-justify mb-5 ">
                Quy trình hợp tác triển khai ESCO giữa 3 bên cũng khá đơn giản,
                không mất quá nhiều thời gian xét duyệt cũng như thẩm định dự
                án.
              </p>
              <ul className=" text-justify mb-5 ml-10 list-disc ">
                <li>Bước 1: Khảo sát khách hàng</li>
                <li>Bước 2: Đánh giá và đưa ra đề xuất hợp tác sơ bộ</li>
                <li>Bước 3: Đánh giá kỹ thuật về kết cấu</li>
                <li>Bước 4: Ra đề xuất chính thức và ký hợp đồng hợp tác</li>
                <li>Bước 5: Ký hợp đồng EPC và triển khai dự án</li>
              </ul>
              <p className=" text-justify mb-5 ">
                Nhờ có ESCO, khách hàng doanh nghiệp có thể dễ dàng tiếp cận
                giải pháp tiết kiệm năng lượng một cách thuận lợi và hiệu quả.
                Mô hình này sẽ làm phong phú thêm các giải pháp tiết kiệm điện,
                góp phần giúp doanh nghiệp nâng cao lợi thế cạnh tranh, hướng
                đến hình ảnh doanh nghiệp xanh thân thiện với môi trường và phát
                triển bền vững.
              </p>
              <h3 className=" text-xl mb-5 leading-5 font-normal normal-case ">
                <span className=" text-blue-500 ">
                  <strong>An tâm tuyệt đối nhờ tổng thầu EPC DAT Solar</strong>
                </span>
              </h3>
              <p className=" text-justify mb-5 ">
                Để ESCO đạt được hiệu quả cao, ngoài tiềm lực tài chính vững
                vàng của quỹ đầu tư, nhất định phải có tổng thầu EPC chuyên
                nghiệp để triển khai, cung cấp thiết bị, đánh giá chính xác các
                hạng mục quyết định hiệu quả của dự án, kiểm soát quá trình vận
                hành, bảo trì, bảo dưỡng và sự an toàn của hệ thống trên mái
                trong suốt vòng đời hoạt động.
              </p>
              <p className=" mb-5 ">
                <img
                  className=" mx-auto "
                  src="/images/esco/panel-esco.png"
                  alt="image"
                />
              </p>
              <p className=" text-justify mb-5 ">
                Là tổng thầu EPC – Biểu tượng cho chất lượng và hiệu quả, DAT
                Solar khẳng định thế mạnh vượt trội của mình về năng lực triển
                khai dự án từ tư vấn, khảo sát, thiết kế, cung cấp vật tư thiết
                bị, thi công và dịch vụ đồng hành tận tâm.
              </p>
              <p className=" text-justify mb-5 ">
                Ngoài ra, DAT Solar cũng đang là đối tác chiến lược của các quỹ
                tài chính lớn uy tín trong và ngoài nước như: CME,
                TotalEnergies, SkyX Solar… giúp khách hàng an tâm hơn khi quyết
                định triển khai mô hình ESCO, tối đa hóa lợi nhuận cho các dự án
                lớn.
              </p>
              <h3 className=" text-xl mb-5 leading-5 font-normal normal-case ">
                <span className=" text-blue-500 ">
                  <strong>DAT Solar và những con số ấn tượng </strong>
                </span>
              </h3>
              <p className=" text-justify mb-5 ">
                <span className=" text-orange-500 text-justify pr-1 ">
                  <strong className=" inline-flex ">
                    <img
                      className=" h-3 self-center mr-2 "
                      src="/images/esco/icon-esco.png"
                      alt="icon"
                    />
                    17+
                  </strong>
                </span>
                năm kinh nghiệm.
                <br />
                <span className=" text-orange-500 text-justify pr-1 ">
                  <strong className=" inline-flex ">
                    <img
                      className=" h-3 self-center mr-2 "
                      src="/images/esco/icon-esco.png"
                      alt="icon"
                    />
                    350+
                  </strong>
                </span>
                với
                <span className=" text-orange-500 text-justify px-1 ">
                  <strong>41%</strong>
                </span>
                là kỹ sư chuyên môn cao.
                <br />
                <span className=" text-orange-500 text-justify pr-1 ">
                  <strong className=" inline-flex ">
                    <img
                      className=" h-3 self-center mr-2 "
                      src="/images/esco/icon-esco.png"
                      alt="icon"
                    />
                    1.800+
                  </strong>
                </span>
                đối tác khắp Việt Nam.
                <br />
                <span className=" text-orange-500 text-justify pr-1 ">
                  <strong className=" inline-flex ">
                    <img
                      className=" h-3 self-center mr-2 "
                      src="/images/esco/icon-esco.png"
                      alt="icon"
                    />
                    10.000+
                  </strong>
                </span>
                khách hàng doanh nghiệp.
                <br />
                <span className=" text-orange-500 text-justify pr-1 ">
                  <strong className=" inline-flex ">
                    <img
                      className=" h-3 self-center mr-2 "
                      src="/images/esco/icon-esco.png"
                      alt="icon"
                    />
                    10.000+
                  </strong>
                </span>
                hệ thống điện mặt trời với tổng công suất
                <span className=" text-orange-500 text-justify px-1 ">
                  <strong>800MW</strong>
                </span>
                được cung cấp, triển khai trên toàn quốc.
                <br />
                <span className=" text-orange-500 text-justify pr-1 ">
                  <strong className=" inline-flex ">
                    <img
                      className=" h-3 self-center mr-2 "
                      src="/images/esco/icon-esco.png"
                      alt="icon"
                    />
                    24/7
                  </strong>
                </span>
                hỗ trợ tư vấn và đồng hành trọn đời dự án.
                <br />
              </p>
              <p className=" mb-5 ">
                <img
                  className=" mx-auto "
                  src="/images/esco/partner-esco.png"
                  alt="image"
                />
              </p>
              <h3 className=" text-xl mb-5 leading-5 font-normal normal-case ">
                <span className=" text-blue-500 ">
                  <strong>
                    DAT Solar đồng hành cùng Chính Phủ, kiến tạo tương lai xanh
                  </strong>
                </span>
              </h3>
              <p className=" text-justify mb-5 ">
                Với việc cung cấp, triển khai hơn 10.000 hệ thống điện mặt trời
                với tổng công suất hơn 800MW, DAT Solar đã chung tay bảo vệ hành
                tinh xanh
              </p>
              <p className=" text-justify mb-5 ">
                <span className=" text-orange-500 text-justify pr-1 ">
                  <strong className=" inline-flex ">
                    <img
                      className=" h-3 self-center mr-2 "
                      src="/images/esco/icon-esco.png"
                      alt="icon"
                    />
                  </strong>
                </span>
                Góp phần tạo ra khoảng
                <span className=" text-orange-500 text-justify px-1 ">
                  <strong>+1 tỷ</strong>
                </span>
                kWh điện mỗi năm
                <br />
                <span className=" text-orange-500 text-justify pr-1 ">
                  <strong className=" inline-flex ">
                    <img
                      className=" h-3 self-center mr-2 "
                      src="/images/esco/icon-esco.png"
                      alt="icon"
                    />
                  </strong>
                </span>
                Giảm đốt
                <span className=" text-orange-500 text-justify px-1 ">
                  <strong>+507 ngàn</strong>
                </span>
                tấn than
                <br />
                <span className=" text-orange-500 text-justify pr-1 ">
                  <strong className=" inline-flex ">
                    <img
                      className=" h-3 self-center mr-2 "
                      src="/images/esco/icon-esco.png"
                      alt="icon"
                    />
                  </strong>
                </span>
                Giảm phát thải mỗi năm
                <span className=" text-orange-500 text-justify px-1 ">
                  <strong>+887.040</strong>
                </span>
                CO2, tương đương trồng mới
                <span className=" text-orange-500 text-justify px-1 ">
                  <strong>+39 triệu</strong>
                </span>
                cây xanh
              </p>
              <p className=" text-center mb-5 ">
                <strong>THAM GIA ESCO NGAY CÙNG DAT SOLAR</strong>
                <br />
                <strong>CHÚNG TÔI SẴN SÀNG ĐỒNG HÀNH CÙNG BẠN!</strong>
              </p>
              <div className=" text-center ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    {...register("Họ và tên", { required: true })}
                  />
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    {...register("Số điện thoại", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <input
                    type="url"
                    placeholder="Địa chỉ"
                    {...register("Địa chỉ", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="Diện tích mái (m²)"
                    {...register("Diện tích mái (m²)", { required: true })}
                  />

                  <input type="submit" />
                </form>
              </div>
            </div>
            <div className=" pt-5 ">
              <div className=" mb-30px flex flex-wrap items-center ">
                <h3 className=" md:mb-0 mr-35px mb-10px inline-block w-full text-slate-900 text-sm uppercase leading-5 font-normal ">
                  Chia sẻ
                </h3>
                <div>
                  <a href="/" target="_blank">
                    <span className=" "></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionEsco;
