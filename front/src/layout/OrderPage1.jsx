// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductItem = [
  {
    id: 7,
    name: 'Computer Set - INTEL GAMER DAYS 2023 SET8',
    // description: 'ชุดคอมพิวเตอร์จัดประกอบสำหรับเหล่าเกมเมอร์ ขับเคลื่อนประสิทธิอันทรงพลังจาก Intel เจนเนอเรชั่น 13 ล่าสุด พร้อมชุดการ์ดจอ MSI GeForce RTX 4070 Ti VENTUS 3X OC 12GB GDDR6X 192-bit กราฟฟิคจาก NVIDIA GeForce RTX 40 ซีรีส์ที่มอบประสบการณ์การเล่นเกมระดับสูง เพื่อตอบโจทย์สำหรับเหล่าเกมเมอร์ผู้ที่ต้องการฝึกทักษะ สกิลในการเล่นเกม เพื่อก้าวไปสู่สมรภูมิบนเวทีระดับมืออาชีพ และรองรับการใช้งานที่ครอบคลุมทั้งการใช้งานทั่วไป มัลติมีเดีย ดูหนัง แบบครบจบในชุดเดียว',
    href: '',
    price: '$62,500',
    imageSrc: './src/assets/dd.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 7'
  },
  // Add more products as needed
];

const OrderPage1 = () => {
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
        <img src={ProductItem[0].imageSrc} alt={ProductItem[0].imageAlt} className="w-48 h-48 sm:w-64 sm:h-auto object-cover" />
      </figure>
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title">{ProductItem[0].name}</h2>
        <p className="text-sm">ชุดคอมพิวเตอร์จัดประกอบสำหรับเหล่าเกมเมอร์ ขับเคลื่อนประสิทธิอันทรงพลังจาก Intel เจนเนอเรชั่น 13 ล่าสุด พร้อมชุดการ์ดจอ MSI GeForce RTX 4070 Ti VENTUS 3X OC 12GB GDDR6X 192-bit </p>
        <p className="text-sm">กราฟฟิคจาก NVIDIA GeForce RTX 40 ซีรีส์ที่มอบประสบการณ์การเล่นเกมระดับสูง เพื่อตอบโจทย์สำหรับเหล่าเกมเมอร์ผู้ที่ต้องการฝึกทักษะ สกิลในการเล่นเกม</p>
        <p className="text-sm"> เพื่อก้าวไปสู่สมรภูมิบนเวทีระดับมืออาชีพ และรองรับการใช้งานที่ครอบคลุมทั้งการใช้งานทั่วไป มัลติมีเดีย ดูหนัง แบบครบจบในชุดเดียว</p>

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

export default OrderPage1;
