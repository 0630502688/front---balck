import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Header() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Computer Shop</Link>
            </div>
            <div className="flex-none gap-2">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full overflow-hidden">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Profile" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/profile" className="justify-between">โปรไฟล์</Link>
                            </li>
                            {/* <li><Link to="/settings">การตั้งค่า</Link></li> */}
                            <li><Link to="/CartPage">ตะกร้าสินค้า</Link></li> {/* เพิ่มลิงก์ไปยังหน้าตะกร้าสินค้า */}
                            <li><Link to="/" onClick={handleLogout}>ออกจากระบบ</Link></li>
                        </ul>
                    </div>
                ) : (
                    <Link to="/login" className="btn btn-ghost"></Link>
                )}
            </div>
        </div>
    );
}
