import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  // --- ESTILOS DO CARD DE SERVIÇOS (Foto 1) ---
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    marginTop: 20,
    // Sombra leve para destacar o card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  cardTitle: {
    color: '#8E8E93',
    fontSize: 14,
    fontWeight: '500',
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  serviceDesc: {
    fontSize: 13,
    color: '#8E8E93',
    marginTop: 2,
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  serviceQty: {
    fontSize: 12,
    color: '#8E8E93',
  },
  btnAddService: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    marginTop: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  btnAddServiceText: {
    color: '#7C3AED', // Roxo aproximado da imagem
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },

  // --- ESTILOS DO MODAL (Foto 2) ---
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // Fundo escurecido
    justifyContent: 'flex-end', // Faz o modal subir de baixo
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 40, // Espaço extra para o teclado/home indicator
    gap: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  modalFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F7',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 100,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#2D3748',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  itemsText: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  discountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  discountInput: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D3748',
    textAlign: 'center',
    minWidth: 30,
  },
  percentText: {
    fontSize: 16,
    color: '#A0AEC0',
    marginLeft: 4,
  },
  discountValueText: {
    fontSize: 16,
    color: '#E53E3E', // Vermelho para o desconto
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#F7FAFC',
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A202C',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A202C',
  },
  oldPrice: {
    fontSize: 14,
    color: '#A0AEC0',
    textDecorationLine: 'line-through',
  },
});