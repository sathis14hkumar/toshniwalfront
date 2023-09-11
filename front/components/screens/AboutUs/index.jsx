import Image from "next/image";
import RightStickBar from "@/components/common/RightStickBar";
import FooterComponent from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import desktopFlow from "assets/images/aboutus/flow desktop.png"
import tabletFlow from "assets/images/aboutus/flow tablet.png"
import mobileFlow from "assets/images/aboutus/flow mobile.png"
import classes from "./aboutus.module.scss";

export default function AboutUs() {
    return (
        <div className={classes.aboutus}>
            <RightStickBar />
            <Navbar />
            <div className={classes.banner}>
                <h1 className={classes.title}>Who we are and <br />
                    Where we have come from...
                </h1>
                <h6 className={classes.subtitle}>There are some things you should Know About Us</h6>
            </div>
            <section className={classes.history}>
                <div className={classes.container}>
                    <div className="col-md-12 p-0">
                        <div className={classes.sec1}>
                            <p className={`text-center ${classes.notfound}`}>
                                Toshniwal is a manufacturer, importer and exporter of equipment & machinery in the indian subcontinent since 1948. 
                            </p>
                            <p className={`text-center ${classes.aboutFoundDesc}`}>
                                The company started climbing up the corporate ladder as a pioneer in upgrading industrial technology, creating infrastructure and supplying world-class process instruments, powder processing instruments and Vacuum systems. Research and development formed the core of the competence.The expertise honed over 6 Decades of successful operation has enabled us to place our brand name in synonym with quality and reliability. We work in close partnership with our clients and keep upgrading our products and processes to stay relevant to the advancing markets. 
                            </p>
                            <p className={`text-center ${classes.aboutFoundDesc}`}>
                                Some things you should know about us.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={classes.grayed}>
                <header className={classes.header}>
                    <h1 className={classes.title}>OUR PATH</h1>
                </header>
                <section className={classes.flowContainer}>
                    <div className={classes.imgdesk}>
                        <Image className={`img-fluid`} src={desktopFlow} alt="desktop image"/>
                    </div>
                    <div className={classes.imgtab}>
                        <Image className={`img-fluid`} src={tabletFlow} alt="tab image"/>
                    </div>
                    <div className={classes.imgmobile}>
                        <Image className={`img-fluid `} src={mobileFlow} alt="mobile image"/>
                    </div>
                </section>
            </section>
            <section className={classes.secthree}>
                <div className={classes.container}>
                    <h2 className={classes.visionTitle}>Our Vision</h2>
                    <h6 className={classes.vision}>Our vision is for the Toshniwal brand to be synonymous with quality and trust in services rendered.</h6>
                    <h6 className={classes.vision}>Achievement of such standards demands that the company:</h6>
                    <h6 className={classes.vision}>1. Works to world-class standards</h6>
                    <h6 className={classes.vision}>2. Gives the highest priority for customer satisfaction</h6>
                    <h6 className={classes.vision}>3. Constantly upgrades technology & knowledge</h6>
                    <h6 className={classes.vision}>4. Thinks of long-term partnerships with customers as well as employees</h6>
                </div>
            </section>
            <section className={classes.secfour}>
                <div className={classes.container}>
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div className={classes.missionSec}>
                                <h1 className={classes.title}>MISSION</h1>
                                <div className={classes.paraContainer}>
                                    <p>To be a Trusted name for generations, instrumental in engineering solutions for your needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterComponent />
        </div>
    )
}