"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ButtonCustom from "../../Components/Custom/button";
import Hoctap from "../../Assets/hoctap.png";

export default function BgSilde1() {
  const router = useRouter();

  return (
    <div className="home-BgSilde1">
      <div className="home-content">
        <h1 className="title">Cộng đồng ôn thi</h1>

        <p className="desc">
          Cộng đồng ôn thi là nền tảng cộng đồng ôn thi trực tuyến, cho phép người
          học chuyển ảnh đề thi thành bài thi online, dễ dàng chia sẻ đề thi và
          làm bài trực tiếp cùng hàng nghìn người khác. Nền tảng giúp người học
          luyện tập hiệu quả, rèn kỹ năng làm bài và chuẩn bị tốt cho các kỳ thi
          quan trọng.
        </p>

        <div className="actions">
          <ButtonCustom onClick={() => router.push("/tao-de-thi")}>
            Tạo đề ngay
          </ButtonCustom>
          <ButtonCustom className="lamdengay" onClick={() => router.push("/tong-hop-de-thi")}>
            Làm đề ngay
          </ButtonCustom>
        </div>
      </div>

      <div className="imgMainseo">
        <Image
          src={Hoctap}
          alt="Học tập online"
          priority
        />
      </div>
    </div>
  );
}
