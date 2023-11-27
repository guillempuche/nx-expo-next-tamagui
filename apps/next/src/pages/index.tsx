import { WelcomeScreen } from '@nx-expo-next-tamagui/app/welcome';
import { WelcomeLayout } from '@nx-expo-next-tamagui/app/welcome';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';

export const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Welcome Page</title>
      </Head>
      <WelcomeScreen />
    </>
  );
};

Page.getLayout = (page) => <WelcomeLayout>{page}</WelcomeLayout>;

export default Page;
