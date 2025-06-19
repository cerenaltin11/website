import React, { useState } from 'react';
import logo from './logo.png';
import logo2 from './logo2.png';

// Kompakt, logoya yakın ve responsive kiraz SVG (sadece md ve üstü ekranlarda görünür)
const CherrySVG = () => (
  <svg
    className="hidden md:block absolute right-16 top-10 w-44 h-44 opacity-20 select-none pointer-events-none z-0"
    viewBox="0 0 120 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Saplar */}
    <path d="M60 40 Q70 10 100 15" stroke="#388e3c" strokeWidth="5" fill="none" />
    <path d="M60 40 Q50 10 20 25" stroke="#388e3c" strokeWidth="5" fill="none" />
    {/* Yaprak */}
    <ellipse cx="100" cy="15" rx="10" ry="4" fill="#66bb6a" transform="rotate(-15 100 15)" />
    {/* Kirazlar */}
    <ellipse cx="40" cy="70" rx="22" ry="20" fill="#e53935" />
    <ellipse cx="80" cy="65" rx="18" ry="16" fill="#b71c1c" />
    {/* Parlaklık */}
    <ellipse cx="35" cy="65" rx="5" ry="3" fill="#fff" opacity="0.5" />
    <ellipse cx="85" cy="60" rx="4" ry="2.5" fill="#fff" opacity="0.4" />
    {/* Hafif gölge */}
    <ellipse cx="40" cy="88" rx="13" ry="3" fill="#b71c1c" opacity="0.13" />
    <ellipse cx="80" cy="80" rx="10" ry="2.5" fill="#880808" opacity="0.10" />
  </svg>
);

const kirenInfo = {
  description: `Kiren, Rust ile geliştirilmiş yüksek performanslı JavaScript runtime'ıdır. Modern JavaScript (ES2022+) özelliklerini destekler, dahili API'ler (Console, Timers, Fetch), REPL modu, modül sistemi, tam async/await desteği ve planlanan TypeScript desteği ile öne çıkar. Rust'ın güvenliği ve hızı ile V8 engine'in gücünü birleştirir.`,
  features: [
    'Yüksek Performans: Rust\'ın güvenliği ve hızı ile V8 engine\'in gücü',
    'Modern JavaScript: ES2022+ özelliklerini destekler',
    'Built-in APIs: Console, Timers, Fetch API desteği',
    'REPL Mode: İnteraktif JavaScript geliştirme ortamı',
    'Module System: ES Modules ve CommonJS desteği (geliştirilme aşamasında)',
    'Async/Await: Tam async/await desteği',
    'TypeScript: TypeScript dosya çalıştırma desteği (planlanan)'
  ],
  install: 'cargo install kiren',
};

const features = [
  {
    title: 'Hızlı ve Hafif',
    desc: 'Kiren, modern projeler için hızlı başlatma ve düşük bellek kullanımı sunar.'
  },
  {
    title: 'Güvenli Çalışma',
    desc: 'Varsayılan olarak güvenli modda çalışır, dosya ve ağ erişimi izin tabanlıdır.'
  },
  {
    title: 'TypeScript Desteği',
    desc: 'TypeScript ve modern JavaScript özelliklerini kutudan çıktığı gibi destekler.'
  },
  {
    title: 'Kolay Kurulum',
    desc: 'Tek komutla kurulum ve hızlı başlangıç.'
  }
];

