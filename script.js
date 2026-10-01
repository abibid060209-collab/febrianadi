const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const img=(dani,w=700,h=500)=>`${dani}`;

/* Lapisan penyimpanan data admin (di localStorage browser, karena situs ini statis/tanpa server) */
function loadData(key,seed){try{const raw=localStorage.getItem("mahasa_"+key);if(raw)return JSON.parse(raw)}catch(e){}return JSON.parse(JSON.stringify(seed))}
function saveData(key,val){try{localStorage.setItem("mahasa_"+key,JSON.stringify(val))}catch(e){}}

const teachersSeed=[
["Pak Daim, S.Pd.","198501012010011001","Waka Kesiswaan","Olahraga","p-daim.jpg"],
["Bu Dj, S.Pd.","198704122012022002","Bimbingan Konseling","KMD","bu-dije.jpg"],
["Pak Rosyid, S.Kom.","198803182014031003","Waka Kurikulum","TBSM","p-rosyid.jpg"],
["Bu Eny, S.Farm.","199002152015042004","Guru Mata Pelajaran","Agama","bu-eni.jpg"],
["Pak Tama, S.Kom.","198609252011051005","Guru Produktif","TKJ","p-tama.jpg"],
["Bu Dany, S.Pd.","198911112016062006","Guru Mata Pelajaran","Matematika","bu-dani.jpg"],
["Pak Irul, S.Kom.","198505082010071007","Guru Produktif","TKJ","p-rul.jpg"],
["Bu Yeni, S.Pd.","199104212017082008","Guru Mata Pelajaran","IPAS","bu-yeni.jpg"]
].map(x=>({name:x[0],nip:x[1],role:x[2],subject:x[3],photo:img(x[4],700,700)}));
const teachers=loadData("teachers",teachersSeed);

const majorsSeed=[
{name:"Teknik Komputer dan Jaringan",icon:"fa-network-wired",desc:"Mempelajari jaringan, komputer, sistem operasi, server, dan teknologi digital.",skills:["Jaringan komputer","Server & Linux","Troubleshooting","Keamanan jaringan"],jobs:["Teknisi jaringan","IT support","Network administrator"],fac:"Lab komputer, lab jaringan",act:"Praktik jaringan dan project digital"},
{name:"Farmasi",icon:"fa-capsules",desc:"Membekali siswa dengan pengetahuan dasar kefarmasian dan pelayanan kesehatan.",skills:["Farmakologi dasar","Peracikan","Administrasi farmasi","K3"],jobs:["Tenaga teknis kefarmasian","Asisten layanan kesehatan"],fac:"Laboratorium farmasi",act:"Praktik dan simulasi pelayanan"},
{name:"Teknik Kendaraan Ringan",icon:"fa-calculator",desc:"mempelajari tentang perawatan, perbaikan, dan pemeliharaan kendaraan bermotor roda empat atau lebih, seperti mobil",skills:["Otomotif","Servis","Mesin Kendaraan","Kelistrikan"],jobs:["Mekanik / Teknisi Servis"],fac:"Bengkel",act:"Praktik Kelistrikan"},
{name:"Teknik Bisnis Sepeda Motor",icon:"fa-briefcase",desc:"mempelajari tentang keterampilan teknis perawatan, perbaikan, teknologi terbaru, serta pengelolaan bisnis kendaraan roda dua",skills:["Sepeda Motor","Mekanik","Modifikasi","Otomotif"],jobs:["Mekanik atau Teknisi"],fac:"Bengkel",act:"Praktik Modifikasi"}
];
const majors=loadData("majors",majorsSeed);

const studentsSeed=Array.from({length:32},(_,i)=>{const m=majorsSeed[i%4].name;return{name:["Febrian Adi Putra","Muh Abid Abror","Avian Nur Rohman","M Afif Ilham","M Andika Primawan","Avian Islamy Putra","Yusuf Maulana","Farid Wahyu Purwanto"][i%8],nis:`26${String(100+i).padStart(4,"0")}`,kelas:["X","XI","XII"][i%3],major:m,year:2024-(i%3)}});
const students=loadData("students",studentsSeed);

