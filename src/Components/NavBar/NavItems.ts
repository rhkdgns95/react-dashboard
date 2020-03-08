interface INavigation {
    path: string,
    name: string,
    value: string
};

const NavItems: Array<INavigation> = [
    {
        path: "/",
        name: "Dashboard",
        value: "dashboard"
    },
    {
        path: "/custom",
        name: "Custom",
        value: "custom"
    },
    {
        path: "/layout",
        name: "Layout",
        value: "layout"
    }
];

export default NavItems;