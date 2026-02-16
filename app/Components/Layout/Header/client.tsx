"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer } from "antd";
import { DownOutlined, LogoutOutlined, MenuOutlined, UpOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { menuList } from "./menu";
import ButtonCustom from "../../Custom/button";
import { getUserInfo } from "./../../../lib/auth";
import DropdownCustom from "../../Custom/dropdown";
import { useRouter } from "next/navigation";
type UserUI = {
  username: string;
  avatar: string;
};

type Props = {
  isMobile?: boolean;
  isDesktop?: boolean;
};

export default function MenuClient({
  isMobile = false,
  isDesktop = false,
}: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const domain = process.env.NEXT_PUBLIC_DB_URL;
  const router = useRouter();
  const [user, setUser] = useState<UserUI | null>(null);
  const isLogin = !!user;

  useEffect(() => {
    getUserInfo()
      .then(setUser)
      .catch(() => {
        setUser(null);
      });
  }, []);

  const 
  handleLogout = () => {
    router.push("/logout");
  };


  const renderMenu = (onClick?: () => void) => (
    <ul>
      {menuList.map((item) => {
        const isActive =
          pathname === item.path ||
          (item.path !== "/" && pathname.startsWith(item.path));

        return (
          <li
            key={item.path}
            className={isActive ? "active" : ""}
            onClick={onClick}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );

  if (isDesktop && isLogin && user) {
    return (
      <DropdownCustom
        placement="bottomRight"
        trigger={
          <span className="avatar-wrapper-header">
            <img
              src={user.avatar}
              alt="avatar"
              className="avatar-img"
            />
            <span className="avatar-down">
              <DownOutlined />
            </span>
          </span>
        }
        items={[
          {
            key: "profile",
            label: "Trang cá nhân ",
            icon: <UserOutlined />,
            onClick: () => router.push("/trang-ca-nhan")
          },
          {
            key: "logout",
            label: "Đăng xuất ",
            icon: <LogoutOutlined />,
            danger: true,
            onClick: handleLogout,
          },
        ]}
      />
    );
  }


  if (!isMobile) {
    return <>{renderMenu()}</>;
  }

  return (
    <>
      <MenuOutlined className="bars" onClick={() => setOpen(true)} />

      <Drawer
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
        width="80%"
        title="Menu"
      >
        <div className="drawer-menu">
          {renderMenu(() => setOpen(false))}

          {isLogin && user ? (
            <>
              <div
                className="nameUser"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0,
                  marginTop: 16,
                  flexDirection: 'column'
                }}
              >
                <Link href={'/trang-ca-nhan'}>
                  <img
                    src={user.avatar}
                    alt="avatar"
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
                <Link href={'/trang-ca-nhan'} style={{ fontSize: '20px', color: '#0958d9', textDecoration: 'underline' }}>{user.username}</Link >
              </div>

              <ButtonCustom onClick={handleLogout} style={{ marginTop: 12 }} className="btn-logout">
                <LogoutOutlined /> Đăng xuất
              </ButtonCustom>
            </>
          ) : (
            <Link
              href={domain + `/oauth2/authorization/google`}
              style={{ textDecoration: "none" }}
            >
              <ButtonCustom className="login-btn">
                Đăng nhập
              </ButtonCustom>
            </Link>
          )}
        </div>
      </Drawer>
    </>
  );
}
