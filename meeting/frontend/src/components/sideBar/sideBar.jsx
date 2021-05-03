import React from 'react';
import {
  ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader,
} from 'react-pro-sidebar';
import { Link, useRouteMatch } from 'react-router-dom';
import { AiTwotoneHome, AiOutlineSearch } from 'react-icons/ai';
import { BsHouseDoorFill, BsSerach } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';

export default function Home() {
  const { url } = useRouteMatch();
  return (
    <div className="home">
      <ProSidebar>
        <Menu iconShape="circle">
          <MenuItem>
            <Link to={`${url}`}>
              <p className="sidebar-menuItem d-flex justify-content-around">
                <span className="mr-3 mb-0 pb-0"><BsHouseDoorFill /></span>
                Home
              </p>
            </Link>
          </MenuItem>
          {/* SEARCH */}
        </Menu>
      </ProSidebar>
    </div>
  );
}
