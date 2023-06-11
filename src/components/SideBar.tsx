import React, { useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import {
    SortAscendingOutlined,
    PlusSquareOutlined,
    MinusSquareOutlined,
    FormOutlined,
} from "@ant-design/icons";
import { ConfigProvider } from "antd";
import { Layout, Menu } from "antd";
import "../App.css";
const { Sider } = Layout;
interface MenuItem {
    key: string;
    label: string;
    icon?: ReactNode;
    link: string;
}


const items: MenuItem[] = [
    {
        key: "1",
        label: "Ver registros",
        icon: <SortAscendingOutlined />,
        link: "/"
    },
    {
        key: "2",
        label: "Editar registros",
        icon: <FormOutlined />,
        link: "/EditarRegistro"
    },
    {
        key: "3",
        label: "Agregar registros",
        icon: <PlusSquareOutlined />,
        link: "/NuevoRegistro"
    },
    {
        key: "4",
        label: "Eliminar registros",
        icon: <MinusSquareOutlined />,
        link: "/EliminarRegistro"
    },
];

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    return (
        <Sider
            breakpoint="xl"
            width={300}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            id= "sideBar" 
        >
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            colorPrimary: "#1677ff",
                        },
                    },
                }}
            >
                <Menu
                    defaultSelectedKeys={["1"]}
                    theme="dark"
                    mode="inline"
                    selectedKeys={selectedKeys}
                    onMouseLeave={() => setSelectedKeys([])}
                    id="sideBar-Menu"
                >
                    {items.map((item) => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            <Link to={item.link}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </ConfigProvider>
        </Sider>
    );}
    export default SideBar;