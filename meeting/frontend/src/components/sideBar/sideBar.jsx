import React from 'react';
import {
  ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader,
} from 'react-pro-sidebar';
import { Link, useRouteMatch } from 'react-router-dom';
import { AiTwotoneHome, AiOutlineSearch } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';

export default function Home() {
  const { url } = useRouteMatch();
  return (
    <div className="home">
      <ProSidebar>
        <SidebarHeader>
          <MenuItem icon={<FaUserAlt />}>
            <Link to={`${url}`} />
            Home
          </MenuItem>
        </SidebarHeader>
        <Menu iconShape="square">
          <MenuItem icon={<AiTwotoneHome />}>
            <Link to={`${url}`} />
            Home
          </MenuItem>
          <MenuItem icon={<AiOutlineSearch />}>
            <Link to={`${url}/search`} />
            Buscar amigos
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
}
