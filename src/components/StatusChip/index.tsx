import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '@/components/StatusChip/styles';
import { FilterStatus } from '@/types/FilterStatus';

type Props = {
  label: string;
  status: FilterStatus;
  selected: boolean;
  onPress: () => void;
};

export function StatusChip({ label, status, selected, onPress }: Props) {
  const backgroundColors = {
    [FilterStatus.RASCUNHO]: '#E5E5E5',
    [FilterStatus.ENVIADO]: '#D6ECFF',
    [FilterStatus.APROVADO]: '#D9F7E0',
    [FilterStatus.RECUSADO]: '#FFD6D6',
  };

  const textColors = {
    [FilterStatus.RASCUNHO]: '#6B6B6B',
    [FilterStatus.ENVIADO]: '#0077CC',
    [FilterStatus.APROVADO]: '#2E7D32',
    [FilterStatus.RECUSADO]: '#C62828',
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* Radio Button */}
      <View style={[styles.radio, selected && styles.radioSelected]} />

      {/* Chip */}
      <View
        style={[
          styles.chip,
          { backgroundColor: backgroundColors[status] },
        ]}
      >
        <Text style={[styles.label, { color: textColors[status] }]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}