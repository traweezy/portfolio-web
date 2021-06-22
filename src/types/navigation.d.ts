interface RouteConfig {
  name: string;
  path: string;
  exact?: boolean;
  component: () => JSX.Element;
}
