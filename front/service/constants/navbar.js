const navbarData = [
    {
        title: 'HOME',
        path: '/home',
    },
    {
        title: 'PRODUCTS',
        path: '',
        submenu: [
            {
                title: (
                    <div>
                        <div>PROCESS</div>
                        <div>INSTRUCTION</div>
                    </div>
                ),
                class: "bluelink",
            },
            {
                title: 'VACUUM SOLUTION',
                class: "greenlink",
            },
            {
                title: 'POWDER PROCESS',
                class: "orangelink",
            },
        ],
    },
    {
        title: 'APPLICATION',
        path: '',
        submenu: [
            {
                title: (
                    <div>
                        <div>PROCESS</div>
                        <div>INSTRUCTION</div>
                    </div>
                ),
                class: "bluelink",
            },
            {
                title: 'VACUUM SOLUTION',
                class: "greenlink",
            },
            {
                title: 'POWDER PROCESS',
                class: "orangelink",
            },
        ],
    },
    {
        title: 'ABOUT US',
        path: '/aboutus',
    },
    {
        title: 'BLOG',
        path: '/blog',
    },
    {
        title: 'CONTACT US',
        path: '/contactus',
    },
    {
        title: 'SEND ENQUIRY',
        path: '/contactus',
    },
    {
        title: 'LOGIN',
        path: '/login',
    },
];

export default navbarData