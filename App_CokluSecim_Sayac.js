/**
 * ==============================================================================
 * ŞABLON 1: ÇOKLU SEÇİM LİSTESİ + CANLI SAYAÇ (GEÇEN SENENİN SINAV SORUSU)
 * ==============================================================================
 * KULLANIM YERLERİ:
 * - Şehir seçimi, Yemek/Menü siparişi, Ders seçimi, Ürün seçimi.
 * - Tıklanan kart seçilir (rengi maviye döner, sağında tik/ikon çıkar).
 * - En alttaki sayaçta kaç adet seçildiği dinamik olarak artar/azalır.
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

// 1. Veri Listesi (Hoca ne verirse buradaki isimleri ve alanları uyarla)
const ITEMS = [
  { id: '1', title: 'Örnek Başlık 1', subtitle: 'Açıklama 1', price: '50 TL' },
  { id: '2', title: 'Örnek Başlık 2', subtitle: 'Açıklama 2', price: '75 TL' },
  { id: '3', title: 'Örnek Başlık 3', subtitle: 'Açıklama 3', price: '90 TL' },
  { id: '4', title: 'Örnek Başlık 4', subtitle: 'Açıklama 4', price: '120 TL' },
];

export default function App() {
  // Seçilen elemanların id'lerini tutan state nesnesi: { '1': true, '3': true }
  const [selected, setSelected] = useState({});

  // Tıklanınca seçimi tersine çeviren fonksiyon (true -> false, false -> true)
  const toggleItem = (id, value) => {
    setSelected((prev) => ({ ...prev, [id]: value }));
  };

  // Kaç adet elemanın seçildiğini hesaplayan sayaç
  const selectedCount = Object.values(selected).filter(Boolean).length;

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Başlık */}
      <Text style={styles.title}>Seçim Ekranı</Text>

      {/* 2. Liste */}
      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isSelected = !!selected[item.id]; // Bu eleman seçili mi?

          return (
            <TouchableOpacity
              style={[
                styles.card,
                {
                  backgroundColor: isSelected ? '#E3F2FD' : '#FFFFFF', // Seçilirse açık mavi
                  borderColor: isSelected ? '#007AFF' : '#E0E0E0',
                },
              ]}
              onPress={() => toggleItem(item.id, !isSelected)}
            >
              {/* Opsiyonel Resim */}
              <Image
                source={{ uri: 'https://picsum.photos/100' }}
                style={styles.image}
              />

              {/* Yazı Bölümü */}
              <View style={{ flex: 1 }}>
                <Text style={[styles.cardTitle, isSelected && { color: '#007AFF' }]}>
                  {item.title}
                </Text>
                <Text style={styles.cardSubtitle}>{item.subtitle || item.price}</Text>
              </View>

              {/* Seçim İkonu */}
              <Text style={{ fontSize: 18 }}>{isSelected ? '✅' : '⚪'}</Text>
            </TouchableOpacity>
          );
        }}
        // 3. En Alttaki Sayaç Bölümü (Footer)
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <Text style={styles.counterText}>
              Seçilen Sayısı: {selectedCount} / {ITEMS.length}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

// 3. Stiller (Görünüm Ayarları)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 12,
    textAlign: 'center',
    color: '#212529',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#6C757D',
    marginTop: 4,
  },
  footer: {
    paddingVertical: 16,
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#E9ECEF',
  },
  counterText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007AFF',
  },
});
