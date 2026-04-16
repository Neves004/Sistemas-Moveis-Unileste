// components/styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '48%',
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#C4C4C4',
    marginRight: 8,
  },
  radioSelected: {
    borderColor: '#6C63FF',
    backgroundColor: '#6C63FF',
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
});