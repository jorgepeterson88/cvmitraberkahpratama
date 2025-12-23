'use client';

import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <img src="/logo.png" alt="CV Mitra Berkah Pratama" className="h-8 w-8 rounded-lg" />
                <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  CV MITRA BERKAH PRATAMA
                </div>
              </Link>
            </div>
            
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-gray-600">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Selamat datang di <span className="font-semibold text-blue-600">CV MITRA BERKAH PRATAMA</span>. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda menggunakan layanan kami.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <Database className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Informasi yang Kami Kumpulkan</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Informasi Pribadi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nama lengkap dan alamat email
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nomor telepon dan alamat pengiriman
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Informasi pembayaran dan transaksi
                  </li>
                </ul>
              </div>

              <div className="bg-cyan-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Informasi Teknis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Alamat IP dan jenis browser
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Data penggunaan website
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cookie dan teknologi pelacakan
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Cara Kami Menggunakan Informasi</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Untuk Layanan</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Memproses pesanan dan pengiriman</li>
                  <li>• Memberikan dukungan pelanggan</li>
                  <li>• Mengelola akun pengguna</li>
                  <li>• Memperbaiki layanan kami</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Untuk Komunikasi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mengirim konfirmasi pesanan</li>
                  <li>• Memberikan informasi produk</li>
                  <li>• Marketing dan promosi</li>
                  <li>• Survei kepuasan pelanggan</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl text-white">
              <p className="mb-4">
                <span className="font-semibold">CV MITRA BERKAH PRATAMA</span> berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Lock className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Enkripsi data selama transmisi dan penyimpanan</span>
                </li>
                <li className="flex items-start">
                  <UserCheck className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Akses terbatas untuk authorized personnel</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Security audit berkala</span>
                </li>
                <li className="flex items-start">
                  <Database className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Backup data yang aman</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="font-semibold text-gray-900">Akses Data</h3>
                <p className="text-gray-700">Anda berhak mengetahui data pribadi yang kami simpan tentang Anda.</p>
              </div>
              <div className="border-l-4 border-cyan-600 pl-6 py-2">
                <h3 className="font-semibold text-gray-900">Koreksi Data</h3>
                <p className="text-gray-700">Anda dapat memperbarui atau mengoreksi data pribadi yang tidak akurat.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="font-semibold text-gray-900">Hapus Data</h3>
                <p className="text-gray-700">Anda dapat meminta penghapusan data pribadi Anda dalam kondisi tertentu.</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda, silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@cvmitraberkahtpratama.com</p>
                <p><strong>Telepon:</strong> 085353887447</p>
                <p><strong>Alamat:</strong> Jalan Manggis, Kab. Pasuruan, Provinsi Jawa Timur, 67153</p>
              </div>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Kebijakan</h2>
            <p className="text-gray-700 leading-relaxed">
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website atau email Anda. Penggunaan terus-menerus layanan kami setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src="/logo.png" alt="CV Mitra Berkah Pratama" className="h-8 w-8 rounded-lg" />
              <div className="text-lg font-bold">CV MITRA BERKAH PRATAMA</div>
            </div>
            <p className="text-gray-400">
              &copy; 2024 CV MITRA BERKAH PRATAMA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}