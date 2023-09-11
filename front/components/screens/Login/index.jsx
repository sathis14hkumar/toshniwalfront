import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import RightStickBar from "@/components/common/RightStickBar";
import classes from "./login.module.scss";
import Navbar from "@/components/common/Navbar";
import FooterComponent from "@/components/common/Footer";
import FormError from '@/components/common/FormError';

export default function LoginComponent() {

    const initialValues = {
        userId: "",
        password: ""
    }

    const formSchema = () => {
        return yup.object().shape({
            userId: yup.string().required("Please enter user id"),
            password: yup.string().required("Please enter password")
        })
    }

    const onSubmit = () => {

    }

    return (
      <div className={classes.login}>
        <RightStickBar />
        <Navbar />
        <div className={classes.banner}>
          <div className={'row m-0'}>
            <div className="col-md-4 col-sm-8 col-xs-12 m-auto">
              <div className={classes.middlerlogin}>
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
                    <Form className={classes.form}>
                      <div className={classes.field}>
                        <label>User Id</label>
                        <Field
                          className={classes.input}
                          name="userId"
                          placeholder="User Id"
                        />
                        {errors.userId && touched.userId ? (
                          <FormError errortext={errors.userId} />
                        ) : null}
                      </div>
                      <div className={classes.field}>
                        <label>Password</label>
                        <Field
                          className={classes.input}
                          name="password"
                          placeholder="Password"
                          type="password"
                        />
                        {errors.password && touched.password ? (
                          <FormError errortext={errors.password} />
                        ) : null}
                      </div>
                      <button className={classes.btn}>Login</button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
}