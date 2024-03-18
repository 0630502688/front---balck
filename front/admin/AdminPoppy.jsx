// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './AdminPoppy.css'; // Import CSS file for additional styling

export default function AdminPoppy() {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        image: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // เรียกใช้ API หรือโลจิกเพื่อบันทึกข้อมูลสินค้า
        console.log('Submitted:', product);
        // Reset form after submission
        setProduct({
            name: '',
            price: '',
            description: '',
            image: ''
        });
    };

    return (
        <div className="AddProduct-container">
            <h2 className="AddProduct-title">เพิ่มสินค้า</h2>
            <form onSubmit={handleSubmit} className="AddProduct-form">
                <div className="AddProduct-form-group">
                    <label htmlFor="name" className="AddProduct-label">ชื่อสินค้า</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                        className="AddProduct-input"
                        required
                    />
                </div>
                <div className="AddProduct-form-group">
                    <label htmlFor="price" className="AddProduct-label">ราคา</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                        className="AddProduct-input"
                        required
                    />
                </div>
                <div className="AddProduct-form-group">
                    <label htmlFor="description" className="AddProduct-label">รายละเอียด</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}
                        className="AddProduct-input AddProduct-textarea"
                        required
                    />
                </div>
                <div className="AddProduct-form-group">
                    <label htmlFor="image" className="AddProduct-label">รูปภาพ</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleInputChange}
                        className="AddProduct-input"
                        required
                    />
                </div>
                <button type="submit" className="AddProduct-button">เพิ่มสินค้า</button>
            </form>
        </div>
    );
}
