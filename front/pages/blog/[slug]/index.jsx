import MainLayout from '@/layouts/Mainlayout';
import { NextSeo } from 'next-seo';
import config from 'config';
import BlogComponent from '@/components/screens/Blog';

const BlogDetailsPage = () => {
    return (
        <MainLayout>
            <NextSeo
                title={"Toshniwal"}
                canonical={`${config.baseUrl}/blog`}
            />
            <BlogComponent from="blog-details"/>
        </MainLayout>
    );
};

export default BlogDetailsPage;