import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  Input,
  Avatar,
  Badge,
  Card,
  Progress,
  Row,
  Col,
  Typography,
  Button,
  Dropdown,
  Drawer,
} from "antd";
import {
  BellOutlined,
  UserOutlined,
  SearchOutlined,
  PlayCircleOutlined,
  FireOutlined,
  SettingOutlined,
  LogoutOutlined,
  CheckCircleOutlined,
  CodeOutlined,
  HighlightOutlined,
  LineChartOutlined,
  SmileOutlined,
  AppstoreOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  HourglassOutlined,
  StarOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { logo, hinh1, hinh2, hinh3, hinh4, hinh5, hinh6 } from "../assets";
import "./Home.css";
import { FaBookOpen, FaCheckCircle, FaClock, FaTachometerAlt } from "react-icons/fa";
import Process from "./Process";
import MeetTeachers from "./MeetTeachers";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;


const Home = () => {
  // Dữ liệu mẫu
  const myCourses = [
    {
      id: 1,
      title: "ReactJS cơ bản",
      description: "Học cách xây dựng giao diện ReactJS từ cơ bản đến nâng cao.",
      progress: 60,
      completedLessons: 2,
      totalLessons: 3,
      endDate: "30/06/2025",
      image: hinh1,
    },
    {
      id: 2,
      title: "Khóa học Java nâng cao",
      description: "Khám phá Java qua các dự án thực tế từ cơ bản đến nâng cao.",
      progress: 40,
      completedLessons: 4,
      totalLessons: 10,
      endDate: "15/07/2025",
      image: hinh2,
    },
    {
      id: 3,
      title: "Khóa học C/C++ nâng cao",
      description: "Khám phá C/C++ qua các dự án thực tế từ cơ bản đến nâng cao.",
      progress: 20,
      completedLessons: 2,
      totalLessons: 10,
      endDate: "15/07/2025",
      image: hinh5,
    },
  ];

  const recommendedCourses = [
    {
      id: 4,
      title: "UI/UX Design",
      description: "Thiết kế giao diện UI/UX đẹp mắt, thu hút người dùng.",
      image: hinh3,
    },
    {
      id: 5,
      title: "Python cơ bản",
      description: "Khám phá Python qua các dự án thực tế từ cơ bản đến nâng cao.",
      image: hinh1,
    },
    {
      id: 6,
      title: "Kiểm thử cơ bản",
      description: "Khám phá tester qua các dự án thực tế từ cơ bản đến nâng cao.",
      image: hinh6,
    },
  ];

  const fields = [
    { name: "Lập trình", icon: <CodeOutlined /> },
    { name: "Thiết kế", icon: <HighlightOutlined /> },
    { name: "Kinh doanh", icon: <LineChartOutlined /> },
    { name: "Phát triển bản thân", icon: <SmileOutlined /> },
    { name: "Lập trình", icon: <CodeOutlined /> },
    { name: "Thiết kế", icon: <HighlightOutlined /> },
    { name: "Kinh doanh", icon: <LineChartOutlined /> },
    { name: "Phát triển bản thân", icon: <SmileOutlined /> },
  ];

  const images = [hinh1, hinh2, hinh3, hinh4];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const userMenu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>Tài khoản của tôi</Menu.Item>
      <Menu.Item key="2" icon={<CheckCircleOutlined />}>Khóa học đã hoàn thành</Menu.Item>
      <Menu.Item key="3" icon={<SettingOutlined />}>Cài đặt</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4" icon={<LogoutOutlined />} danger>Đăng xuất</Menu.Item>
    </Menu>
  );

  const fieldMenu = (
    <Menu>
      <Menu.Item key="1" icon={<CodeOutlined />}>Lập trình</Menu.Item>
      <Menu.Item key="2" icon={<HighlightOutlined />}>Thiết kế</Menu.Item>
      <Menu.Item key="3" icon={<LineChartOutlined />}>Kinh doanh</Menu.Item>
      <Menu.Item key="4" icon={<SmileOutlined />}>Phát triển bản thân</Menu.Item>
    </Menu>
  );
    const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Kích hoạt animation khi component mount
    setLoaded(true);
  }, []);

  // Tính toán tiến độ trung bình an toàn
  const avgProgress = myCourses.length
    ? Math.round(myCourses.reduce((acc, c) => acc + c.progress, 0) / myCourses.length)
    : 0;

  const totalDuration = myCourses.reduce(
    (acc, c) => acc + (parseInt(c.duration) || 0),
    0
  );

  const totalCompletedLessons = myCourses.reduce(
    (acc, c) => acc + c.completedLessons,
    0
  );
  return (
    <Layout>
      
      {/* Header */}
       <Header className="header" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="Logo" style={{ height: 32, marginRight: 16 }} />

      {/* Menu desktop */}
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ flex: 1 }}
        className="header-menu"
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>Trang chủ</Menu.Item>
        <Menu.Item key="2" icon={<PlayCircleOutlined />}>Khóa học</Menu.Item>
        <Dropdown overlay={fieldMenu} placement="bottomLeft">
          <Menu.Item key="3" icon={<AppstoreOutlined />} style={{ cursor: "pointer" }}>Lĩnh vực</Menu.Item>
        </Dropdown>
        <Menu.Item key="4" icon={<QuestionCircleOutlined />}>Hỗ trợ</Menu.Item>
      </Menu>

      {/* Icon Danh mục khi màn hình nhỏ */}
      <MenuOutlined
        onClick={showDrawer}
        className="header-menu-icon"
      />

      <Input
        placeholder="Tìm kiếm..."
        prefix={<SearchOutlined />}
        style={{ width: 220, marginRight: 20, borderRadius: 20 }}
      />
      <Badge count={3} style={{ marginRight: 20 }}>
        <BellOutlined style={{ fontSize: 20, color: "#252626" }} />
      </Badge>
      <Dropdown overlay={userMenu} placement="bottomRight" trigger={['click']}>
        <Avatar icon={<UserOutlined />} style={{ cursor: "pointer" }} />
      </Dropdown>

      {/* Drawer menu cho mobile */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={onClose}
        visible={drawerVisible}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>Trang chủ</Menu.Item>
          <Menu.Item key="2" icon={<PlayCircleOutlined />}>Khóa học</Menu.Item>
          <Dropdown overlay={fieldMenu} placement="bottomLeft">
            <Menu.Item key="3" icon={<AppstoreOutlined />} style={{ cursor: "pointer" }}>Lĩnh vực</Menu.Item>
          </Dropdown>
          <Menu.Item key="4" icon={<QuestionCircleOutlined />}>Hỗ trợ</Menu.Item>
        </Menu>
      </Drawer>
    </Header>
     <Process myCourses={myCourses} />

      {/* Content */}
      <Content className="site-content">
        {/* Banner */}
        <div
          className="site-banner"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
              url(${images[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: `${currentImage}% center`, // trượt ngang
            borderRadius: 16,
            padding: "60px 40px",
            color: "#fff",
            textAlign: "center",
            marginBottom: 48,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
            transition: "background-image 1s ease-in-out",
          }}
        >
          <Title
            style={{
              color: "#fff",
              textShadow: "0 0 8px rgba(0,0,0,0.3)",
              animation: "textPulse 2s infinite",
            }}
          >
            Chào mừng bạn đến với nền tảng học tập trực tuyến
          </Title>
          <p>Khám phá hàng trăm khóa học hấp dẫn và phát triển kỹ năng của bạn!</p>
          <Button type="primary" size="large">
            Bắt đầu học ngay
          </Button>
        </div>

        {/* Các lĩnh vực */}
        <div className="course-fields">
          <Title level={3}>Lĩnh vực khóa học</Title>
           <Row gutter={[24, 24]}>
              {fields.map((field, index) => (
                <Col 
                  key={index} 
                  xs={12} 
                  sm={12} 
                  md={6}
                >
                  <Card
                    hoverable
                    style={{
                      borderRadius: 16,
                      background: "linear-gradient(135deg, #e6f7ff 0%, #f0f5ff 100%)",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                    }}
                    bodyStyle={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 100,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)";
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontSize: 32,
                          color: "#1890ff",
                          marginBottom: 8,
                          transition: "color 0.3s",
                        }}
                      >
                        {field.icon}
                      </div>
                      <span style={{ fontWeight: 500, color: "#333" }}>{field.name}</span>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>

        </div>
   
       {/* Khóa học của tôi */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 24 }}>
        <Title level={3} style={{ margin: 0 }}>
          Khóa học của tôi
        </Title>
        <a href="#" style={{ color: "#1890ff", fontWeight: 500 }}>
          Xem thêm &gt;&gt;
        </a>
      </div>
      <Row gutter={16} className="my-courses" style={{ marginTop: 8 }}>
        {myCourses.map((course) => (
          <Col span={8} key={course.id} style={{ position: "relative" }}>
            {/* Attention badge */}
            <div className="attention-badge">
              <FireOutlined style={{ marginRight: 4 }} />
              Học ngay!
            </div>

            <Card
              cover={<img alt={course.title} src={course.image} style={{ borderRadius: 12, height: 160, objectFit: 'cover' }} />}
              actions={[
                <Button type="link" icon={<PlayCircleOutlined />}>
                  Tiếp tục học
                </Button>,
              ]}
              style={{ borderRadius: 16, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}
            >
              {/* Header info: title, giảng viên, ngày bắt đầu */}
              <div style={{ marginBottom: 12 }}>
                <Text strong style={{ fontSize: 18, display: "block", marginBottom: 6 }}>
                  {course.title}
                </Text>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "#555" }}>
                  <span>
                    <UserOutlined style={{ marginRight: 6, color: "#1890ff" }} />
                    {course.instructor || "Giảng viên: Thanh Nga"}
                  </span>
                  <span>
                    <CalendarOutlined style={{ marginRight: 6, color: "#1890ff" }} />
                    {course.startDate || "01/06/2025"}
                  </span>
                </div>
              </div>

              {/* Progress & details */}
              <div style={{ marginTop: "auto" }}>
                <Text style={{ fontSize: 14, fontWeight: 500 }}>
                  Đã hoàn thành: {course.completedLessons}/{course.totalLessons} bài
                </Text>
                <Progress percent={course.progress} status="active" style={{ marginBottom: 12 }} />

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "#555" }}>
                  <span>
                    <ClockCircleOutlined style={{ marginRight: 6, color: "#1890ff" }} />
                    {course.sessions || "12"} buổi / {course.totalLessons} bài
                  </span>
                  <span>
                    <HourglassOutlined style={{ marginRight: 6, color: "#1890ff" }} />
                    {course.duration || "24 giờ"}
                  </span>
                  {/* Đánh giá */}
                  <span style={{ display: "flex", alignItems: "center", fontWeight: 600, color: "#faad14" }}>
                    <StarOutlined style={{ marginRight: 4 }} />
                    {course.rating || "4.5"}
                  </span>
                </div>

                <Text type="secondary" style={{ display: "block", marginTop: 8 }}>
                  Hạn kết thúc: {course.endDate}
                </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>



        {/* Gợi ý khóa học */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 24 }}>
          <Title level={3} style={{ margin: 0 }}>
            Khóa học gợi ý
          </Title>
          <a href="#" style={{ color: "#1890ff", fontWeight: 500 }}>
            Xem thêm <ArrowRightOutlined />
          </a>
        </div>

         <Row gutter={16} className="recommended-courses" style={{ marginTop: 8 }}>
        {recommendedCourses.map((course) => (
          <Col span={8} key={course.id} style={{ position: "relative" }}>
            {/* Badge NEW */}
            <div
              className="new-badge"
              style={{
                position: "absolute",
                top: 6,
                left: 12,
                backgroundColor: "#f5222d",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                padding: "2px 8px",
                borderRadius: 4,
                animation: "pulse 2s infinite",
                zIndex: 10,
              }}
            >
              MỚI
            </div>

            <Card
              cover={
                <img
                  alt={course.title}
                  src={course.image}
                  style={{
                    height: 160,
                    objectFit: "cover",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  }}
                />
              }
              hoverable
              style={{
                background: "#e6f7ff",
                borderRadius: 16,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
              }}
              bodyStyle={{ padding: 16 }}
            >
              <Card.Meta
                title={<span style={{ fontWeight: 600, fontSize: 16 }}>{course.title}</span>}
                description={
                  <Text type="secondary" style={{ fontSize: 13 }}>
                    {course.description}
                  </Text>
                }
              />
              <div style={{ marginTop: 12, fontSize: 14, color: "#555" }}>
                <p style={{ marginBottom: 4 }}>
                  <CalendarOutlined style={{ color: "#1890ff", marginRight: 6 }} />
                  Ngày bắt đầu: {course.startDate || "01/07/2025"}
                </p>
                <p style={{ marginBottom: 4 }}>
                  <UserOutlined style={{ color: "#1890ff", marginRight: 6 }} />
                  Giảng viên: {course.instructor || "Phan Thị Thanh Nga"}
                </p>
                <p style={{ marginBottom: 0 }}>
                  <ClockCircleOutlined style={{ color: "#1890ff", marginRight: 6 }} />
                  Số buổi: {course.sessions || "12"}
                </p>
              </div>
              <Button
                type="primary"
                icon={<UserAddOutlined />}
                style={{ marginTop: 12, borderRadius: 8, width: "100%" }}
              >
                Đăng ký ngay
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <MeetTeachers />
      </Content>

      {/* Footer */}
      <Footer>
        ©2025 Nền tảng Học Trực Tuyến | Liên hệ: support@hoc.com | Hotline: 0123-456-789
      </Footer>
    </Layout>
  );
};

export default Home;
