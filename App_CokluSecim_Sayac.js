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

const ITEMS = [
  { id: '1', title: 'Example Item 1', subtitle: 'Description 1', price: '50 TL' },
  { id: '2', title: 'Example Item 2', subtitle: 'Description 2', price: '75 TL' },
  { id: '3', title: 'Example Item 3', subtitle: 'Description 3', price: '90 TL' },
  { id: '4', title: 'Example Item 4', subtitle: 'Description 4', price: '120 TL' },
];

export default function App() {
  const [selected, setSelected] = useState({});

  const toggleItem = (id, value) => {
    setSelected((prev) => ({ ...prev, [id]: value }));
  };

  const selectedCount = Object.values(selected).filter(Boolean).length;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Selection List</Text>

      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isSelected = !!selected[item.id];

          return (
            <TouchableOpacity
              style={[
                styles.card,
                {
                  backgroundColor: isSelected ? '#E3F2FD' : '#FFFFFF',
                  borderColor: isSelected ? '#007AFF' : '#E0E0E0',
                },
              ]}
              onPress={() => toggleItem(item.id, !isSelected)}
            >
              <Image
                source={{ uri: 'https://picsum.photos/100' }}
                style={styles.image}
              />

              <View style={{ flex: 1 }}>
                <Text style={[styles.cardTitle, isSelected && { color: '#007AFF' }]}>
                  {item.title}
                </Text>
                <Text style={styles.cardSubtitle}>{item.subtitle || item.price}</Text>
              </View>

              <Text style={{ fontSize: 18 }}>{isSelected ? '✅' : '⚪'}</Text>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <Text style={styles.counterText}>
              Selected: {selectedCount} / {ITEMS.length}
            </Text>
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
