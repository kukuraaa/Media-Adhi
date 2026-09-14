import laptop3 from "../../../assets/laptop3.png";

export const TentangArtikel = () => {
  return (
    <section className="w-full lg:w-[857px] flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[24px] w-full min-[1440px]:w-[857px] min-[1440px]:h-[848px]">
        <p className="w-full min-[1440px]:w-[857px] min-[1440px]:h-[75px] text-[14px] font-normal leading-[180%] text-[#777777]">
          Pelayanan yang lambat atau pesanan yang salah catat tidak hanya merusak pengalaman pengunjung, tetapi juga berdampak langsung pada reputasi bisnis Anda. Untuk mengatasi leher botol (bottleneck) operasional ini, saatnya Anda beralih dari pencatatan manual ke sistem otomasi bisnis.
        </p>

        <p className="w-full min-[1440px]:w-[857px] min-[1440px]:h-[50px] text-[14px] font-normal leading-[180%] text-[#777777]">
          Salah satu inovasi paling berdampak adalah penerapan aplikasi Point of Sales (POS) yang terintegrasi dengan Sistem Pemesanan QR Code di Meja. Berikut adalah alasan mengapa kedai kopi Anda wajib mengadopsi teknologi ini:
        </p>

        <div className="w-full min-[1440px]:w-[857px] min-[1440px]:h-[675px] text-[14px] font-normal leading-[180%] text-[#777777] flex flex-col justify-between">
          <div className="flex flex-col gap-[8px]">
            <strong className="font-bold text-[#212121]">1. Alur Pemesanan Mandiri (Self-Service) yang Cepat</strong>
            <span>Dengan menempelkan stiker kode QR unik di setiap meja, pelanggan yang datang bisa langsung duduk, memindai (scan) QR menggunakan smartphone mereka, dan mengakses menu digital secara interaktif. Mereka dapat memilih makanan, menambahkan catatan khusus (misalnya, "kopi tanpa gula"), dan bahkan langsung melakukan pembayaran. Proses ini memangkas waktu tunggu secara drastis karena pelanggan tidak perlu lagi memanggil pelayan atau antre di kasir.</span>
          </div>

          <div className="flex flex-col gap-[8px]">
            <strong className="font-bold text-[#212121]">2. Akurasi Pesanan Tanpa Kesalahan</strong>
            <span>Pencatatan pesanan di atas kertas sangat rentan terhadap kesalahan manusia (human error), baik karena tulisan tangan yang sulit dibaca maupun karena kondisi kedai yang bising. Dengan pemesanan via QR, pesanan diinput langsung oleh pelanggan dan datanya dikirim secara otomatis ke layar monitor atau printer di area dapur dan bar. Tingkat akurasi pesanan menjadi 100%, sehingga mengurangi risiko pemborosan bahan baku akibat makanan yang diretur.</span>
          </div>

          <div className="flex flex-col gap-[8px]">
            <strong className="font-bold text-[#212121]">3. Optimalisasi Kinerja Tenaga Kerja (SDM)</strong>
            <span>Saat tugas mencatat pesanan sudah digantikan oleh sistem digital, staf pelayan (waitress) Anda dapat dialihkan ke tugas-tugas yang membutuhkan sentuhan personal. Mereka bisa lebih fokus mengantarkan hidangan dengan cepat, memastikan kebersihan meja, dan memberikan keramahan ekstra yang membuat pelanggan merasa dihargai. Operasional menjadi jauh lebih efisien tanpa perlu menambah banyak karyawan baru.</span>
          </div>

          <div className="flex flex-col gap-[8px]">
            <strong className="font-bold text-[#212121]">4. Visibilitas Lewat Dashboard Administratif Real-Time</strong>
            <span>Keunggulan utama dari sebuah aplikasi web POS yang berbasis otomasi adalah kemudahan dalam manajemen data. Setiap transaksi yang masuk melalui pindaian QR di meja akan langsung tersinkronisasi. Pemilik bisnis atau manajer dapat memantau ketersediaan meja, tren menu paling laris, hingga rekapitulasi pendapatan harian melalui dashboard administratif secara real-time dari mana saja.</span>
          </div>
        </div>
      </div>

      <div className="mt-[56px] w-full h-[300px] sm:h-[400px] lg:h-[553px] rounded-[16px] overflow-hidden">
        <img src={laptop3} alt="Dashboard Administratif Real-Time" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};