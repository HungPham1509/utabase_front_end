// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'ダッシュボード',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: getIcon('eva:people-fill')
  // },
  {
    title: '書類',
    path: '/dashboard/document',
    icon: getIcon('eva:file-text-fill')
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill')
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill')
  // },
  {
    title: 'フィードバック',
    path: '/dashboard/feedback',
    icon: getIcon('ic:baseline-feedback')
  }
  // {
  //   title: 'フィードバック',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill')
  // }
];

export default sidebarConfig;
