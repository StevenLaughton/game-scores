import SevenWonders from "./Views/seven-wonders";

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
        main: () => <SevenWonders/>
    },
    {
        path: "/shoelaces",
        name: 'Shoelaces!',
        main: () => <h2>Shoelaces</h2>
    }
];

export default Routes;
