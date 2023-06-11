import { Layout } from "antd";
const { Header } = Layout;
function HeaderBar() {
return (
    <Header className="header">
        <div className="logo">
            <img src="./src/assets/img/logo.PNG" width={100} />
        </div>
    </Header>
);
}
export default HeaderBar;
