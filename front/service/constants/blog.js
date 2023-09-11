const getImage = (imageName) => {
    return require(`../../assets/images/blog/blogimages/${imageName}`)
}

export const blogList = [
    {
        uri: getImage("Fortified-Rice-Kernels.jpg"),
        title: "Toshniwal Mixer in Rice Fortification Process",
        date: "Feb, 21, 2023",
        desc: "The rice fortification process involves the addition of vital vitamins and minerals to the rice, which ultimately increases its nutritional value. The fortification process",
        by: "by Toshniwal Instruments (Madras) Pvt. Ltd.",
        link: "/blog/Rice-Fortification-Process/"
    },
    {
        uri: getImage("OHT-tyres.jpg"),
        title: "Vacuum Pump in Tyre Manufacturing",
        desc: "Have you ever wondered Vacuum pumps play a crucial role in the Tyre manufacturing process..!! Yes, Tyre manufacturing involves the use of various",
        date: "Jan, 04, 2023",
        by: "by Toshniwal Vacuum Team",
        link: "/blog/Vacuum-Pump-in-Tyre-Manufacturing/"
    },
    {
        uri: getImage("Capture.jpeg"),
        title: "Compressed Air Application",
        desc: "Compressed air is so often used in Industrial facilities that it is often referred to as the “fourth” utility behind natural gas, electricity and water. The cost of compressed air on a unit per energy",
        date: "Dec, 23, 2022",
        by: "by Toshniwal Flow Team",
        link: "/blog/compressed-air-application/"
    },
    {
        uri: getImage("lubricant-oil.jpg"),
        title: "NEEDS AND NECESSITIES OF LUBRICANT OIL IN A",
        desc: "Topic based on Vacuum Oil",
        date: "Dec, 02, 2022",
        by: "by Toshniwal Vacuum Team",
        link: "/blog/vacuum-oil/"
    },
    {
        uri: getImage("Weka_Unterkategorie_Klein.png"),
        title: "VISUAL LEVEL INDICATOR",
        desc: "Our range of Visual Level Indicators are ideal for any level measuring and control application for clean liquids like diesel, petrol, water, ethanol and high viscous liquids over large indication ranges.",
        date: "Dec, 02, 2022",
        by: "by Toshniwal Flow Team",
        link: "/blog/visual-level-indicator-weka/"
    },
    {
        uri: getImage("butter.png"),
        title: "FLOW MEASUREMENT OF BUTTER OIL AT A DAIRY",
        desc: "Flow meters are used in a wide range of industries, be it pharmaceutical, power plants or food manufacturing units. To select a flow meter, the basic principle of a flow meter should be understood. Once",
        date: "Sep, 22, 2022",
        by: "by Toshniwal Flow Team",
        link: "/blog/flow-measurement-butter-oil-dairy-industry/"
    },
    {
        uri: getImage("WEB--sousvide_0.png"),
        title: 'VACUUM PUMP IN PACKAGING INDUSTRY',
        date: 'Feb, 04, 2022',
        desc: 'Vacuum pumps are used in a wide range of industries, be it pharmaceutical, power plants or food manufacturing units. To select a vacuum system, the principles of',
        by: "by Toshniwal Vacuum Team",
        link: "/blog/vacuum-pump-packaging-industry/"
    },
];

export const recentPosts = [
    {
        title: "Toshniwal Mixer in Rice Fortif...",
        link: "/blog/Rice-Fortification-Process/"
    },
    {
        title: "Vacuum Pump in Tyre Manufactur...",
        link: "/blog/Vacuum-Pump-in-Tyre-Manufacturing/"
    },
    {
        title: "Compressed Air Application",
        link: "/blog/compressed-air-application/"
    },
    {
        title: "NEEDS AND NECESSITIES OF LUBRI...",
        link: "/blog/vacuum-oil/"
    },
    {
        title: "VISUAL LEVEL INDICATOR",
        link: "/blog/visual-level-indicator-weka/"
    },
]

export const archive = {
    2019: [{
        month: "Jul",
        link: "/blog?archive=2019-Jul"
    }, {
        month: "Apr",
        link: "/blog?archive=2019-Apr"
    }],
    2018: [{
        month: "May",
        link: "/blog?archive=2018-May"
    }],
    2022: [{
        month: "Dec",
        link: "/blog?archive=2022-Dec"
    }, {
        month: "Sep",
        link: "/blog?archive=2022-Sep"
    }, {
        month: "Feb",
        link: "/blog?archive=2022-Feb"
    }],
    2023: [{
        month: "Feb",
        link: "/blog?archive=2023-Feb"
    }, {
        month: "Jan",
        link: "/blog?archive=2023-Jan"
    }],
    2020: [{
        month: "Nov",
        link: "/blog?archive=2020-Nov"
    }, {
        month: "May",
        link: "/blog?archive=2020-May"
    }]
}
