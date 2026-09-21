import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const CONTACTS_LIST = [
  { id: '1', name: 'João Silva', status: 'Disponível' },
  { id: '2', name: 'Maria Souza', status: 'Ocupada no projeto' },
  { id: '3', name: 'Carlos Pereira', status: 'Na faculdade 🎓' },
  { id: '4', name: 'Ana Lima', status: 'Trabalhando...' },
  { id: '5', name: 'Rafael Barbosa', status: 'Jogando futebol ' },
  { id: '6', name: 'Beatriz Costa', status: 'Estudando React Native' },
];

export default function NewChatScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Selecionar contato</Text>
        <Text style={styles.headerSubtitle}>6 contatos</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Ações especiais no topo */}
        <TouchableOpacity style={styles.actionItem}>
          <View style={styles.actionIcon}>
            <Text style={styles.actionIconText}>👥</Text>
          </View>
          <Text style={styles.actionTitle}>Novo grupo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionItem}>
          <View style={styles.actionIcon}>
            <Text style={styles.actionIconText}>🌐</Text>
          </View>
          <Text style={styles.actionTitle}>Novo contato</Text>
        </TouchableOpacity>

        <Text style={styles.sectionHeader}>Contatos no WhatsApp</Text>

        {/* Lista de Contatos */}
        {CONTACTS_LIST.map((contact) => (
          <TouchableOpacity key={contact.id} style={styles.contactItem}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{contact.name[0]}</Text>
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.contactStatus}>{contact.status}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Menu de navegação inferior */}
      <View style={styles.navBar}>
        <Link href="/" style={styles.navLink}>Conversas</Link>
        <Link href="/user-status" style={styles.navLink}>Status</Link>
        <Link href="/calls" style={styles.navLink}>Chamadas</Link>
        <Link href="/settings" style={styles.navLink}>Perfil</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#075e54',
    height: 100,
    paddingTop: 40,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#e0e0e0',
    marginTop: 2,
  },
  content: {
    flex: 1,
  },
  actionItem: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f2f5',
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#00a884',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  actionIconText: {
    fontSize: 18,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#666',
    backgroundColor: '#f0f2f5',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  contactItem: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f2f5',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#128C7E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  contactStatus: {
    fontSize: 13,
    color: '#666',
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#f0f2f5',
    paddingVertical: 12,
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
  },
  navLink: {
    fontSize: 15,
    color: '#666',
    fontWeight: 'bold',
  },
});