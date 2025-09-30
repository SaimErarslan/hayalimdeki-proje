import React, { useState } from 'react';

// Ay ve Yıl seçeneklerini oluşturmak için yardımcı fonksiyonlar
const createMonthOptions = () => {
  return Array.from({ length: 12 }, (_, i) => {
    const month = (i + 1).toString().padStart(2, '0');
    return <option key={month} value={month}>{month}</option>;
  });
};

const createYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  // Mevcut yıldan başlayarak sonraki 7 yılı ekleyelim
  for (let i = 0; i < 8; i++) {
    const year = (currentYear + i).toString().slice(-2); // Son iki hanesi
    years.push(<option key={year} value={year}>{year}</option>);
  }
  return years;
};

const PaymentForm = () => {
  // 1. Form verilerini tutmak için useState hook'ları
  const [cardHolderName, setCardHolderName] = useState('Saim Erarslan'); // Varsayılan değer görseldeki gibi
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000'); // Varsayılan değer görseldeki gibi
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('123'); // Varsayılan değer görseldeki gibi

  // 2. Form gönderimini ele alan fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfa yenilenmesini engelle

    // Girilen tüm verileri bir string olarak hazırla
    const formData = `
      Ödeme Bilgileri:
      Kart Üzerindeki İsim: ${cardHolderName}
      Kart Numarası: ${cardNumber.replace(/\s/g, '')}
      Son Kullanma Tarihi: ${expiryMonth}/${expiryYear}
      Güvenlik Kodu (CVV): ${cvv}
    `;

    // Verileri alert() mesajı ile göster
    alert(formData);
  };

  // Kart Numarası girişini biçimlendiren fonksiyon
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\s/g, ''); // Tüm boşlukları kaldır

    // Sadece rakam girilmesini sağla
    if (isNaN(value)) {
      return;
    }

    // 16 karakterden fazla girişi engelle
    value = value.substring(0, 16);

    // Her 4 rakam arasına boşluk ekle
    const formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    
    setCardNumber(formattedValue);
  };


  return (
    // Ana konteyner: Merkezde, beyaz arka planlı, gölgeli ve yuvarlak köşeli
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-2xl">

        {/* Başlık ve Açıklama Alanı */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Ödeme Bilgileri</h1>
          <p className="text-gray-500 mt-1">Kredi kartı bilgilerinizi giriniz</p>
        </header>

        {/* Form Alanı */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Kart Üzerindeki İsim */}
          <div>
            <label htmlFor="cardHolderName" className="block text-sm font-medium text-gray-900 mb-1">
              Kart Üzerindeki İsim
            </label>
            <input
              type="text"
              id="cardHolderName"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
              placeholder="Ad Soyad"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black transition duration-150 text-gray-700"
              required
            />
          </div>

          {/* Kart Numarası */}
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-900 mb-1">
              Kart Numarası
            </label>
            <input
              type="tel" // tel türü mobil klavyede numaraları gösterir
              inputMode="numeric" // Numerik klavye önerir
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="0000 0000 0000 0000"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black transition duration-150 text-gray-700 tracking-wider"
              maxLength="19" // 16 rakam + 3 boşluk
              required
            />
          </div>

          {/* Ay, Yıl, Güvenlik Kodu Grubu */}
          <div className="grid grid-cols-3 gap-4">
            
            {/* Ay (Select Elemanı) */}
            <div>
              <label htmlFor="expiryMonth" className="block text-sm font-medium text-gray-900 mb-1">
                Ay
              </label>
              <div className="relative">
                <select
                  id="expiryMonth"
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                  className="w-full appearance-none p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-black transition duration-150 text-gray-700 cursor-pointer"
                  required
                >
                  <option value="" disabled>AA</option> {/* Varsayılan değer görseldeki gibi */}
                  {createMonthOptions()}
                </select>
                {/* Select ok simgesi için özel stil (görseldeki sade görünümü korumak için gerekli olabilir) */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Yıl (Select Elemanı) */}
            <div>
              <label htmlFor="expiryYear" className="block text-sm font-medium text-gray-900 mb-1">
                Yıl
              </label>
              <div className="relative">
                <select
                  id="expiryYear"
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                  className="w-full appearance-none p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-black transition duration-150 text-gray-700 cursor-pointer"
                  required
                >
                  <option value="" disabled>YY</option> {/* Varsayılan değer görseldeki gibi */}
                  {createYearOptions()}
                </select>
                {/* Select ok simgesi */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Güvenlik Kodu (CVV) */}
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-900 mb-1">
                Güvenlik Kodu
              </label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black transition duration-150 text-gray-700"
                maxLength="4" // CVV/CVC genelde 3 veya 4 haneli olur
                required
              />
            </div>
          </div>

          {/* Şimdi Öde Butonu */}
          <button
            type="submit"
            className="w-full py-4 text-white font-semibold bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition duration-150 shadow-lg"
          >
            Şimdi Öde
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;