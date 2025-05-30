// MeetTeachers.js
import React from "react";
import { Card, Button, Typography, Row, Col } from "antd";
import { FaVideo } from "react-icons/fa";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const teachers = [
  {
    id: 1,
    name: "Thầy Nam",
    subject: "Lập trình",
    description: "Chuyên gia ReactJS, NodeJS với 5 năm kinh nghiệm.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 2,
    name: "Cô Lan",
    subject: "Thiết kế UI/UX",
    description: "Hơn 10 năm kinh nghiệm thiết kế giao diện sáng tạo.",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 3,
    name: "Thầy Long",
    subject: "Python nâng cao",
    description: "Giảng viên Python & ML, đã đào tạo hơn 2000 học viên.",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
];

const MeetTeachers = () => {
  return (
    <div style={{ marginTop: 40, position: "relative" }}>
      {/* Tiêu đề */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <Title level={3}>Gặp gỡ Giáo viên</Title>
        <a
          href="#"
          style={{
            color: "#1890ff",
            fontWeight: 500,
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#40a9ff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#1890ff")}
        >
          Xem thêm &gt;&gt;
        </a>
      </div>

      {/* Danh sách giáo viên */}
      <Row gutter={[24, 24]}>
        {teachers.map((teacher, index) => (
          <Col key={teacher.id} xs={24} sm={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                hoverable
                style={{
                  borderRadius: 16,
                  background: "linear-gradient(135deg, #f0f5ff 0%, #ffffff 100%)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                bodyStyle={{ padding: 16 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05)";
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <motion.img
                    src={teacher.avatar}
                    alt={teacher.name}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      marginBottom: 12,
                      transition: "transform 0.3s",
                    }}
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                  />
                  <Title level={4} style={{ marginBottom: 4 }}>
                    {teacher.name}
                  </Title>
                  <Text type="secondary">{teacher.subject}</Text>
                  <p style={{ margin: "12px 0", color: "#333" }}>
                    {teacher.description}
                  </p>
                  <Button
                    type="primary"
                    icon={<FaVideo />}
                    style={{
                      borderRadius: 24,
                      background: "#1890ff",
                      borderColor: "#1890ff",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#40a9ff";
                      e.currentTarget.style.borderColor = "#40a9ff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#1890ff";
                      e.currentTarget.style.borderColor = "#1890ff";
                    }}
                  >
                    Đặt lịch hẹn
                  </Button>
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MeetTeachers;
