import { TbMapPinDown } from "react-icons/tb";
import { MdPhoneEnabled } from "react-icons/md";
import { FaTruck } from "react-icons/fa"; // اضافه کردن آیکون کامیون برای لیفتراک

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto row">
        <div className="col-md-4 mb-4">
          <h3 className="text-lg font-bold flex items-center gap-x-2">
            <span><TbMapPinDown size='25px' className="text-yellow-500"/></span>
            <span>آدرس لیفتراک یزد</span>
          </h3>
          <address>
            <p>یزد، خیابان [نام خیابان]، پلاک [شماره]</p>
            <p>کد پستی: [کد پستی]</p>
          </address>
        </div>
        <div className="col-md-4 mb-4">
          <h3 className="text-lg font-bold flex items-center gap-x-2">
            <span><MdPhoneEnabled size='25px' className="text-yellow-500"/></span>
            <span>تماس با ما</span>
          </h3>
          <p>نام: شرکت لیفتراک و جک یزد</p>
          <p>تلفن: <a href="tel:+983500000000" className="text-yellow-500">۰۳۵-۶۲۱۷۰۱۳</a></p>
          <p>ایمیل: <a href="mailto:info@liftruck-yazd.com" className="text-yellow-500">info@liftruck-yazd.com</a></p>
        </div>
        <div className="col-md-4 mb-4">
          <h3 className="text-lg font-bold flex items-center gap-x-2">
            <span><FaTruck size='25px' className="text-yellow-500"/></span>
            <span>خدمات ما</span>
          </h3>
          <ul>
            <li>فروش لیفتراک</li>
            <li>اجاره لیفتراک</li>
            <li>تعمیر و نگهداری جک</li>
            <li>قطعات یدکی لیفتراک</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} شرکت لیفتراک و جک یزد. تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
  );
};