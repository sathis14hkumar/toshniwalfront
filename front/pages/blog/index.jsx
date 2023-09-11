import MainLayout from '@/layouts/Mainlayout';
import { NextSeo } from 'next-seo';
import config from 'config';
import BlogComponent from '@/components/screens/Blog';

const BlogPage = () => {
    return (
        <MainLayout>
            <NextSeo
                title={"Toshniwal"}
                canonical={`${config.baseUrl}/blog`}
            />
            <BlogComponent />
        </MainLayout>
    );
};

export default BlogPage;