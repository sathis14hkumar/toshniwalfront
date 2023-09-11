import react from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import Navbar from "@/components/common/Navbar";
import FormError from '@/components/common/FormError';
import Select from '@/components/common/Select';
import RightStickBar from "@/components/common/RightStickBar";
import styles from './style.module.scss';
import Image from 'next/image';
import Footer from 'components/common/Footer';
import Textarea from '@/components/common/Textarea';
import countryJson from "service/constants/country"

const ContactUsComponent = () => {

    const initialValues = {
        productname: "",
        honorifics: "",
        firstname: "",
        lastname: "",
        email: "",
        phone_no: "",
        companyname: "",
        country: "",
        postcode: "",
        message: ""
    }

    const formSchema = () => {
        return yup.object().shape({
            firstname: yup.string().required('Required'),
            lastname: yup.string().required('Required'),
            email: yup.string().email('Invalid email').required('Required'),
            phone_no:yup.number().required('Required').typeError('Invalid Phone Number'),
        })
    }

    const onSubmit = () => {

    }

    const honorifics = [ "MR", "MRS", "MIS"];

    return (
      <div className={styles.contactus}>
        <RightStickBar />
        <Navbar />
        <div className={styles.banner}>
          <h1>TO REACH US...</h1>
        </div>
        <div className={styles.branches}>
          <h4>OUR BRANCHES</h4>
          <div className="row m-0">
            <div className="col-xs-12 col-lg-6">
              <Image
                src={require('../../../assets/images/contactus/map.png')}
                alt="map"
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '800px',
                  objectFit: 'contain',
                }}
              />
            </div>
            <div className="col-xs-12 col-lg-6">
              <div>
                <iframe
                  style={{
                    border: '0px',
                    pointerEvents: 'none',
                    width: '95%',
                  }}
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3886.2462032167173!2d80.23278611397238!3d13.083576915953278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a5265d501f0f13b%3A0xaa4ee87e541a7918!2sToshniwal+Brothers+(Hyd)+Private+Limited%2C+267%2C+Kilpauk+Garden+Road%2C+Kilpauk%2C+Chennai%2C+Tamil+Nadu+600010!3m2!1d13.0835717!2d80.2349748!5e0!3m2!1sen!2sin!4v1480416767749"
                  height="450"
                  frameborder="0"
                  allowfullscreen=""
                />
              </div>
              <div className={styles.address}>
                <div className="row">
                  <div className={`col-md-6 ${styles.borderRight}`}>
                    <h6>Toshniwal Instruments (Madras) Pvt. Ltd. </h6>
                    <p>
                      267, Kilpauk Garden Road <br />
                      Chennai, Tamil Nadu – 600 010 (India){' '}
                    </p>
                    <a
                      className={styles.btn}
                      target="_blank"
                      href="https://www.google.co.in/maps/place/Toshniwal+Instruments+Madras+Private+Limited/@13.0642334,80.1875629,12z/data=!4m8!1m2!2m1!1stoshniwal!3m4!1s0x3a5263ee9a61df01:0x1fb0eb294eee7908!8m2!3d13.094874!4d80.1726839"
                    >
                      Direction
                    </a>
                  </div>
                  <div className={`col-md-6 ${styles.paddingRight}`}>
                    <div className="pb-3">
                      <h6>Phone Number:</h6>
                      <a href="tel:+914426445626">+(91)-(44)-26445626</a>
                    </div>
                    <div className={styles.mail}>
                      <h6>Email: </h6>
                      <a href="mailto:sales@toshniwal.net">
                        sales@toshniwal.net{' '}
                      </a>
                    </div>
                    <a className={styles.btnEnquiries} href="#enquiry">
                      Enquiries
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className={styles.deskLocation}>
                    <Image
                      src={require('../../../assets/images/contactus/location.png')}
                      alt="location"
                      style={{
                        width: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.enquiryForm} id="EnquiryForm">
          <h2 className={styles.formTitle}>ENQUIRIES</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={onSubmit}
          >
            {({
              errors,
              touched,
              validateField,
              setFieldValue,
              handleChange,
            }) => (
              <Form className={styles.form}>
                <div className={styles.field}>
                  <Field
                    className={styles.input}
                    name="productname"
                    placeholder="PRODUCT NAME"
                  />
                </div>
                <div className={styles.field}>
                  <Select
                    options={honorifics}
                    customSelectClass={styles.select}
                    onChange={(e) => console.log(e.target.innerText)}
                  />
                </div>
                <div className={styles.field}>
                  <Field
                    className={styles.input}
                    name="firstname"
                    placeholder="FIRST NAME*"
                  />
                  {errors.firstname && touched.firstname ? (
                    <FormError errortext={errors.firstname} />
                  ) : null}
                </div>
                <div className={styles.field}>
                  <Field
                    className={styles.input}
                    name="lastname"
                    placeholder="LAST NAME*"
                  />
                  {errors.lastname && touched.lastname ? (
                    <FormError errortext={errors.lastname} />
                  ) : null}
                </div>
                <div className={styles.field}>
                  <Field
                    className={styles.input}
                    name="email"
                    placeholder="EMAIL*"
                  />
                  {errors.email && touched.email ? (
                    <FormError errortext={errors.email} />
                  ) : null}
                </div>
                <div className={styles.field}>
                  <Field
                    className={styles.input}
                    name="phone_no"
                    placeholder="PHONE*"
                  />
                  {errors.phone_no && touched.phone_no ? (
                    <FormError errortext={errors.phone_no} />
                  ) : null}
                </div>
                <div className={styles.field}>
                  <Field
                    className={styles.input}
                    name="companyname"
                    placeholder="COMPANY NAME"
                  />
                </div>
                <div className={styles.field}>
                  <Select
                    options={countryJson.map(o => o.name)}
                    customSelectClass={styles.select}
                    onChange={(e) => console.log(e.target.innerText)}
                  />
                  {errors.phone_no && touched.phone_no ? (
                    <FormError errortext={errors.phone_no} />
                  ) : null}
                </div>
                <div className={styles.field}>
                  <Field
                    className={styles.input}
                    name="postcode"
                    placeholder="POST CODE*"
                  />
                  {errors.postcode && touched.postcode ? (
                    <FormError errortext={errors.postcode} />
                  ) : null}
                </div>
                <div className={styles.field}>
                  <Textarea
                    className={styles.input}
                    name="message"
                    placeholder="MESSAGE"
                    cols="30"
                    rows="4"
                  />
                </div>
                <button className={styles.btn}>Submit</button>
              </Form>
            )}
          </Formik>
        </div>
        <Footer />
      </div>
    );
};

export default ContactUsComponent;
