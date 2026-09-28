# Kese · Gelir Gider Takibi

Aylık gelir ve giderleri telefondan birkaç dokunuşla kaydetmek, paranın hangi kaleme gittiğini görmek ve bir sonraki ayı buna göre planlamak için yapılmış uygulama.

Kurulum, sunucu ya da hesap gerektirmez. Veriler telefonun/tarayıcının kendi hafızasında durur.

## Neler var

| Bölüm | Ne işe yarar |
|---|---|
| **+ düğmesi** | Kendi tuş takımıyla tutar, kategori, tarih (Bugün/Dün/seç), Kart/Nakit ve isteğe bağlı açıklama. Daha önce yazdığın açıklamayı seçince kategori kendiliğinden gelir. |
| **Tek dokunuşla ekle** | "Kahve ₺120", "Metro ₺35" gibi şablonlar tek dokunuşla eklenir. Tutarı boş olan şablon ("Market") giriş ekranını kategori seçili açar. Her eklemede "Geri al" var. |
| **Sabit ödemeler** | Kira, aidat, faturalar, abonelikler. Ay içinde "Ödendi" ile tek dokunuşta işlenir, günü geçenler işaretlenir. |
| **Özet** | Ayın geliri, gideri, kalanı, tasarruf oranı; geçen ayın aynı dönemine göre fark; kategori dağılımı (bütçe çizgisiyle); günlük harcama grafiği; son 6 ay gelir-gider. |
| **Bütçe** | Aylık toplam ve kategori bazında tavan. "Günde ne kadar harcayabilirim" hesabı, Yolunda / Sınıra yakın / Aşıldı durumları. |
| **Başlangıç şablonları** | Öğrenci, Bekar çalışan, Aile, Serbest çalışan. Her biri hazır bütçe, sabit ödeme ve hızlı ekle listesiyle gelir. |
| **E-tablodan aktar** | Google E-Tablolar veya Excel'den satırları kopyalayıp yapıştır (Tarih, Açıklama, Tutar, Kategori). `1.250,50` ve `03.09.2026` gibi Türkçe biçimleri tanır, kategoriyi açıklamadan tahmin eder (Migros → Market, Netflix → Abonelikler). |
| **Yedek** | Excel için CSV, yedek dosyası (JSON) ve yedekten geri yükleme. |

## Telefonda kullanmak

1. Depoda **Settings → Pages → Build and deployment → Source: Deploy from a branch**, dal olarak `main` (ya da bu dal) ve `/ (root)` seç.
2. Birkaç dakika sonra `https://abdurrahmankayaart.github.io/Gelir---Gider-Tablosu/` adresi açılır.
3. Telefonda bu adresi aç:
   - **iPhone (Safari):** Paylaş → *Ana Ekrana Ekle*
   - **Android (Chrome):** ⋮ → *Uygulamayı yükle* / *Ana ekrana ekle*

Ana ekrandan açılınca tam ekran uygulama gibi çalışır, internet olmadan da açılır.

> Veriler yalnızca o cihazda tutulur. Tarayıcı verilerini silersen kayıtlar da gider; **Ayarlar → Yedek dosyası indir** ile ayda bir yedek al.

## Dosyalar

- `index.html` — uygulamanın tamamı (HTML + CSS + JS, dış bağımlılık yok)
- `manifest.webmanifest`, `sw.js`, `icon*.{svg,png}` — ana ekrana eklenebilme ve çevrimdışı çalışma

Yerelde denemek için: `python3 -m http.server` → `http://localhost:8000`
