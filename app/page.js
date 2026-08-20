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

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Fantastisk!',
    rating: 5,
    comment: 'Fantastisk service og hurtig levering! Jeg er meget tilfreds med mit køb. Jeg vil helt sikkert anbefale Topdata til andre. Tak for en god oplevelse!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Meget tilfreds',
    rating: 5,
    comment: 'Kvaliteten af computeren er imponerende. Jeg har haft den i et par uger nu, og den kører problemfrit. Jeg er meget tilfreds med mit køb. Jeg vil helt sikkert anbefale Topdata til andre.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    title: 'Det bedste køb ever!',
    rating: 5,
    comment: 'Jeg er meget tilfreds med mit køb! Topdata leverede en fantastisk oplevelse fra start til slut.',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    title: 'Glad kunde for anden gang :)',
    rating: 5,
    comment: 'For ti år siden købte jeg en high-end PC hos Topdata, og den kører stadig upåklageligt. Jeg ville dog gerne have en mere moderne model, så jeg gik igen til Topdata. Jeg oplevede en lille udfordring med den nye maskine, men det blev fikset lynhurtigt og professionelt. Det bliver 5 stjerner herfra pga venlig betjening og god vejledning inden køb. Om ti år går jeg gerne til Topdata igen.',
  },
  {
    id: 5,
    name: 'David Brown',
    title: 'Rigtig god kvalitet',
    rating: 5,
    comment: 'Har solgt min gamle gamer computer, og udskiftet med en ny fra Topdata. Den ser mega fed ud og spiller bare maks. Er meget glad :)',
  },
  {
    id: 6,
    name: 'Lisa Davis',
    title: 'Kan godt anbefale',
    rating: 5,
    comment: 'God og venlig service når man ringer til dem med spørgsmål :D Levering til tiden. Gode priser :)',
  }
]

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Selection products={products} />
      <Trustpilot reviews={reviews} />
      <Footer />
    </main>
  );
}