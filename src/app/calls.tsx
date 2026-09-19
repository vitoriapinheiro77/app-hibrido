import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function CallsScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chamadas</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Link Favorito / Criar Link */}
        <View style={styles.linkContainer}>
          <View style={styles.linkIcon}>
            <Text style={styles.linkIconText}>🔗</Text>
          </View>
          <View style={styles.linkInfo}>
            <Text style={styles.linkTitle}>Criar link de chamada</Text>
            <Text style={styles.linkSubtitle}>Compartilhe um link para sua chamada do WhatsApp</Text>
          </View>
        </View>

        <Text style={styles.sectionHeader}>Recentes</Text>

        {/* Lista de Chamadas */}
        <View style={styles.callItem}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JS</Text>
          </View>
          <View style={styles.callInfo}>
            <Text style={styles.callTitle}>João Silva</Text>
            <Text style={styles.callSubtitle}>↙ Hoje, 15:40 (Entrada)</Text>
          </View>
          <Text style={styles.callAction}>📞</Text>
        </View>

        <View style={styles.callItem}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>MS</Text>
          </View>
          <View style={styles.callInfo}>
            <Text style={styles.callTitle}>Maria Souza</Text>
            <Text style={styles.callSubtitle}>↗ Ontem, 19:10 (Saída)</Text>
          </View>
          <Text style={styles.callAction}>📞</Text>
        </View>

        <View style={styles.callItem}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>CP</Text>
          </View>
          <View style={styles.callInfo}>
            <Text style={styles.callTitle}>Carlos Pereira</Text>
            <Text style={styles.callSubtitle}>↙ 16 de Setembro, 11:25</Text>
          </View>
          <Text style={styles.callAction}>📞</Text>
        </View>
      </ScrollView>

      {/* Menu de navegação rápido para testar as telas */}
      <View style={styles.navBar}>
        <Link href="/" style={styles.navLink}>Conversas</Link>
        <Link href="/user-status" style={styles.navLink}>Status</Link>
        <Link href="/calls" style={styles.navLink}>Chamadas</Link>
        <Link href="/chat" style={styles.navLink}>Chat</Link>
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
    height: 90,
    paddingTop: 40,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  linkContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f2f5',
  },
  linkIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00a884',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  linkIconText: {
    fontSize: 20,
  },
  linkInfo: {
    flex: 1,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  linkSubtitle: {
    fontSize: 13,
    color: '#666',
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#666',
    backgroundColor: '#f0f2f5',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  callItem: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f2f5',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
  callInfo: {
    flex: 1,
  },
  callTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  callSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  callAction: {
    fontSize: 22,
    color: '#00a884',
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
  activeLink: {
    color: '#00a884',
  },
});