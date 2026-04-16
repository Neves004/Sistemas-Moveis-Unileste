import React from 'react';
import { Modal, View, Text, ModalProps } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { TouchableOpacity } from 'react-native'; 
import { FilterStatus } from '@/types/FilterStatus';

interface Props extends ModalProps {
  visivel: boolean;
  fechar: () => void;
  onSalvar: () => void;
  dados: {
    titulo: string;
    setTitulo: (t: string) => void;
    desc: string;
    setDesc: (d: string) => void;
    valor: string;
    setValor: (v: string) => void;
    status: FilterStatus;         
    setStatus: (s: FilterStatus) => void; 
  }
}

export function ModalContato({ visivel, fechar, onSalvar, dados, ...rest }: Props) {
  const statusOptions = [
    { label: "Aprovado", value: FilterStatus.APROVADO, color: "#4ade80" },
    { label: "Enviado", value: FilterStatus.ENVIADO, color: "#60a5fa" },
    { label: "Rascunho", value: FilterStatus.RASCUNHO, color: "#a1a1aa" },
    { label: "Recusado", value: FilterStatus.RECUSADO, color: "#f87171" },
  ];
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visivel}
      onRequestClose={fechar}
      {...rest}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Novo Orçamento</Text>

          <View style={styles.inputsContainer}>
            <View style={styles.inputArea}>
              <Input
                value={dados.titulo}
                onChangeText={dados.setTitulo}
                placeholder="Título"
              />
            </View>

            <View style={styles.inputArea}>
              <Input
                value={dados.desc}
                onChangeText={dados.setDesc}
                placeholder="Cliente"
              />
            </View>

            <View style={styles.inputArea}>
              <Input
                value={dados.valor}
                onChangeText={dados.setValor}
                placeholder="Valor"
                keyboardType="numeric"
              />
            </View>

            <Text style={{ marginTop: 15, marginBottom: 10, fontWeight: 'bold' }}>Selecione o status:</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
              {statusOptions.map((opt) => (
              <TouchableOpacity key={opt.value} onPress={() => dados.setStatus(opt.value)}
                style={{ padding: 8, borderRadius: 8, borderWidth: 2, 
                borderColor: dados.status === opt.value ? opt.color : '#eee',
                backgroundColor: dados.status === opt.value ? opt.color + '20' : 'transparent' }}>
                <Text>{opt.label}</Text>
              </TouchableOpacity>

              ))}
              </View>

            </View>

            <View style={styles.footer}>
              <Button title="Cancelar" onPress={fechar} />
              <Button title="Salvar" onPress={onSalvar} />
            </View>

          </View>
        </View>
    </Modal>
  );
}