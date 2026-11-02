# 📱 Mobile App Development - Midterm Survival Cheat Sheet (Vize Kurtarıcı Repo)

Bu depo, Mobil Uygulama Geliştirme vize sınavı için hazır kod şablonlarını ve 50 puanlık sözel/teori soru cevaplarını içerir.

---

## 🚀 Dosya Rehberi (Sınavda Neyi Nereden Alacaksın?)

### 1. 💻 Kodlama Dosyaları (50 Puanlık Kısım)
* **[`App_CokluSecim_Sayac.js`](./App_CokluSecim_Sayac.js)**:
  * **EN ÖNEMLİ DOSYA! (Geçen senenin sınav sorusu)**
  * Şehir, Yemek, Ürün veya Ders seçimi.
  * Tıklanan kartın rengi değişir, sağında tik (✅) çıkar.
  * En altta dinamik sayaç çalışır.
* **[`App_Arama_Filtre.js`](./App_Arama_Filtre.js)**:
  * Üstte `TextInput` arama kutusu, altta aranan kelimeye göre filtrelenen liste.
* **[`App_Form_Ekle_Sil.js`](./App_Form_Ekle_Sil.js)**:
  * Kutuya yazı yazıp "Ekle" butonuna basınca listeye ekleyen, "Sil" butonuna basınca silen ekran.

### 2. 📚 Sözel & Teori Dosyası (50 Puanlık Kısım)
* **[`SOZEL_SORULAR_VE_CEVAPLARI.md`](./SOZEL_SORULAR_VE_CEVAPLARI.md)**:
  * React Native Mimarisi (JavaScript Thread, Shadow Thread / Yoga, Native Thread, Bridge)
  * React vs. React Native Karşılaştırma Tablosu
  * ScrollView vs. FlatList farkı
  * Props vs. State farkı
  * Expo vs. React Native CLI farkı
  * `useState`, `useEffect`, `TouchableOpacity`, `SafeAreaView` tanımları

---

## ⚡ Sınav Anında 3 Adımda Kullanım:

1. **Soru çoklu seçim ve sayaç sorusuysa**:
   * [`App_CokluSecim_Sayac.js`](./App_CokluSecim_Sayac.js) dosyasını aç.
   * `Raw` butonuna basıp tüm kodu kopyala.
   * Expo Snack'teki veya VS Code'daki `App.js` içine yapıştır.
   * Listedeki başlık ve isimleri hocanın istediği kelimelerle değiştir.
2. **Sözel soru geldiyse**:
   * [`SOZEL_SORULAR_VE_CEVAPLARI.md`](./SOZEL_SORULAR_VE_CEVAPLARI.md) dosyasını aç.
   * `Ctrl + F` (Cmd + F) ile kavramı arat ve cevabı sınav kağıdına yaz.
