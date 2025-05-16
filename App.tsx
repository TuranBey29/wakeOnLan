import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, Alert } from 'react-native';
import axios from 'axios';

const WakeOnLanScreen = () => {
  const [macAddress, setMacAddress] = useState('');

  const wakeComputer = async () => {
    try {
      await axios.post('http://10.0.2.2:3000/wake', {
        mac: macAddress,
      });
      Alert.alert('Başarılı', 'Magic packet gönderildi!');
    } catch (error) {
      Alert.alert('Hata', 'Bir sorun oluştu: ' + error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#121212', // koyu arka plan
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <View
        style={{
          width: '100%',
          backgroundColor: '#1e1e1e', // kart koyu rengi
          padding: 20,
          borderRadius: 10,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
        }}
      >
        <TextInput
          placeholder="MAC adresi (örn: 00:11:22:33:44:55)"
          value={macAddress}
          onChangeText={setMacAddress}
          placeholderTextColor="#888"
          style={{
            borderWidth: 1,
            borderColor: '#333',
            borderRadius: 8,
            padding: 12,
            marginBottom: 20,
            fontSize: 16,
            color: '#fff',
            backgroundColor: '#2a2a2a',
          }}
        />

        <Pressable
          onPress={wakeComputer}
          style={({ pressed }) => ({
            backgroundColor: pressed ? '#03A9F4' : '#2196F3',
            padding: 14,
            borderRadius: 8,
            alignItems: 'center',
          })}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
            Bilgisayarı Aç
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WakeOnLanScreen;
