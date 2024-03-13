// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CheckoutPage.css'; // Import CSS file for additional styles

const CheckoutPage = () => {
  const [addressData, setAddressData] = useState({
    fullName: '',
    address: '',
    city: '',
    country: '',
    postalCode: ''
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: ''
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressData({
      ...addressData,
      [name]: value
    });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate or send data to API for shipping and payment
    console.log({ ...addressData, ...paymentData });
    // Clear form data after submission
    setAddressData({
      fullName: '',
      address: '',
      city: '',
      country: '',
      postalCode: ''
    });
    setPaymentData({
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: '',
      paymentMethod: ''
    });
  };
  

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between">
        <div className="w-1/2 mr-4">
          <h3 className="section-title">ที่อยู่การจัดส่ง</h3>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="fullName">ชื่อผู้ใช้</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={addressData.fullName}
                onChange={handleAddressChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">ที่อยู่</label>
              <input
                type="text"
                id="address"
                name="address"
                value={addressData.address}
                onChange={handleAddressChange}
                className="input"
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="form-group w-1/2 mr-2">
                <label htmlFor="city">เมือง</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={addressData.city}
                  onChange={handleAddressChange}
                  className="input"
                  required
                />
              </div>
              <div className="form-group w-1/2 ml-2">
                <label htmlFor="country">ประเทศ</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={addressData.country}
                  onChange={handleAddressChange}
                  className="input"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">รหัสไปรษณีย์</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={addressData.postalCode}
                onChange={handleAddressChange}
                className="input"
                required
              />
            </div>
          </form>
        </div>
        <div className="w-1/2">
          <h3 className="section-title">ข้อมูลการชำระเงิน</h3>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="cardNumber">หมายเลขบัตรเครดิต</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handlePaymentChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardHolder">ชื่อผู้ถือบัตร</label>
              <input
                type="text"
                id="cardHolder"
                name="cardHolder"
                value={paymentData.cardHolder}
                onChange={handlePaymentChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">วันหมดอายุ</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={paymentData.expiryDate}
                onChange={handlePaymentChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentData.cvv}
                onChange={handlePaymentChange}
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="paymentMethod">วิธีการชำระเงิน</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={paymentData.paymentMethod}
                onChange={handlePaymentChange}
                className="input"
                required
              >
                <option value="">เลือกวิธีการชำระเงิน</option>
                <option value="creditCard">บัตรเครดิต</option>
                <option value="bankTransfer">โอนเงินผ่านธนาคาร</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-4">

      <Link
            to="/Shopping"
            className="inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
            >
                สั่งซื้อสินค้า
                </Link> 
      </div>
    </div>
  );
}

export default CheckoutPage;
