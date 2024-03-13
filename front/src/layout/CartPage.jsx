// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const initialCart = [
    {
      id: 9,
      name: 'Computer Set - Powered by ASUS EVA-02 Edition',
      price: '$212,990',
      imageSrc: './src/assets/ss.jpg',
      imageAlt: 'รายละเอียดของสินค้าที่ 9',
      quantity: 1,
      checked: false
    },
    {
      id: 10,
      name: 'จอมอนิเตอร์ ASUS VA229HR (IPS 75Hz)',
      price: '$3,500',
      imageSrc: './src/assets/rr.jpg',
      imageAlt: 'รายละเอียดของสินค้าที่ 10',
      quantity: 1,
      checked: false
    },
    {
      id: 11,
      name: 'คีย์บอร์ดเกมมิ่ง Gconic A98 Ultra Slim Mechanical Gateron Low profile 2.0 Brown Switch (Eng/Th)',
      price: '$3,990',
      imageSrc: './src/assets/yy.jpg',
      imageAlt: 'รายละเอียดของสินค้าที่ 11',
      quantity: 1,
      checked: false
    }
  ];

  const [cart, setCart] = useState(initialCart);
  const [totalPrice, setTotalPrice] = useState(0); // เพิ่ม state เก็บราคารวมของสินค้าที่เลือกไว้

  useEffect(() => {
    // คำนวณราคารวมเมื่อ cart มีการเปลี่ยนแปลง
    let total = 0;
    cart.forEach(item => {
      if (item.checked) {
        total += parseInt(item.price.replace('$', '').replace(',', '')) * item.quantity;
      }
    });
    setTotalPrice(total);
  }, [cart]); // เมื่อ cart เปลี่ยนแปลงให้คำนวณราคารวมใหม่

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleToggleCheckbox = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    const selectedItems = cart.filter((item) => item.checked);
    // ทำอะไรต่อกับรายการสินค้าที่ถูกเลือกสำหรับการชำระเงิน
    console.log("Selected items for checkout:", selectedItems);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">ตะกร้าสินค้า</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="checkbox"
            id={`checkbox_${item.id}`}
            checked={item.checked}
            onChange={() => handleToggleCheckbox(item.id)}
            className="mt-4 mr-4 sm:mt-0 h-6 w-6"
          />
          <img src={item.imageSrc} alt={item.imageAlt} className="w-32 h-32 sm:w-48 sm:h-auto object-cover" />
          <div className="flex flex-col justify-between p-4 w-full">
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500">ราคา: {item.price}</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <label htmlFor={`quantity_${item.id}`}>จำนวน:</label>
                <input
                  type="number"
                  id={`quantity_${item.id}`}        
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="ml-2 px-2 py-1 border border-gray-300 rounded-md w-16"
                />
              </div>
              <div>
                <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 font-semibold py-1 px-4 rounded-lg border border-red-500 hover:bg-red-500 hover:text-white transition duration-300">ลบสินค้า</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <p className="text-lg font-bold">ราคารวม: ${totalPrice.toLocaleString()}</p>
        <a href="/payment" onClick={handleCheckout} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ml-4">ชำระเงิน</a>
      </div>
    </div>
  );
};

export default CartPage;
