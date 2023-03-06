import { NextSeo } from 'next-seo';
import Image from 'next/image'

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
