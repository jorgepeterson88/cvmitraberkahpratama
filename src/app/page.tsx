'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Monitor, HardDrive, Cpu, Wifi, Package, Truck, Shield, HeadphonesIcon } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(data.error || 'Terjadi kesalahan. Silakan coba lagi.');
      }
    } catch (error) {
      setSubmitMessage('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigation = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Produk', href: '#products' },
    { name: 'Layanan', href: '#services' },
    { name: 'Kontak', href: '#contact' },
  ];

  const products = [
    { name: 'Laptop & Notebook', icon: Monitor, description: 'Berbagai merek laptop dengan spesifikasi terbaik' },
    { name: 'Komputer Rakitan', icon: Cpu, description: 'PC rakitan sesuai kebutuhan dan budget' },
    { name: 'Aksesoris Komputer', icon: HardDrive, description: 'Mouse, keyboard, dan peripheral lengkap' },
    { name: 'Jaringan & Internet', icon: Wifi, description: 'Router, switch, dan peralatan jaringan' },
  ];

  const services = [
    { name: 'Konsultasi Teknis', icon: HeadphonesIcon, description: 'Konsultasi gratis untuk kebutuhan komputer Anda' },
    { name: 'Pengiriman Aman', icon: Truck, description: 'Pengiriman produk yang aman dan terpercaya' },
    { name: 'Garansi Resmi', icon: Shield, description: 'Semua produk bergaransi resmi dan terjamin' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="CV Mitra Berkah Pratama" className="h-10 w-10 rounded-lg" />
              <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                CV MITRA BERKAH PRATAMA
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Solusi <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Komputer</span> Terpercaya untuk Bisnis Anda
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  <span className="font-semibold text-blue-600">CV MITRA BERKAH PRATAMA</span> - Partner terpercaya dalam perdagangan eceran komputer dengan produk berkualitas dan harga kompetitif.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#products"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  Lihat Produk
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 text-center"
                >
                  Hubungi Kami
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Produk Tersedia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <img
                src="/computers.jpg"
                alt="CV Mitra Berkah Pratama - Toko Komputer"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">CV MITRA BERKAH PRATAMA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perusahaan perdagangan eceran komputer yang berkomitmen menyediakan produk berkualitas dengan layanan terbaik
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi mitra terpercaya dalam penyediaan solusi teknologi komputer yang mendukung kemajuan bisnis dan pendidikan di Indonesia.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Menyediakan produk komputer berkualitas dengan harga kompetitif
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Memberikan layanan pelanggan yang prima dan responsif
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Menjadi solusi one-stop shopping untuk kebutuhan komputer
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Mengapa Memilih Kami?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Package className="w-6 h-6" />
                  <span>Produk lengkap dan berkualitas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6" />
                  <span>Garansi resmi untuk semua produk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6" />
                  <span>Pengiriman cepat dan aman</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HeadphonesIcon className="w-6 h-6" />
                  <span>Dukungan teknis profesional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Produk Unggulan</h2>
            <p className="text-xl text-gray-600">Berbagai produk komputer untuk memenuhi kebutuhan Anda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <img
              src="/laptop.jpg"
              alt="Produk Laptop Komputer"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Prima</h2>
            <p className="text-xl text-gray-600">Komitmen kami untuk memberikan yang terbaik</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <img
              src="/service.jpg"
              alt="Layanan Service Komputer"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Hubungi Kami</h2>
            <p className="text-xl text-blue-100">Siap membantu kebutuhan komputer Anda</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-white">
                  <MapPin className="w-5 h-5" />
                  <span>Jalan Manggis, Kab. Pasuruan, Provinsi Jawa Timur</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <MapPin className="w-5 h-5" />
                  <span>Kode Pos: 67153</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <Phone className="w-5 h-5" />
                  <span>085353887447</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <Mail className="w-5 h-5" />
                  <span>info@cvmitraberkahtpratama.com</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Pesan Anda"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                ></textarea>
                
                {submitMessage && (
                  <div className={`p-3 rounded-lg text-sm ${submitMessage.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {submitMessage}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="CV Mitra Berkah Pratama" className="h-8 w-8 rounded-lg" />
                <div className="text-lg font-bold">CV MITRA BERKAH PRATAMA</div>
              </div>
              <p className="text-gray-400">Partner terpercaya untuk kebutuhan komputer Anda</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Tentang</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Produk</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Layanan</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Jalan Manggis, Pasuruan</li>
                <li>Jawa Timur, 67153</li>
                <li>085353887447</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV MITRA BERKAH PRATAMA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}