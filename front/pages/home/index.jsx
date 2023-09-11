
import MainLayout from '@/layouts/Mainlayout';
import { NextSeo } from 'next-seo';
import config from 'config';
import HomeComponent from '@/components/screens/Home';

const HomePage = () => {
  return (
    <MainLayout>
      <NextSeo
        title={"Toshniwal"}
        canonical={`${config.baseUrl}/home`}
      />
      <HomeComponent />
    </MainLayout>
  );
};

export default HomePage;