const creators = [
  {
    name: 'mertcanaltin',
    fullName: 'Mert Can Altin',
    github: 'https://github.com/mertcanaltin',
    avatar: 'https://github.com/mertcanaltin.png',
    desc: 'Node.js & Express.js ekibi üyesi, açık kaynak tutkunu.'
  },
  {
    name: 'cerenaltin11',
    fullName: 'Ceren Altın',
    github: 'https://github.com/cerenaltin11',
    avatar: 'https://github.com/cerenaltin11.png',
    desc: 'Yazılım geliştirici, modern web teknolojileriyle ilgileniyor.'
  }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex flex-col font-sans overflow-visible">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur sticky top-0 z-20 shadow flex items-center justify-between px-8 py-4 border-b border-red-100">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Kiren Logo" className="h-10" />
          <span className="text-2xl font-bold text-red-700 tracking-wide">Kiren</span>
        </div>
        {/* Masaüstü menü */}
        <nav className="hidden md:flex gap-8 text-red-700 font-semibold">
          <a href="#about" className="hover:text-red-900 transition">Hakkında</a>
          <a href="#download" className="hover:text-red-900 transition">İndir</a>
          <a href="#creators" className="hover:text-red-900 transition">Yapımcılar</a>
        </nav>
        {/* Mobil hamburger menü */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menüyü Aç/Kapat"
        >
          <span className={`block w-6 h-0.5 bg-red-700 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-red-700 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-red-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Mobil açılır menü */}
        {menuOpen && (
          <div className="md:hidden absolute top-full right-4 mt-2 bg-white rounded shadow-lg border border-red-100 flex flex-col z-30 animate-fade-in">
            <a href="#about" className="px-8 py-3 text-red-700 font-semibold hover:bg-red-50 border-b border-red-100" onClick={() => setMenuOpen(false)}>Hakkında</a>
            <a href="#download" className="px-8 py-3 text-red-700 font-semibold hover:bg-red-50 border-b border-red-100" onClick={() => setMenuOpen(false)}>İndir</a>
            <a href="#creators" className="px-8 py-3 text-red-700 font-semibold hover:bg-red-50" onClick={() => setMenuOpen(false)}>Yapımcılar</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="download" className="relative flex flex-col items-center justify-center text-center py-16 px-4 pt-32 bg-gradient-to-br from-red-100 to-white overflow-hidden">
        {/* Kırmızı dalga SVG arka plan */}
        <svg className="absolute left-0 bottom-0 w-full h-40 opacity-30 -z-10" viewBox="0 0 1440 320"><path fill="#e53935" fillOpacity="1" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        {/* Kiraz PNG arka planı - responsive */}
        <img src={logo2} alt="Kiren Kiraz" className="hidden md:block absolute right-10 bottom-0 w-60 opacity-15 z-0 select-none pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-4 drop-shadow relative z-10">Kiren: Modern JS/TS Runtime</h1>
        <p className="text-lg md:text-xl text-red-900 mb-8 max-w-2xl mx-auto relative z-10">
          Hızlı, güvenli ve modern JavaScript/TypeScript çalışma zamanı. Node.js'e benzer, ama daha sade ve güvenli.
        </p>
        <a
          href="https://crates.io/crates/kiren"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-800 transition text-white px-8 py-4 rounded-full shadow-lg font-bold text-lg mb-2 relative z-10 hover:scale-105 hover:shadow-2xl duration-200"
          id="download"
        >
          Kiren'i İndir
        </a>
        <div className="text-sm text-red-700 mt-2 relative z-10">crates.io üzerinden hızlı kurulum</div>
      </section>

      {/* Kiren Info Section - Hero'nun hemen altına taşındı */}
      <section id="about" className="relative max-w-3xl mx-auto mt-8 mb-8 bg-white/90 rounded-xl shadow p-8 border border-red-100 scroll-mt-32">
        {/* Büyük ve belirgin kiraz arka planı */}
        <img src={logo2} alt="Kiren Kiraz" className="hidden md:block absolute left-[-90px] top-[-60px] w-44 opacity-30 z-0 select-none pointer-events-none" />
        <h2 className="text-3xl font-bold text-red-700 mb-4 relative z-10">Kiren Hakkında</h2>
        <p className="text-lg text-red-900 mb-6 relative z-10">{kirenInfo.description}</p>
        <h3 className="text-xl font-semibold text-red-700 mb-2 relative z-10">Özellikler</h3>
        <ul className="list-disc pl-6 text-red-900 mb-6 relative z-10">
          {kirenInfo.features.map((f, i) => (
            <li key={i} className="mb-1">{f}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold text-red-700 mb-2 relative z-10">Kurulum</h3>
        <div className="bg-red-50 border border-red-200 rounded p-4 mb-2 font-mono text-red-800 select-all relative z-10">
          {kirenInfo.install}
        </div>
        <a href="https://crates.io/crates/kiren" target="_blank" rel="noopener noreferrer" className="text-red-700 underline hover:text-red-900 relative z-10">crates.io üzerinden detaylar</a>

        {/* 3. Benchmark Tablosu */}
        <div className="mt-12 bg-white/80 border border-red-100 rounded-xl p-6 shadow-sm relative z-10">
          <h3 className="text-2xl font-bold text-red-700 mb-4 md:mb-4 text-base md:text-2xl">Performans Karşılaştırması</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-red-900 border border-red-200 rounded text-xs md:text-base">
              <thead>
                <tr className="bg-red-100">
                  <th className="py-1 px-2 md:py-2 md:px-4 font-semibold">Metric</th>
                  <th className="py-1 px-2 md:py-2 md:px-4 font-semibold">Kiren v0.1.0</th>
                  <th className="py-1 px-2 md:py-2 md:px-4 font-semibold">Node.js</th>
                  <th className="py-1 px-2 md:py-2 md:px-4 font-semibold">Sonuç</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-red-100">
                  <td className="py-1 px-2 md:py-2 md:px-4">Startup Time</td>
                  <td className="py-1 px-2 md:py-2 md:px-4">72ms</td>
                  <td className="py-1 px-2 md:py-2 md:px-4">22ms</td>
                  <td className="py-1 px-2 md:py-2 md:px-4">Node.js 3.3x daha hızlı</td>
                </tr>
                <tr className="border-t border-red-100">
                  <td className="py-1 px-2 md:py-2 md:px-4">Fibonacci(35)</td>
                  <td className="py-1 px-2 md:py-2 md:px-4">54ms</td>
                  <td className="py-1 px-2 md:py-2 md:px-4">46ms</td>
                  <td className="py-1 px-2 md:py-2 md:px-4">Node.js 1.2x daha hızlı</td>
                </tr>
                <tr className="border-t border-red-100">
                  <td className="py-1 px-2 md:py-2 md:px-4">Loop (10M)</td>
                  <td className="py-1 px-2 md:py-2 md:px-4">37ms</td>
                  <td className="py-1 px-2 md:py-2 md:px-4">8ms</td>
                  <td className="py-1 px-2 md:py-2 md:px-4">Node.js 4.6x daha hızlı</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-xs text-red-700 mt-2">Gerçek benchmark sonuçlarıdır. Kiren henüz öğrenme ve deneysel bir projedir.</div>
        </div>

        {/* Kod Örneği ve Hello World */}
        <div className="mt-8 md:mt-12 bg-white/80 border border-red-100 rounded-xl p-3 md:p-6 shadow-sm relative z-10">
          <h3 className="text-lg md:text-2xl font-bold text-red-700 mb-3 md:mb-4">Kiren ile Kısa Kod Örnekleri</h3>
          <div className="mb-3 md:mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-red-700 text-sm md:text-base">Hello World (JavaScript)</span>
              <button
                className="text-xs bg-red-100 hover:bg-red-200 text-red-700 px-2 py-1 rounded ml-2 border border-red-200"
                onClick={() => navigator.clipboard.writeText('console.log("Merhaba Kiren!");')}
              >Kopyala</button>
            </div>
            <pre className="bg-red-50 rounded p-2 md:p-3 text-xs md:text-sm text-red-900 overflow-x-auto"><code>console.log("Merhaba Kiren!");</code></pre>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-red-700 text-sm md:text-base">Basit HTTP Sunucu (JavaScript)</span>
              <button
                className="text-xs bg-red-100 hover:bg-red-200 text-red-700 px-2 py-1 rounded ml-2 border border-red-200"
                onClick={() => navigator.clipboard.writeText('const server = Kiren.createServer((req, res) => {\n  res.end("Merhaba Kiren!");\n});\nserver.listen(3000);')}
              >Kopyala</button>
            </div>
            <pre className="bg-red-50 rounded p-2 md:p-3 text-xs md:text-sm text-red-900 overflow-x-auto"><code>{`const server = Kiren.createServer((req, res) => {\n  res.end("Merhaba Kiren!");\n});\nserver.listen(3000);`}</code></pre>
          </div>
        </div>

        {/* Kiren'in Gerçek Avantajları */}
        <div className="mt-8 md:mt-12 bg-red-50/60 border border-red-100 rounded-xl p-3 md:p-6 shadow-sm relative z-10">
          <h3 className="text-lg md:text-2xl font-bold text-red-700 mb-3 md:mb-4">🎯 Kiren'in Gerçek Avantajları</h3>
          <ul className="space-y-1 md:space-y-2 text-red-900 text-sm md:text-base">
            <li>🦀 <b>Memory Safety:</b> Rust'ın ownership modeli ile güvenlik</li>
            <li>📦 <b>Single Binary:</b> Dependency hell yok, kolay deployment</li>
            <li>🔧 <b>Simplicity:</b> Minimal setup, sadece binary copy & run</li>
            <li>🛠️ <b>Learning:</b> JavaScript runtime internals'ını anlamak için mükemmel</li>
            <li>🚀 <b>Potential:</b> Optimizasyon ve unique features için alan var</li>
          </ul>
          <div className="text-xs text-red-700 mt-3 md:mt-4">
            <b>Not:</b> v0.1.0'da Kiren henüz Node.js'den hızlı değil. Bu bir öğrenme projesi ve functional runtime olarak değerlendirilmeli. Detaylı benchmark sonuçları için <span className="underline">benchmarks/BENCHMARK_RESULTS.md</span> dosyasına bakın.
          </div>
        </div>
      </section>

      {/* Creators Section */}
      <section id="creators" className="py-16 px-4 bg-red-50">
        <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-8 text-center">Yapımcılar</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {creators.map((c) => (
            <a
              key={c.name}
              href={c.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-red-100 rounded-xl shadow hover:shadow-xl transition flex flex-col items-center p-6 w-72 text-center group"
            >
              <img
                src={c.avatar}
                alt={c.fullName + ' profil fotoğrafı'}
                className="w-24 h-24 rounded-full border-4 border-red-200 mb-4 group-hover:scale-105 transition"
              />
              <div className="text-lg font-bold text-red-700">{c.fullName}</div>
              <div className="text-sm text-red-500 mb-2">@{c.name}</div>
              <div className="text-red-900 text-sm">{c.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-700 text-white p-8 mt-auto relative overflow-hidden flex items-center justify-center">
        {/* Animasyonlu minik kiraz */}
        <img 
          src={logo2} 
          alt="Kiren Maskot" 
          className="absolute left-6 bottom-4 w-10 h-10 animate-bounce drop-shadow-lg select-none pointer-events-none"
          style={{animationDuration: '2s'}}
        />
        <div className="text-center text-white/70 text-sm w-full">© {new Date().getFullYear()} Kiren. Tüm hakları saklıdır.</div>
      </footer>
    </div>
  );
} 