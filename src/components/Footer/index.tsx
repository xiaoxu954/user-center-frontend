import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '小徐出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'user-center',
          title: '用户中心',
          href: 'http://xiaoxucode.icu',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/xiaoxu954',
          blankTarget: true,
        },
        {
          key: 'xiaoxublog',
          title: '个人博客',
          href: 'http://xiaoxublog.xyz',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
