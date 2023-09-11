import MainLayout from '@/layouts/Mainlayout';
import { NextSeo } from 'next-seo';
import config from 'config';
import ContactUsComponent from '@/components/screens/ContactUs';

const ContactUsPage = () => {
    return (
        <MainLayout>
            <NextSeo
                title={"Toshniwal"}
                canonical={`${config.baseUrl}/contactus`}
            />
            <ContactUsComponent />
        </MainLayout>
    );
};

export default ContactUsPage;
