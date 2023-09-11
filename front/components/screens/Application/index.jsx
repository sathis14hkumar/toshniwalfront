import Navbar from '@/components/common/Navbar';
import FooterComponent from '@/components/common/Footer';
import RightStickBar from '@/components/common/RightStickBar';
import classes from './application.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
const Vacuumimages = [
    { id: 1, src: require("../../../assets/images/application/Vacum-img-2.jpg"), text: 'Chemical & Pharma' , imgSize: '231px' , link: '/application/process-vacuum/chap'},
    { id: 2, src: require("../../../assets/images/application/Vacum-img-4.jpg"), text: 'Hospitals' , imgSize: '243px' , link: '/application/process-vacuum/hospitals'},
    { id: 3, src: require("../../../assets/images/application/Vacum-img-1.jpg"), text: 'Production line & packaging' , imgSize: '264px' , link: '/application/process-vacuum/packaging'},
    { id: 4, src: require("../../../assets/images/application/Vacum-img-6.jpg"), text: 'Electrical & Electronics' , imgSize: '260px' , imgTop:'-35px' , link: '/application/process-vacuum/electrical-electronics'},
    { id: 5, src: require("../../../assets/images/application/Vacum-img-5.jpg"), text: 'Manufacturing & Automobile' , imgSize: '250px' , imgTop:'-20px' , link: '/application/process-vacuum/automobile-industry'},
    { id: 6, src: require("../../../assets/images/application/Vacum-img-3.jpg"), text: 'Research oranizations & universities' , imgSize: '231px' , link: '/application/process-vacuum/#'}
];

const Powderimages = [
    { id: 1, src: require("../../../assets/images/application/powder-app-1-790x903.jpg"), text: 'Animal Feed' , imgSize: '300px' , link: '/application/powder-processing/animal-feed'},
    { id: 2, src: require("../../../assets/images/application/powder-app-2-790x320.jpg"), text: 'Refactory Building Material' , imgSize: '300px', link: '/application/powder-processing/refactor-and-building-material'},
    { id: 3, src: require("../../../assets/images/application/Vacum-img-2.jpg"), text: 'Chemical Industry' , imgSize: '300px', link: '/application/powder-processing/chemical-industry'},
    { id: 4, src: require("../../../assets/images/application/app-img-4.jpg"), text: 'Food Industry' , imgSize: '300px', link: '/application/powder-processing/food-industry'},
];

