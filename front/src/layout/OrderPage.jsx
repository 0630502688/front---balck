// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductItem = [
  {
    id: 7,
    name: 'หูฟังเกมมิ่ง Onikuma Gaming Headset B20 RGB Cat Ear Bluetooth 5.0 Pink',
    // description: 'หูฟังเกมมิ่งไร้สาย รองรับการเชื่อมต่อได้ทั้ง Bluetooth และ สาย AUX 3.5mm ที่สามารถใช่งานได้กับอุปกรณ์ที่หลากหลายทั้งบน PC, Mobile Android/iOS, เครื่องเล่นเกม Console PS4/PS5/XBOX/NintendoSwitch ให้เสียง Stereo ด้วยขนาดลำโพง 50mm เสียงดังชัดเจนและแม่นยำ ไมโครโฟนมีความยืดหยุ่นและถอดออกได้ มาพร้อมแสงไฟ RGB สีสวยงาม วัสดุโครงสร้างทำจากอลูมิเนียนแข็งแรง มีปุ่มสวิตซ์ควบคุมเสียงและปิด/เปิดไมค์ ใช้งานได้อย่างง่ายดาย',
    href: '',
    price: '$1,290',
    imageSrc: './src/assets/ii.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 7'
  },
  // Add more products as needed
];

const ComputerProducts = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl flex justify-center items-center">
      <figure>
        <img src={ProductItem[0].imageSrc} alt={ProductItem[0].imageAlt} className="w-48 h-48 sm:w-64 sm:h-auto object-cover" />
      </figure>
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title">{ProductItem[0].name}</h2>
        <p className="text-sm">หูฟังเกมมิ่งไร้สาย รองรับการเชื่อมต่อได้ทั้ง Bluetooth และ สาย AUX 3.5mm ที่สามารถใช่งานได้กับอุปกรณ์ที่หลากหลายทั้งบน PC, Mobile Android/iOS,</p>
        <p className="text-sm"> เครื่องเล่นเกม Console PS4/PS5/XBOX/NintendoSwitch ให้เสียง Stereo ด้วยขนาดลำโพง 50mm เสียงดังชัดเจนและแม่นยำ</p>
        <p className="text-sm"> ไมโครโฟนมีความยืดหยุ่นและถอดออกได้ มาพร้อมแสงไฟ RGB สีสวยงาม วัสดุโครงสร้างทำจากอลูมิเนียนแข็งแรง มีปุ่มสวิตซ์ควบคุมเสียงและปิด/เปิดไมค์ ใช้งานได้อย่างง่ายดาย</p>
        <p className="text-sm"> - เชื่อมด้วย Bluetooth และ AUX 3.5 mm.</p>
        <p className="text-sm"> - บลูทูธ: 5.0, Bluetooth distance: 10m</p>
        <p className="text-sm"> - แบตตอรี่ยาวนาน 15-22 ชัวโมง</p>
        <p className="text-sm">{ProductItem[0].description}</p> {/* ใช้คลาส text-sm เพื่อลดขนาดตัวหนังสือ */}
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

export default ComputerProducts;
