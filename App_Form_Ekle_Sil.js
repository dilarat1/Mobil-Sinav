/**
 * ==============================================================================
 * ŞABLON 3: FORM GİRİŞİ + LİSTEYE YENİ ELEMAN EKLEME & SİLME (TODO FORMU)
 * ==============================================================================
 * KULLANIM YERLERİ:
 * - Kutuya bir şey yazıp "Ekle" butonuna basınca aşağıdaki listeye eklenen ekranlar.
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([
    { id: '1', title: 'React Native çalış' },
    { id: '2', title: 'Expo Snack dene' },
  ]);

  // Yeni eleman ekleme fonksiyonu
  const addItem = () => {
    if (inputText.trim() === '') return; // Boşsa ekleme yapma

    const newItem = {
      id: String(Date.now()), // Benzersiz kimlik oluştur
      title: inputText,
    };

    setTasks([...tasks, newItem]); // Listeye yeni elemanı ekle
    setInputText(''); // Giriş kutusunu temizle
  };

  // Eleman silme fonksiyonu
  const deleteItem = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Görev / Eleman Ekleme</Text>

      {/* Giriş Kutusu ve Ekle Butonu */}
      <View style={{ flexDirection: 'row', gap: 8, marginBottom: 16 }}>
        <TextInput
          style={styles.input}
          placeholder="Yeni görev yaz..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={styles.buttonText}>Ekle</Text>
        </TouchableOpacity>
      </View>

      {/* Eklenen Elemanların Listesi */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Text style={styles.deleteText}>Sil</Text>
            </TouchableOpacity>
          </View>
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
    marginBottom: 16,
    textAlign: 'center',
    color: '#212529',
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  cardText: {
    fontSize: 16,
    color: '#333333',
  },
  deleteText: {
    color: '#DC3545',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
