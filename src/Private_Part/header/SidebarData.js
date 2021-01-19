import React from 'react'

import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,

} from '@ant-design/icons';

export const SidebarData = () => [
    {
        title: 'Home',
        path: '/dash',
        icon: <PieChartOutlined/>,
    },
    {
        title: 'AllBlog',
        path: '/allblog',
        icon: <DesktopOutlined/>,
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <DesktopOutlined/>,
    },
    {
        title: 'Table',
        path: '/table',
        icon: <DesktopOutlined/>,
    },
  
]