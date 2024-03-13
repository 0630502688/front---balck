// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const OrderHistory = [
  {
    id: 7,
    name: 'จอมอนิเตอร์ AOC 27V5BK/67 (IPS 75Hz PIVOT)',
    price: '$5,450',
    quantity: 1,
    imageSrc: './src/assets/qq.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 7'
  },
  {
    id: 10,
    name: 'จอมอนิเตอร์ ASUS VA229HR (IPS 75Hz)',
    href: '/products/10',
    price: '$3,500',
    quantity: 1,
    imageSrc: './src/assets/rr.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 10'
  },
  // เพิ่มรายการสินค้าเพิ่มเติมตามต้องการ
];

const OrderPage = () => {
  const [cart, setCart] = useState(OrderHistory);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const handleConfirmRemoveItem = (itemId) => {
    const confirmDelete = window.confirm('คุณแน่ใจหรือไม่ว่าต้องการยกเลิกการสั่งซื้อสินค้านี้?');
    if (confirmDelete) {
      handleRemoveItem(itemId);
    }
  };

  return (
    <div className="container mx-auto py-8 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">รายการสั่งซื้อสินค้า</h2>
      <div className="border rounded-lg shadow-md w-full max-w-2xl overflow-hidden">
        {cart.map((item) => (
          <div key={item.id} className="border-b border-gray-200 py-4 px-6 flex items-center justify-between transition duration-300 hover:bg-gray-100">
            <div className="flex items-center">
              <img src={item.imageSrc} alt={item.imageAlt} className="w-24 h-24 rounded-md mr-4 object-cover" />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">ราคา: {item.price}</p>
                <p className="text-gray-500">จำนวน: {item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button onClick={() => handleConfirmRemoveItem(item.id)} className="text-red-500 font-semibold py-1 px-4 rounded-lg border border-red-500 hover:bg-red-500 hover:text-white transition duration-300 min-w-min">ยกเลิกการสั่งซื้อสินค้า</button>
              <a href="/Track" className="ml-4 text-blue-500 font-semibold py-1 px-4 rounded-lg border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 min-w-min">ติดตามพัสดุ</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
