import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  projectId: number = 0;
  project: any;

  // Şablon proje verileri
  projects = [
    {
      id: 1,
      title: 'Taşınmaz Yönetim Sistemi',
      description: 'Angular ve ASP.NET Core teknolojileri kullanılarak geliştirilmiş, kullanıcı ve yönetici rollerine sahip modern bir emlak yönetim platformu. Sistem, JWT tabanlı authentication, rol tabanlı yetkilendirme ve OpenLayers harita entegrasyonu ile geliştirilmiştir.',
      technologies: ['Angular 15', 'ASP.NET Core 8', 'PostgreSQL', 'Entity Framework Core', 'JWT Authentication', 'OpenLayers', 'Bootstrap 5'],
      features: [
        '🔐 JWT ile güvenli kullanıcı giriş ve rol kontrolü',
        '🏠 Kullanıcıların kendi taşınmazlarını yönetmesi',
        '🗺️ Harita üzerinde taşınmazların konum gösterimi',
        '📄 PDF ve Excel formatında rapor çıktısı',
        '👥 Admin panelinden kullanıcı yönetimi',
        '📋 Log kayıtlarının tutulması ve filtrelenmesi',
        '🔒 SHA256 + Salt ile güvenli şifreleme'
      ],
      images: [
        'assets/images/tasinmaz-1.png',
        'assets/images/tasinmaz-2.png',
        'assets/images/tasinmaz-3.png',
        'assets/images/tasinmaz-4.png'
      ],
      githubLink: 'https://github.com/berkankarayel/TasinmazYonetimProjesi',
     
    },
    {
      id: 2,
      title: 'Employee Task & Report Management System',
      description: 'Şirket içi görev, izin ve raporlama süreçlerini merkezi ve güvenli bir yapı altında yöneten enterprise seviye full-stack bir uygulama. Proje, gerçek bir kurumsal senaryo üzerinden geliştirilmiş olup Clean Architecture prensipleri, rol bazlı yetkilendirme, JWT kimlik doğrulama ve ölçeklenebilir mimari esas alınarak tasarlanmıştır. Backend, frontend ve DevOps süreçleri ile production-ready bir yapı sunmaktadır.',
      technologies: ['ASP.NET Core 8', 'React 18', 'TypeScript', 'MS SQL Server', 'Entity Framework Core', 'Docker', 'Docker Compose', 'Nginx', 'GitHub Actions', 'JWT Authentication', 'Clean Architecture', 'RESTful API', 'CORS', 'Swagger/OpenAPI'],
      features: [
        '🏛️ Clean Architecture (Domain, Application, Infrastructure, API katmanları)',
        '🔐 JWT Authentication ile güvenli kimlik doğrulama',
        '👥 Role-Based Authorization (Admin, Manager, Employee rolleri)',
        '⚙️ ASP.NET Core Web API ile RESTful mimari',
        '⚡ React 18 ve TypeScript ile modern frontend',
        '📦 Docker ve Docker Compose ile container orchestration',
        '🌐 Nginx ile production-ready frontend deployment',
        '🔄 GitHub Actions ile otomatik CI pipeline',
        '📊 Entity Framework Core Code-First yaklaşım',
        '📊 MS SQL Server veritabanı yönetimi',
        '📝 Kapsamlı API dokümantasyonu (Swagger)',
        '🛡️ CORS politikaları ve güvenlik yapılandırmaları',
        '📊 Görev takip, izin yönetimi ve raporlama modulleri',
        '📄 Admin ve kullanıcı dashboard ekranları'
      ],
      images: [
        'assets/images/adminresim1.png',
        'assets/images/görev yönetimi.png',
        'assets/images/izin istekleri.png',
        'assets/images/kart sistemi.png',
        'assets/images/kullanıcı paneli.png',
        'assets/images/log.png',
        'assets/images/userkayıt.png'
      ],
      githubLink: 'https://github.com/berkankarayel/EMPLOYEE-TASK-REPORT-MANAGEMENT-SYSTEM',
      liveLink: '#'
    },
    {
      id: 3,
      title: 'Online Course Platformu',
      description: 'Modern mimari yaklaşımlar ve best practice\'ler uygulanarak geliştirilmekte olan bir online eğitim platformu. Proje, katmanlı mimari, generic repository pattern ve SOLID prensipleri ile tasarlanmıştır. RESTful API standartlarına uygun olarak geliştirilmiş backend ve responsive Angular frontend ile kullanıcı dostu bir arayüz sunmaktadır.',
      technologies: ['.NET Web API', 'Angular', 'MS SQL Server', 'Entity Framework Core', 'AutoMapper', 'LINQ', 'Serilog', 'Middleware', 'Generic Repository Pattern', 'Katmanlı Mimari'],
      features: [
        '🏗️ Katmanlı mimari (Presentation, Business, Data Access, Entity Layers)',
        '🔄 Generic Repository Pattern ile veri yönetimi',
        '🗺️ AutoMapper ile DTO-Entity dönüşümleri',
        '📊 LINQ ile gelişmiş sorgulama işlemleri',
        '📝 Serilog ile detaylı loglama mekanizması',
        '🛡️ Custom Middleware ile merkezi hata yönetimi',
        '🎯 Dependency Injection ile gevşek bağlı yapı',
        '🔌 RESTful API standartlarına uygun endpoint tasarımı'
      ],
      images: [],
      githubLink: 'https://github.com/berkankarayel/OnlineCourseProject',
      liveLink: '#',
      inDevelopment: true
    },
    {
      id: 4,
      title: 'Öğrenci Kurs Yönetim Sistemi',
      description: 'ASP.NET Core MVC ve Entity Framework Core kullanılarak geliştirilmiş, öğrencilerin kurslara kaydolabildiği basit ama öğretici bir kayıt sistemi. Proje, MVC tasarım deseni ve Code-First yaklaşımı ile veritabanı yönetimini öğrenmek için ideal bir örnektir. Razor View yapısı ile dinamik web sayfaları oluşturulmuş ve Bootstrap 5 ile modern bir kullanıcı arayüzü tasarlanmıştır.',
      technologies: ['ASP.NET Core MVC', 'Entity Framework Core', 'PostgreSQL', 'Razor View (cshtml)', 'Bootstrap 5', 'C#', 'LINQ'],
      features: [
        '📚 Öğrenci kayıt ve yönetim sistemi',
        '📖 Kurs oluşturma ve düzenleme işlemleri',
        '✍️ Öğrencilerin kurslara kayıt olabilmesi',
        '🔄 Entity Framework Core ile Code-First yaklaşım',
        '🎨 Bootstrap 5 ile responsive tasarım',
        '📋 CRUD (Create, Read, Update, Delete) işlemleri',
        '🗃️ PostgreSQL veritabanı entegrasyonu',
        '🏗️ MVC (Model-View-Controller) tasarım deseni'
      ],
      images: [
        'assets/images/tasinmaz-5.png',
        'assets/images/tasinmaz-6.png',
        'assets/images/tasinmaz-7.png',
        'assets/images/tasinmaz-8.png'
      ],
      githubLink: 'https://github.com/berkankarayel/OgrenciKursYonetimi?tab=readme-ov-file',
      liveLink: '#'
    },
    {
      id: 5,
      title: 'HTML CSS JavaScript Örnek Projeler',
      description: 'HTML, CSS ve JavaScript teknolojileri kullanılarak geliştirilmiş çeşitli web uygulamaları koleksiyonu. Bu repo, temel web teknolojilerini öğrenmek ve pratikte uygulamak için hazırlanmış 6 farklı proje içermektedir. Projeler, responsive tasarım, localStorage, sessionStorage, fetch API, Promise, async/await gibi modern JavaScript yapılarını içermektedir. Ayrıca modüler kod yapısı ve esnek UI tasarımları ile fonksiyonel ve ölçeklenebilir uygulamalar geliştirilmiştir.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Fetch API', 'LocalStorage', 'SessionStorage', 'Async/Await', 'Responsive Design'],
      features: [
        '🍽️ Restoran Sitesi - Modern ve responsive restoran web sitesi',
        '🌤️ Hava Durumu Uygulaması - API entegrasyonu ile gerçek zamanlı hava durumu',
        '🖼️ Resim Bulma Uygulaması - API kullanarak görsel arama',
        '🎬 Sinema Bileti Hesaplayıcı - Dinamik fiyat hesaplama sistemi',
        '✅ TodoList Uygulaması - LocalStorage ile görev yönetimi',
        '💱 Döviz Hesaplayıcı - Canlı döviz kuru ile hesaplama',
        
      ],
      images: [
        'assets/images/tasinmaz-9.png',
        'assets/images/tasinmaz-10.png',
        'assets/images/tasinmaz-11.png',
        'assets/images/tasinmaz-12.png',
        'assets/images/tasinmaz-13.png',
        'assets/images/tasinmaz-14.png'
      ],
      githubLink: 'https://github.com/berkankarayel/Front-End-Bootcamp?tab=readme-ov-file',
      liveLink: '#'
    },
    {
      id: 6,
      title: 'ASP.NET MVC CV Projesi',
      description: 'Model-View-Controller (MVC) mimarisini kullanarak geliştirilmiş dinamik bir CV sitesi projesi. Bu proje ile dinamik veri yönetimi, admin paneli ve iletişim entegrasyonu konularında kapsamlı deneyim kazanıldı. Database First yaklaşımı ile veritabanı odaklı geliştirme yapılmış, Entity Framework ORM aracı kullanılarak veri işlemleri gerçekleştirilmiştir. Admin paneli üzerinden tüm içerikler dinamik olarak yönetilebilmektedir.',
      technologies: ['ASP.NET MVC', 'Entity Framework', 'MS SQL Server', 'Database First', 'LINQ', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      features: [
        '🔄 Dinamik içerik yönetimi - Hakkımda, projeler, referanslar',
        '🔑 Admin paneli ile CRUD işlemleri',
        '📝 Entity Framework ile veritabanı işlemleri',
        '🗄️ Database First yaklaşımı',
        '🔍 LINQ ile veri sorgulama',
        '🎨 Bootstrap ile responsive tasarım',
        '⚡ JavaScript ile dinamik kullanıcı deneyimi',
        '📊 Kullanıcı dostu yönetim arayüzü',
        '📧 İletişim formu entegrasyonu'
      ],
      images: [
        'assets/images/tasinmaz-15.png',
        'assets/images/tasinmaz-16.png',
        'assets/images/tasinmaz-17.png',
        'assets/images/tasinmaz-18.png',
        'assets/images/tasinmaz-19.png'
      ],
      githubLink: 'https://github.com/berkankarayel/MvcCv?tab=readme-ov-file',
      liveLink: '#'
    },
    {
      id: 7,
      title: 'ADO.NET Müşteri Yönetim Projesi',
      description: 'SQL veritabanı ile bağlantı kurarak müşteri, şehir ve istatistik bilgilerinin dinamik olarak yönetilebildiği bir Windows Forms uygulamasıdır. Uygulama, kullanıcı dostu arayüzü ve güçlü veri işleme özellikleriyle temel veritabanı işlemlerini kolayca gerçekleştirmek için tasarlanmıştır. ADO.NET teknolojisi kullanılarak doğrudan SQL Server ile etkileşim kurulmuş ve veri bağlantı yönetimi sağlanmıştır.',
      technologies: ['C#', 'ADO.NET', 'SQL Server', 'Windows Forms', 'T-SQL'],
      features: [
        '👥 Müşteri kayıt ve yönetim sistemi',
        '🌍 Şehir bilgilerinin dinamik yönetimi',
        '📊 İstatistiksel veri analizi ve raporlama',
        '🔗 ADO.NET ile doğrudan veritabanı bağlantısı',
        '🗄️ SQL Server veritabanı entegrasyonu',
        '📋 CRUD işlemleri (Ekleme, Listeleme, Güncelleme, Silme)',
        '🖥️ Windows Forms ile kullanıcı dostu arayüz',
        '⚡ T-SQL sorguları ile hızlı veri işleme',
        '📈 Veri görselleştirme ve analiz özellikleri'
      ],
      images: [
        'assets/images/tasinmaz-20.png',
        'assets/images/tasinmaz-21.png',
        'assets/images/tasinmaz-22.png'
      ],
      githubLink: 'https://github.com/berkankarayel/MyProjects?tab=readme-ov-file',
      liveLink: '#'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // URL'den ID'yi al
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    // ID'ye göre projeyi bul
    this.project = this.projects.find(p => p.id === this.projectId);
  }

  goBack() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
}
