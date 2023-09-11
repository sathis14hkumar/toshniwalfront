const getImage = (fdName, name) => {
    return require(`assets/images/home/${fdName}/${name}`)
}

export const data = [
    {
      title: "EXPERIENCED FIELD ENGINEERS,",
      subtitle: "OFFERING OPTIMUM SOLUTIONS!",
      key: 'banner1',
    },
    {
      title: "WE HAVE A SYMBIOTIC RELATION WITH OUR CLIENTS",
      subtitle: "MUTUAL GROWTH!",
      key: 'banner2',
    },
    {
      key: 'banner3',
      subtitle: "WHERE PROCESS MEETS PERFORMANCE!"
    },
  ];

export const industryData = [
    {
        title: "Process Instrumentation",
        types: ["Food Factory", "Research Industry"]
    },
    {
        title: "Process Vacuum",
        types: ["Chemical & Pharma", "Hospital"]
    },
    {
        title: "Powder Process",
        types: ["Refactory Building Material", "Animal Feed"]
    }
]

export const products = [
    {
        img: getImage("products", "ov.jpg"),
        title: "PROCESS INSTRUMENTATION",
        desc: "Flow And Measurement Control Electronics",
        path: "",
        class: "bluebtn"
    },
    {
        img: getImage("products", "vacuum.jpg"),
        title: "PROCESS VACUUM",
        desc: "Vacuum Pumps Industrial and Laboratory systems",
        path: "",
        class: "greenbtn"
    },
    {
        img: getImage("products", "process.png"),
        title: "POWDER PROCESS",
        desc: "Powder Mixers Dryers and Powder transfer systems",
        path: "",
        class: "orangebtn"
    }
]

export const brandLogos = [
    getImage("brandlogos", "Hp-1-300x300.jpg"),
    getImage("brandlogos", "isro-300x300.jpg"),
    getImage("brandlogos", "Honeywell-1-300x300.jpg"),
    getImage("brandlogos", "petrol-300x300.jpg"),
    getImage("brandlogos", "ge-1-300x300.jpg"),
    getImage("brandlogos", "berger-1-300x300.jpg"),
]