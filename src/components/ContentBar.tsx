import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const { Content } = Layout;

const ContentBar = () => {
    return (
        <Content>
            <Outlet />
        </Content>
    );
};
export default ContentBar;