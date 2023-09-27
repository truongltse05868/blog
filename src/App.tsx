import { Layout, Menu, Image } from "antd";
import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import "./blog.css";
function App() {
  return (
    <Layout className="body">
      <header className="header">
        <Row>
          <Col span={8}>
            <h1>Ngo Minh Hieu</h1>
          </Col>
          <Col span={8} offset={8}>
            <Menu mode="horizontal">
              <Menu.Item key="work" className="Menu-item">
                Work
              </Menu.Item>
              <Menu.Item key="gallery" className="Menu-item">
                Gallery
              </Menu.Item>
              <Menu.Item key="about" className="Menu-item">
                About
              </Menu.Item>
              <Menu.Item key="resume" className="Menu-item">
                Resume
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </header>
      <Content className="content">
        <div>
          <Row>
            <Col flex="1 1 200px">
              {" "}
              <Image
                style={{ width: "180px", height: "180px" }}
                src="/images/Emojiwelcome.png"
              />{" "}
            </Col>

            <Col flex="0 1 300px"></Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col
              flex="1 1 200px"
              style={{ fontSize: "48px", fontFamily: "DM Mono" }}
            >
              <p>Xin chào, I'm Hiếu</p>
            </Col>
          </Row>
          <Row>
            <Col
              flex="1 1 200px"
              style={{ fontSize: "24px", fontFamily: "DM Mono" }}
            >
              <p ><span className="highlight">I am a Product Design.</span> Optimal and user-friendly interface is always my top priority!</p>
            </Col>
          </Row>
        </div>
      </Content>
      <footer></footer>
    </Layout>
  );
}

export default App;
