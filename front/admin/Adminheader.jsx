import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import styles from './Header.module.css'; // นำเข้าไฟล์ CSS Module

export default function Header() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div>
            <div className={`container mx-auto px-4 ${styles.headerContainer}`}> {/* เรียกใช้สไตล์ CSS Module */}
                <div className="flex items-center justify-between py-4">
                    <div>
                        <Link to="/" className={`btn btn-ghost text-xl ${styles.brand}`}>Computer Shop</Link> {/* เรียกใช้สไตล์ CSS Module */}
                    </div>
                    <div className="flex gap-2">
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full overflow-hidden">
                                        <img src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/407739701_1471270456788588_1563178133401973171_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEbRwc0gRLXNaHsmr2dSnzKmR-gd3yYDTuZH6B3fJgNO3ICUJOsa_FIW5CgqIATjcfgpE1aYJEsgUO9Mtz4OvLl&_nc_ohc=Ec-LxFC6Ec4AX-Vt6TK&_nc_ht=scontent-bkk1-1.xx&oh=00_AfBMXe-mYrRHXmDocKEZg1R5c3DonUPBselXKGhVa3RIEw&oe=65FDA1A4" alt="Profile" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to="/AdminProfile" className="justify-between">โปรไฟล์</Link>
                                    </li>
                                    <li><Link to="/" onClick={handleLogout}>ออกจากระบบ</Link></li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/login" className="btn btn-ghost"></Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
