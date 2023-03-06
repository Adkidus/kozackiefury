import DefaultLayout from "./default";
// import AdminLayout from "./admin";
// import TransparentLayout from "./transparent";

const layouts = {
  default: DefaultLayout,
};

const LayoutWrapper = (props) => {
  const layoutType = props.children.type.layout
  const Layout = layouts.default;
  if (Layout != null) 
    return <Layout {...props}>{props.children}</Layout>;
  return <DefaultLayout {...props}>{props.children}</DefaultLayout>;
};

export default LayoutWrapper;
