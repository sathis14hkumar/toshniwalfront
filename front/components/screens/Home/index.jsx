import { useState } from "react";
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { BiCheckCircle } from "react-icons/bi";
import Swiper from 'components/common/Swiper';
import Button from '@/components/common/Button';
import classes from './home.module.scss';
import Navbar from 'components/common/Navbar';
import Footer from 'components/common/Footer';
import CommonModal from 'components/common/CommonModal';
import RightStickBar from 'components/common/RightStickBar';
import useWindowSize from "helpers/useWindowSize";
import { industryData, products, brandLogos, data } from 'service/constants/home';

const HomeComponent = () => {
  const [show, setShow] = useState(false);
  const screenSize = useWindowSize();

  const renderProduct = (product) => (
    <div
      key={product.title}
      className={`col-md-4 col-sm-12 col-xs-12 ${classes.divProd}`}
    >
      <div
        className={`${classes.thumbnail} ${classes.thumbnail1} `}
        id="thumbproduct1"
      >
        <div className={classes.box}>
          <Image
            className={`img-fluid ${classes.prodimg}`}
            src={product.img}
            alt={product.desc}
          />
        </div>
        <h3 className={classes.thumbhead1}>{product.title}</h3>
        <h4 className={classes.thumbtag}>{product.desc}</h4>
        <Button
          customRootClass={`${classes.muibtnroot} ${classes[product.class]}`}
        >
          More
        </Button>
      </div>
    </div>
  )

  const renderLogo = (img, i) => (
    <SwiperSlide key={`brand_logos_${i}`}>
      <Image
        src={img}
        alt="brand logos"
        className={`img-fluid ${classes.brandlogosImage}`}
        style={{ borderRadius: 4 }}
      />
    </SwiperSlide>
  );

  const toggleModal = () => setShow((prev) => !prev)

  return (
    <div className="Home-page">
      <RightStickBar />
      <Navbar />
      <div className={classes.swiperwrap}>
        <Swiper delay={3000}>
          {data.map((item) => {
            return (
              <SwiperSlide
                key={item.key}
                className={`${classes.swiperSlide} ${classes[item.key]}`}
              >
                <div className={classes.carouselCaption}>
                  <h2>{item.title}</h2>
                  <h1>{item.subtitle}</h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="container-fluid">
        <div className={classes.page1sec2}>
          <div
            className={`col-lg-3 col-md-12 col-sm-12 col-xs-12 d-lg-block d-none ${classes.divProduct}`}
          >
            <div className={classes.mainThumb} style={{ height: '479.5px' }}>
              <p className={classes.thumberHead}>APPLICATION/INDUSTRY</p>
              <hr />
              {industryData.map((opt, index) => {
                return (
                  <ul key={opt.title} className={classes.parpage1}>
                    <li className={classes.thumber} key={index}>
                      <BiCheckCircle className={classes.checkcircle} />{' '}
                      {opt.title}
                    </li>
                    {opt.types.map((type, index) => {
                      return (
                        <li className={classes.thumberin} key={type}>
                          {' '}
                          - {type}
                        </li>
                      );
                    })}
                    <a className={classes.viewmore}>VIEW MORE</a>
                  </ul>
                );
              })}
            </div>
          </div>

          <div
            className={`col-lg-9 col-md-12 col-sm-12 col-12 ${classes.productTop}`}
          >
            <div className={classes.midPage}>
              <div className={classes.heading}>
                <p>OUR PRODUCTS</p>
                <div className={classes.linehead}></div>
              </div>
              <div className="row m-0">{products.map(renderProduct)}</div>
            </div>
          </div>

          <div className={`d-lg-none ${classes.mainThumbIpad}`}>
            <div className={classes.heading}>
              <p>APPLICATION/INDUSTRY</p>
              <div className={classes.lineHead}></div>
              <div className="row m-0">
                {industryData.map((opt, index) => {
                  return (
                    <div key={opt.index} className="col-md-4">
                      <div className={classes.thumbnail}>
                        <ul className={classes.parpage1}>
                          <li className={classes.thumber}>
                            <BiCheckCircle className={classes.checkcircle} />
                            {opt.title}
                          </li>
                          {opt.types.map((type, indexKey) => {
                            return (
                              <li key={indexKey} className={classes.thumberin}> - {type}</li>
                            );
                          })}
                          <a className={classes.viewmore}>MORE</a>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className={`row ${classes.bgclient}`}>
          <div className={`col-md-5 col-12 ${classes.bgclient} float-end`}>
            <div className={`${classes.heading} ${classes.news}`}>
              <h2 className={classes.sec3head}> NEWS AND EVENTS</h2>
              <div className={classes.linehead1}></div>
            </div>
            <div
              className={`col-sm-12 ${classes.marginersec} ${classes.topset}`}
            >
              <div className="row m-0" style={{ paddingBottom: '30px' }}>
                <div className="col-sm-5">
                  <Image
                    src={require('../../../assets/images/new-events-2-1.jpg')}
                    className={`img-fluid cursor-pointer ${classes.topsetimage}`}
                    alt="services we offer"
                    onClick={toggleModal}
                  />
                </div>
                <div className={`col-md-7 col-12`}>
                  <a>
                    <span className={classes.headersec}>
                      AFTER SALES SUPPORT
                    </span>
                    <br />
                    <span className={classes.taggersec}>
                      <p>
                        At Toshniwal we value our relationship with our clients
                        and strive ....
                        <strong > Read More</strong>
                      </p>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-7 col-12 ${classes.bgclient2}`}>
            <div className={`${classes.heading} ${classes.ourHead}`}>
              <h2 className={classes.black}>OUR CUSTOMERS</h2>
              <div className={classes.linehead}></div>
            </div>
            <div className={classes.brandlogoswrap}>
              <Swiper
                swipeProps={{
                  slidesPerView: screenSize < 567 ? 1 : 2,
                  spaceBetween: 10,
                  freeMode: false,
                }}
              >
                {brandLogos.map(renderLogo)}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <CommonModal
        show={show}
        handleClose={toggleModal}
        customContentClass={classes.modalcontent}
      >
        <div className="modal-header border-0 justify-content-start">
          <h4 className={`${classes.modaltitle} m-0`}>After Sales Product</h4>
          <span className={classes.close} onClick={toggleModal}>
            ×
          </span>
        </div>
        <div className="modal-body p-0 border-0">
          <Image
            src={require('../../../assets/images/new-events-2-1.jpg')}
            className="img-fluid cursor-pointer p-4"
            alt="services we offer"
            onClick={toggleModal}
          />
        </div>
        <div className="modal-footer border-0">
          <button className={classes.closebtn} onClick={toggleModal}>
            Close
          </button>
        </div>
      </CommonModal>
      <Footer />
    </div>
  );
};

export default HomeComponent;
