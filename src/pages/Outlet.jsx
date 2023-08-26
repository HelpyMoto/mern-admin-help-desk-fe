import { BellOutlined, CaretDownOutlined, UserSwitchOutlined, DatabaseOutlined, FileAddOutlined, FileOutlined, GlobalOutlined, HomeOutlined, ProfileOutlined, TeamOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import { Avatar, Badge, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', "/", <HomeOutlined />),
  getItem('Ticket', 'ticket', <DatabaseOutlined />),  
  getItem('User', 'user', <UserOutlined />),  
  getItem('Admin', 'admin', <TeamOutlined />),
  getItem('Vendor', 'vendor', <ProfileOutlined />),
  getItem('KYC', 'kyc', <FileAddOutlined />, [
    getItem('Mechanic', 'mechanic-kyc'), 
    getItem('Cleaner', 'cleaner-kyc'), 
    getItem('Driver', 'driver-kyc'), 
  ]), 
  getItem('Message', 'message', <MessageOutlined />, [
    getItem('User', 'mechanic-message'),  
    getItem('Vendor', 'vendor-message'),  
    getItem('Admin', 'admin-message'),  
    getItem('Feedback', 'feedback-message'),  
  ]), 
];


export default function () {

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate()
  const location = useLocation()


  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)} >

        {!collapsed ? <div className='logo'>HelpyMoto</div> : <div className='logo'>H.</div>}

        <Menu
          theme="dark"
          defaultSelectedKeys={location.pathname.replace("/","") || "/"}
          mode="inline"
          onClick={(e) => navigate(e.key)}
          items={items} />

      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "25px",
            alignItems: "center",
            background: colorBgContainer,
          }}
        >
          <Badge count={2}>
            <BellOutlined style={{ fontSize: '22px', color: '#08c' }} />
          </Badge>

          <Badge>
            <Avatar size={30} icon={<UserOutlined />} shape="circle" /> &nbsp; HelpyMoto Admin <CaretDownOutlined style={{ color: "gray" }} />
          </Badge>

        </Header>
        <Content>
          <div
            style={{
              padding: "0 5%",
              minHeight: 400,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          &copy; HelpyMoto {(new Date().getFullYear())} All Right Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
}; 