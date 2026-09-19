import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Configurações</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Perfil do Usuário */}
        <TouchableOpacity style={styles.profileContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>EU</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}> Vitória</Text>
            <Text style={styles.profileStatus}>Disponível para o projeto da faculdade </Text>
          </View>
        </TouchableOpacity>

        {/* Lista de Opções de Ajustes */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionIcon}>🔑</Text>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Conta</Text>
              <Text style={styles.optionSubtitle}>Privacidade, segurança, mudar número</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionIcon}>🔒</Text>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Privacidade</Text>
              <Text style={styles.optionSubtitle}>Visto por último, foto do perfil, recado</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionIcon}>💬</Text>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Conversas</Text>
              <Text style={styles.optionSubtitle}>Tema, papéis de parede, histórico de conversas</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionIcon}>🔔</Text>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Notificações</Text>
              <Text style={styles.optionSubtitle}>Sons de mensagens, grupos e chamadas</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionIcon}>❓</Text>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Ajuda</Text>
              <Text style={styles.optionSubtitle}>Central de ajuda, fale connosco, política de privacidade</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Menu de navegação rápido para testar as telas */}
      <View style={styles.navBar}>
        <Link href="/" style={styles.navLink}>Conversas</Link>
        <Link href="/user-status" style={styles.navLink}>Status</Link>
        <Link href="/calls" style={styles.navLink}>Chamadas</Link>
        <Link href="/settings" style={[styles.navLink, styles.activeLink]}>Perfil</Link>
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
  profileContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f2f5',
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#128C7E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  profileStatus: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginTop: 10,
  },
  optionItem: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  optionIcon: {
    fontSize: 22,
    marginRight: 20,
    width: 30,
    textAlign: 'center',
  },
  optionTextContainer: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f2f5',
    paddingBottom: 12,
  },
  optionTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  optionSubtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
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