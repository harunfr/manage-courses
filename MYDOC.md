`Projeden anladigim`: Admin, ogrencileri derli toplu, tablo halinde ve guzel bir arayuzle gorebilmesi ve ekle, duzenle, sil, ara islemlerini ve pagination islemlerini yapabilmelidir. Tum sayfalar tasarimdakinin aynisi olmali. Ayrica uygulama gorunumu responsive olmalidir.

---

`Ozet olarak izledigim adimlar: `

Uygulamayi ilk olarak css kullanmadan sadece gerekli html ogelerini ve js kullanarak yapmaya calistim. Bu sekilde hem yapip yapamayacagimi anladim hem de dosyalar cokca kod ile dolmadan temel ozellikleri daha kolay hazirladim. Ilk hazirladigim halinda pagination, search, crud ozellikleri beklenildigi gibi calistigini gordukten sonra, calisan, islevsel uygulamanin sayfada nasil gorunecegini kodladim. Hem gorsel kisimlari eklerken hem de tum css i ekledikten sonra nasil responsive yapacagim uzerine dusundum.

---

`Izledigim adimlar`:

Ilk once en az html elementi ve js kullanarak ve css kullanmayarak sayfalar arasi gecisi yaptigm / --> /signin --> /dashboard --> . Devaminda students sayfasinda olan ozelliklerden pagination ve search u yaptim. Bu iki ozellik url adresinde gorunmesi acisinda birbiriyle bagli. Daha sonra ekle, sil, duzenle ozelliklerini yaptim. Sonra sayfa ilk yuklendiginde query parametrelerinden bilgi alarak api servisinden bilgi cekecek hale getirdim.

Tablo ve dialoglar icin kutuphane kullanma ihtimalim vardi, fakat ikisi icinde kullanmadim. Tablo icin daha once Devextreme kutuphanesi kullanmistim ve cokca ozellestirme gerekecegi icin kendim yapmamdan daha uzun surebilecegi icin tabloyu kendim hazirladimm. Tablonun responsive ozelliginin tablonun kaydirilabilir olmasi olarak karar verdim, https://medium.com/appnroll-publication/5-practical-solutions-to-make-responsive-data-tables-ff031c48b122 --> bu makaleyi okuduktan sonra.

Uygulamanin sayfada nasil gorundugunu yapmak icin once figmadan stilleri inceleyip bir sayfada topladim. Daha sonra, once signin, sonra dashboard ve en sonda en onemlisi students sayfasinin goruntusunu yaptim.

Sececegim css kutuphaneleri arasinda; sadece css, bootstrap, tailwindcss vardi. Tailwind' te digerlerinden az tecrubem olmasinda ragmen sectim. Cunku bootstrap ten daha cok ozellestirilebilir ve gelistirmesi sadece css' ten daha hizli.

Uygulamadaki bilesenleri olabildigince moduler hale getirip farkli dosyalara ayirdim, bunu nextjs kendi dökümanlarinda da oneriyor ve ayrica gelistirme hizini artirip karmasayi biraz azaltiyor benim icin.

Kodlari yazarken temel programlama ilkesine olabildigince uygun davranmaya calistim: "Problemi / uygulamayi, kodunu yazabilecegin kadar kucuk parcalara boldukten sonra yaz."

Onyuz kodlarini yazip css dosyasindan gorunumu ayarlarken once bosluklari, hizalamalari, boyutlari belirleyip daha sonrasinda renkleri ayarladim.

---

### `Çalışmalarım devam ediyor ve bazı duzenlemeler eklemeye çalışacağım.`

- /dashboard ve /dashboard/students adreslerinde ayni bilesenler kullaniliyor, bunlari template engine lerde ve nextjs' de de bulundugunu dusundugum layout gibi bir ozellikle daha az kod kullanarak bu sayfalari yapabilirim

- Cok kucuk ekranlarda daha responsive olmasi icin tekrar inceleyecegim

- Uygulamanin tamamini ayni css organize bicimi kullanmasi icin global.css dosyasindaki css siniflarini dosyalara tasiyacagim

- Api servisinden alinan yanitlarda: yanit koduna ve hata mesajina gore hatayi daha aciklayici yansitabilirim kullaniciya

- README.md dosyasina uygulamanin kisaca nasil gorundugunu gosteren bir gif de eklenmeliyim

- Eslint ekleyip en azindan farkinda olmadigim basit hatalarin farkina varabilirim