const Instrumentationimages = [
    { id: 1, src: require("../../../assets/images/application/Masonry-2.jpg"), text: 'Coroporate & Residential Buildings' , imgSize: '472px', link: '/application/instrumentation/mac' },
    { id: 2, src: require("../../../assets/images/application/app-img-4.jpg"), text: 'Food Industry' , imgSize: '200px',  link: '/application/instrumentation/food'},
    { id: 3, src: require("../../../assets/images/application/Masonry-7.jpg"), text: 'Chemical & PetroChemical Industry' , imgSize: '237px',  link: '/application/instrumentation/cap'},
    { id: 4, src: require("../../../assets/images/application/Masonry-3.jpg"), text: 'Textile Industry' , imgSize: '473px' ,  link: '/application/instrumentation/textile'},
    { id: 5, src: require("../../../assets/images/application/Masonry-5.jpg"), text: 'Manufacturing & Automobile' , imgSize: '450px' ,imgTop:'-255px',  link: '/application/instrumentation/maa'},
    { id: 6, src: require("../../../assets/images/application/Masonry-8.jpg"), text: 'Oil & Gas Industry' , imgSize: '362px',imgTop:'-225px', link: '/application/instrumentation/oil'},
    { id: 7, src: "", text: '' , imgSize: '',  link: '#'},
    { id: 8, src: require("../../../assets/images/application/Masonry-6.jpg"), text: 'Metal Processing Industry' , imgSize: '254px', imgTop:'-260px',  link: '/application/instrumentation/metal'},
    { id: 9, src: require("../../../assets/images/application/Vacum-img-3.jpg"), text: 'Research' , imgSize: '201px' ,imgTop:'-320px',  link: '/application/instrumentation/research'}
];
export default function ApplicationComponent({ from }) {
    const router = useRouter()
    const { query } = router;
    const slug = query.slug?.[0];
    const secondSlug = query.slug?.[1]
    const [pageTitle, setPageTitle] = useState("");
    useEffect(() => {
        switch (secondSlug) {
          case 'mac':
            setPageTitle("Coroporate & Residential Buildings");
            break;
          case 'food':
            setPageTitle("Food Industry");
            break;
          case 'cap':
            setPageTitle("Chemical & PetroChemical Industry");
            break;
          case 'textile':
            setPageTitle("Textile Industry");
            break;
          case 'maa':
            setPageTitle("Manufacturing & Automobile");
            break;
          case 'oil':
            setPageTitle("Oil & Gas Industry");
            break;
          case 'metal':
            setPageTitle("Metal Processing Industry");
            break;
          case 'chap':
            setPageTitle("Chemical & Pharma");
            break;
          case 'packaging':
            setPageTitle("Production line & packaging");
            break;
          default:
            setPageTitle(secondSlug?.replace('-', ' & '));
        }
    }, [secondSlug]);
    const instrumentation = () =>{
        return(
            <>
                <div className={`${classes.banner} ${classes.bannerImage3}`}>
                    <div className={classes.container}>
                        <div className={classes.bannerHeader}>
                            <h3>Redefining Art & Science Of</h3>
                            <h1>MEASUREMENT AND CONTROL</h1>
                        </div>
                    </div>
                </div>
                {query.slug.length == 1 ?
                    <>
                        <section className={classes.grayed}>
                            <header className={classes.header}>
                                <h3 className={classes.title}>Application – Process Instrumentation </h3>
                            </header>
                        </section>
                        <div className={classes.container}>
                            <div className="row my-4 g-2">
                                {Instrumentationimages.map((image) => (
                                    <div className={`col-lg-4 col-md-6 col-sm-6 col-xs-12  ${classes.gridWrapper3}`} >
                                        <div className={classes.masonryItem} key={image.id} style={{ top: image.imgTop }}>
                                            <Image
                                                src={image.src}
                                                alt={image.text}
                                                height={image.imgSize}
                                                width={400}
                                            />
                                            <Link href={image.link}>{image.text}</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                :
                    <>
                        <section className={classes.grayed}>
                            <header className={classes.header}>
                                <h3 className={classes.title}>{ pageTitle?.toUpperCase()}</h3>
                            </header>
                        </section>
                        <div className="m-4">
                            <div className="row my-4 g-2">
                               <div className="col-12 col-md-6">
                                <Image
                                    src={require("../../../assets/images/application/Milk.jpg")}
                                    alt={"tank"}
                                    fill
                                />
                               </div>
                               <div className="col-12 col-md-6 px-5">
                                    <h2>Milk Unloading Application In Dairy Industry</h2>
                                    <h4>Scenario</h4>
                                    <ul>
                                        <li> Milk is transported from trucks to treatment plants and need to be unloaded.</li>
                                        <li>The temperature of the milk that is unloaded is near 5 ℃.</li>
                                        <li>It is not advised to use turbine meters, as they would need careful handling and maintenance</li>
                                        <li> If turbine flow meter is used, then Stainless Steel internals were required and this would increase the cost considerably.</li>
                                    </ul>
                                    <h4>Our Solution</h4>
                                    <ul>
                                        <li> We have supplied our Electromagnetic Flow meter for this application with a PTFE lining which is relatively low-cost to a stainless steel turbine meter.</li>
                                    </ul>
                                    <h4>Outcome</h4>
                                    <ul>
                                        <li>Customer is quite satisfied with the performance of the meter.</li>
                                        <li>Satisfactory operation for the past 3 years.</li>
                                        <li>Straight length of pipeline was not required for installation.</li>
                                        <li>Fit-and-forget operation for 3 years with no maintenance.</li>
                                    </ul>
                               </div>
                               <div className="col-12 col-md-6">
                                    <h2>Water Consumption Monitoring In Soft-Drink Industry</h2>
                                    <h4>Scenario</h4>
                                    <ul>
                                        <li>Soft-drink manufacturers consume large amounts of water and it is important to ensure water is used efficiently.</li>
                                        <li>Such plant require remote monitoring and hence pulse outputs and integration with their existing setup is essential.</li>
                                    </ul>
                                    <h4>Our Solution</h4>
                                    <ul>
                                        <li>We have supplied our Water meters with pulsar output and a RS485 converter which can connect 6 pulse inputs to a single console.</li>
                                        <li>Web based software provided for data-logging.</li>
                                        <li>Economical way of monitoring water consumption without PLC.</li>
                                    </ul>
                                    <h4>Outcome</h4>
                                    <ul>
                                        <li>Helped our customer adhere to government norms.</li>
                                        <li>Ensured efficient use of water.</li>
                                        <li>Reduced wastage and cost.</li>
                                    </ul>
                               </div>
                               <div className="col-12 col-md-6">
                                <Image
                                    src={require("../../../assets/images/application/Water.jpg")}
                                    alt={"water"}
                                    fill
                                />
                               </div>
                            </div>
                            <div className="text-center">
                            <button type="submit" className={classes.submitbtn}>Back</button>
                            </div>
                            
                        </div>
                    </> 
                }
            </>
           
        )
    }

    const Vaccum = () =>{
        return(
            <>
                <div className={`${classes.banner} ${classes.bannerImage}`}>
                    <div className={classes.container}>
                        <div className={classes.bannerHeader}>
                            <h3>We Offer Unique And Innovative</h3>
                            <h1>VACUUM SOLUTIONS</h1>
                        </div>
                    </div>
                </div>
                {query.slug.length == 1 ?
                <>
                <section className={classes.grayed}>
                    <header className={classes.header}>
                        <h3 className={classes.title}>Application – Process Vacuum </h3>
                    </header>
                </section>
                <div className={classes.container}>
                    <div className="row my-4 g-2">
                        {Vacuumimages.map((image) => (
                            <div className={`col-lg-4 col-md-4 col-sm-6 col-xs-12 ${classes.gridWrapper}`} >
                                <div className={classes.masonryItem} key={image.id} style={{ top: image.imgTop }}>
                                    <Image
                                        src={image.src}
                                        alt={image.text}
                                        height={image.imgSize}
                                        width={400}
                                    />
                                    <Link href={image.link}>{image.text}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </>
                 :
                 <>
                     <section className={classes.grayed}>
                         <header className={classes.header}>
                             <h3 className={classes.title}>{ pageTitle?.toUpperCase()}</h3>
                         </header>
                     </section>
                     <div className={classes.container}>
                         <div className="row my-4 g-2">
                            <div className="col">
                                 hello
                            </div>
                            <div className="col">
                                 hello
                            </div>
                         </div>
                         <div className="text-center">
                         <button type="submit" className={classes.submitbtn}>Back</button>
                         </div>
                         
                     </div>
                 </> 
             }
            </>
        )
    }

    const powder = () =>{
        return (
            <>
                <div className={`${classes.banner} ${classes.bannerImage2}`}>
                    <div className={classes.container}>
                        <div className={classes.bannerHeader}>
                            <h3>Through Detailed Engineering ...</h3>
                            <h1>OFFERING TWIN & SINGLE SHAFT MIXERS</h1>
                        </div>
                    </div>
                </div>
                {query.slug.length == 1 ?
                <>
                <section className={classes.grayed}>
                    <header className={classes.header}>
                        <h3 className={classes.title}>Application – Powder Processing </h3>
                    </header>
                </section>
                <div className={classes.container}>
                    <div className="row my-4 g-2">
                        {Powderimages.map((image) => (
                            <div className={`col-lg-6 col-md-6 col-sm-6 col-xs-12 ${classes.gridWrapper2}`} >
                                <div className={classes.masonryItem} key={image.id}>
                                    <Image
                                        src={image.src}
                                        alt={image.text}
                                        height={image.imgSize}
                                        width={800}
                                    />
                                    <Link href={image.link}>{image.text}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </>
                :
                <>
                <section className={classes.grayed}>
                    <header className={classes.header2}>
                        <h3 className={classes.title}>{ pageTitle?.toUpperCase()}</h3>
                        <h4 className={classes.subtitle}>Animal Feed manufacturers use our mixers to get a homogeneous mix of the various ingredients of the feed along with trace elements and in some cases, antibiotics.</h4>
                    </header>
                </section>
                <div className={classes.container}>
                    <div className="row my-4 g-2">
                       <div className="col">
                            flip
                       </div>
                       <div className="col">
                            flip
                       </div>
                    </div>
                    <div className="text-center">
                    <button type="submit" className={classes.submitbtn}>Back</button>
                    </div>
                    
                </div>
                </> }
            </>
        )
    }
    const renderComponent = () => {
        switch (slug) {
            case 'instrumentation':
                return instrumentation()
            case 'process-vacuum':
                return Vaccum();
            case 'powder-processing':
                return powder();
            default:
                return null;
        }
    };
    
    return (
        <div className={classes.application}>
            <RightStickBar />
            <Navbar />
            {/* <div className={classes.banner}>
                <div className={classes.container}>
                    <div className={classes.bannerHeader}>
                        <h3>Redefining Art & Science Of</h3>
                        <h1>MEASUREMENT AND CONTROL</h1>
                    </div>
                </div>
            </div> */}
            {/* <section className={classes.grayed}>
                <header className={classes.header}>
                    <h3 className={classes.title}>Application – {pageTitle}</h3>
                </header>
            </section> */}
            {/* <div className={classes.container}>
                <div className="row my-4 g-2">
                    {Vacuumimages.map((image) => (
                        <div className={`col-lg-4 col-md-4 col-sm-6 col-xs-12 ${classes.gridWrapper}`} >
                            <div className={classes.masonryItem} key={image.id} style={{ top: image.imgTop}}>
                                <Image
                                    src={image.src}
                                    alt={image.text}
                                    height={image.imgSize}
                                    width={400}
                                />
                                <a href='#'>{image.text}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            {/* <div className={classes.container}>
                <div className="row my-4 g-2">
                    {Powderimages.map((image) => (
                        <div className={`col-lg-6 col-md-6 col-sm-6 col-xs-12 ${classes.gridWrapper2}`} >
                            <div className={classes.masonryItem} key={image.id}>
                                <Image
                                    src={image.src}
                                    alt={image.text}
                                    height={image.imgSize}
                                    width={800}
                                />
                                <a href='#'>{image.text}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            {/* <div className={classes.container}>
                <div className="row my-4 g-2">
                    {Instrumentationimages.map((image) => (
                        <div className={`col-lg-4 col-md-6 col-sm-6 col-xs-12  ${classes.gridWrapper3}`} >
                            <div className={classes.masonryItem} key={image.id} style={{ top: image.imgTop}}>
                                <Image
                                    src={image.src}
                                    alt={image.text}
                                    height={image.imgSize}
                                    width={400}
                                />
                                <a href='#'>{image.text}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            {renderComponent()}
            <FooterComponent />
        </div>
    );
}
