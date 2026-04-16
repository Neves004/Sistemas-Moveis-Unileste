import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC', // Cinza bem claro de fundo
  },
  // --- HEADER ---
  headerDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
    paddingBottom: 20,
    backgroundColor: '#FFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  // --- CARDS ---
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#EDF2F7',
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 2,
  },
  cardHeaderDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 15,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A202C',
    flex: 1,
  },

  // --- TEXTOS E LABELS ---
  label: {
    fontSize: 12,
    color: '#718096',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 15,
    color: '#2D3748',
    fontWeight: '500',
    marginBottom: 10,
  },

  // --- SEÇÃO DE SERVIÇOS ---
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#718096',
  },
  serviceItemDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F7FAFC',
  },
  serviceName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  serviceDesc: {
    fontSize: 13,
    color: '#718096',
    marginTop: 2,
  },
  servicePrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1A202C',
  },
  serviceQty: {
    fontSize: 12,
    color: '#A0AEC0',
  },

  // --- RESUMO FINANCEIRO ---
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#4A5568',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2D3748',
  },
  divider: {
    height: 1,
    backgroundColor: '#EDF2F7',
    marginVertical: 12,
  },
  totalLabelDetail: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A202C',
  },
  totalValueDetail: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A202C',
  },

  // --- FOOTER E AÇÕES ---
  footerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EDF2F7',
  },
  actionButtonCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#F7FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  buttonShare: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6B46C1', // Roxo principal
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    gap: 8,
  },
  buttonShareText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});