const announcementsSeed=[
["Pengumuman Libur Sekolah","12 Juni 2026","Akademik","Informasi jadwal libur dan kegiatan sekolah pada akhir semester."],
["Jadwal Ujian Semester","8 Juni 2026","Akademik","Jadwal ujian semester untuk seluruh kelas."],
["Informasi Kegiatan Sekolah","2 Juni 2026","Kegiatan","Persiapan kegiatan sekolah dan pembagian tugas peserta."],
["Pengumuman PPDB","25 Mei 2026","PPDB","Pendaftaran peserta didik baru segera dibuka."],
["Rapat Orang Tua/Wali","18 Mei 2026","Kesiswaan","Pertemuan orang tua/wali untuk evaluasi pembelajaran."],
["Lomba Antar Kelas","10 Mei 2026","Kegiatan","Pendaftaran lomba dan ketentuan peserta."]
].map(x=>({title:x[0],date:x[1],cat:x[2],desc:x[3]}));
const announcements=loadData("announcements",announcementsSeed);

const newsSeed=[
["Siswa SMK Mahasa Raih Prestasi Tingkat Kabupaten","Prestasi","15 Juni 2026","Tim Redaksi","juara.jpeg"],
["Semangat Belajar di Lingkungan Sekolah yang Nyaman","Sekolah","10 Juni 2026","Tim Redaksi","mea.jpg"],
["Praktik Jaringan Jadi Pengalaman Berharga Siswa TKJ","Teknologi","5 Juni 2026","Admin Website","ipm.jpeg"],
["Kegiatan Pengembangan Karakter Siswa","Kegiatan","30 Mei 2026","Tim Kesiswaan","photo-1509062522246-3755977927d7"],
["Pembelajaran Berbasis Project di Kelas","Pendidikan","25 Mei 2026","Tim Kurikulum","photo-1531482615713-2afd69097998"],
["Ekskul Jadi Ruang Berkarya Siswa","Kegiatan","20 Mei 2026","Tim Redaksi","photo-1517457373958-b7bdd4587205"],
["Mengenal Dunia Industri Sejak di Bangku Sekolah","Teknologi","15 Mei 2026","Hubin","photo-1497366754035-f200968a6e72"],
["Peringatan Hari Pendidikan Nasional","Sekolah","2 Mei 2026","Tim Redaksi","photo-1503676260728-1c00da094a0b"],
["Membangun Budaya Sekolah yang Positif","Pendidikan","25 April 2026","Tim Redaksi","photo-1522202176988-66273c2fd55f"]
].map(x=>({title:x[0],cat:x[1],date:x[2],author:x[3],photo:img(x[4],900,600),desc:"Kegiatan dan informasi terbaru dari lingkungan SMK Muhammadiyah 1 Sumberrejo."}));
const news=loadData("news",newsSeed);

const gallerySeed=[
["Kegiatan Sekolah","hw.jpg"],["Pembelajaran","ekstra.jpg"],["Ekstrakurikuler","silat.jpeg"],["Prestasi","lomba.jpeg"],["Event","Kampanye.jpeg"],["Kegiatan Sekolah","apelbersama.jpeg"],["Pembelajaran","tsm.jpg"],["Prestasi","photo-1541339907198-e08756dedf3f"],["Event","photo-1516321165247-4aa89a48be28"],["Ekstrakurikuler","photo-1511632765486-a01980e01a18"],["Kegiatan Sekolah","photo-1503676260728-1c00da094a0b"],["Teknologi","photo-1518770660439-4636190af475"]
].map(x=>({cat:x[0],photo:img(x[1],1000,800)}));
const gallery=loadData("gallery",gallerySeed);

let modal=$("#modal"), content=$("#modalContent");
function openModal(html,wide=false){content.innerHTML=html;modal.classList.add("show");modal.setAttribute("aria-hidden","false");$(".modal-box").classList.toggle("wide",!!wide)}
function closeModal(){modal.classList.remove("show");modal.setAttribute("aria-hidden","true")}
$("#modalClose").onclick=closeModal; $(".modal-backdrop").onclick=closeModal;
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

function pagination(el,page,total,cb){el.innerHTML=Array.from({length:total},(_,i)=>`<button class="page-btn ${i+1===page?"active":""}" data-p="${i+1}">${i+1}</button>`).join("");el.querySelectorAll("button").forEach(b=>b.onclick=()=>cb(+b.dataset.p))}
function empty(el,text="Data tidak ditemukan."){el.innerHTML=`<div class="empty"><i class="fa-regular fa-face-frown"></i><br>${text}</div>`}

