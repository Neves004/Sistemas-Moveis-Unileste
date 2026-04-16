import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather, Trash2, Copy, Edit3, Send } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '@/app/BudgetDetails/styles';
import { StatusChip } from '@/components/StatusChip';
import { FilterStatus } from '@/types/FilterStatus';

export default function BudgetDetails() {
  const route = useRoute();
  const navigation = useNavigation();

  const { budget } = route.params as { budget: any };

  function getStatusLabel(status: number) {
    switch (status) {
      case FilterStatus.RASCUNHO: return 'Rascunho';
      case FilterStatus.ENVIADO: return 'Enviado';
      case FilterStatus.APROVADO: return 'Aprovado';
      case FilterStatus.RECUSADO: return 'Recusado';
      default: return 'Indefinido';
    }
  }

  function formatCurrency(value: number) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  // --- FUNÇÃO PARA DUPLICAR ORÇAMENTO ---
  async function handleDuplicate() {
    try {
      const dados = await AsyncStorage.getItem("contatos");
      const lista = dados ? JSON.parse(dados) : [];

      // Criamos a cópia com um novo ID e título modificado
      const copiaOrcamento = {
        ...budget,
        id: String(Date.now()), // Novo ID único
        title: `${budget.title} (Cópia)`,
        status: FilterStatus.RASCUNHO, // Opcional: resetar para rascunho
      };

      const novaLista = [copiaOrcamento, ...lista];
      await AsyncStorage.setItem("contatos", JSON.stringify(novaLista));

      Alert.alert("Sucesso", "Orçamento duplicado com sucesso!");
      navigation.goBack(); // Volta para a Home para ver o novo item
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível duplicar o orçamento.");
    }
  }

  async function handleDelete() {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja apagar este orçamento permanentemente?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              const dados = await AsyncStorage.getItem("contatos");
              if (dados) {
                const lista = JSON.parse(dados);
                const novaLista = lista.filter((item: any) => item.id !== budget.id);
                await AsyncStorage.setItem("contatos", JSON.stringify(novaLista));
                Alert.alert("Sucesso", "Orçamento removido.");
                navigation.goBack();
              }
            } catch (error) {
              console.log(error);
              Alert.alert("Erro", "Não foi possível excluir o orçamento.");
            }
          }
        }
      ]
    );
  }

  function handleEdit() {
    navigation.navigate('editTela', { item: budget });
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#F7FAFC' }}>
      {/* Header */}
      <View style={styles.headerDetail}>
        <Text style={styles.headerTitle}>Orçamento #{budget.id.slice(-5)}</Text>
        <View style={{ flex: 1 }} />
        <StatusChip status={budget.status} label={getStatusLabel(budget.status)} />
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100, gap: 15 }}>
        <View style={styles.card}>
          <View style={styles.cardHeaderDetail}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="business-center" size={20} color="#6B46C1" />
            </View>
            <Text style={styles.mainTitle}>{budget.title}</Text>
          </View>

          <Text style={styles.label}>Cliente</Text>
          <Text style={styles.value}>{budget.desc}</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <View>
              <Text style={styles.label}>Criado em</Text>
              <Text style={styles.value}>22/08/2024</Text>
            </View>
            <View>
              <Text style={styles.label}>Atualizado em</Text>
              <Text style={styles.value}>25/08/2024</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="list-alt" size={18} color="#6B46C1" />
            <Text style={styles.cardTitle}>Serviços inclusos</Text>
          </View>

          {budget.services?.map((service: any) => (
            <View key={service.id} style={styles.serviceItemDetail}>
              <View style={{ flex: 1 }}>
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.serviceDesc}>{service.description}</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.servicePrice}>{formatCurrency(service.price)}</Text>
                <Text style={styles.serviceQty}>Qt: {service.quantity}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialIcons name='wallet' size={18} color='#6b46c1' />
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>{formatCurrency(budget.valor + (budget.discount || 0))}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Desconto</Text>
            <Text style={{ color: '#38A169' }}>- {formatCurrency(budget.discount || 0)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabelDetail}>Investimento total</Text>
            <Text style={styles.totalValueDetail}>{formatCurrency(budget.valor)}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer com Ações */}
      <View style={styles.footerActions}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TouchableOpacity style={styles.actionButtonCircle} onPress={handleDelete}>
            <Trash2 size={20} color="#E53E3E" />
          </TouchableOpacity>

          {/* BOTÃO DUPLICAR ATUALIZADO */}
          <TouchableOpacity style={styles.actionButtonCircle} onPress={handleDuplicate}>
            <Copy size={20} color="#6B46C1" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButtonCircle} onPress={handleEdit}>
            <Edit3 size={20} color="#6B46C1" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonShare}>
          <Send size={20} color="#FFF" />
          <Text style={styles.buttonShareText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}