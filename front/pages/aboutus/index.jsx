import MainLayout from '@/layouts/Mainlayout';
import { NextSeo } from 'next-seo';
import config from 'config';
import AboutUsComponent from '@/components/screens/AboutUs';

const AboutUsPage = () => {
    return (
        <MainLayout>
            <NextSeo
                title={"Toshniwal"}
                canonical={`${config.baseUrl}/aboutus`}
            />
            <AboutUsComponent />
        </MainLayout>
    );
};

export default AboutUsPage;
