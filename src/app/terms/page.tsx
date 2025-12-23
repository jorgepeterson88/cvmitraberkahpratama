'use client';

import { ArrowLeft, FileText, AlertCircle, CheckCircle, Scale, Clock } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
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
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-lg text-gray-600">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Selamat datang di <span className="font-semibold text-blue-600">CV MITRA BERKAH PRATAMA</span>. Syarat dan Ketentuan ini mengatur penggunaan layanan dan produk yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan yang berlaku.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Harap baca dengan seksama karena ini memuat informasi penting tentang hak dan kewajiban Anda sebagai pelanggan.
            </p>
          </section>

          {/* General Terms */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Ketentuan Umum</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Definisi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>"Perusahaan"</strong> merujuk pada CV MITRA BERKAH PRATAMA
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>"Pelanggan"</strong> merujuk pada individu atau entitas yang menggunakan layanan kami
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>"Produk"</strong> merujuk pada semua barang komputer yang kami jual
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>"Layanan"</strong> merujuk pada semua jasa yang kami sediakan
                  </li>
                </ul>
              </div>

              <div className="bg-cyan-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Penerimaan Syarat</h3>
                <p className="text-gray-700 mb-3">
                  Dengan menggunakan layanan kami, Anda menyatakan bahwa:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                    Anda telah membaca, memahami, dan menyetujui syarat dan ketentuan ini
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                    Anda memiliki kapasitas hukum untuk mengikat kontrak
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                    Anda akan mematuhi semua hukum dan peraturan yang berlaku
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Products and Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Produk dan Layanan</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Ketersediaan Produk</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Stok produk dapat berubah sewaktu-waktu</li>
                  <li>• Harga dapat berubah tanpa pemberitahuan sebelumnya</li>
                  <li>• Kami berhak membatasi jumlah pembelian</li>
                  <li>• Spesifikasi produk dapat berubah sesuai pabrik</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Kualitas Produk</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Semua produk bergaransi resmi</li>
                  <li>• Produk baru dan original</li>
                  <li>• Dikemas sesuai standar pabrik</li>
                  <li>• Dilengkapi manual dan aksesoris standar</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ordering and Payment */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Pemesanan dan Pembayaran</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-semibold mb-4">Prosedur Pemesanan</h3>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-sm">1</span>
                    <span>Pilih produk yang diinginkan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-sm">2</span>
                    <span>Konfirmasi ketersediaan stok dan harga</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-sm">3</span>
                    <span>Lakukan pembayaran sesuai kesepakatan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-sm">4</span>
                    <span>Produk akan dikirim atau dapat diambil</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Metode Pembayaran</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Transfer bank (BCA, Mandiri, BNI, BRI)</li>
                  <li>• E-wallet (OVO, GoPay, DANA)</li>
                  <li>• Tunai (untuk pengambilan langsung)</li>
                  <li>• Pembayaran cicilan (syarat dan ketentuan berlaku)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Shipping and Delivery */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengiriman dan Pengantaran</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900">Waktu Pengiriman</h3>
                <p className="text-gray-700">1-3 hari kerja untuk area Pasuruan, 3-7 hari kerja untuk luar kota.</p>
              </div>
              <div className="border-l-4 border-cyan-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900">Biaya Pengiriman</h3>
                <p className="text-gray-700">Ditanggung pembeli, kecuali ada promosi khusus.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900">Resiko Pengiriman</h3>
                <p className="text-gray-700">Resiko pengiriman beralih kepada pembeli setelah barang diserahkan kepada ekspedisi.</p>
              </div>
            </div>
          </section>

          {/* Warranty and Returns */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Garansi dan Pengembalian</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Kebijakan Garansi</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Garansi resmi dari pabrik (1-3 tahun tergantung produk)</li>
                <li>• Klaim garansi harus disertai dengan bukti pembelian</li>
                <li>• Garansi tidak berlaku untuk kerusakan akibat kesalahan pengguna</li>
                <li>• Proses klaim garansi mengikuti prosedur pabrik</li>
              </ul>
              
              <h3 className="font-semibold text-gray-900 mb-3">Pengembalian Produk</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pengembalian dapat dilakukan dalam 7 hari jika produk cacat</li>
                <li>• Produk harus dalam kondisi lengkap dan tidak rusak</li>
                <li>• Biaya pengembalian ditanggung pembeli</li>
                <li>• Pengembalian dana akan diproses dalam 3-5 hari kerja</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Batasan Tanggung Jawab</h2>
            </div>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">CV MITRA BERKAH PRATAMA</span> tidak bertanggung jawab atas:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Kerugian tidak langsung atau konsekuensial</li>
                <li>• Kehilangan data atau kerusakan perangkat lunak</li>
                <li>• Kelalaian dalam penggunaan produk</li>
                <li>• Force majeure (bencana alam, huru hara, dll)</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
            <p className="text-gray-700 leading-relaxed">
              Semua konten di website kami termasuk logo, teks, gambar, dan desain dilindungi oleh hak cekayaan intelektual. Anda tidak diperbolehkan menyalin, mendistribusikan, atau menggunakan konten kami tanpa izin tertulis dari <span className="font-semibold text-blue-600">CV MITRA BERKAH PRATAMA</span>.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengakhiran</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kami berhak mengakhiri atau menangguhkan layanan Anda jika:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Melanggar syarat dan ketentuan ini</li>
              <li>• Memberikan informasi palsu atau menyesatkan</li>
              <li>• Terlibat dalam aktivitas ilegal atau penipuan</li>
              <li>• Merugikan reputasi perusahaan</li>
            </ul>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Syarat dan Ketentuan</h2>
            <p className="text-gray-700 leading-relaxed">
              Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan berlaku efektif setelah dipublikasikan di website kami. Penggunaan terus-menerus layanan kami setelah perubahan berarti Anda menerima syarat yang diperbarui.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@cvmitraberkahtpratama.com</p>
                <p><strong>Telepon:</strong> 085353887447</p>
                <p><strong>Alamat:</strong> Jalan Manggis, Kab. Pasuruan, Provinsi Jawa Timur, 67153</p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hukum yang Berlaku</h2>
            <p className="text-gray-700 leading-relaxed">
              Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia. Setiap sengketa akan diselesaikan secara musyawarah terlebih dahulu, dan jika tidak tercapai kesepakatan, akan diselesaikan melalui pengadilan yang berwenang di Kabupaten Pasuruan.
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