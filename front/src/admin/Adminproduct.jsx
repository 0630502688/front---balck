// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './AdminProduct.css'; // Import CSS file for additional styling

// eslint-disable-next-line react/prop-types
export default function Adminproduct({ productId, history }) {
    // สร้าง state เพื่อเก็บข้อมูลสินค้า
    const [product, setProduct] = useState({
        id: productId,
        name: '',
        price: '',
        description: '',
    });

    // ฟังก์ชัน handleInputChange สำหรับอัพเดตค่าของสินค้าเมื่อมีการเปลี่ยนแปลงใน input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    // ฟังก์ชัน handleSubmit สำหรับการ submit ข้อมูลสินค้าไปยังเซิร์ฟเวอร์
    const handleSubmit = (e) => {
        e.preventDefault();
        // เรียกใช้ API หรือโลจิกเพื่อบันทึกข้อมูลสินค้า
        console.log('Submitted:', product);
        // ตัวอย่างการ redirect หลังจากบันทึกข้อมูลสำเร็จ
        // eslint-disable-next-line react/prop-types
        history.push('/admin/view-products');
    };

    return (
        <div className="Adminproduct mx-auto py-5">
            <h2 className="text-3xl font-semibold mb-4">แก้ไขข้อมูลสินค้า</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">ชื่อสินค้า</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">ราคา</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">รายละเอียด</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    บันทึก
                </button>
            </form>
        </div>
    );
}