let teacherPage=1, studentPage=1, newsPage=1;
function renderTeachers(){
 const q=$("#teacherSearch").value.toLowerCase(), f=$("#teacherFilter").value;
 const data=teachers.filter(t=>(t.name.toLowerCase().includes(q)||t.subject.toLowerCase().includes(q))&&(f==="all"||t.subject===f));
 const per=4,total=Math.max(1,Math.ceil(data.length/per)); teacherPage=Math.min(teacherPage,total);
 $("#teacherGrid").innerHTML=data.slice((teacherPage-1)*per,teacherPage*per).map((t,i)=>`<article class="teacher-card reveal visible" data-i="${teachers.indexOf(t)}"><div class="teacher-photo"><img src="${t.photo}" alt="Foto ${t.name}" loading="lazy"></div><div class="teacher-info"><span class="tag">${t.subject}</span><h3>${t.name}</h3><p>${t.role} · NIP ${t.nip}</p></div></article>`).join("")||`<div class="empty">Guru tidak ditemukan.</div>`;
 $("#teacherGrid").querySelectorAll(".teacher-card").forEach(c=>c.onclick=()=>{const t=teachers[+c.dataset.i];openModal(`<img class="modal-content-img" src="${t.photo}" alt="${t.name}"><span class="tag">${t.subject}</span><h2>${t.name}</h2><p><b>${t.role}</b></p><p>NIP: ${t.nip}</p><p>Guru ${t.subject} yang berperan dalam mendampingi proses pembelajaran dan pengembangan potensi siswa.</p>`)});
 pagination($("#teacherPagination"),teacherPage,total,p=>{teacherPage=p;renderTeachers()});
}
function refreshTeacherFilter(){const sel=$("#teacherFilter"),cur=sel.value;sel.innerHTML=`<option value="all">Semua Mata Pelajaran</option>`+[...new Set(teachers.map(t=>t.subject))].map(x=>`<option>${x}</option>`).join("");sel.value=[...sel.options].some(o=>o.value===cur)?cur:"all"}
refreshTeacherFilter();
$("#teacherSearch").oninput=()=>{teacherPage=1;renderTeachers()};$("#teacherFilter").onchange=()=>{teacherPage=1;renderTeachers()};

function renderStudents(){
 const q=$("#studentSearch").value.toLowerCase(),cl=$("#classFilter").value,m=$("#majorFilter").value,y=$("#yearFilter").value;
 const data=students.filter(s=>s.name.toLowerCase().includes(q)&&(cl==="all"||s.kelas===cl)&&(m==="all"||s.major===m)&&(y==="all"||String(s.year)===y));
 const per=8,total=Math.max(1,Math.ceil(data.length/per));studentPage=Math.min(studentPage,total);
 $("#studentTable").innerHTML=data.slice((studentPage-1)*per,studentPage*per).map(s=>`<tr><td><b>${s.name}</b></td><td>${s.nis}</td><td>${s.kelas}</td><td>${s.major}</td><td>${s.year}</td></tr>`).join("")||`<tr><td colspan="5">Data tidak ditemukan.</td></tr>`;
 pagination($("#studentPagination"),studentPage,total,p=>{studentPage=p;renderStudents()});
}
function refreshStudentFilters(){
 const cf=$("#classFilter"),cc=cf.value;cf.innerHTML=`<option value="all">Semua Kelas</option>`+[...new Set(students.map(s=>s.kelas))].map(x=>`<option>${x}</option>`).join("");cf.value=[...cf.options].some(o=>o.value===cc)?cc:"all";
 const mf=$("#majorFilter"),mc=mf.value;mf.innerHTML=`<option value="all">Semua Jurusan</option>`+majors.map(x=>`<option>${x.name}</option>`).join("");mf.value=[...mf.options].some(o=>o.value===mc)?mc:"all";
 const yf=$("#yearFilter"),yc=yf.value;yf.innerHTML=`<option value="all">Semua Angkatan</option>`+[...new Set(students.map(s=>s.year))].map(x=>`<option>${x}</option>`).join("");yf.value=[...yf.options].some(o=>o.value===yc)?yc:"all";
}
refreshStudentFilters();
["studentSearch","classFilter","majorFilter","yearFilter"].forEach(id=>$( "#"+id).addEventListener(id==="studentSearch"?"input":"change",()=>{studentPage=1;renderStudents()}));

