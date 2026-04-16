import { View, Text, Alert, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { FilterStatus } from '@/types/FilterStatus';
import { Service } from '@/types/Services';
import { Trash2 } from 'lucide-react-native';
import { styles } from '@/app/newTela/styles';
import { StatusChip } from '@/components/StatusChip';
import { MaterialIcons, Octicons } from '@expo/vector-icons';


export default function NewBudget() {
  const navigation = useNavigation();

  const [titulo, setTitulo] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState<FilterStatus>(FilterStatus.RASCUNHO);
  const [services, setServices] = useState<Service[]>([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newServiceName, setNewServiceName] = useState('');
  const [newServiceDesc, setNewServiceDesc] = useState('');
  const [newServicePrice, setNewServicePrice] = useState('');
  const [newServiceQty, setNewServiceQty] = useState(1);

  const [discountPercentage, setDiscountPercentage] = useState('0');

  const subtotal = services.reduce(
    (total, service) => total + service.price * service.quantity,
    0
  );

  const discountValue = subtotal * (Number(discountPercentage) / 100);
  const finalTotal = subtotal - discountValue;
  const totalItems = services.reduce((sum, s) => sum + s.quantity, 0);

  function formatCurrency(value: number) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  function handleDeleteService(id: string) {
    setServices((prev) => prev.filter((service) => service.id !== id));
  }

  function handleConfirmService() {
    if (!newServiceName || !newServicePrice) {
      Alert.alert("Erro", "Preencha o nome e o preço do serviço.");
      return;
    }

    const service: Service = {
      id: String(Date.now()),
      name: newServiceName,
      description: newServiceDesc,
      price: parseFloat(newServicePrice.replace(',', '.')),
      quantity: newServiceQty,
    };

    setServices([...services, service]);

    setNewServiceName('');
    setNewServiceDesc('');
    setNewServicePrice('');
    setNewServiceQty(1);
    setModalVisible(false);
  }

  async function handleSave() {
    if (!titulo || !desc) {
      Alert.alert('Erro', 'Preencha o título e o nome do cliente');
      return;
    }

    if (services.length === 0) {
      Alert.alert('Erro', 'Adicione pelo menos um serviço ao orçamento');
      return;
    }

    const novoContato = {
      id: String(Date.now()),
      title: titulo,
      desc: desc,
      valor: finalTotal,
      status,
      services,
      discount: discountValue,
    };

    try {
      const dados = await AsyncStorage.getItem('contatos');
      const lista = dados ? JSON.parse(dados) : [];
      const novaLista = [...lista, novoContato];

      await AsyncStorage.setItem('contatos', JSON.stringify(novaLista));

      Alert.alert('Sucesso', 'Orçamento criado!');
      navigation.goBack();

    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível salvar');
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={{ padding: 20, gap: 15 }}>
                      <View style={styles.card}> 
                <View style={styles.cardHeader}>
            <MaterialIcons name="business-center" size={18} color="#6B46C1" />
            <Text style={styles.cardTitle}>Informações Gerais</Text>
          </View>

        <Input
          placeholder="Título"
          value={titulo}
          onChangeText={setTitulo}
        />

        <View style={{padding: 8}}>

        </View>

        <Input
          placeholder="Cliente"
          value={desc}
          onChangeText={setDesc}
        />
        </View>

        {/* --- BLOCO DE STATUS DENTRO DO CARD --- */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Octicons name="tag" size={18} color="#6B46C1" />
            <Text style={styles.cardTitle}>Status</Text>
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 10 }}>
            <StatusChip
              label="Rascunho"
              status={FilterStatus.RASCUNHO}
              selected={status === FilterStatus.RASCUNHO}
              onPress={() => setStatus(FilterStatus.RASCUNHO)}
            />
            <StatusChip
              label="Enviado"
              status={FilterStatus.ENVIADO}
              selected={status === FilterStatus.ENVIADO}
              onPress={() => setStatus(FilterStatus.ENVIADO)}
            />
            <StatusChip
              label="Aprovado"
              status={FilterStatus.APROVADO}
              selected={status === FilterStatus.APROVADO}
              onPress={() => setStatus(FilterStatus.APROVADO)}
            />
            <StatusChip
              label="Recusado"
              status={FilterStatus.RECUSADO}
              selected={status === FilterStatus.RECUSADO}
              onPress={() => setStatus(FilterStatus.RECUSADO)}
            />
          </View>
        </View>

        {/* Card de Serviços */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="list-alt" size={18} color="#6B46C1" />
            <Text style={styles.cardTitle}>Serviços inclusos</Text>
          </View>

          {services.map((item) => (
            <View key={item.id} style={styles.serviceItem}>
              <View style={{ flex: 1 }}>
                <Text style={styles.serviceName}>{item.name}</Text>
                <Text style={styles.serviceDesc} numberOfLines={1}>{item.description}</Text>
              </View>
              <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
                <Text style={styles.servicePrice}>{formatCurrency(item.price)}</Text>
                <Text style={styles.serviceQty}>Qt: {item.quantity}</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => handleDeleteService(item.id)}>
                  <Trash2 size={20} color="#E53E3E" />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.btnAddService} onPress={() => setModalVisible(true)}>
            <MaterialIcons name="add" size={20} color="#6B46C1" />
            <Text style={styles.btnAddServiceText}>Adicionar serviço</Text>
          </TouchableOpacity>
        </View>

        {/* Card de Investimento */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
             <MaterialIcons name='wallet' size={18} color='#6b46c1' />
            <Text style={styles.cardTitle}>Investimento</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text style={styles.itemsText}>{totalItems} itens</Text>
              <Text style={styles.summaryValue}>{formatCurrency(subtotal)}</Text>
            </View>
          </View>

          <View style={styles.summaryRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Text style={styles.summaryLabel}>Desconto</Text>
              <View style={styles.discountInputContainer}>
                <Input
                  style={styles.discountInput}
                  keyboardType="numeric"
                  value={discountPercentage}
                  onChangeText={setDiscountPercentage}
                />
                <Text style={styles.percentText}>%</Text>
              </View>
            </View>
            <Text style={styles.discountValueText}>- {formatCurrency(discountValue)}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Valor total</Text>
            <View style={{ alignItems: 'flex-end' }}>
              {discountValue > 0 && (
                <Text style={styles.oldPrice}>{formatCurrency(subtotal)}</Text>
              )}
              <Text style={styles.totalValue}>{formatCurrency(finalTotal)}</Text>
            </View>
          </View>
        </View>

        <Button title="Salvar Orçamento" onPress={handleSave} />
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Serviço</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <MaterialIcons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>

            <Input placeholder="Nome do serviço" value={newServiceName} onChangeText={setNewServiceName} />
            <Input placeholder="Descrição detalhada" multiline value={newServiceDesc} onChangeText={setNewServiceDesc} />

            <View style={styles.modalFooterRow}>
              <View style={{ flex: 1 }}>
                <Input placeholder="Preço" keyboardType="numeric" value={newServicePrice} onChangeText={setNewServicePrice} />
              </View>

              <View style={styles.qtyContainer}>
                <TouchableOpacity onPress={() => setNewServiceQty(Math.max(1, newServiceQty - 1))}>
                  <Text style={{fontSize:25, color:"#6B46C1"}}> - </Text>
                </TouchableOpacity>
                <Text style={styles.qtyText}>{newServiceQty}</Text>
                <TouchableOpacity onPress={() => setNewServiceQty(newServiceQty + 1)}>
                  <Text style={{fontSize:20, color:"#6B46C1"}}> + </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Button title="Salvar" onPress={handleConfirmService} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}