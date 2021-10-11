interface RouteConfig {
  name: string;
  path: string;
  component: () => JSX.Element;
}
