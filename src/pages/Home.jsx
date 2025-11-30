import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import FeaturedProducts from "../components/FeaturedProducts";
import "../styles/components.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <FeaturedProducts />
    </main>
  );
}
