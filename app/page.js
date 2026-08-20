import Header from './components/Header'
import Hero from './components/Hero'
import Selection from './components/Selection'
import Trustpilot from './components/Trustpilot'
import Footer from './components/Footer'

const products = [
  {
    id: 1,
    title: 'TOP-PRIME-PC',
    specs: 'RYZEN-7500F · 16G-DDR5-5600-RAM · RTX5050-8G · 1TB-SSD',
    originalPrice: 7.999,
    currentPrice: 7.499,
    discount: 500,
    image: '/product-image.png',
    category: 'Kategori 1',
  },
  {
    id: 2,
    title: 'TOP-PRIME-PC',
    specs: 'RYZEN-9600X · 16G-DDR5-RAM · RTX5050-8GB · 1TB-SSD · PRISM-RGB',
    originalPrice: 8.999,
    currentPrice: 7.999,
    discount: 1000,
    image: '/product-image.png',
    category: 'Kategori 2',
  },
  {
    id: 3,
    title: 'TOP-PRIME-PC',
    specs: 'TOP-PRIME-PRO · RYZEN-9700X · 16G-DDR5-RAM · RTX5060-8GB · 1TB-SSD · DEEPCOOL',
    originalPrice: 9.999,
    currentPrice: 9.299,
    discount: 700,
    image: '/product-image.png',
    category: 'Kategori 3',
  },
  {
    id: 4,
    title: 'TOP-PRIME-PC',
    specs: 'TOP-PRIME-PRO · RYZEN-7800X3D · 16G-DDR5-RAM · RTX5060-8GB · 1TB-SSD · DEEPCOOL',
    originalPrice: 10.999,
    currentPrice: 9.999,
    discount: 1000,
    image: '/product-image.png',
    category: 'Kategori 4',
  },
]

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Selection products={products} />
      <Trustpilot />
      <Footer />
    </main>
  );
}