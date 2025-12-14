export default function About() {
  return (
    <div className="pt-28 px-4 max-w-5xl mx-auto pb-20 text-center">

      {/* TIÊU ĐỀ */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8">
        Giới Thiệu Về Đặc Sản Vĩnh Long
      </h1>

      {/* ĐOẠN MỞ ĐẦU */}
      <p className="text-lg text-gray-700 leading-relaxed mb-12 px-2 md:px-0">
        Chào mừng bạn đến với không gian tinh hoa ẩm thực của{" "}
        <span className="font-semibold text-green-700">Đặc Sản Vĩnh Long</span>.
        Chúng tôi mang đến những sản phẩm thuần Việt, được tuyển chọn kỹ lưỡng từ miền
        sông nước Cửu Long – nơi hội tụ hương vị đậm đà, chân thật và giàu bản sắc.
      </p>

      {/* KHỐI NỘI DUNG */}
      <div className="space-y-10 text-left md:text-center px-2 md:px-0">

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Vĩnh Long – Trái Tim Miền Tây Nam Bộ</h2>
          <p className="text-gray-700 leading-relaxed">
            Vĩnh Long nổi tiếng là vùng đất màu mỡ, trù phú với những vườn cây ăn trái bạt ngàn
            trải dài bên dòng sông Tiền hiền hòa. Không chỉ là nơi giữ gìn những giá trị văn hóa
            lâu đời, Vĩnh Long còn là cái nôi của nhiều loại đặc sản mang hương vị tự nhiên,
            mộc mạc nhưng đầy tinh tế.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Sứ Mệnh Của Chúng Tôi</h2>
          <p className="text-gray-700 leading-relaxed">
            Chúng tôi mong muốn mang đến cho khách hàng trên toàn quốc những sản phẩm chất lượng
            nhất, an toàn và giàu giá trị truyền thống. Từ những nguyên liệu tự nhiên, quy trình
            sản xuất thủ công cho đến phong cách phục vụ, tất cả đều nhằm đem lại trải nghiệm
            mua sắm tốt nhất.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Giá Trị Cốt Lõi</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li><strong>Chất lượng</strong> luôn là ưu tiên hàng đầu.</li>
            <li>Các sản phẩm đều được <strong>tuyển chọn kỹ lưỡng</strong> từ nhà vườn, cơ sở uy tín.</li>
            <li>Giữ trọn <strong>hương vị đặc trưng của miền Tây</strong>.</li>
            <li>Hỗ trợ bà con địa phương phát triển kinh tế bền vững.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Tầm Nhìn Phát Triển</h2>
          <p className="text-gray-700 leading-relaxed">
            Chúng tôi hướng đến xây dựng một nền tảng thương mại đặc sản chất lượng cao,
            nơi mà mọi người có thể tìm thấy những sản phẩm tốt nhất của Vĩnh Long cũng như
            khắp miền Tây Nam Bộ. Mục tiêu của chúng tôi là trở thành cầu nối đưa đặc sản quê hương
            vươn xa hơn, đến với hàng triệu người tiêu dùng.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Cam Kết Dành Cho Khách Hàng</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>100% hàng hóa có nguồn gốc rõ ràng.</li>
            <li>Đóng gói cẩn thận, giao hàng nhanh chóng.</li>
            <li>Hỗ trợ đổi trả theo chính sách minh bạch.</li>
            <li>Luôn lắng nghe và cải thiện để phục vụ tốt hơn.</li>
          </ul>
        </section>

      </div>

      {/* FOOTER LỜI CẢM ƠN */}
      <div className="mt-14 text-center">
        <p className="text-lg text-gray-800 font-semibold">
          Cảm ơn bạn đã tin tưởng và đồng hành cùng Đặc Sản Vĩnh Long.
        </p>
        <p className="text-gray-600 mt-2">
          Chúc bạn có những trải nghiệm tuyệt vời khi khám phá hương vị miền Tây chân thật nhất!
        </p>
      </div>

    </div>
  );
}
