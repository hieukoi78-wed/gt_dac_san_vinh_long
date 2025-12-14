import React from 'react';
// Bước 1: Import hình ảnh
import Anh22Image from '../assets/anh22.jpg'; 
import Anh23Image from '../assets/anh23.jpg'; 
import Anh24Image from '../assets/anh24.jpg'; 
// LƯU Ý: Vẫn giữ nguyên đường dẫn tương đối ../assets/

const HomeComponent = () => {
    // Định nghĩa các màu sắc và font size thường dùng để dễ quản lý
    const Colors = {
        primaryYellow: '#FFC83D', 
        darkHeader: '#1A1A1A',     
        heroText: '#8B4513',       
        titleColor: '#D4AF37',     
        backgroundCream: '#F7F4EB', // Màu nền giống ảnh số 3
    };

    // Style cho các phần tử chính 
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif', 
        },
        promotionBanner: {
            backgroundColor: Colors.primaryYellow,
            textAlign: 'center',
            padding: '8px 0',
            fontWeight: 'bold',
            fontSize: '14px',
            color: Colors.darkHeader,
        },
        mainHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 50px',
            backgroundColor: Colors.darkHeader, 
            color: 'white',
        },
        headerLogo: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        },
        logoText: {
            fontWeight: 'bold',
            fontSize: '24px',
            color: 'white',
        },
        headerNav: {
            flexGrow: 1, 
            display: 'flex',
            justifyContent: 'center',
        },
        navList: {
            listStyle: 'none',
            display: 'flex',
            gap: '30px',
            padding: 0,
            margin: 0,
        },
        navLink: {
            textDecoration: 'none',
            color: 'white',
            fontWeight: '500',
            fontSize: '16px',
            padding: '5px 0',
        },
        headerActions: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
        },
        
        // Cập nhật Hero Section để phù hợp với bố cục mới
        heroSection: {
            display: 'flex',
            alignItems: 'center',
            padding: '50px 0',
            backgroundColor: Colors.backgroundCream, 
        },
        heroContentWrapper: {
            display: 'flex',
            maxWidth: '1200px',
            margin: '0 auto',
            alignItems: 'flex-start', // Căn chỉnh top
            justifyContent: 'space-between',
            width: '90%',
            gap: '40px',
        },
        
        // Khu vực Text Content - Chứa 2 khối nội dung
        heroTextWrapper: {
            flexBasis: '45%', // Chiếm khoảng 45% chiều rộng
            display: 'flex',
            flexDirection: 'column',
            gap: '30px', // Khoảng cách giữa 2 khối chữ
        },
        heroTextContent: {
            backgroundColor: '#FFFBEA', // Nền nhạt hơn cho khối chữ
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        },
        
        heroTitleSmall: {
            fontSize: '24px', // Thay đổi kích thước để phù hợp với bố cục 2 khối
            margin: '0 0 5px 0',
            color: Colors.heroText,
        },
        heroTitleLarge: {
            fontSize: '36px', // Thay đổi kích thước
            margin: '0 0 10px 0',
            color: Colors.titleColor,
            lineHeight: '1.1',
        },
        heroParagraph: {
            fontSize: '16px',
            margin: '0 0 15px 0',
            color: '#555',
        },
        ctaButton: {
            padding: '10px 30px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: Colors.darkHeader,
            backgroundColor: Colors.primaryYellow,
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        
        // Khu vực Product Gallery - Chứa 3 ảnh
        heroProductGallery: {
            flexBasis: '55%', // Chiếm khoảng 55% chiều rộng
            padding: '25px',
            backgroundColor: '#FFFBEA', // Nền nhạt hơn cho khu vực ảnh
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            textAlign: 'center',
        },
        galleryTitle: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: Colors.darkHeader,
            marginBottom: '15px',
        },
        imageGrid: {
            display: 'flex',
            flexWrap: 'wrap', // Cho phép xuống dòng
            gap: '10px', 
            justifyContent: 'center',
        },
        imageContainer: {
            width: 'calc(50% - 5px)', // 2 cột, trừ khoảng cách (gap/2)
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '5px',
        },
        gridImage: {
            width: '100%',
            height: 'auto',
            display: 'block',
        },
        imageOverlay: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '5px',
            fontSize: '12px',
            textAlign: 'center',
        },

        // Footer Styles (Giữ nguyên)
        footerSection: {
            backgroundColor: Colors.darkHeader, 
            color: 'white', 
            padding: '40px 50px'
        },
        footerContent: {
            display: 'flex', 
            justifyContent: 'space-around', 
            maxWidth: '1200px', 
            margin: '0 auto'
        },
        footerTitle: {
            color: Colors.primaryYellow
        },
        footerBottom: {
            backgroundColor: Colors.primaryYellow, 
            color: Colors.darkHeader, 
            textAlign: 'center', 
            padding: '10px 0', 
            marginTop: '20px', 
            fontWeight: 'bold'
        }
    };

    // Dữ liệu giả định cho 3 ảnh trong Gallery
    const galleryProducts = [
        { src: Anh22Image, title: 'Đặc Sản Vĩnh Long 1' },
        { src: Anh23Image, title: 'Đặc Sản Vĩnh Long 2' },
        { src: Anh24Image, title: 'Đặc Sản Vĩnh Long 3' },
    ];


    return (
        <div className="home-container" style={styles.container}>
            {/* 1. BANNER KHUYẾN MÃI */}
            <div className="promotion-banner" style={styles.promotionBanner}>
                MIỄN PHÍ VẬN CHUYỂN TRÊN MỌI ĐƠN HÀNG
            </div>

            {/* 2. HEADER/NAVIGATION BAR (Giữ nguyên) */}
            <header className="main-header" style={styles.mainHeader}>
                <div className="header-logo" style={styles.headerLogo}>
                    <span style={{fontSize: '30px'}} role="img" aria-label="Logo">🍚</span> 
                    <span style={styles.logoText}>ĐẶC SẢN VĨNH LONG</span>
                </div>
                <nav className="header-nav" style={styles.headerNav}>
                    <ul style={styles.navList}>
                        <li><a href="#" style={styles.navLink}>Trang chủ</a></li>
                        <li><a href="#" style={styles.navLink}>Sản phẩm</a></li>
                        <li><a href="#" style={styles.navLink}>Tin tức</a></li>
                        <li><a href="#" style={styles.navLink}>Liên hệ</a></li>
                        <li><a href="#" style={{...styles.navLink, fontWeight: 'bold'}}>Giới thiệu</a></li>
                    </ul>
                </nav>
                <div className="header-actions" style={styles.headerActions}>
                    <input 
                        type="text" 
                        placeholder="Tìm đặc sản..." 
                        style={{padding: '8px', borderRadius: '5px', border: 'none'}}
                    />
                    <span title="Tìm kiếm/Search Icon" style={{cursor: 'pointer'}}>🔍</span>
                    <span title="Giỏ hàng/Cart Icon" style={{cursor: 'pointer'}}>🛒</span>
                    <span style={{fontWeight: 'bold', color: Colors.primaryYellow}}>HOTLINE: 1800 6750</span>
                </div>
            </header>

            {/* 3. HERO/BANNER SECTION - ĐÃ SỬA THEO YÊU CẦU BỐ CỤC 2 KHỐI CHỮ & GALLERY 3 ẢNH */}
            <section className="hero-section" style={styles.heroSection}>
                <div className="hero-content-wrapper" style={styles.heroContentWrapper}>
                    
                    {/* KHU VỰC 2 KHỐI CHỮ (hero content wrapper) */}
                    <div className="hero-text-wrapper" style={styles.heroTextWrapper}>
                        
                        {/* Khối chữ 1 */}
                        <div style={styles.heroTextContent}>
                            <h2 style={styles.heroTitleSmall}>Hương vị Miền Tây</h2>
                            <h1 style={styles.heroTitleLarge}>Đặc Sản Vĩnh Long</h1>
                            <p style={styles.heroParagraph}>Mang tinh hoa ẩm thực đất Cửu Long đến tận tay bạn.</p>
                            <button className="cta-button" style={styles.ctaButton}>Khám phá ngay</button>
                        </div>
                        
                        {/* Khối chữ 2 */}
                        <div style={styles.heroTextContent}>
                            <h2 style={styles.heroTitleSmall}>Hương vị Miền Tây</h2>
                            <h1 style={styles.heroTitleLarge}>Đặc Sản Vĩnh Long</h1>
                            <p style={styles.heroParagraph}>Mang tinh hoa ẩm thực đất Cửu Long đến tận tay bạn.</p>
                            <button className="cta-button" style={styles.ctaButton}>Khám phá ngay</button>
                        </div>

                    </div>

                    {/* KHU VỰC PRODUCT GALLERY (hero-product-wrapper) */}
                    <div className="hero-product-gallery" style={styles.heroProductGallery}>
                        <h2 style={styles.galleryTitle}>Display Featured Products Gallery</h2>
                        
                        <div className="image-grid" style={styles.imageGrid}>
                            {galleryProducts.map((product, index) => (
                                <div key={index} className="product-card" style={styles.imageContainer}>
                                    <img 
                                        src={product.src}
                                        alt={product.title}
                                        style={styles.gridImage}
                                    />
                                    {/* Chú thích phía dưới ảnh */}
                                    <div style={styles.imageOverlay}>
                                        {product.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            
        </div>
    );
};

export default HomeComponent;