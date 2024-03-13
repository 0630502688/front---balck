// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './Navbar';

const RecommendedProducts = [
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
    name: 'คีย์บอร์ดเกมมิ่ง Gconic A98 Ultra Slim Mechanical Gateron Low profile 2.0 Brown Switch (Eng/Th)',
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
  {
    id: 10,
    name: 'หูฟังเกมมิ่ง Onikuma Gaming Headset B20 RGB Cat Ear Bluetooth 5.0 Pink',
    href: '/products/10',
    price: '$1,290',
    imageSrc: './src/assets/ii.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 10'
  },
  {
    id: 4,
    name: 'Gaming Headset SteelSeries Arctis 7',
    price: '$180',
    imageSrc: './src/assets/oo.jpg',
    imageAlt: 'Wireless gaming headset with surround sound',
  },
  {
    id: 8,
    name: 'Computer Set - INTEL GAMER DAYS 2023 SET8',
    href: '/products/8',
    price: '$62,500',
    imageSrc: './src/assets/dd.jpg',
    imageAlt: 'รายละเอียดของสินค้าที่ 8'
  },
  
  // Add more recommended products as needed
];

export default function UserHome() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-8 text-center">Recommended Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {RecommendedProducts.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
              <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.price}</p>
                {/* Add more product information here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
