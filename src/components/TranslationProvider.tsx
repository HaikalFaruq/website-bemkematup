import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define available languages
type Language = 'en' | 'id';

// Define translations
const translations = {
  en: {
    // Navbar
    'Home': 'Home',
    'Ministry': 'Ministry',
    'Blog': 'Blog',
    'FAQ': 'FAQ',
    'Contact': 'Contact',
    
    // Hero Section
    'Inspiring': 'Inspiring',
    'Leadership for Student Excellence': 'Leadership for Student Excellence',
    'BEM KEMA Telkom University Purwokerto is dedicated to fostering student growth, providing opportunities, and creating a vibrant campus community.': 'BEM KEMA Telkom University Purwokerto is dedicated to fostering student growth, providing opportunities, and creating a vibrant campus community.',
    'Explore Ministry': 'Explore Ministry',
    'Connect With Us': 'Connect With Us',
    'Scroll down': 'Scroll down',
    
    // President Remarks
    'Student': 'Student',
    'President Remarks': 'President Remarks',
    'A message from our student body president about our vision and commitment to the campus community.': 'A message from our student body president about our vision and commitment to the campus community.',
    'As the President of BEM KEMA Telkom University Purwokerto, I am dedicated to building a campus environment where every student can thrive academically, professionally, and personally. Our focus is on creating innovative programs that address student needs while fostering leadership skills that will serve our members throughout their careers.': 'As the President of BEM KEMA Telkom University Purwokerto, I am dedicated to building a campus environment where every student can thrive academically, professionally, and personally. Our focus is on creating innovative programs that address student needs while fostering leadership skills that will serve our members throughout their careers.',
    'Vision': 'Vision',
    'To be the leading student organization that empowers every student to reach their full potential.': 'To be the leading student organization that empowers every student to reach their full potential.',
    'Mission': 'Mission',
    'To create programs and initiatives that foster academic excellence, leadership development, and community engagement.': 'To create programs and initiatives that foster academic excellence, leadership development, and community engagement.',
    'Leadership': 'Leadership',
    'Guiding our student body with integrity, innovation, and a commitment to excellence.': 'Guiding our student body with integrity, innovation, and a commitment to excellence.',
    'Presidential Term': 'Presidential Term',
    'Student Body President': 'Student Body President',
    
    // Ministry Section
    'Our': 'Our',
    'Ministries': 'Ministries',
    'Explore the various ministries that make up BEM KEMA Telkom University Purwokerto.': 'Explore the various ministries that make up BEM KEMA Telkom University Purwokerto.',
    'Learn More': 'Learn More',
    'Discover the different departments that make up BEM KEMA and how they work together to create an impactful student experience.': 'Discover the different departments that make up BEM KEMA and how they work together to create an impactful student experience.',
    'Key Responsibilities': 'Key Responsibilities',
    'Leading our initiatives with dedication and expertise.': 'Leading our initiatives with dedication and expertise.',
    
    // Blog Section
    'Latest News &': 'Latest News &',
    'Updates': 'Updates',
    'Stay informed with the latest news, events, and activities from BEM KEMA Telkom University Purwokerto.': 'Stay informed with the latest news, events, and activities from BEM KEMA Telkom University Purwokerto.',
    'View All Articles': 'View All Articles',
    'Read More': 'Read More',
    'Show Less': 'Show Less',
    'min read': 'min read',
    'Stay updated with the latest happenings, events, and initiatives from BEM KEMA Telkom University Purwokerto.': 'Stay updated with the latest happenings, events, and initiatives from BEM KEMA Telkom University Purwokerto.',
    
    // Articles Page
    'Latest Articles': 'Latest Articles',
    'Back to Home': 'Back to Home',
    'Back to Articles': 'Back to Articles',
    'Stay connected with the latest news, events, and initiatives from BEM KEMA Telkom University Purwokerto. Explore our articles to learn more about what\'s happening on campus.': 'Stay connected with the latest news, events, and initiatives from BEM KEMA Telkom University Purwokerto. Explore our articles to learn more about what\'s happening on campus.',
    'View Full Article': 'View Full Article',
    'Article Expanded': 'Article Expanded',
    'You can now read the full article content.': 'You can now read the full article content.',
    'Article not found': 'Article not found',
    
    // FAQ Section
    'Frequently': 'Frequently',
    'Asked Questions': 'Asked Questions',
    'Find answers to common questions about BEM KEMA Telkom University Purwokerto and how we serve the student community.': 'Find answers to common questions about BEM KEMA Telkom University Purwokerto and how we serve the student community.',
    'Still have questions? Feel free to reach out to us directly.': 'Still have questions? Feel free to reach out to us directly.',
    'Contact Us': 'Contact Us',
    
    // FAQ Items
    'What is BEM KEMA?': 'What is BEM KEMA?',
    'BEM KEMA stands for Badan Eksekutif Mahasiswa Keluarga Mahasiswa, which is the Student Executive Board of Telkom University Purwokerto. It\'s the official student organization that represents all students and coordinates various activities and initiatives across campus.': 'BEM KEMA stands for Badan Eksekutif Mahasiswa Keluarga Mahasiswa, which is the Student Executive Board of Telkom University Purwokerto. It\'s the official student organization that represents all students and coordinates various activities and initiatives across campus.',
    'How can I join BEM KEMA?': 'How can I join BEM KEMA?',
    'Students can join BEM KEMA through our annual recruitment process, typically held at the beginning of the academic year. Keep an eye on our official social media channels and campus announcements for recruitment information. We welcome students from all departments and years!': 'Students can join BEM KEMA through our annual recruitment process, typically held at the beginning of the academic year. Keep an eye on our official social media channels and campus announcements for recruitment information. We welcome students from all departments and years!',
    'What kind of activities does BEM KEMA organize?': 'What kind of activities does BEM KEMA organize?',
    'BEM KEMA organizes a wide range of activities including academic seminars, cultural festivals, sports competitions, community service projects, leadership workshops, and many other events that enrich campus life and provide valuable experiences for students.': 'BEM KEMA organizes a wide range of activities including academic seminars, cultural festivals, sports competitions, community service projects, leadership workshops, and many other events that enrich campus life and provide valuable experiences for students.',
    'How can I propose an event or initiative to BEM KEMA?': 'How can I propose an event or initiative to BEM KEMA?',
    'We welcome student initiatives! You can submit your proposals by contacting the relevant ministry or department via email or during our regular office hours. Alternatively, you can use the contact form on this website to share your ideas with us.': 'We welcome student initiatives! You can submit your proposals by contacting the relevant ministry or department via email or during our regular office hours. Alternatively, you can use the contact form on this website to share your ideas with us.',
    'Does BEM KEMA offer any support for student clubs?': 'Does BEM KEMA offer any support for student clubs?',
    'Yes, BEM KEMA provides support for registered student clubs and organizations through resources, promotional assistance, and coordination. Contact our Student Activities department for more information on how we can support your club.': 'Yes, BEM KEMA provides support for registered student clubs and organizations through resources, promotional assistance, and coordination. Contact our Student Activities department for more information on how we can support your club.',
    'How can I stay updated on BEM KEMA activities?': 'How can I stay updated on BEM KEMA activities?',
    'You can stay updated by following our official social media accounts, subscribing to our newsletter, checking campus notice boards, or visiting our website regularly. We also have a dedicated app that provides real-time updates on events and activities.': 'You can stay updated by following our official social media accounts, subscribing to our newsletter, checking campus notice boards, or visiting our website regularly. We also have a dedicated app that provides real-time updates on events and activities.',
    
    // Contact Section
    'Get in': 'Get in',
    'Touch': 'Touch',
    'Have questions or want to connect with us? Fill out the form below and we\'ll get back to you as soon as possible.': 'Have questions or want to connect with us? Fill out the form below and we\'ll get back to you as soon as possible.',
    'Full Name': 'Full Name',
    'Email Address': 'Email Address',
    'Subject': 'Subject',
    'Message': 'Message',
    'Send Message': 'Send Message',
    'Connect With Us on Social Media': 'Connect With Us on Social Media',
    'Visit Our Office': 'Visit Our Office',
    'Contact Information': 'Contact Information',
    
    // Footer
    'The Student Executive Board of Telkom University Purwokerto, dedicated to enhancing student life and advocating for student interests.': 'The Student Executive Board of Telkom University Purwokerto, dedicated to enhancing student life and advocating for student interests.',
    'Quick Links': 'Quick Links',
    'Our Services': 'Our Services',
    'Student Advocacy': 'Student Advocacy',
    'Event Organization': 'Event Organization',
    'Club Support': 'Club Support',
    'Academic Resources': 'Academic Resources',
    'Leadership Training': 'Leadership Training',
    'Newsletter': 'Newsletter',
    'Subscribe to our newsletter to receive updates on events, news, and opportunities.': 'Subscribe to our newsletter to receive updates on events, news, and opportunities.',
    'Your email address': 'Your email address',
    'Subscribe': 'Subscribe',
    'All rights reserved.': 'All rights reserved.',
    'Privacy Policy': 'Privacy Policy',
    'Terms of Service': 'Terms of Service',
    'Sitemap': 'Sitemap',
  },
  id: {
    // Navbar
    'Home': 'Beranda',
    'Ministry': 'Kementerian',
    'Blog': 'Blog',
    'FAQ': 'FAQ',
    'Contact': 'Kontak',
    
    // Hero Section
    'Inspiring': 'Menginspirasi',
    'Leadership for Student Excellence': 'Kepemimpinan untuk Keunggulan Mahasiswa',
    'BEM KEMA Telkom University Purwokerto is dedicated to fostering student growth, providing opportunities, and creating a vibrant campus community.': 'BEM KEMA Telkom University Purwokerto berdedikasi untuk mendorong pertumbuhan mahasiswa, memberikan kesempatan, dan menciptakan komunitas kampus yang hidup.',
    'Explore Ministry': 'Jelajahi Kementerian',
    'Connect With Us': 'Hubungi Kami',
    'Scroll down': 'Gulir ke bawah',
    
    // President Remarks
    'Student': 'Presiden',
    'President Remarks': 'Mahasiswa',
    'A message from our student body president about our vision and commitment to the campus community.': 'Pesan dari presiden BEM kami tentang visi dan komitmen kami kepada komunitas kampus.',
    'As the President of BEM KEMA Telkom University Purwokerto, I am dedicated to building a campus environment where every student can thrive academically, professionally, and personally. Our focus is on creating innovative programs that address student needs while fostering leadership skills that will serve our members throughout their careers.': 'Sebagai Presiden BEM KEMA Telkom University Purwokerto, saya berdedikasi untuk membangun lingkungan kampus di mana setiap mahasiswa dapat berkembang secara akademis, profesional, dan personal. Fokus kami adalah menciptakan program inovatif yang memenuhi kebutuhan mahasiswa sambil menumbuhkan keterampilan kepemimpinan yang akan melayani anggota kami sepanjang karir mereka.',
    'Vision': 'Visi',
    'To be the leading student organization that empowers every student to reach their full potential.': 'Menjadi organisasi mahasiswa terkemuka yang memberdayakan setiap mahasiswa untuk mencapai potensi penuh mereka.',
    'Mission': 'Misi',
    'To create programs and initiatives that foster academic excellence, leadership development, and community engagement.': 'Menciptakan program dan inisiatif yang mendorong keunggulan akademik, pengembangan kepemimpinan, dan keterlibatan komunitas.',
    'Leadership': 'Kepemimpinan',
    'Guiding our student body with integrity, innovation, and a commitment to excellence.': 'Membimbing mahasiswa kami dengan integritas, inovasi, dan komitmen terhadap keunggulan.',
    'Presidential Term': 'Masa Jabatan',
    'Student Body President': 'Presiden BEM',
    
    // Ministry Section
    'Our': 'Kementerian',
    'Ministries': 'Kami',
    'Explore the various ministries that make up BEM KEMA Telkom University Purwokerto.': 'Jelajahi berbagai kementerian yang membentuk BEM KEMA Telkom University Purwokerto.',
    'Learn More': 'Pelajari Lebih Lanjut',
    'Discover the different departments that make up BEM KEMA and how they work together to create an impactful student experience.': 'Temukan berbagai departemen yang membentuk BEM KEMA dan bagaimana mereka bekerja sama untuk menciptakan pengalaman mahasiswa yang berdampak.',
    'Key Responsibilities': 'Tanggung Jawab Utama',
    'Leading our initiatives with dedication and expertise.': 'Memimpin inisiatif kami dengan dedikasi dan keahlian.',
    
    // Blog Section
    'Latest News &': 'Berita Terbaru &',
    'Updates': 'Pembaruan',
    'Stay informed with the latest news, events, and activities from BEM KEMA Telkom University Purwokerto.': 'Tetap terinformasi dengan berita, acara, dan kegiatan terbaru dari BEM KEMA Telkom University Purwokerto.',
    'View All Articles': 'Lihat Semua Artikel',
    'Read More': 'Baca Selengkapnya',
    'Show Less': 'Tampilkan Lebih Sedikit',
    'min read': 'menit baca',
    'Stay updated with the latest happenings, events, and initiatives from BEM KEMA Telkom University Purwokerto.': 'Tetap terhubung dengan kejadian, acara, dan inisiatif terbaru dari BEM KEMA Telkom University Purwokerto.',
    
    // Articles Page
    'Latest Articles': 'Artikel Terbaru',
    'Back to Home': 'Kembali ke Beranda',
    'Back to Articles': 'Kembali ke Artikel',
    'Stay connected with the latest news, events, and initiatives from BEM KEMA Telkom University Purwokerto. Explore our articles to learn more about what\'s happening on campus.': 'Tetap terhubung dengan berita, acara, dan inisiatif terbaru dari BEM KEMA Telkom University Purwokerto. Jelajahi artikel kami untuk mempelajari lebih lanjut tentang apa yang terjadi di kampus.',
    'View Full Article': 'Lihat Artikel Lengkap',
    'Article Expanded': 'Artikel Diperluas',
    'You can now read the full article content.': 'Anda sekarang dapat membaca konten artikel lengkap.',
    'Article not found': 'Artikel tidak ditemukan',
    
    // FAQ Section
    'Frequently': 'Pertanyaan',
    'Asked Questions': 'yang Sering Diajukan',
    'Find answers to common questions about BEM KEMA Telkom University Purwokerto and how we serve the student community.': 'Temukan jawaban untuk pertanyaan umum tentang BEM KEMA Telkom University Purwokerto dan bagaimana kami melayani komunitas mahasiswa.',
    'Still have questions? Feel free to reach out to us directly.': 'Masih ada pertanyaan? Jangan ragu untuk menghubungi kami secara langsung.',
    'Contact Us': 'Hubungi Kami',
    
    // FAQ Items
    'What is BEM KEMA?': 'Apa itu BEM KEMA?',
    'BEM KEMA stands for Badan Eksekutif Mahasiswa Keluarga Mahasiswa, which is the Student Executive Board of Telkom University Purwokerto. It\'s the official student organization that represents all students and coordinates various activities and initiatives across campus.': 'BEM KEMA adalah singkatan dari Badan Eksekutif Mahasiswa Keluarga Mahasiswa, yaitu Badan Eksekutif Mahasiswa Telkom University Purwokerto. Ini adalah organisasi mahasiswa resmi yang mewakili semua mahasiswa dan mengkoordinasikan berbagai kegiatan dan inisiatif di seluruh kampus.',
    'How can I join BEM KEMA?': 'Bagaimana cara bergabung dengan BEM KEMA?',
    'Students can join BEM KEMA through our annual recruitment process, typically held at the beginning of the academic year. Keep an eye on our official social media channels and campus announcements for recruitment information. We welcome students from all departments and years!': 'Mahasiswa dapat bergabung dengan BEM KEMA melalui proses rekrutmen tahunan kami, biasanya diadakan pada awal tahun akademik. Pantau terus saluran media sosial resmi kami dan pengumuman kampus untuk informasi rekrutmen. Kami menyambut mahasiswa dari semua jurusan dan angkatan!',
    'What kind of activities does BEM KEMA organize?': 'Kegiatan apa saja yang diselenggarakan BEM KEMA?',
    'BEM KEMA organizes a wide range of activities including academic seminars, cultural festivals, sports competitions, community service projects, leadership workshops, and many other events that enrich campus life and provide valuable experiences for students.': 'BEM KEMA menyelenggarakan berbagai kegiatan termasuk seminar akademik, festival budaya, kompetisi olahraga, proyek pengabdian masyarakat, lokakarya kepemimpinan, dan banyak acara lainnya yang memperkaya kehidupan kampus dan memberikan pengalaman berharga bagi mahasiswa.',
    'How can I propose an event or initiative to BEM KEMA?': 'Bagaimana cara mengajukan acara atau inisiatif ke BEM KEMA?',
    'We welcome student initiatives! You can submit your proposals by contacting the relevant ministry or department via email or during our regular office hours. Alternatively, you can use the contact form on this website to share your ideas with us.': 'Kami menyambut inisiatif mahasiswa! Anda dapat mengirimkan proposal Anda dengan menghubungi kementerian atau departemen terkait melalui email atau selama jam kerja reguler kami. Atau, Anda dapat menggunakan formulir kontak di situs web ini untuk berbagi ide Anda dengan kami.',
    'Does BEM KEMA offer any support for student clubs?': 'Apakah BEM KEMA menawarkan dukungan untuk klub mahasiswa?',
    'Yes, BEM KEMA provides support for registered student clubs and organizations through resources, promotional assistance, and coordination. Contact our Student Activities department for more information on how we can support your club.': 'Ya, BEM KEMA memberikan dukungan untuk klub dan organisasi mahasiswa terdaftar melalui sumber daya, bantuan promosi, dan koordinasi. Hubungi departemen Kegiatan Mahasiswa kami untuk informasi lebih lanjut tentang bagaimana kami dapat mendukung klub Anda.',
    'How can I stay updated on BEM KEMA activities?': 'Bagaimana cara mendapatkan informasi terbaru tentang kegiatan BEM KEMA?',
    'You can stay updated by following our official social media accounts, subscribing to our newsletter, checking campus notice boards, or visiting our website regularly. We also have a dedicated app that provides real-time updates on events and activities.': 'Anda dapat tetap terhubung dengan mengikuti akun media sosial resmi kami, berlangganan buletin kami, memeriksa papan pengumuman kampus, atau mengunjungi situs web kami secara teratur. Kami juga memiliki aplikasi khusus yang memberikan pembaruan real-time tentang acara dan kegiatan.',
    
    // Contact Section
    'Get in': 'Hubungi',
    'Touch': 'Kami',
    'Have questions or want to connect with us? Fill out the form below and we\'ll get back to you as soon as possible.': 'Punya pertanyaan atau ingin terhubung dengan kami? Isi formulir di bawah ini dan kami akan menghubungi Anda sesegera mungkin.',
    'Full Name': 'Nama Lengkap',
    'Email Address': 'Alamat Email',
    'Subject': 'Subjek',
    'Message': 'Pesan',
    'Send Message': 'Kirim Pesan',
    'Connect With Us on Social Media': 'Terhubung Dengan Kami di Media Sosial',
    'Visit Our Office': 'Kunjungi Kantor Kami',
    'Contact Information': 'Informasi Kontak',
    
    // Footer
    'The Student Executive Board of Telkom University Purwokerto, dedicated to enhancing student life and advocating for student interests.': 'Badan Eksekutif Mahasiswa Telkom University Purwokerto, berdedikasi untuk meningkatkan kehidupan mahasiswa dan memperjuangkan kepentingan mahasiswa.',
    'Quick Links': 'Tautan Cepat',
    'Our Services': 'Layanan Kami',
    'Student Advocacy': 'Advokasi Mahasiswa',
    'Event Organization': 'Organisasi Acara',
    'Club Support': 'Dukungan Klub',
    'Academic Resources': 'Sumber Daya Akademik',
    'Leadership Training': 'Pelatihan Kepemimpinan',
    'Newsletter': 'Buletin',
    'Subscribe to our newsletter to receive updates on events, news, and opportunities.': 'Berlangganan buletin kami untuk menerima pembaruan tentang acara, berita, dan peluang.',
    'Your email address': 'Alamat email Anda',
    'Subscribe': 'Berlangganan',
    'All rights reserved.': 'Hak cipta dilindungi.',
    'Privacy Policy': 'Kebijakan Privasi',
    'Terms of Service': 'Ketentuan Layanan',
    'Sitemap': 'Peta Situs',
  }
};

type TranslationContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null;
    
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'id')) {
      setLanguage(storedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    if (translations[language] && translations[language][key as keyof typeof translations.en]) {
      return translations[language][key as keyof typeof translations.en];
    }
    return key; // Fallback to the key itself if translation not found
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
