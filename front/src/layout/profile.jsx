// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const ProfilePage = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [avatar, setAvatar] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated username:', username);
    console.log('Updated email:', email);
    console.log('Avatar file:', avatar);
    setUsername('');
    setEmail('');
    setAvatar(null);
  };

  return (
    <div className="container mx-auto py-8 flex flex-col items-center">
      <div className="max-w-md w-full bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className="bg-white-500 py-8 text-center">
          <img src={avatar ? URL.createObjectURL(avatar) : '/default-avatar.png'} alt="Profile Avatar" className="w-32 h-32 rounded-full mx-auto" />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">โปรไฟล์ของฉัน</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">ชื่อผู้ใช้</label>
              <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">อีเมล</label>
              <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
            </div>
            <div className="mb-4">
              <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">อัพโหลดรูปโปรไฟล์</label>
              <input type="file" id="avatar" name="avatar" accept="image/*" onChange={handleAvatarChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">บันทึกการเปลี่ยนแปลง</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
