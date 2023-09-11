import { useState } from 'react';
import Image from 'next/image';
import { Collapse } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { FaRegCalendarDays } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import Navbar from '@/components/common/Navbar';
import FooterComponent from '@/components/common/Footer';
import RightStickBar from '@/components/common/RightStickBar';
import { archive, blogList, recentPosts } from 'service/constants/blog';
import classes from './blog.module.scss';
import PaginationComponent from '@/components/common/Pagination';
import Link from 'next/link';

export default function BlogComponent({ from }) {
  const [showMonths, setShowMonths] = useState([]);

  const renderBlog = (blog, index) => (
    <div
      key={`blog_${index}`}
      className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex ${classes.mainblogcart}`}
    >
      <div className={classes.blogdiv}>
        <Link
          href={blog.link}
          className="d-flex flex-column text-decoration-none outline-none"
        >
          <Image
            src={blog.uri}
            className={`img-fluid d-block me-auto ms-auto`}
            alt="blog images"
          />
          <ul>
            <li>
              <FaUser className={classes.userIcon} />
              &nbsp;{blog.by}
            </li>
            <li>
              <FaRegCalendarDays className={classes.calendarIcon} />
              &nbsp;{blog.date}
            </li>
          </ul>
          <div className={classes.wraptitle}>
            <p className={classes.title} href="">
              {blog.title}
            </p>
          </div>
          <p className={classes.desc}>{blog.desc}</p>
        </Link>
      </div>
    </div>
  );

  const renderSearch = () => {
    return (
      <div className={`input-group ${classes.inputgroup}`}>
        <input
          type="text"
          className={`form-control ${classes.formControl}`}
          placeholder="Search here..."
        />
        <span className={`input-group-btn ${classes.inputgroupbtn}`}>
          <button className={`btn btn-info ${classes.btn}`}>
            <FaSearch className={classes.searchIcon} />
          </button>
        </span>
      </div>
    );
  };

  const renderRecentBlogs = (recentBlog, i) => (
    <li>
      <Link href={recentBlog.link}>{recentBlog.title}</Link>
    </li>
  );

  const toggleMonths = (i) => {
    if (from === 'blog-details') {
      let newShowMonths = [...showMonths];
      const findDupIndex = newShowMonths.indexOf(i);
      if (findDupIndex !== -1) {
        newShowMonths.splice(findDupIndex, 1);
      } else {
        newShowMonths = [...showMonths, i];
      }
      setShowMonths(newShowMonths);
    }
  };

  const renderArchiveBlog = ([year, months], i) => {
    const showMonth = showMonths.includes(i);
    return (
      <li className={classes.yrli}>
        <span onClick={() => toggleMonths(i)}>{year}</span>
        <Collapse in={showMonth || !from} dimension="height">
          <ul className={showMonth || !from ? 'd-block' : 'd-none'}>
            {months.map((month) => {
              return (
                <li key={month}>
                  <span>
                    <Link href={month.link}>{month.month}</Link>
                  </span>
                </li>
              );
            })}
          </ul>
        </Collapse>
      </li>
    );
  };

  const renderLeftBlog = () => {
    return from === 'blog-details' ? (
      <div
        className={`col-lg-8 col-md-8 col-sm-6 col-xs-12  ${classes.leftblog}`}
      >
        <div className={classes.detailviewblog}>
          <Image
            className="d-block me-auto ms-auto"
            src={require(`../../../assets/images/blog/blogimages/Fortified-Rice-Kernels.jpg`)}
            alt="Blog image"
          />
          <ul>
            <li>
              <FaUser className={classes.userIcon} />
              &nbsp; by Toshniwal Instruments (Madras) Pvt. Ltd.
            </li>
            <li>
              <FaRegCalendarDays className={classes.calendarIcon} />
              &nbsp; Feb, 21, 2023
            </li>
          </ul>
          <h2>Toshniwal Mixer in Rice Fortification Process</h2>
          <div className={classes.blockck}>
            <h1>
              <strong>What is Rice Fortification?</strong>
            </h1>
            <p>
              Rice fortification is the process of adding essential vitamins and
              minerals to rice during the milling process. This is done to
              improve the nutritional value of the rice, and to help prevent
              deficiencies in essential nutrients that can lead to health
              problems such as anemia and birth defects.
            </p>
            <p>
              Toshiwal manufacturers Twin Shaft Mixer for this application which
              mixes 2 or more powders homogeneously.
            </p>
            <h2>
              <strong>Process of Rice Fortification:</strong>
            </h2>
            <p>
              The process of rice fortification begins at the mill, where the
              rice is cleaned and milled to remove the husk and other
              impurities. At this stage, the vitamins and minerals are added to
              the rice in a carefully controlled process to ensure that the
              correct amounts are added to each batch.
            </p>
            <p>
              One of the key challenges in the rice fortification process is
              ensuring that the vitamins and minerals are evenly distributed
              throughout the rice. This is critical, as uneven distribution can
              lead to some portions of the rice being over-fortified, while
              others may have insufficient levels of essential nutrients. The
              unique design of Toshniwal Twin Shaft Paddle Mixers enable us to
              guarantee a homogeneous powder mix to our clients, in very quick
              cycle-times.
            </p>
            <p>
              <Image 
                src={require("../../../assets/images/blog/f-500-orange-1_Vcm9392.jpeg")}
                alt="machine"
              />
            </p>
            <h3>
              <strong>Features of our Toshniwal Mixer in Rice Fortification:</strong>
            </h3>
            <p>The features of our mixer are:</p>
            <p className="ms-4">1. Homogeneous (Even) mix of powders</p>
            <p className="ms-4">2. Extremely short mixing time (Typically 30 to 180 seconds)</p>
            <p className="ms-4">3. Reliable and Repeatable Mixing</p>
            <p className="ms-4">4. Gentle Mixing ensures no damage to mixed product</p>
            <p className="ms-4">5. Low Shear</p>
            <p className="ms-4">6. Low running and maintenance cost</p>
            <p className="ms-4">7. Guaranteed full load start</p>
            <p className="ms-4">8. Uniform Liquid Spray</p>
            <p>In addition to mixing, the rice fortification process also involves quality control measures to ensure that the finished product meets the required standards. This typically involves testing the finished rice for nutrient content, as well as other factors such as taste, texture, and appearance.</p>
            <h4>
              <strong>Conclusion:</strong>
            </h4>
            <p>Overall, rice fortification is an important process that helps to improve the nutritional value of rice and prevent deficiencies in essential nutrients. This can be easily done via Toshniwal mixers. Do contact us and get mixed your products in the right way..!!</p>
            <p>Get in touch with Toshniwal and mix your products with our mixers…!!!</p>
            <p>Visit us at &nbsp;<a href="www.toshniwal.net"><span><u>www.toshniwal.net</u></span></a></p>
            <p>Email &nbsp;<a href="mailto:sales@toshniwalindia.com">sales@toshniwalindia.com</a></p>
          </div>
        </div>
      </div>
    ) : (
      <div
        className={`col-lg-8 col-md-8 col-sm-6 col-xs-12  ${classes.leftblog}`}
      >
        <div className="row">{blogList.map(renderBlog)}</div>
        <div className={classes.paginationblog}>
          <PaginationComponent />
        </div>
      </div>
    );
  };

  return (
    <div className={classes.blog}>
      <RightStickBar />
      <Navbar />
      <div className={classes.banner}>
        <div className={classes.container}>
          <div className={classes.bannerHeader}>
            <h3>Our latest news...</h3>
            <h1>Blogs</h1>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className="row">
          {renderLeftBlog()}
          <div
            className={`col-lg-4 col-md-4 col-sm-6 col-xs-12 ${classes.rightblog}`}
          >
            <h3 className={classes.title}>Search</h3>
            <span className={classes.boderight}></span>
            <div className="position-relative mw-100">{renderSearch()}</div>

            <div className={classes.recentpostblog}>
              <h3 className={classes.title}>Recent Posts</h3>
              <span className={classes.boderight}></span>
              <ul className={classes.recentbloglist}>
                {recentPosts.map(renderRecentBlogs)}
              </ul>
            </div>

            <div className={classes.archive}>
              <h3 className={classes.title}>Archive</h3>
              <span className={classes.boderight}></span>
              <ul className={classes.archivelist}>
                {Object.entries(archive).map(renderArchiveBlog)}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
