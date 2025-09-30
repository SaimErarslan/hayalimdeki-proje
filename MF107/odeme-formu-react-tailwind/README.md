# 💳 React Ödeme Formu (Payment Form)

Bu proje, bir ödeme formunun verilen görsele **birebir uygun** olarak React ve Tailwind CSS kullanılarak oluşturulmasını amaçlamaktadır. Proje, temel React hook'ları (`useState`) ve modüler bileşen yapısını (`components` klasörü) göstermektedir.

## ✨ Özellikler

- **Görsel Uyum:** Tasarım, Tailwind CSS kullanılarak verilen görselle tam olarak eşleştirilmiştir.
- **Durum Yönetimi:** Tüm form alanları (`Kart Sahibi Adı`, `Kart Numarası`, `Ay`, `Yıl`, `CVV`) `useState` hook'u ile takip edilmektedir.
- **Dinamik Select Alanları:** "Ay" (01-12) ve "Yıl" (mevcut yıldan itibaren) seçenekleri dinamik olarak oluşturulmuştur.
- **Form Doğrulaması:** "Şimdi Öde" butonuna tıklandığında, tarayıcı yenilemesi engellenir ve girilen tüm veriler `alert()` mesajı ile gösterilir.
- **Modüler Yapı:** Proje, okunabilirlik ve sürdürülebilirlik için küçük, yeniden kullanılabilir bileşenlere ayrılmıştır.

## ⚙️ Teknik Yapı

- **Geliştirme Ortamı:** Vite
- **Ana Kütüphane:** React (Functional Components & Hooks)
- **Stil:** Tailwind CSS
- **Başlangıç Şablonu:** `ozcanzaferayan/react` (Degit)

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  Projeyi klonlayın veya şablonu çekin:
    ```bash
    git clone [https://github.com/SaimErarslan/odeme-formu-react-tailwind.git](https://github.com/SaimErarslan/odeme-formu-react-tailwind.git)
    # veya npx degit ile oluşturduysanız sadece proje klasörüne gidin.
    ```
2.  Bağımlılıkları yükleyin:
    ```bash
    cd odeme-formu-react-tailwind
    npm install
    ```
3.  Geliştirme sunucusunu başlatın:
    ```bash
    npm run dev
    ```
    Tarayıcınızda çıkan adrese giderek formu görüntüleyebilirsiniz.
