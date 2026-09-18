import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function StatusScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Status</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Meu Status */}
        <View style={styles.myStatusContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>Eu</Text>
            </View>
            <View style={styles.plusBadge}>
              <Text style={styles.plusText}>+</Text>
            </View>
          </View>
          <View style={styles.statusInfo}>
            <Text style={styles.statusTitle}>Meu status</Text>
            <Text style={styles.statusSubtitle}>Toque para adicionar uma atualização</Text>
          </View>
        </View>

        <Text style={styles.sectionHeader}>Atualizações recentes</Text>

        {/* Lista de Status de Contatos */}
        <View style={styles.statusItem}>
          <View style={[styles.avatar, styles.statusRing]}>
            <Text style={styles.avatarText}>JS</Text>
          </View>
          <View style={styles.statusInfo}>
            <Text style={styles.statusTitle}>João Silva</Text>
            <Text style={styles.statusSubtitle}>Hoje, 14:15</Text>
          </View>
        </View>

        <View style={styles.statusItem}>
          <View style={[styles.avatar, styles.statusRing]}>
            <Text style={styles.avatarText}>MS</Text>
          </View>
          <View style={styles.statusInfo}>
            <Text style={styles.statusTitle}>Maria Souzaa</Text>
            <Text style={styles.statusSubtitle}>Ontem, 20:40</Text>
          </View>
        </View>
      </ScrollView>

      {/* Menu de navegação rápido para testar as telas */}
      <View style={styles.navBar}>
        <Link href="/" style={styles.navLink}>Conversas</Link>
        <Link href="/status" style={[styles.navLink, styles.activeLink]}>Status</Link>
        <Link href="/chat" style={styles.navLink}>Chat</Link>
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
  myStatusContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#128C7E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  plusBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#00a884',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  plusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  statusInfo: {
    flex: 1,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  statusSubtitle: {
    fontSize: 14,
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
  statusItem: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f2f5',
  },
  statusRing: {
    borderWidth: 2,
    borderColor: '#00a884',
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