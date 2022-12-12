import React, { ReactElement } from 'react';
import type { RouteComponentProps } from 'react-router-dom'; 

export type IRouteItem = {
  path: string;
  component: React.ComponentType<RouteComponentProps & {innerRoutes: IRouteItem[]|undefined }>;
  routes?: IRouteItem[];
  exact?: boolean;
  icon?: ReactElement;
  redirect?: string;
  name?: string;
}