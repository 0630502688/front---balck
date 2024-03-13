// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './OrderTrackingPage.css'; // Import CSS file for additional styles

const OrderTrackingPage = () => {
  const orderItems = [
    {
      id: 7,
      name: 'จอมอนิเตอร์ AOC 27V5BK/67 (IPS 75Hz PIVOT)',
      price: '$5,450',
      quantity: 1,
      imageSrc: './src/assets/qq.jpg',
      imageAlt: 'รายละเอียดของสินค้าที่ 7'
    },
    // เพิ่มรายการสินค้าต่อไปตามต้องการ
  ];

  // สร้างรายการสินค้า
  const renderOrderItems = () => {
    return orderItems.map((item) => (
      <div key={item.id} className="flex items-center mb-4">
        <img src={item.imageSrc} alt={item.imageAlt} className="w-16 h-16 rounded-md mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">{item.price} x {item.quantity}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">ติดตามการจัดส่งสินค้า</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2">
          <h3 className="text-lg font-semibold mb-2">รายการสินค้า</h3>
          {renderOrderItems()}
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <h3 className="text-lg font-semibold mb-2">สถานะการจัดส่ง</h3>
          <div className="tracking-status">
            <div className="tracking-status-step">
              <span className="tracking-status-icon">&#x2714;</span>
              <span className="tracking-status-text">กำลังดำเนินการจัดส่ง</span>
            </div>
            <div className="tracking-status-step">
              <span className="tracking-status-icon">&#x25CB;</span>
              <span className="tracking-status-text">กำลังขนส่ง</span>
            </div>
            <div className="tracking-status-step">
              <span className="tracking-status-icon">&#x25CB;</span>
              <span className="tracking-status-text">อยู่ระหว่างการจัดส่ง</span>
            </div>
            <div className="tracking-status-step">
              <span className="tracking-status-icon">&#x25CB;</span>
              <span className="tracking-status-text">ถึงจุดหมาย</span>
            </div>
          </div>
          <p className="mt-4">Track ID: 7</p>
        </div>
      </div>
      <div className="mt-8">
        <Link to="/" className="btn btn-primary mr-4">กลับสู่หน้าแรก</Link>
        <Link to="/Heart" className="btn btn-primary">ดูรายการสั่งซื้อ</Link>
      </div>
    </div>
  );
}

export default OrderTrackingPage;
