import { NextSeo } from 'next-seo';
import Image from 'next/image'
import CallToActionWithVideo from '../components/Hero'

const CarsPage = () => {
  return (
    <>
      <NextSeo
        title="KOZACKIE FURY | SAMOCHODY"
      />
      <main>
        {/* <CallToActionWithVideo /> */}
      </main>
    </>
  )
}

CarsPage.layout = "default";

export default CarsPage;
