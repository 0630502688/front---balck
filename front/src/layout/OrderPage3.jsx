// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductItem = [
  {
    id: 7,
    name: 'จอมอนิเตอร์ AOC 27V5BK/67 (IPS 75Hz PIVOT)',
    // description: 'คอมพิวเตอร์เซ็ตพิเศษ Powered by ASUS EVA-02 Edition ที่รวมอุปกรณ์แบรนด์ ASUS รุ่นโปรเจค EVANGELION มาสานต่อให้เต็มระบบ สำหรับเหล่าเกมเมอร์ตัวจริง ด้วยการเลือกใช้ซีพียู Intel Core i9 เจนเนอชัน 14 รุ่นล่าสุด มาเป็นขุมพลังในการออกแบบระบบใหม่ที่มีศูนย์กลางอยู่ที่ EVA-02 และ Asuka คอลเลกชันที่ 2 จาก ASUS ที่เปิดตัวด้วยเมนบอร์ด กราฟิกการ์ด พีซีเคส ชุดระบายความร้อน อุปกรณ์ต่อพ่วง อื่นๆ เพื่อมาสร้างระบบเป็นเครื่องจักร เต็มรูปแบบและเติมแต่แสงจาก Aura Sync เข้ากันกับธีม Asuka ในระดับสูง',
    href: '',
    price: '$5,450',
    imageSrc: './src/assets/rr.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 7'
  },
  // Add more products as needed
];

const OrderPage3 = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  // eslint-disable-next-line no-unused-vars
  const handlePriceDecrement = () => {
    // eslint-disable-next-line no-undef
    if (parseInt(price.replace('$', '').replace(',', '')) > 5450) {
      // eslint-disable-next-line no-undef
      setPrice((parseInt(price.replace('$', '').replace(',', '')) - parseInt(price.replace('$', '').replace(',', ''))).toLocaleString());
    }
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl flex justify-center items-center">
      <figure>
  {/* กำหนดขนาดให้รูปใหญ่ขึ้น */}
  <img src={ProductItem[0].imageSrc} alt={ProductItem[0].imageAlt} className="w-48 h-48 sm:w-64 sm:h-auto object-cover" />
</figure>
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title">{ProductItem[0].name}</h2>
        <p className="text-sm">จอมอนิเตอร์ AOC MONITOR 27V5BK/67 (IPS 75Hz PIVOT) หน้าจอความละเอียด 1920 x 1080 FHD และแผง IPS ของหน้าจอ มีพอร์ต HDMI และ DisplayPort</p>
        <p className="text-sm">รักษาคุณภาพของภาพและสีที่สม่ำเสมอ สามารถดูสเปรดชีตหรือภาพยนตร์ ได้โดยไม่สูญเสียความสม่ำเสมอของสี จอภาพไร้กรอบ 3 ด้านของ AOC</p>
        <p className="text-sm">ที่เปิดตัวด้วยเมนบอร์ด กราฟิกการ์ด พีซีเคส ชุดระบายความร้อน อุปกรณ์ต่อพ่วง อื่นๆ เพื่อมาสร้างระบบเป็นเครื่องจักร เต็มรูปแบบและเติมแต่แสงจาก Aura Sync เข้ากันกับธีม Asuka ในระดับสูง</p>
        <p className="text-sm"> - จอแสดงผล IPS ให้มุมมองการรับชม</p>
        <p className="text-sm"> - จอภาพไร้กรอบ 3 ด้าน</p>
        <p className="text-sm"> - เทคโนโลยี Flicker-free technology </p>
        <p>{ProductItem[0].description}</p>
        <div className="card-actions justify-end flex items-center">
          <button className="btn btn-secondary" onClick={handleDecrement}>-</button>
          <p className="mx-2">{quantity}</p>
          <button className="btn btn-secondary" onClick={handleIncrement}>+</button>
          <button className="btn btn-secondary ml-2">เพิ่มลงตะกร้า</button>
          <p className="mx-2">{(parseInt(ProductItem[0].price.replace('$', '').replace(',', '')) * quantity).toLocaleString()} บาท</p>
          <Link to="/payment" className="btn btn-primary ml-4">สั่งซื้อสินค้า</Link>
        </div>
      </div>
    </div>
  );
}

export default OrderPage3;
