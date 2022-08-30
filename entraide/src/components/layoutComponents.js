import React from 'react';
import{Layout , Menu} from 'antd'
import {Link } from 'react-router-dom'

const{ Header ,Content ,Footer} = Layout
const menuStyle = {
  with:'1rem'
}
const contentStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '3rem 3rem',
    justifyContent:'center'
}

const HcLayout = ({children}) =>{
        return (
          <Layout>
            <Header>
                <Menu theme='dark' mode='vertical' defaultSelectedKeys={['1']} style={menuStyle}>
                  <Menu.Item key="1"><Link to='/'>Accueil</Link></Menu.Item>
                  <Menu.Item key="2"><Link to='/'>Demande</Link></Menu.Item>
                </Menu>
            </Header>
                <Content style={contentStyle} children={children}/>
          </Layout>

        );
}
 
export default HcLayout;