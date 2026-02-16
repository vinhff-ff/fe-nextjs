import Image from 'next/image';
import Logo from '../../../Assets/logo.png'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-section">
          <div className="footer__logo-wrapper">
            <span>CỘNG ĐỒNG ÔN THI</span>
          </div>
          <div className='footer__content-wrapper'>
            <p className="footer__description">
              Cộng đồng ôn thi là nền tảng cộng đồng ôn thi trực tuyến, cho phép người học chuyển ảnh đề thi thành bài thi online, dễ dàng chia sẻ đề thi và làm bài trực tiếp cùng hàng nghìn người khác. Nền tảng giúp người học luyện tập hiệu quả, rèn kỹ năng làm bài và chuẩn bị tốt cho các kỳ thi quan trọng
            </p>
            <div className="footer__websites">
              <h2>Các website của chúng tôi</h2>
              <div className="footer__website-list">
                <a
                  href="https://giasusupham1.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__website-link"
                >
                  congdonggiasu.com
                </a>
                <a
                  href="https://vnews.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__website-link"
                >
                  gocsongao
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__divider"></div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} congdongonthi.com. Tất cả các quyền được bảo lưu.</p>
      </div>
    </footer>
  );
}