function renderMajors(){$("#majorGrid").innerHTML=majors.map((m,i)=>`<article class="major-card reveal visible"><div class="major-icon"><i class="fa-solid ${m.icon}"></i></div><h3>${m.name}</h3><p>${m.desc}</p><button class="text-btn" data-major="${i}">Lihat Detail <i class="fa-solid fa-arrow-right"></i></button></article>`).join("");$("#majorGrid").querySelectorAll("[data-major]").forEach(b=>b.onclick=()=>{const m=majors[+b.dataset.major];openModal(`<div class="major-icon"><i class="fa-solid ${m.icon}"></i></div><h2>${m.name}</h2><p>${m.desc}</p><h3>Kompetensi yang dipelajari</h3><ul class="detail-list">${m.skills.map(x=>`<li>${x}</li>`).join("")}</ul><h3>Prospek kerja</h3><ul class="detail-list">${m.jobs.map(x=>`<li>${x}</li>`).join("")}</ul><p><b>Fasilitas:</b> ${m.fac}</p><p><b>Kegiatan:</b> ${m.act}</p>`)})}

let annFilter="all";
function renderAnnouncements(){const cats=["all",...new Set(announcements.map(a=>a.cat))];$("#announcementFilters").innerHTML=cats.map(c=>`<button class="chip ${annFilter===c?"active":""}" data-cat="${c}">${c==="all"?"Semua":c}</button>`).join("");$("#announcementGrid").innerHTML=announcements.filter(a=>annFilter==="all"||a.cat===annFilter).map(a=>`<article class="announcement-card reveal visible"><span class="tag">${a.cat}</span><div class="date">${a.date}</div><h3>${a.title}</h3><p>${a.desc}</p><button class="text-btn" data-ann="${announcements.indexOf(a)}">Baca Selengkapnya →</button></article>`).join("");$("#announcementFilters").querySelectorAll(".chip").forEach(b=>b.onclick=()=>{annFilter=b.dataset.cat;renderAnnouncements()});$("#announcementGrid").querySelectorAll("[data-ann]").forEach(b=>b.onclick=()=>{const a=announcements[+b.dataset.ann];openModal(`<span class="tag">${a.cat}</span><div class="date">${a.date}</div><h2>${a.title}</h2><p>${a.desc}</p><p>Informasi ini merupakan data dummy untuk demonstrasi website portfolio.</p>`)})}

let galFilter="all";
function renderGallery(){const cats=["all",...new Set(gallery.map(g=>g.cat))];$("#galleryFilters").innerHTML=cats.map(c=>`<button class="chip ${galFilter===c?"active":""}" data-g="${c}">${c==="all"?"Semua":c}</button>`).join("");const data=gallery.filter(g=>galFilter==="all"||g.cat===galFilter);$("#galleryGrid").innerHTML=data.map((g,i)=>`<div class="gallery-item"><img src="${g.photo}" alt="Dokumentasi ${g.cat}" loading="lazy"><div class="gallery-overlay">${g.cat}</div></div>`).join("");$("#galleryFilters").querySelectorAll(".chip").forEach(b=>b.onclick=()=>{galFilter=b.dataset.g;renderGallery()});$("#galleryGrid").querySelectorAll(".gallery-item").forEach((item,i)=>item.onclick=()=>{const d=data[i];openModal(`<img class="modal-content-img" src="${d.photo}" alt="${d.cat}"><span class="tag">${d.cat}</span><h2>Dokumentasi ${d.cat}</h2><p>Galeri foto kegiatan sekolah dalam versi demo portfolio.</p>`)})}

