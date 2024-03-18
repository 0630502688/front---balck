// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminHome() {
    return (
        <div className="AdminHome mx-auto py-8">
            <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-3xl font-semibold mb-4">Admin Dashboard</h2>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-semibold mb-2">แก้ไขข้อมูลสินค้า</h3>
                    <p>ทำการแก้ไขข้อมูลสินค้าที่มีอยู่ในระบบ</p>
                    <Link to="/Adminproduct" className="text-blue-500 mt-2 inline-block">เข้าสู่หน้าแก้ไขสินค้า</Link>
                </div>
                <div className="border p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-semibold mb-2">เพิ่มสินค้าใหม่</h3>
                    <p>เพิ่มสินค้าใหม่เข้าสู่ระบบ</p>
                    <Link to="/AdminPoppy" className="text-blue-500 mt-2 inline-block">เพิ่มสินค้าใหม่</Link>
                </div>
                <div className="border p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-semibold mb-2">ดูรายละเอียด</h3>
                    <p>ยอดการสั่งซื้อ เข้าสู่ระบบ</p>
                    <Link to="/AdminView" className="text-blue-500 mt-2 inline-block">ดูยอดการสั่งซื้อ</Link>
                </div>
                <div className="border p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-semibold mb-2">ดูยอดการใช้งานเข้าสู่ระบบ</h3>
                    <p>ข้อมูลลูกค้า</p>
                    <Link to="/AdminCustomer" className="text-blue-500 mt-2 inline-block">ยอดการใช้งาน</Link>
                </div>
            </div>
        </div>
    );
}
