import { PageHeaderWrapper } from '@ant-design/pro-components';
import React from 'react';

const Admin: React.FC = (props) => {
  const { children } = props;
  return <PageHeaderWrapper content={' 仅管理员权限可看'}>{children}</PageHeaderWrapper>;
};
export default Admin;