function renderNews(){const q=$("#newsSearch").value.toLowerCase(),f=$("#newsFilter").value;const data=news.filter(n=>n.title.toLowerCase().includes(q)&&(f==="all"||n.cat===f));const per=6,total=Math.max(1,Math.ceil(data.length/per));newsPage=Math.min(newsPage,total);$("#newsGrid").innerHTML=data.slice((newsPage-1)*per,newsPage*per).map(n=>`<article class="news-card"><div class="news-thumb"><img src="${n.photo}" alt="${n.title}" loading="lazy"></div><div class="news-body"><span class="tag">${n.cat}</span><div class="news-meta">${n.date} · ${n.author}</div><h3>${n.title}</h3><p>${n.desc}</p><button class="text-btn" data-news="${news.indexOf(n)}">Baca Selengkapnya →</button></div></article>`).join("")||`<div class="empty">Berita tidak ditemukan.</div>`;$("#newsGrid").querySelectorAll("[data-news]").forEach(b=>b.onclick=()=>{const n=news[+b.dataset.news];openModal(`<img class="modal-content-img" src="${n.photo}" alt="${n.title}"><span class="tag">${n.cat}</span><div class="date">${n.date} · ${n.author}</div><h2>${n.title}</h2><p>${n.desc}</p><p>Artikel ini merupakan konten dummy yang dapat diganti dengan berita sekolah sebenarnya.</p>`)});pagination($("#newsPagination"),newsPage,total,p=>{newsPage=p;renderNews()})}
function refreshNewsFilter(){const sel=$("#newsFilter"),cur=sel.value;sel.innerHTML=`<option value="all">Semua Kategori</option>`+[...new Set(news.map(n=>n.cat))].map(x=>`<option>${x}</option>`).join("");sel.value=[...sel.options].some(o=>o.value===cur)?cur:"all"}
refreshNewsFilter();
$("#newsSearch").oninput=()=>{newsPage=1;renderNews()};$("#newsFilter").onchange=()=>{newsPage=1;renderNews()};

$("#openPpdb").onclick=()=>openModal(`<h2>Form Simulasi PPDB</h2><p>Silakan isi data berikut. Form ini tidak mengirim data ke server.</p><form id="ppdbForm"><div class="form-grid"><div class="form-group"><label>Nama Lengkap</label><input required name="nama" placeholder="Nama lengkap"></div><div class="form-group"><label>NISN</label><input required name="nisn" placeholder="NISN"></div><div class="form-group"><label>Asal Sekolah</label><input required name="asal" placeholder="Asal sekolah"></div><div class="form-group"><label>Nomor WhatsApp</label><input required name="wa" placeholder="08xxxxxxxxxx"></div><div class="form-group full"><label>Pilihan Jurusan</label><select required name="jurusan"><option value="">Pilih jurusan</option>${majors.map(m=>`<option>${m.name}</option>`).join("")}</select></div><div class="form-group full"><label>Email</label><input required type="email" name="email" placeholder="email@contoh.com"></div></div><button class="btn btn-primary" type="submit">Kirim Simulasi <i class="fa-solid fa-paper-plane"></i></button></form>`);
document.addEventListener("submit",e=>{if(e.target.id==="ppdbForm"){e.preventDefault();closeModal();showToast("Form berhasil dikirim! Ini merupakan simulasi pendaftaran.")}});

function showToast(msg){$("#toast span").textContent=msg;$("#toast").classList.add("show");setTimeout(()=>$("#toast").classList.remove("show"),3500)}
$("#menuToggle").onclick=()=>$("#mainNav").classList.toggle("open");
$$("nav a").forEach(a=>a.onclick=()=>$("#mainNav").classList.remove("open"));
window.addEventListener("scroll",()=>{$("#navbar").classList.toggle("scrolled",scrollY>20);$("#topBtn").classList.toggle("show",scrollY>500);let pos=scrollY+150;$$("main section[id]").forEach(s=>{if(pos>=s.offsetTop&&pos<s.offsetTop+s.offsetHeight){$$("nav a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===`#${s.id}`))}})});
$("#topBtn").onclick=()=>scrollTo({top:0,behavior:"smooth"});
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});$$(".reveal").forEach(e=>observer.observe(e));
const counterObserver=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const el=e.target,t=+el.dataset.target;let n=0;const step=Math.max(1,Math.ceil(t/40));const run=()=>{n=Math.min(t,n+step);el.textContent=n+(t>10?"+":"");if(n<t)requestAnimationFrame(run)};run();counterObserver.unobserve(el)}}),{threshold:.7});$$(".counter").forEach(e=>counterObserver.observe(e));

renderTeachers();renderStudents();renderMajors();renderAnnouncements();renderGallery();renderNews();
window.addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("hide"),450));

