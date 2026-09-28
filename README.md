# Kese · Gelir Gider Takibi

Aylık gelir ve giderleri telefondan birkaç dokunuşla kaydetmek, paranın hangi kaleme gittiğini görmek ve bir sonraki ayı buna göre planlamak için yapılmış uygulama.

Kurulum, sunucu ya da hesap gerektirmez. Veriler telefonun/tarayıcının kendi hafızasında durur.

## Neler var

| Bölüm | Ne işe yarar |
|---|---|
| **Kişisel karşılama** | İlk açılışta adını sorar; her açılışta "Merhaba Abdurrahman" diye karşılar. Aynı telefonu birden fazla kişi kullanıyorsa (ör. Abdurrahman ve Rumeysa) açılışta "Kim kullanıyor?" diye sorar, herkesin kayıtları ayrı tutulur. |
| **Hızlı yaz / sesle söyle** | Ana sayfadaki kutuya "kahve 120", "taksi 180 dün nakit", "telefon 24000 6 taksit", "maaş 52000" yazman ya da mikrofona söylemen yeterli. Tutarı, kategoriyi, tarihi, ödeme şeklini ve taksit sayısını kendisi ayıklar. |
| **Taksitli harcamalar** | Taksit sayısını seçersin, tutar sonraki aylara kendiliğinden dağılır. Özet'te bu ayın ve gelecek ayın taksit yükü görünür. |
| **Birikim hedefleri** | "Yaz tatili ₺40.000, Haziran 2027" gibi hedef koyarsın; ayda ne kadar ayırman gerektiğini hesaplar. Hedefe eklenen para "elinde kalan"dan düşer. |
| **Ay raporu** | Toplam harcama, geçen aya göre değişim, en çok harcanan kalemler, en büyük harcama, en pahalı gün, öneriler ve son 3 aya göre önerilen bütçe (tek dokunuşla uygulanır). |
| **+ düğmesi** | Kendi tuş takımıyla tutar, kategori, tarih (Bugün/Dün/seç), Kart/Nakit ve isteğe bağlı açıklama. Daha önce yazdığın açıklamayı seçince kategori kendiliğinden gelir. |
| **Tek dokunuşla ekle** | "Kahve ₺120", "Metro ₺35" gibi şablonlar tek dokunuşla eklenir. Tutarı boş olan şablon ("Market") giriş ekranını kategori seçili açar. Her eklemede "Geri al" var. |
| **Özet** | Ayın geliri, gideri, kalanı, tasarruf oranı; geçen ayın aynı dönemine göre fark; kategori dağılımı (bütçe çizgisiyle); günlük harcama grafiği; son 6 ay gelir-gider. |
| **Otomatik sabit kalemler** | Kira, fatura, abonelik ve **maaş gibi sabit gelirler**. "Otomatik" işaretlenenler günü gelince kendiliğinden eklenir; diğerleri "Ödendi / Geldi" ile tek dokunuşta işlenir. |
| **Kategori detayı** | Bir kategoriye dokununca son 6 ayın grafiği, ortalamaya göre fark, o kategorinin bütçesi ve bu ayki kayıtları açılır. |
| **Tüm aylarda arama** | Hareketler'de "Tüm aylar" ile geçmiş tüm kayıtlarda arama. |
| **Yedek hatırlatıcı · PIN kilidi · Tema** | 30 gündür yedek alınmadıysa hatırlatır. İsteğe bağlı 4 haneli PIN kilidi. Açık / koyu / telefona göre tema. |
| **Bütçe** | Aylık toplam ve kategori bazında tavan. "Günde ne kadar harcayabilirim" hesabı, Yolunda / Sınıra yakın / Aşıldı durumları. |
| **Başlangıç şablonları** | Öğrenci, Bekar çalışan, Aile, Serbest çalışan. Her biri hazır bütçe, sabit ödeme ve hızlı ekle listesiyle gelir. |
| **E-tablodan aktar** | Google E-Tablolar veya Excel'den satırları kopyalayıp yapıştır (Tarih, Açıklama, Tutar, Kategori). `1.250,50` ve `03.09.2026` gibi Türkçe biçimleri tanır, kategoriyi açıklamadan tahmin eder (Migros → Market, Netflix → Abonelikler). |
| **Yedek** | Excel için CSV, yedek dosyası (JSON) ve yedekten geri yükleme. |

## Telefonda kullanmak

Uygulama `https://abdurrahmankayaart.github.io/Gelir---Gider-Tablosu/` adresinde yayında (GitHub Pages, `claude/monthly-expense-tracker-3cktrg` dalından). Telefonda bu adresi aç:
- **iPhone (Safari):** Paylaş → *Ana Ekrana Ekle*
- **Android (Chrome):** ⋮ → *Uygulamayı yükle* / *Ana ekrana ekle*

Ana ekrandan açılınca tam ekran uygulama gibi çalışır, internet olmadan da açılır.

> Veriler yalnızca o cihazda tutulur. Tarayıcı verilerini silersen kayıtlar da gider; **Ayarlar → Yedek dosyası indir** ile ayda bir yedek al.

## Dosyalar

- `index.html` — uygulamanın tamamı (HTML + CSS + JS, dış bağımlılık yok)
- `manifest.webmanifest`, `sw.js`, `icon*.{svg,png}` — ana ekrana eklenebilme ve çevrimdışı çalışma

Yerelde denemek için: `python3 -m http.server` → `http://localhost:8000`
