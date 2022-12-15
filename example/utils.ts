import type { MenuProps } from 'antd';
import { IRouteItem } from './config/type';

export const formatMenu = (arr: IRouteItem[]): MenuProps['items'] => {
  const handleRoute = arr.filter(i => (i.path !== '/login'));
  const res = handleRoute.map((i: IRouteItem) => {
    if (i.routes && i.routes.length > 0) {
      return {
        label: i.name,
        key: i.path,
        children: formatMenu(i.routes),
      }
    }
    return {
      label: i.name,
      key: i.path
    }
  });
  return res;
}