/* ===== Admin Login (demo, sisi klien) ===== */
const ADMIN_USER="admin", ADMIN_PASS="admin123", AUTH_KEY="mahasaAdmin";
const store={get(){try{return sessionStorage.getItem(AUTH_KEY)}catch(e){return null}},set(v){try{sessionStorage.setItem(AUTH_KEY,v)}catch(e){}},del(){try{sessionStorage.removeItem(AUTH_KEY)}catch(e){}}};
let isAdmin=store.get()==="1";

function updateAuthBtn(){
 const b=$("#authBtn");
 b.classList.toggle("logged",isAdmin);
 b.querySelector("span").textContent=isAdmin?"Dashboard Admin":"Login Admin";
 b.querySelector("i").className=isAdmin?"fa-solid fa-gauge-high":"fa-solid fa-user-shield";
}
function openLogin(){
 openModal(`<div class="login-head"><img src="logo.jpg" alt="Logo"><h2>Login Admin</h2><p>Masuk untuk mengakses dashboard admin.</p></div>
 <form id="loginForm" autocomplete="off">
  <div class="login-error" id="loginError" role="alert"><i class="fa-solid fa-circle-exclamation"></i> Username atau password salah.</div>
  <div class="form-group"><label for="loginUser">Username</label><input id="loginUser" name="username" placeholder="Masukkan username" required autofocus></div>
  <div class="form-group"><label for="loginPass">Password</label><div class="pw-wrap"><input id="loginPass" name="password" type="password" placeholder="Masukkan password" required><button type="button" class="pw-toggle" id="pwToggle" aria-label="Tampilkan password"><i class="fa-solid fa-eye"></i></button></div></div>
  <button class="btn btn-primary login-submit" type="submit"><i class="fa-solid fa-right-to-bracket"></i> Masuk</button>
 </form>`);
 $("#pwToggle").onclick=()=>{const i=$("#loginPass"),show=i.type==="password";i.type=show?"text":"password";$("#pwToggle i").className=show?"fa-solid fa-eye-slash":"fa-solid fa-eye"};
 setTimeout(()=>{const u=$("#loginUser");u&&u.focus()},50);
}
/* ===== Dashboard Admin: kelola semua data website ===== */
const adminEntities={
 guru:{label:"Guru",icon:"fa-chalkboard-user",arr:()=>teachers,key:"teachers",
  cols:t=>({title:t.name,sub:`${t.subject} · ${t.role} · NIP ${t.nip}`}),
  fields:[
   {name:"name",label:"Nama Lengkap",type:"text",required:true},
   {name:"nip",label:"NIP",type:"text",required:true},
   {name:"role",label:"Jabatan",type:"text",required:true},
   {name:"subject",label:"Mata Pelajaran",type:"text",required:true},
   {name:"photo",label:"Nama File / URL Foto",type:"text",required:true,placeholder:"contoh: p-daim.jpg"}
  ],
  after(){renderTeachers();refreshTeacherFilter()}
 },
 siswa:{label:"Siswa",icon:"fa-users",arr:()=>students,key:"students",
  cols:s=>({title:s.name,sub:`NIS ${s.nis} · Kelas ${s.kelas} · ${s.major} · Angkatan ${s.year}`}),
  fields:[
   {name:"name",label:"Nama Lengkap",type:"text",required:true},
   {name:"nis",label:"NIS",type:"text",required:true},
   {name:"kelas",label:"Kelas",type:"select",options:()=>["X","XI","XII"],required:true},
   {name:"major",label:"Jurusan",type:"select",options:()=>majors.map(m=>m.name),required:true},
   {name:"year",label:"Tahun Masuk",type:"number",required:true}
  ],
  after(){renderStudents();refreshStudentFilters()}
 },
 jurusan:{label:"Jurusan",icon:"fa-layer-group",arr:()=>majors,key:"majors",
  cols:m=>({title:m.name,sub:m.desc}),
  fields:[
   {name:"name",label:"Nama Jurusan",type:"text",required:true},
   {name:"icon",label:"Font Awesome Icon (mis. fa-network-wired)",type:"text",required:true},
   {name:"desc",label:"Deskripsi",type:"textarea",required:true},
   {name:"skills",label:"Kompetensi (pisahkan dengan koma)",type:"list",required:true},
   {name:"jobs",label:"Prospek Kerja (pisahkan dengan koma)",type:"list",required:true},
   {name:"fac",label:"Fasilitas",type:"text",required:true},
   {name:"act",label:"Kegiatan",type:"text",required:true}
  ],
  after(){renderMajors();refreshStudentFilters()}
 },
 pengumuman:{label:"Pengumuman",icon:"fa-bullhorn",arr:()=>announcements,key:"announcements",
  cols:a=>({title:a.title,sub:`${a.cat} · ${a.date}`}),
  fields:[
   {name:"title",label:"Judul",type:"text",required:true},
   {name:"date",label:"Tanggal (mis. 12 Juni 2026)",type:"text",required:true},
   {name:"cat",label:"Kategori",type:"text",required:true},
   {name:"desc",label:"Isi Pengumuman",type:"textarea",required:true}
  ],
  after(){renderAnnouncements()}
 },
 galeri:{label:"Galeri",icon:"fa-images",arr:()=>gallery,key:"gallery",
  cols:g=>({title:g.cat,sub:g.photo}),
  fields:[
   {name:"cat",label:"Kategori",type:"text",required:true},
   {name:"photo",label:"Nama File / URL Foto",type:"text",required:true,placeholder:"contoh: hw.jpg"}
  ],
  after(){renderGallery()}
 },
 berita:{label:"Berita",icon:"fa-newspaper",arr:()=>news,key:"news",
  cols:n=>({title:n.title,sub:`${n.cat} · ${n.date} · ${n.author}`}),
  fields:[
   {name:"title",label:"Judul",type:"text",required:true},
   {name:"cat",label:"Kategori",type:"text",required:true},
   {name:"date",label:"Tanggal (mis. 15 Juni 2026)",type:"text",required:true},
   {name:"author",label:"Penulis",type:"text",required:true},
   {name:"photo",label:"Nama File / URL Foto",type:"text",required:true,placeholder:"contoh: juara.jpeg"},
   {name:"desc",label:"Isi Berita",type:"textarea",required:true}
  ],
  after(){renderNews();refreshNewsFilter()}
 }
};
let dashTab="guru", dashMode="list", dashEditIndex=null;

