// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccessPage = () => {
  return (
    <div className="container mx-auto py-8 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">ขอบคุณสำหรับการสั่งซื้อ!</h2>
      <p className="text-lg mb-4">ท่านได้สั่งซื้อสินค้าเรียบร้อยแล้ว</p>
      <p className="text-lg mb-4">รายการสั่งซื้อของท่านจะถูกจัดส่งไปยังที่อยู่ที่ท่านระบุในขั้นตอนการสั่งซื้อ</p>
      <div className="flex justify-center space-x-4">
        <Link to="/" className="btn btn-primary transition duration-300 ease-in-out">กลับสู่หน้าแรก</Link>
        <Link to="/Heart" className="btn btn-primary transition duration-300 ease-in-out">ดูการสั่งซื้อ</Link>
      </div>
    </div>
  );
}

export default OrderSuccessPage;
