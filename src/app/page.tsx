"use client"
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ThemeCustomization from "@/themes";

export default function Home() {
  return (
    <ThemeCustomization>
      <main>
        <section>
          <Container>
            <h1 className="text-4xl font-bold ">Your Property Buddies</h1>
            <p className="">The best way to find trusted real estate professionals and tradies.</p>
            {/* <div className="flex justify-center">
          <Image
            src="/images/hero.png"
            alt="Hero image"
            width={800}
            height={600}
          />
        </div> */}
            <Navbar />
          </Container>
        </section>
      </main>
    </ThemeCustomization>
  );
}
