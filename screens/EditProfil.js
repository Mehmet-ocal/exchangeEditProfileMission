import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, na } from 'react-native';
import { useAuth } from '../contextAPI/useAuth';
import { useNavigation } from '@react-navigation/native';

const EditProfil = ({ navigation }) => {
  const { logout, user, updateProfile } = useContext(useAuth);
  const { navigate } = useNavigation();

  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [newPassword, setNewPassword] = useState('');

  const handleSave = async () => {
    if (newPassword) await updateProfile({ ...user, username, email, password: newPassword }, navigate)
    else await updateProfile({ ...user, username, email }, navigate)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Kullanıcı Adı:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Kullanıcı adınızı girin"
      />
      <Text style={styles.label}>E-posta Adresi:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-posta adresinizi girin"
      />

      <Text style={styles.label}>Yeni Şifre:</Text>
      <TextInput
        style={styles.input}
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="Yeni şifrenizi girin"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingVertical: 80,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6592C9',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfil;
