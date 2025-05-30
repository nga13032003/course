// Process.js
import React, { useState } from "react";
import { Card, Drawer, Progress, Typography, Badge, Tooltip } from "antd";
import { 
  FaTachometerAlt, 
  FaBookOpen, 
  FaCheckCircle, 
  FaClock, 
  FaExclamationCircle 
} from "react-icons/fa";

const { Title, Text } = Typography;

const Process = ({ myCourses }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Tính toán tiến độ trung bình
  const avgProgress = myCourses.length
    ? Math.round(myCourses.reduce((acc, c) => acc + c.progress, 0) / myCourses.length)
    : 0;

  const totalDuration = myCourses.reduce(
    (acc, c) => acc + (parseInt(c.duration) || 28),
    0
  );

  const totalCompletedLessons = myCourses.reduce(
    (acc, c) => acc + c.completedLessons,
    0
  );

  const showDrawer = () => setDrawerVisible(true);
  const onClose = () => setDrawerVisible(false);

  return (
    <>
      {/* Icon sidebar cố định bên trái dưới cùng, có animation nhấp nháy */}
      <Tooltip title="Xem tiến trình học">
        <div
          style={{
            position: "fixed",
            left: 0,
            bottom: 40,
            width: 56,
            height: 56,
            backgroundColor: "#1890ff",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 28,
            borderBottomRightRadius: 28,
            cursor: "pointer",
            zIndex: 1100,
            boxShadow: "2px 2px 12px rgba(0,0,0,0.2)",
            animation: "pulse 2.5s infinite",
            transition: "background-color 0.3s",
          }}
          onClick={showDrawer}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#40a9ff")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1890ff")}
          title="Xem tiến trình học"
        >
          <FaTachometerAlt size={28} />
        </div>
      </Tooltip>

      <Drawer
        title={
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaTachometerAlt style={{ color: "#1890ff" }} />
            <span>Tiến trình học của bạn</span>
          </div>
        }
        placement="left"
        onClose={onClose}
        visible={drawerVisible}
        width={360}
        bodyStyle={{ backgroundColor: "#f5f8fa" }}
      >
        {/* Card khóa học đang học */}
        <Card
          style={{ marginBottom: 20, borderRadius: 12, backgroundColor: "#e6f7ff" }}
          bordered={false}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FaBookOpen size={28} color="#1890ff" />
            <div>
              <Title level={5} style={{ marginBottom: 4, color: "#096dd9" }}>
                Khóa học đang học
              </Title>
              <Text strong style={{ fontSize: 24, color: "#003a8c" }}>
                {myCourses.length}
              </Text>
            </div>
          </div>
        </Card>

        {/* Card bài học đã hoàn thành */}
        <Card
          style={{ marginBottom: 20, borderRadius: 12, backgroundColor: "#f6ffed" }}
          bordered={false}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FaCheckCircle size={28} color="#52c41a" />
            <div>
              <Title level={5} style={{ marginBottom: 4, color: "#389e0d" }}>
                Bài học đã hoàn thành
              </Title>
              <Text strong style={{ fontSize: 24, color: "#237804" }}>
                {totalCompletedLessons}
              </Text>
            </div>
          </div>
        </Card>

        {/* Card tiến độ trung bình */}
        <Card
          style={{ marginBottom: 20, borderRadius: 12, backgroundColor: "#fff7e6" }}
          bordered={false}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <FaTachometerAlt size={28} color="#fa8c16" />
            <Title level={5} style={{ margin: 0, color: "#d48806" }}>
              Tiến độ trung bình
            </Title>
          </div>
          <Progress
            percent={avgProgress}
            strokeColor={{
              "0%": "#ffe58f",
              "100%": "#d48806",
            }}
            status={avgProgress < 40 ? "exception" : "normal"}
          />
          {avgProgress < 40 && (
            <div style={{ marginTop: 8, display: "flex", alignItems: "center", color: "#d4380d" }}>
              <FaExclamationCircle style={{ marginRight: 6 }} />
              <Text type="danger" strong>
                Tiến độ còn thấp, cố gắng hơn nhé!
              </Text>
            </div>
          )}
        </Card>

        {/* Card tổng thời gian học */}
        <Card
          style={{ borderRadius: 12, backgroundColor: "#f0f0f0" }}
          bordered={false}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FaClock size={28} color="#595959" />
            <div>
              <Title level={5} style={{ marginBottom: 4, color: "#262626" }}>
                Tổng thời gian học
              </Title>
              <Text strong style={{ fontSize: 24, color: "#434343" }}>
                {totalDuration} giờ
              </Text>
            </div>
          </div>
        </Card>

      </Drawer>

      {/* CSS animation pulse */}
      <style>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(24, 144, 255, 0.7);
          }
          70% {
            box-shadow: 0 0 10px 8px rgba(24, 144, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(24, 144, 255, 0);
          }
        }
      `}</style>
    </>
  );
};

export default Process;
