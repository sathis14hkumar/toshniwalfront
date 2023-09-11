import MainLayout from '@/layouts/Mainlayout';
import { NextSeo } from 'next-seo';
import config from 'config';
import ApplicationComponent from '@/components/screens/Application';

const ApplicationDetailsPage = () => {
    return (
        <MainLayout>
            <NextSeo
                title={"Toshniwal"}
                canonical={`${config.baseUrl}/application`}
            />
            <ApplicationComponent from="blog-details"/>
        </MainLayout>
    );
};

export default ApplicationDetailsPage;