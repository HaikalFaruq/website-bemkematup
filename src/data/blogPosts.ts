
export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
};

export const allBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Workshop Kepemimpinan Kampus Menonjolkan Potensi Mahasiswa",
    excerpt: "Workshop kepemimpinan yang diselenggarakan BEM KEMA mendapat partisipasi antusias dari mahasiswa berbagai jurusan.",
    content: "Workshop Kepemimpinan yang diselenggarakan BEM KEMA TUP berhasil mempertemukan mahasiswa dari berbagai latar belakang akademik untuk mengembangkan keterampilan kepemimpinan yang esensial. Acara dua hari ini menampilkan sesi interaktif, kegiatan team building, dan pemaparan dari profesional industri serta alumni yang berbagi pengalaman dan wawasan mereka. Peserta terlibat dalam studi kasus dan latihan praktis yang dirancang untuk meningkatkan kemampuan pemecahan masalah dan keterampilan interpersonal. Workshop ditutup dengan proyek kolaboratif di mana tim mempresentasikan solusi inovatif untuk tantangan kampus, menunjukkan kreativitas dan potensi mahasiswa Telkom University Purwokerto. Inisiatif ini sejalan dengan komitmen BEM KEMA untuk mendorong pertumbuhan mahasiswa dan mempersiapkan pemimpin masa depan untuk sukses dalam perjalanan akademis dan profesional mereka.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "12 Mei, 2025",
    category: "Acara"
  },
  {
    id: 2,
    title: "Program Kesejahteraan Mahasiswa Baru Diluncurkan Bulan Depan",
    excerpt: "BEM KEMA mengumumkan program kesejahteraan komprehensif yang dirancang untuk mendukung mahasiswa yang menghadapi tantangan finansial dan akademik.",
    content: "BEM KEMA TUP dengan bangga mengumumkan peluncuran Program Kesejahteraan Mahasiswa yang komprehensif, yang akan dimulai bulan depan. Inisiatif ini bertujuan untuk mengatasi beragam kebutuhan mahasiswa yang menghadapi kendala finansial, tantangan akademik, dan masalah kesehatan mental. Program ini akan menawarkan bantuan finansial melalui dana darurat dan koneksi beasiswa, dukungan akademik melalui tutor sebaya dan kelompok belajar, serta sumber daya kesehatan mental termasuk layanan konseling dan workshop kesejahteraan. Selain itu, program kesejahteraan akan menyediakan peluang pengembangan karier melalui workshop resume, sesi persiapan wawancara, dan acara networking dengan profesional industri. BEM KEMA telah bermitra dengan bisnis lokal, jaringan alumni, dan administrasi universitas untuk menciptakan sistem dukungan berkelanjutan yang memberdayakan mahasiswa mengatasi hambatan dan mencapai potensi penuh mereka selama masa studi di Telkom University Purwokerto.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "8 Mei, 2025",
    category: "Program"
  },
  {
    id: 3,
    title: "Inisiatif Penelitian Kolaboratif dengan Mitra Industri",
    excerpt: "Mahasiswa kini memiliki kesempatan untuk berpartisipasi dalam proyek penelitian bersama para ahli industri terkemuka melalui inisiatif baru kami.",
    content: "BEM KEMA TUP telah mendirikan Inisiatif Penelitian Kolaboratif yang inovatif yang menghubungkan mahasiswa dengan mitra industri terkemuka untuk pengalaman penelitian langsung. Program ini menjembatani kesenjangan antara pembelajaran akademik dan aplikasi dunia nyata, memungkinkan mahasiswa bekerja pada proyek-proyek mutakhir sambil membangun hubungan profesional yang berharga. Perusahaan peserta meliputi raksasa teknologi, perusahaan telekomunikasi, dan startup inovatif, menawarkan peluang beragam di berbagai disiplin ilmu. Inisiatif ini mencakup mentorship terstruktur, akses ke sumber daya dan fasilitas canggih, serta potensi magang dan peluang kerja masa depan. Proyek penelitian terpilih akan mengatasi tantangan kontemporer dalam teknologi, bisnis, dan masyarakat, dengan temuan akan dipresentasikan di TUP Innovation Summit tahunan. Aplikasi untuk kohort pertama dibuka minggu depan, dengan sesi informasi dijadwalkan di seluruh kampus untuk membantu mahasiswa yang tertarik mempelajari lebih lanjut tentang kesempatan menarik ini.",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "5 Mei, 2025",
    category: "Akademik"
  },
  {
    id: 4,
    title: "BEM KEMA Menyelenggarakan Pameran Teknologi yang Sukses",
    excerpt: "Pameran teknologi tahunan menampilkan proyek mahasiswa yang inovatif dan menarik perhatian perekrut industri ke kampus.",
    content: "Akhir pekan lalu, BEM KEMA TUP berhasil menyelenggarakan Pameran Teknologi tahunan, mengubah aula utama kampus menjadi pusat inovasi dan kreativitas. Lebih dari 50 tim mahasiswa mempresentasikan proyek mulai dari aplikasi mobile dan platform web hingga perangkat IoT dan solusi AI. Acara ini menarik perwakilan dari perusahaan teknologi besar dan startup lokal, menciptakan peluang networking yang berharga bagi mahasiswa peserta. Beberapa proyek menerima penawaran pendanaan dan dukungan pengembangan dari pengunjung industri yang terkesan. Pameran juga menampilkan workshop teknis, diskusi panel tentang teknologi emerging, dan keynote address dari seorang entrepreneur teknologi terkemuka. Dengan rekor kehadiran dari komunitas kampus dan pengunjung eksternal, pameran tahun ini telah memperkuat reputasi Telkom University Purwokerto sebagai tempat yang memupuk bakat teknologi dan inovasi di wilayah ini.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "25 Mei, 2025",
    category: "Acara"
  },
  {
    id: 5,
    title: "Program Pertukaran Budaya Membuka Pendaftaran",
    excerpt: "Mahasiswa kini dapat mendaftar untuk program pertukaran budaya yang akan datang dengan universitas mitra di seluruh Asia Tenggara.",
    content: "BEM KEMA TUP telah membuka pendaftaran untuk Program Pertukaran Budaya yang sangat dinanti, menawarkan mahasiswa kesempatan untuk mengalami imersi akademik dan budaya di universitas mitra di seluruh Asia Tenggara. Program satu semester ini memungkinkan peserta untuk belajar di institusi di Malaysia, Thailand, Singapura, Vietnam, dan Filipina sambil terlibat dengan mahasiswa dan komunitas lokal. Pertukaran mencakup kursus akademik khusus, workshop budaya, peluang pembelajaran bahasa, dan kunjungan terorganisir ke situs sejarah dan budaya. Peserta akan berperan sebagai duta besar Telkom University Purwokerto sambil memperoleh perspektif global yang meningkatkan pengembangan personal dan profesional mereka. Paket dukungan finansial tersedia untuk membantu membuat kesempatan ini dapat diakses oleh semua mahasiswa yang memenuhi syarat. Sesi informasi akan diadakan Selasa depan di Kantor Urusan Internasional, di mana peserta sebelumnya akan berbagi pengalaman mereka dan menjawab pertanyaan tentang program yang mengubah hidup ini.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "20 Mei, 2025",
    category: "Program"
  },
  {
    id: 6,
    title: "Konferensi Kepemimpinan Mahasiswa Mengumumkan Pembicara Unggulan",
    excerpt: "Konferensi yang akan datang akan menampilkan pemimpin terkenal dari berbagai sektor yang berbagi wawasan tentang strategi kepemimpinan yang efektif.",
    content: "BEM KEMA TUP dengan bangga mengumumkan jajaran pembicara yang mengesankan untuk Konferensi Kepemimpinan Mahasiswa bulan depan. Acara dua hari ini akan menampilkan pembicaraan dan workshop dari pemimpin terkemuka di sektor bisnis, pemerintahan, pendidikan, dan kewirausahaan sosial. Keynote address akan disampaikan oleh CEO perusahaan telekomunikasi besar, seorang aktivis sosial terkemuka, dan seorang reformer pendidikan yang diakui secara internasional. Program konferensi mencakup sesi interaktif tentang kepemimpinan etis, manajemen krisis, pembangunan tim inklusif, dan komunikasi yang efektif. Diskusi panel akan mengeksplorasi tantangan kepemimpinan di era digital, kepemimpinan keberlanjutan, dan jalur untuk menciptakan dampak sosial yang bermakna. Pendaftaran early bird sekarang terbuka, dengan tarif khusus untuk mahasiswa Telkom University Purwokerto. Konferensi ini merupakan kesempatan yang tak tertandingi bagi mahasiswa untuk belajar dari pemimpin berprestasi dan mengembangkan keterampilan yang diperlukan untuk membuat perbedaan positif di komunitas dan karier masa depan mereka.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "15 Mei, 2025",
    category: "Acara"
  }
];
