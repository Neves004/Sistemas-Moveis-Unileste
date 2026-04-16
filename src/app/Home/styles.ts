import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FE',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  h1: {
    color: '#6a46eb',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    color: '#718096',
    fontSize: 14,
  },
  btnNovo: {
    backgroundColor: '#6a46eb',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  btnNovoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  searchSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 15,
  },
  inputArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  input: {
    flex: 1,
    height: 45,
    marginLeft: 8,
    fontSize: 16,
  },
  filterBtn: {
    width: 45,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  // ESTILOS DOS BOTÕES DE FILTRO RÁPIDO
  quickFilterBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  quickFilterBtnActive: {
    backgroundColor: '#6a46eb',
    borderColor: '#6a46eb',
  },
  quickFilterText: {
    color: '#718096',
    fontWeight: '500',
  },
  quickFilterTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // MODAL STYLES
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterLabel: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 15,
    fontWeight: '600',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#CBD5E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  radioSelected: {
    borderColor: '#6a46eb',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#6a46eb',
  },
  radioText: {
    fontSize: 16,
    color: '#2D3748',
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#F7FAFC',
  },
  resetText: {
    color: '#6a46eb',
    fontWeight: '600',
  },
  applyBtn: {
    flexDirection: 'row',
    backgroundColor: '#6a46eb',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    gap: 8,
  },
  applyBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});