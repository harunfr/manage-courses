# Manage Courses

[Canli Link](https://manage-courses.vercel.app)

[Kaynak Kodlar](https://github.com/harunfr/manage-courses)

Bu uygulama bir admin dashboard uygulamasidir.

Bu uygulamada admin, ogrencileri;

- Tablo halinde gorebilir
- Pagination kullanarak bir sayfada istedigi sayida ogrenciyi gorebilir
- Arayabilir
- Guncelleyebilir, silebilir, yeni ekleyebilir

Projeden ne anladığım ve hangi adımları izleyerek ilerlediğim ile ilgili döküman bu repository' deki `MYDOC.md` dosyasinin icerisindedir.

## Ozet Bilgiler

Uygulamada create, update, delete islemleri: sadece belirtilen api ile iletisime gecilip, alinan yanitta hata yoksa ekranda bildirim gostererek yapilmistir.Sayfa yuklendiginde api servisindeki tum bilgileri cekip, bilgi kaynagi olarak bu hazirladigimiz backendi kullanarak ekleme, duzenleme ve silme islemleri sayfada daha gercekci gorunebilirdi.

/ -redirect-> /signin
/signin --> /dashboard --> /dashboard/students seklinde students sayfasina ulasilabilir.

Uygulamada url den alinan bilgilere gore api a istek gonderiliyor.

Ornek olarak:
https://manage-courses.vercel.app/dashboard/students?search=an&size=12&page=2 adresi ziyaret edilebilir durumdadir ve "an" aramasi icin sayfa basina 12 sonuc ve 2. sayfayi gostermektedir.

https://manage-courses.vercel.app/dashboard/students bu anasayfa varsayilan ayarlardadir, tasarimda da gorundugu gibi sayfa basina 6 ogrenci ve 1. sayfayi gosteriyor.

## Kullanilan Kutuphaneler

- Nextjs
- React
- Tailwind

## Calistir:

### Linux / MacOS ile:

- Yeni bir klasör olusturup bu klasorde terminal acin ve asagidaki kodu girin.

```markdown
    git clone git@github.com:harunfr/manage-courses.git && cd manage-courses/ && npm install && npm run dev
```

- Tarayicida http://localhost:3000 adresine giderek uygulamanin canli halini gorebilirsiniz.

### Windows ile:

- İlk olarak, projeyi çalıştırmak istediğiniz bir dizinde yerel olarak bir klasör oluşturun.

- https://github.com/harunfr/manage-courses adresindeki sağ üst köşedeki yeşil "Code" düğmesine tıklayın ve "Download ZIP" seçeneğini seçin.

- İndirilen ZIP dosyasını bilgisayarınızdaki oluşturduğunuz klasöre çıkarın.

- Proje klasörüne gidin ve bir komut satırı veya terminal açın.

- Terminalde, projenin dizin yoluna gidin. Örneğin, "cd C:\users\kullanıcıadı\projeKlasörü" şeklinde bir komut kullanabilirsiniz.

- Projeyi çalıştırmak için şu komutları sırasıyla çalıştırın; once `npm install` daha sonra `npm run dev`

- Tarayicida http://localhost:3000 adresine giderek uygulamanin canli halini gorebilirsiniz.
