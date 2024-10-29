import Link from 'next/link';
import styles from './HeaderSidebar.module.css'; // Import your CSS module

const HeaderSidebar = ({ isSidebarOpen, toggleSidebar, headerData }) => {
    const handleMenuItemClick = () => {
        if (isSidebarOpen) {
            toggleSidebar(); // Close the sidebar
        }
    };

    return (
        <div className={`${styles.navigation} ${isSidebarOpen ? styles.open : ''}`}>
            <span className={styles.closepanel} onClick={toggleSidebar}>
                <svg
                    className="qodef-svg--close qodef-m"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.163"
                    height="20.163"
                    viewBox="0 0 26.163 26.163"
                >
                    <rect
                        width="36"
                        height="1"
                        transform="translate(0.707) rotate(45)"
                    ></rect>
                    <rect
                        width="36"
                        height="1"
                        transform="translate(0 25.456) rotate(-45)"
                    ></rect>
                </svg>
            </span>
            <ul className={`${styles['navigation-list']} ${isSidebarOpen ? styles.open : ''}`}>
                {headerData?.data.map((header, index) => (
                    <li key={index}>
                        <Link href={header?.page_url} onClick={handleMenuItemClick}>
                            {header?.page_name.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeaderSidebar;
