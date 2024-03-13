// ComputerProducts.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = [
  {
    id: 7,
    name: 'หูฟังเกมมิ่ง Onikuma Gaming Headset B20 RGB Cat Ear Bluetooth 5.0 Pink',
    href: "/OrderPage",
    price: '$5,450',
    imageSrc: './src/assets/ii.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 7'
  },
  {
    id: 8,
    name: 'Computer Set - INTEL GAMER DAYS 2023 SET8',
    href: "/OrderPage1",
    price: '$62,500',
    imageSrc: './src/assets/dd.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 8'
  },
  {
    id: 9,
    name: 'Computer Set - Powered by ASUS EVA-02 Edition',
    href: '/OrderPage2',
    price: '$212,990',
    imageSrc: './src/assets/ss.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 9'
  },
  {
    id: 10,
    name: 'จอมอนิเตอร์ ASUS VA229HR (IPS 75Hz)',
    href: '/OrderPage3',
    price: '$3,500',
    imageSrc: './src/assets/rr.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 10'
  },
  {
    id: 10,
    name: 'คีย์บอร์ดเกมมิ่ง Gconic A98 Ultra Slim Mechanical Gateron ',
    href: '/products/10',
    price: '$3,990',
    imageSrc: './src/assets/yy.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 10'
  },
  {
    id: 10,
    name: 'จอมอนิเตอร์ MSI G274QRFW ( Rapid IPS 2K 170Hz 1ms White)',
    href: '/products/10',
    price: '$1,290',
    imageSrc: './src/assets/qq.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 10'
  },
  {
    id: 10,
    name: 'เมาส์เกมมิ่ง HyperX Gaming Mouse Pulsefire Haste Wireless White',
    href: '/products/10',
    price: '$2,690',
    imageSrc: './src/assets/oo.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 10'
  },
  {
    id: 10,
    name: 'เมาส์เกมมิ่ง Fantech Gaming Mouse WGC2 Plus Wireless White',
    href: '/products/10',
    price: '$690',
    imageSrc: './src/assets/pp.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 10'
  },
  {
    id: 10,
    name: 'Computer Set iPlay S2',
    href: '/products/10',
    price: '$40,500',
    imageSrc: './src/assets/aa.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 10'
  },
  {
    id: 10,
    name: 'คีย์บอร์ดเกมมิ่ง Tsunami Gaming Keyboard MK-61 Sakura Pink Blue Switch',
    href: '/products/10',
    price: '$280',
    imageSrc: './src/assets/tt.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 10'
  },
  {
    id: 10,
    name: 'คีย์บอร์ดเกมมิ่ง Gconic A88 Ultra Slim Mechanical Gateron ',
    href: '/products/10',
    price: '$3,990',
    imageSrc: './src/assets/uu.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 10'
  },
  {
    id: 9,
    name: 'จอมอนิเตอร์ ASUS TUF Gaming VG35VQ (VA 2K 100Hz Curved)',
    href: '/products/9',
    price: '$14,500',
    imageSrc: './src/assets/ee.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 9'
  },
  // เพิ่มสินค้าเพิ่มเติมตามต้องการ
];

export default function ComputerProducts() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Computer Products</h2>

        <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {ProductItem.map((product) => (
            <div key={product.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <Link to={product.href}>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-64 w-full object-cover object-center"
                />
              </Link>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link to={product.href} className="block">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <p className="mt-3 text-base text-blue-600">{product.price}</p>

                  </Link>
                </div>
                <div className="mt-4">
                  {/* <Link
                    to='/OrderPage'
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Order Now
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}