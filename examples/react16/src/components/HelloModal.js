import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  Link,
  Breadcrumbs,
  Dropdown,
  InlineButton,
  Menu,
  MenuItem,
  SubMenu,
  Pagination,
  Steps,
  Step,
  Calendar,
} from '@muya-ui/core';
import { MoreIcon, FileIcon } from '@muya-ui/theme-light';
import styled from 'styled-components';

const dispatchUIEvent = () => {
  const $a = document.createElement('a');
  $a.onclick = () => {
    console.log('log from UIEvent');
  };
  const evt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: false,
  });
  $a.dispatchEvent(evt);
};

const menu = (
  <Menu>
    <MenuItem key="1">1st menu item</MenuItem>
    <MenuItem key="2">2nd menu item</MenuItem>
    <MenuItem key="3">3rd menu item</MenuItem>
  </Menu>
);

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: #999;
`;

const Container = styled.div`
  display: flex;

  & .calendar {
    width: 480px;
    box-shadow: 0 0 12px 0 rgba(56, 60, 66, 0.12);
  }

  & .custom-item {
    text-align: center;
  }

  & .custom-block {
    padding-top: 30px;
  }
`;

export default function() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    dispatchUIEvent();
  }, []);
  return (
    <>
      <Typography.Text>{visible}</Typography.Text>
      <Button onClick={() => setVisible(true)}>CLICK ME</Button>
      <Link href="https://www.kujiale.com" target="_blank">
        我是一个链接
      </Link>
      <Breadcrumbs
        size="m"
        headItem={{
          label: '返回上级',
          url: '../',
        }}
        items={[
          {
            label: 'home',
            url: '../../',
          },
          {
            label: <MoreIcon />,
            url: '../',
          },
          {
            label: 'current',
            url: '.',
          },
        ]}
      />
      <Dropdown overlay={menu}>
        <InlineButton type="primary">Hover me</InlineButton>
      </Dropdown>
      <MenuContainer>
        <Menu
          width={184}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          subMenuIcon={<FileIcon />}
        >
          <SubMenu key="sub1" title={<span>导航一</span>}>
            <MenuItem key="1">Item 1</MenuItem>
            <MenuItem key="2">Item 2</MenuItem>
            <MenuItem key="3">Item 3</MenuItem>
            <MenuItem key="4" disabled={true}>
              Item 4
            </MenuItem>
          </SubMenu>
          <SubMenu key="sub2" title={<span>导航二</span>}>
            <MenuItem key="5">Item 5</MenuItem>
            <MenuItem key="6">Item 6</MenuItem>
            <SubMenu key="sub3" title="二级导航">
              <MenuItem key="7">Item 7</MenuItem>
              <MenuItem key="8">Item 8</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span>导航三</span>}>
            <MenuItem key="9">Item 9</MenuItem>
            <MenuItem key="10">Item 10</MenuItem>
            <MenuItem key="11">Item 11</MenuItem>
            <MenuItem key="12">
              <Link href="http://www.kujiale.com" target="_blank">
                Item 12
              </Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </MenuContainer>
      <Pagination
        totalRecords={60}
        styles={{
          wrapper: 'pagination-demo-wrapper',
        }}
      />
      <Steps current={1}>
        <Step title="已完成" description="这里是描述部分"></Step>
        <Step title="处理中" description="这里是描述部分"></Step>
        <Step title="等待处理" description="这里是描述部分"></Step>
      </Steps>
      <Container>
        <Calendar
          selectType="date"
          className="calendar"
          styles={{
            panelItem: {
              height: 50,
            },
            panelDecadeBlock: 'custom-block',
            panelYearBlock: 'custom-block',
          }}
          renderMonthItem={(date, status) => {
            return (
              <div className="custom-item">
                <div>{date.format('DD')}</div>
                <div>{status}</div>
              </div>
            );
          }}
        />
      </Container>
    </>
  );
}
