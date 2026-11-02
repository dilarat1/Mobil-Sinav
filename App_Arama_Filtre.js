/**
 * ==============================================================================
 * ŞABLON 2: ARAMA ÇUBUĞU (SEARCH BAR) + FİLTRELENEN LİSTE
 * ==============================================================================
 * KULLANIM YERLERİ:
 * - Arama kutusu olan ekranlar. Kullanıcı kutuya yazdıkça liste filtrelenir.
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';

const PRODUCTS = [
  { id: '1', title: 'Laptop Bilgisayar', category: 'Elektronik' },
  { id: '2', title: 'Akıllı Telefon', category: 'Elektronik' },
  { id: '3', title: 'Koşu Ayakkabısı', category: 'Spor' },
  { id: '4', title: 'Sırt Çantası', category: 'Aksesuar' },
  { id: '5', title: 'Kablosuz Kulaklık', category: 'Elektronik' },
];

export default function App() {
  const [searchText, setSearchText] = useState('');

  // Kullanıcının yazdığı harflere göre filtrele
  const filteredData = PRODUCTS.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ürün Arama</Text>

      {/* Arama Giriş Kutusu */}
      <TextInput
        style={styles.searchInput}
        placeholder="Aramak için bir kelime yazın..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {/* Filtrelenen Liste */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardCategory}>{item.category}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Sonuç bulunamadı!</Text>
        )}
      />
    </SafeAreaView>
  );
}

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
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardCategory: {
    fontSize: 13,
    color: '#6C757D',
    marginTop: 4,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
    fontSize: 15,
  },
});
