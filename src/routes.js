import SevenWondersHome from "./Views/SevenWonders/Index";

const Routes = [
    {
        path: "/",
        exact: true,
        name: 'Home!',
        main: () => <h2>Home</h2>
    },
    {
        path: "/sevenwonders",
        name: '7 Wonders',
        main: () => <SevenWondersHome />
    },
    {
        path: "/shoelaces",
        name: 'Shoelaces!',
        main: () => <h2>Shoelaces</h2>
    }
];

export default Routes;