import React from "react";
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
} from "antd";
import {
  BellOutlined,
  UserOutlined,
  SearchOutlined,
  PlayCircleOutlined,
  FireOutlined,
} from "@ant-design/icons";
import { logo, hinh1, hinh2, hinh3 } from "../assets/index";
import "./Home.css";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const Home = () => {
  // Dữ liệu mẫu: myCourses có đầy đủ description, endDate, completedLessons, totalLessons
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
  ];

  const recommendedCourses = [
    {
      id: 3,
      title: "UI/UX Design",
      description: "Thiết kế giao diện đẹp mắt, thu hút người dùng.",
      image: hinh3,
    },
    {
      id: 4,
      title: "Python cơ bản",
      description: "Khám phá Python qua các dự án thực tế từ cơ bản đến nâng cao.",
      image: hinh1,
    },
  ];

  const upcomingCourses = [
    { id: 5, title: "Machine Learning", date: "15/06/2025", image: hinh2 },
    { id: 6, title: "Data Science", date: "22/06/2025", image: hinh3 },
  ];

  const fields = ["Lập trình", "Thiết kế", "Kinh doanh", "Phát triển bản thân"];

  return (
    <Layout>
      {/* Header */}
      <Header>
        <img src={logo} alt="Logo" />
        <Menu mode="horizontal" defaultSelectedKeys={["1"]} style={{ flex: 1 }}>
          <Menu.Item key="1">Trang chủ</Menu.Item>
          <Menu.Item key="2">Khóa học đã hoàn thành</Menu.Item>
          <Menu.Item key="3">Lĩnh vực</Menu.Item>
          <Menu.Item key="4">Hỗ trợ</Menu.Item>
        </Menu>
        <Input
          placeholder="Tìm kiếm..."
          prefix={<SearchOutlined />}
          style={{ width: 220, marginRight: 20, borderRadius: 20 }}
        />
        <Badge count={3} style={{ marginRight: 20 }}>
          <BellOutlined style={{ fontSize: 20, color: "#252626" }} />
        </Badge>
        <Avatar icon={<UserOutlined />} />
      </Header>

      {/* Content */}
      <Content className="site-content">
        {/* Banner */}
        <div className="site-banner">
        <Title
          style={{
            color: "#fff",
            textShadow: "0 0 8px rgba(0,0,0,0.3)",
            animation: "textPulse 2s infinite",
          }}
        >
          Chào mừng bạn đến với nền tảng học tập trực tuyến
        </Title>

          <p>
            Khám phá hàng trăm khóa học hấp dẫn và phát triển kỹ năng của bạn!
          </p>
          <Button type="primary" size="large">
            Bắt đầu học ngay
          </Button>
        </div>

        {/* Giới thiệu */}
        <div className="site-intro">
          <Title level={3}>Tại sao nên chọn chúng tôi?</Title>
          <p>
            Chúng tôi cung cấp hàng trăm khóa học đa dạng, giảng viên chất
            lượng và cộng đồng học tập sôi nổi. Nâng cao kỹ năng của bạn ngay
            hôm nay!
          </p>
        </div>

        {/* Các lĩnh vực */}
        <div className="course-fields">
          <Title level={3}>Lĩnh vực khóa học</Title>
          <Row gutter={16}>
            {fields.map((field, index) => (
              <Col span={6} key={index}>
                <Card hoverable>{field}</Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Khóa học của tôi */}
        <Title level={3} style={{ marginTop: 24 }}>
          Khóa học của tôi
        </Title>
        <Row gutter={16} className="my-courses">
          {myCourses.map((course) => (
            <Col span={8} key={course.id} style={{ position: "relative" }}>
              {/* Attention badge */}
              <div className="attention-badge">
                <FireOutlined style={{ marginRight: 4 }} />
                Học ngay!
              </div>

              <Card
                cover={<img alt={course.title} src={course.image} />}
                actions={[
                  <Button type="link" icon={<PlayCircleOutlined />}>
                    Tiếp tục học
                  </Button>,
                ]}
              >
                <Card.Meta
                  title={course.title}
                  description={course.description}
                />
                <div style={{ marginTop: 12 }}>
                  <Text strong>
                    Đã hoàn thành: {course.completedLessons}/
                    {course.totalLessons} bài
                  </Text>
                  <Progress percent={course.progress} status="active" />
                  <Text type="secondary">
                    Hạn kết thúc: {course.endDate}
                  </Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Gợi ý khóa học */}
        <Title level={3} style={{ marginTop: 24 }}>
          Khóa học gợi ý
        </Title>
        <Row gutter={16} className="recommended-courses">
          {recommendedCourses.map((course) => (
            <Col span={8} key={course.id}>
              <Card
                cover={<img alt={course.title} src={course.image} />}
                hoverable
                style={{ background: "#e6f7ff" }}
              >
                <Card.Meta
                  title={course.title}
                  description={course.description}
                />
                <Button type="primary" style={{ marginTop: 8 }}>
                  Đăng ký ngay
                </Button>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Khóa học sắp tới */}
        <Title level={3} style={{ marginTop: 24 }}>
          Khóa học sắp tới
        </Title>
        <Row gutter={16} className="upcoming-courses">
          {upcomingCourses.map((course) => (
            <Col span={8} key={course.id}>
              <Card
                cover={<img alt={course.title} src={course.image} />}
                title={course.title}
              >
                <p>Ngày bắt đầu: {course.date}</p>
                <Button type="dashed">Xem chi tiết</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>

      {/* Footer */}
      <Footer>
        ©2025 Nền tảng Học Trực Tuyến | Liên hệ: support@hoc.com | Hotline:
        0123-456-789
      </Footer>
    </Layout>
  );
};

export default Home;