function fieldToInput(f,val){
 const v=val===undefined||val===null?"":val;
 if(f.type==="textarea")return `<div class="form-group full"><label>${f.label}</label><textarea name="${f.name}" rows="3" ${f.required?"required":""}>${v}</textarea></div>`;
 if(f.type==="select")return `<div class="form-group"><label>${f.label}</label><select name="${f.name}" ${f.required?"required":""}>${f.options().map(o=>`<option ${o===v?"selected":""}>${o}</option>`).join("")}</select></div>`;
 if(f.type==="list")return `<div class="form-group full"><label>${f.label}</label><input name="${f.name}" value="${Array.isArray(v)?v.join(", "):v}" placeholder="cth: Jaringan komputer, Server, Keamanan"></div>`;
 return `<div class="form-group"><label>${f.label}</label><input name="${f.name}" type="${f.type}" value="${v}" placeholder="${f.placeholder||""}" ${f.required?"required":""}></div>`;
}
function collectForm(form,fields){
 const out={};
 fields.forEach(f=>{
  const raw=form[f.name].value;
  out[f.name]=f.type==="number"?(+raw||0):f.type==="list"?raw.split(",").map(s=>s.trim()).filter(Boolean):raw.trim();
 });
 return out;
}
function renderDashboardBody(){
 const ent=adminEntities[dashTab];
 if(dashMode==="form"){
  const editing=dashEditIndex!==null, item=editing?ent.arr()[dashEditIndex]:{};
  return `<div class="admin-panel-head"><h3>${editing?"Edit":"Tambah"} ${ent.label}</h3><button class="btn btn-ghost btn-sm" id="dashBack"><i class="fa-solid fa-arrow-left"></i> Kembali</button></div>
   <form id="entityForm">${ent.fields.map(f=>fieldToInput(f,item[f.name])).join("")}
    <div class="admin-form-actions"><button class="btn btn-primary btn-sm" type="submit"><i class="fa-solid fa-check"></i> Simpan</button></div>
   </form>`;
 }
 const data=ent.arr();
 return `<div class="admin-panel-head"><h3>${ent.label} <span style="color:var(--muted);font-weight:600">(${data.length})</span></h3><button class="btn btn-primary btn-sm" id="dashAdd"><i class="fa-solid fa-plus"></i> Tambah</button></div>
  <div class="admin-list">${data.map((it,i)=>{const c=ent.cols(it);return `<div class="admin-row"><div class="admin-row-info"><b>${c.title}</b><span>${c.sub}</span></div><div class="admin-row-actions"><button class="icon-btn" data-edit="${i}" aria-label="Edit"><i class="fa-solid fa-pen"></i></button><button class="icon-btn danger" data-del="${i}" aria-label="Hapus"><i class="fa-solid fa-trash"></i></button></div></div>`}).join("")||`<div class="empty">Belum ada data. Klik Tambah untuk membuat data baru.</div>`}</div>`;
}
function renderDashboard(){
 openModal(`<div class="login-head"><img src="logo.jpg" alt="Logo"><h2>Dashboard Admin</h2><p>Masuk sebagai <b>${ADMIN_USER}</b> · kelola seluruh konten website di sini.</p></div>
 <div class="admin-stats">
  <div><b>${teachers.length}</b><span>Guru</span></div>
  <div><b>${students.length}</b><span>Siswa</span></div>
  <div><b>${majors.length}</b><span>Jurusan</span></div>
  <div><b>${announcements.length}</b><span>Pengumuman</span></div>
  <div><b>${gallery.length}</b><span>Foto Galeri</span></div>
  <div><b>${news.length}</b><span>Berita</span></div>
 </div>
 <div class="admin-tabs">${Object.entries(adminEntities).map(([k,e])=>`<button class="admin-tab ${dashTab===k?"active":""}" data-tab="${k}"><i class="fa-solid ${e.icon}"></i> ${e.label}</button>`).join("")}</div>
 <div id="dashBody">${renderDashboardBody()}</div>
 <button class="btn btn-danger login-submit" id="logoutBtn" style="margin-top:16px"><i class="fa-solid fa-right-from-bracket"></i> Keluar</button>`,true);
 wireDashboard();
}
function wireDashboard(){
 $("#logoutBtn").onclick=()=>{isAdmin=false;store.del();updateAuthBtn();closeModal();showToast("Anda telah keluar dari akun admin.")};
 $$(".admin-tab").forEach(b=>b.onclick=()=>{dashTab=b.dataset.tab;dashMode="list";dashEditIndex=null;renderDashboard()});
 const addBtn=$("#dashAdd"); if(addBtn)addBtn.onclick=()=>{dashMode="form";dashEditIndex=null;renderDashboard()};
 const backBtn=$("#dashBack"); if(backBtn)backBtn.onclick=()=>{dashMode="list";dashEditIndex=null;renderDashboard()};
 $$("[data-edit]").forEach(b=>b.onclick=()=>{dashMode="form";dashEditIndex=+b.dataset.edit;renderDashboard()});
 $$("[data-del]").forEach(b=>b.onclick=()=>{
  const ent=adminEntities[dashTab],i=+b.dataset.del,arr=ent.arr();
  if(!confirm(`Hapus data "${ent.cols(arr[i]).title}"?`))return;
  arr.splice(i,1);saveData(ent.key,arr);ent.after();showToast("Data berhasil dihapus.");renderDashboard();
 });
 const form=$("#entityForm");
 if(form)form.onsubmit=e=>{
  e.preventDefault();
  const ent=adminEntities[dashTab],arr=ent.arr(),vals=collectForm(e.target,ent.fields);
  if(dashEditIndex!==null)Object.assign(arr[dashEditIndex],vals);else arr.push(vals);
  saveData(ent.key,arr);ent.after();
  showToast(dashEditIndex!==null?"Data berhasil diperbarui.":"Data baru berhasil ditambahkan.");
  dashMode="list";dashEditIndex=null;renderDashboard();
 };
}
function openDashboard(){dashTab="guru";dashMode="list";dashEditIndex=null;renderDashboard()}
$("#authBtn").onclick=e=>{e.preventDefault();$("#mainNav").classList.remove("open");isAdmin?openDashboard():openLogin()};
document.addEventListener("submit",e=>{
 if(e.target.id!=="loginForm")return;
 e.preventDefault();
 const u=e.target.username.value.trim(),p=e.target.password.value;
 if(u===ADMIN_USER&&p===ADMIN_PASS){isAdmin=true;store.set("1");updateAuthBtn();closeModal();showToast("Login berhasil. Selamat datang, admin!")}
 else{$("#loginError").classList.add("show");e.target.password.value="";e.target.password.focus()}
});
updateAuthBtn();
