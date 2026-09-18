import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Oi, tudo bem?', sender: 'them' },
    { id: '2', text: 'Tudo ótimo! E com você?', sender: 'me' },
    { id: '3', text: 'Pessoal, alguém terminou o trabalho?', sender: 'them' },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;
    setMessages([...messages, { id: String(Date.now()), text: inputText, sender: 'me' }]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho do Chat */}
      <View style={styles.header}>
        <Link href="/" style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </Link>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>G</Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.headerName}>Grupo da Faculdade 📚</Text>
          <Text style={styles.headerStatus}>4 online</Text>
        </View>
      </View>

      {/* Lista de Mensagens */}
      <ScrollView style={styles.messageContainer}>
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.messageBubble,
              msg.sender === 'me' ? styles.myMessage : styles.theirMessage,
            ]}
          >
            <Text style={msg.sender === 'me' ? styles.myText : styles.theirText}>
              {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Input de Mensagem */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Mensagem"
          placeholderTextColor="#8696a0"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efeae2', // Fundo clássico de chat do WhatsApp
  },
  header: {
    backgroundColor: '#075e54',
    height: 90,
    paddingTop: 35,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  backText: {
    fontSize: 24,
    color: '#fff',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#128C7E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  headerInfo: {
    flex: 1,
  },
  headerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerStatus: {
    fontSize: 12,
    color: '#e0e0e0',
  },
  messageContainer: {
    flex: 1,
    padding: 15,
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  theirMessage: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  myMessage: {
    backgroundColor: '#d9fdd3',
    alignSelf: 'flex-end',
  },
  theirText: {
    color: '#111',
    fontSize: 15,
  },
  myText: {
    color: '#111',
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f0f2f5',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#00a884',
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});