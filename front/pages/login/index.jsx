
import MainLayout from '@/layouts/Mainlayout';
import { NextSeo } from 'next-seo';
import config from 'config';
import LoginComponent from '@/components/screens/Login';

const LoginPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title={"Toshniwal"}
        canonical={`${config.baseUrl}/home`}
      />
      <LoginComponent />
    </MainLayout>
  );
};

export default LoginPage;
