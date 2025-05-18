import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const WakeOnLanScreen = () => {
  const [mac, setMac] = useState('');
  const [ip, setIp] = useState('');
  const [port, setPort] = useState('9'); // genelde 9. port kullanılır

  const handleWake = async () => {
    try {
      await axios.post('http://192.168.1.8:3000/wake', {
        mac,
        ip,
        port: parseInt(port),
      });
      Alert.alert('Başarılı', 'Magic packet gönderildi!');
    } catch (error) {
      console.log(error);
      Alert.alert('Hata', 'Gönderilemedi: ' + error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#999"
        style={styles.input}
        placeholder="MAC adresi (00:11:22:33:44:55)"
        value={mac}
        onChangeText={setMac}
      />
      <TextInput
        placeholderTextColor="#999"
        style={styles.input}
        placeholder="Hedef IP"
        value={ip}
        onChangeText={setIp}
      />
      <TextInput
        placeholderTextColor="#999"
        style={styles.input}
        placeholder="Port (varsayılan: 9)"
        keyboardType="numeric"
        value={port}
        onChangeText={setPort}
      />
      <Button title="Bilgisayarı Uyandır" onPress={handleWake} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  input: {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#444',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
});

export default WakeOnLanScreen;
