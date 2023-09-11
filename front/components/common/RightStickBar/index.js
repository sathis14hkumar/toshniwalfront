
import { useState } from "react";
import { 
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import CommonModal from "../CommonModal";
import FormError from "../FormError";
import Select from "../Select";
import classes from "./rightstickbar.module.scss"

export default function RightStickBar() {
    const [show, setShow] = useState(false);

    const initialValues = {
        name: "",
        product_name: "",
        phone: "",
        email: "",
        companyName: "",
        pincode: ""
    }

    const onSubmit = (values, { setSubmitting, validate }) => {
        validate(values)
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    const formSchema = () => {
        return yup.object().shape({
            name: yup.string().min(2, "Too short1").max(50, "Too long!").required('Required'),
            product_name: yup.string().required('Required'),
            phone: yup.number().required('Required').typeError('Invalid Phone Number'),
            email: yup.string().email('Invalid email').required('Required'),
            companyName: yup.string().min(2, "Too short1").max(50, "Too long!").required('Required'),
            pincode: yup.string()
            .required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(5, 'Must be exactly 5 digits')
            .max(5, 'Must be exactly 5 digits').typeError('Invalid Pincode')
        })
    }

    const dropdownProduct = ["Flow Meter", "Vacuum Pump", "Mixer"];

    const handleClose = () => {
        setShow(prev => !prev)
    }

    return (
        <div className={classes.icons}>
            <a href="https://www.facebook.com/toshniwalinst/" target="_blank" >
                <FaFacebookF className={classes.facebook}/>
            </a>
            <a href="https://twitter.com/ToshniwalLtd" target="_blank" >
                <FaTwitter className={classes.twitter}/>
            </a>
            <a href="https://www.linkedin.com/company/toshniwalinstruments/" target="_blank" >
                <FaLinkedin className={classes.linkedin}/>
            </a>
            <div>
                <button className={classes.btnsubmit} onClick={() => setShow(prev => !prev)}>Submit your query</button>
            </div>
            <CommonModal show={show} handleClose={() => setShow(prev => !prev)}>
                <div className={classes.formWrap}>
                    <div className={classes.header}>
                        <p className={classes.title}>Submit Your Query</p>
                        <span className={classes.close} onClick={handleClose}>×</span>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={formSchema}
                        validateOnChange={false}
                        validateOnBlur={false}
                        onSubmit={onSubmit}
                    >
                        {({ errors, touched, validateField, setFieldValue, handleChange }) => (
                            <Form className={classes.form}>
                                <div className={classes.field}>
                                    <Field
                                        className={classes.input}
                                        name="name" 
                                        placeholder="Your name *"
                                    />
                                    {errors.name && touched.name ? (
                                        <FormError errortext={errors.name} />
                                    ) : null}
                                </div>
                                <div className={classes.field}>
                                    <Select 
                                        options={dropdownProduct}
                                        customSelectClass={classes.select}
                                        onChange={(e) => console.log(e.target.innerText)}
                                    />
                                    {errors.product_name && touched.product_name ? (
                                        <FormError errortext={errors.product_name} />
                                    ) : null}
                                </div>
                                <div className={classes.field}>
                                <Field
                                    className={classes.input}
                                    name="phone" 
                                    placeholder="Phone Number"
                                />
                                {errors.phone && touched.phone ? (
                                        <FormError errortext={errors.phone} />
                                    ) : null}
                                </div>
                                <div className={classes.field}>
                                <Field
                                    className={classes.input}
                                    name="email" 
                                    placeholder="E-mail id *"
                                />
                                {errors.email && touched.email ? (
                                        <FormError errortext={errors.email} />
                                    ) : null}
                                </div>
                                <div className={classes.field}>
                                <Field
                                    className={classes.input}
                                    name="companyName" 
                                    placeholder="Company name *"
                                />
                                {errors.companyName && touched.companyName ? (
                                        <FormError errortext={errors.companyName} />
                                    ) : null}
                                </div>
                                <div className={classes.field}>
                                <Field
                                    className={classes.input}
                                    name="pincode" 
                                    placeholder="pincode *"
                                />
                                {errors.pincode && touched.pincode ? (
                                        <FormError errortext={errors.pincode} />
                                    ) : null}
                                </div>
                                <button type="submit" className={classes.submitbtn}>Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </CommonModal>
        </div>
    )
}