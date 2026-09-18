import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

// Lista fictícia de conversas para preencher o app
const DUMMY_CHATS = [
  { id: '1', name: 'Grupo da Faculdade 📚', message: 'Pessoal, alguém terminou o trabalho?', time: '16:45' },
  { id: '2', name: 'João Silva', message: 'Beleza, combinado então!', time: '15:20' },
  { id: '3', name: 'Maria Souza', message: 'O app tá ficando show de bola!', time: 'Ontem' },
  { id: '4', name: 'Suporte Técnico', message: 'Chamado #4092 resolvido.', time: 'Ontem' },
  { id: '5', name: 'Carlos Eduardo', message: 'Me liga quando puder, por favor.', time: 'Segunda' },
  { id: '6', name: 'Ana Paula (Trabalho)', message: 'Enviei o relatório por e-mail.', time: 'Domingo' },
  { id: '7', name: 'Família ❤️', message: 'Almoço domingo aqui em casa!', time: '18/09' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho do WhatsApp */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>WhatsApp</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.iconText}>🔍</Text>
          <Text style={styles.iconText}>⋮</Text>
        </View>
      </View>

      {/* Lista de Conversas */}
      <ScrollView style={styles.chatList}>
        {DUMMY_CHATS.map((chat) => (
          <TouchableOpacity key={chat.id} style={styles.chatItem}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{chat.name[0]}</Text>
            </View>
            <View style={styles.chatInfo}>
              <View style={styles.chatHeaderRow}>
                <Text style={styles.chatName}>{chat.name}</Text>
                <Text style={styles.chatTime}>{chat.time}</Text>
              </View>
              <Text style={styles.chatMessage} numberOfLines={1}>{chat.message}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111b21', // Fundo escuro estilo WhatsApp moderno (ou use branco se preferir o claro)
  },
  header: {
    backgroundColor: '#075e54', // Verde escuro clássico do cabeçalho do WhatsApp
    height: 100,
    paddingTop: 40,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 20,
  },
  iconText: {
    fontSize: 20,
    color: '#fff',
  },
  chatList: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#075e54',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatInfo: {
    flex: 1,
  },
  chatHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  chatTime: {
    fontSize: 12,
    color: '#666',
  },
  chatMessage: {
    fontSize: 14,
    color: '#666',
  },
});