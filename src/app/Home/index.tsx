import { View, Text, Alert, FlatList, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native';
import { styles } from './styles';
import { Input } from '@/components/Input';
import { FilterStatus } from '@/types/FilterStatus';
import { Card } from '@/components/Card';
import { Search, SlidersHorizontal, X, Check } from "lucide-react-native";
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export type Contato = {
  id: string;
  title: string;
  status: number;
  desc: string;
  valor: number;
  services?: any[]; // Adicionado para garantir que passe os serviços para a próxima tela
  discount?: number;
}

const botoesFiltros = [
  { title: 'Todos', status: 'todos' },
  { title: 'Rascunhos', status: FilterStatus.RASCUNHO },
  { title: 'Enviados', status: FilterStatus.ENVIADO },
  { title: 'Aprovados', status: FilterStatus.APROVADO },
  { title: 'Recusados', status: FilterStatus.RECUSADO },
];

export default function Home() {
  const navigation = useNavigation();
  
  const [contatos, setContatos] = useState<Contato[]>([]);
  const [pesquisa, setPesquisa] = useState("");
  const [modalFiltroVisible, setModalFiltroVisible] = useState(false);
  
  const [filtroStatus, setFiltroStatus] = useState<FilterStatus | 'todos'>('todos');
  const [ordenacao, setOrdenacao] = useState<'recente' | 'antigo' | 'maior' | 'menor'>('recente');

  async function carregarContatos() {
    try {
      const dados = await AsyncStorage.getItem("contatos");
      if (dados != null) setContatos(JSON.parse(dados));
    } catch (error) {
      console.log("Erro ao carregar", error);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', carregarContatos);
    return unsubscribe;
  }, [navigation]);

  function deletarContato(id: string) {
    Alert.alert("Excluir", "Deseja remover este orçamento?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: async () => {
          const novaLista = contatos.filter(item => item.id !== id);
          setContatos(novaLista);
          await AsyncStorage.setItem("contatos", JSON.stringify(novaLista));
        }
      }
    ]);
  }

  const dadosFiltrados = contatos
    .filter(c => {
      const matchBusca = c.title?.toLowerCase().includes(pesquisa.toLowerCase()) || 
                         c.desc?.toLowerCase().includes(pesquisa.toLowerCase());
      const matchStatus = filtroStatus === 'todos' || c.status === filtroStatus;
      return matchBusca && matchStatus;
    })
    .sort((a, b) => {
      if (ordenacao === 'maior') return b.valor - a.valor;
      if (ordenacao === 'menor') return a.valor - b.valor;
      if (ordenacao === 'recente') return Number(b.id) - Number(a.id);
      return Number(a.id) - Number(b.id);
    });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.h1}>Orçamentos</Text>
          <Text style={styles.text}>
            Você tem {contatos.filter(c => c.status === FilterStatus.RASCUNHO).length} rascunhos
          </Text>
        </View>
        <TouchableOpacity style={styles.btnNovo} onPress={() => navigation.navigate('newTela')}>
          <Text style={styles.btnNovoText}>+ Novo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchSection}>
        <View style={styles.inputArea}>
          <Search color="#aaa" size={20} />
          <Input
            value={pesquisa}
            onChangeText={setPesquisa}
            style={styles.input}
            placeholder="Título ou cliente"
          />
        </View>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setModalFiltroVisible(true)}>
          <SlidersHorizontal color="#6a46eb" size={20} />
        </TouchableOpacity>
      </View>

      <View style={{ marginBottom: 15 }}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={{ paddingHorizontal: 20, gap: 8 }}
        >
          {botoesFiltros.map((v) => (
            <TouchableOpacity
              key={v.title}
              onPress={() => setFiltroStatus(v.status as any)}
              style={[
                styles.quickFilterBtn,
                filtroStatus === v.status && styles.quickFilterBtnActive
              ]}
            >
              <Text style={[
                styles.quickFilterText,
                filtroStatus === v.status && styles.quickFilterTextActive
              ]}>
                {v.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={dadosFiltrados}
        renderItem={({ item }) => (
          <Card
            // Navega para Detalhes passando o item completo como 'budget'
            onPress={() => navigation.navigate('BudgetDetails', { budget: item })}
            onDelete={() => deletarContato(item.id)}
            onEdit={() => navigation.navigate('editTela', { item })}
            title={item.title}
            status={item.status}
            valor={item.valor}
            desc={item.desc}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={modalFiltroVisible} animationType="slide" transparent={true}>
        <Pressable style={styles.modalOverlay} onPress={() => setModalFiltroVisible(false)} />
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Filtrar e ordenar</Text>
            <TouchableOpacity onPress={() => setModalFiltroVisible(false)}>
              <X color="#333" size={24} />
            </TouchableOpacity>
          </View>

          <Text style={styles.filterLabel}>Ordenação</Text>
          {[
            { id: 'recente', label: 'Mais recente' },
            { id: 'antigo', label: 'Mais antigo' },
            { id: 'maior', label: 'Maior valor' },
            { id: 'menor', label: 'Menor valor' },
          ].map((item) => (
            <TouchableOpacity key={item.id} style={styles.radioOption} onPress={() => setOrdenacao(item.id as any)}>
              <View style={[styles.radio, ordenacao === item.id && styles.radioSelected]}>
                {ordenacao === item.id && <View style={styles.radioInner} />}
              </View>
              <Text style={styles.radioText}>{item.label}</Text>
            </TouchableOpacity>
          ))}

          <View style={styles.modalFooter}>
            <TouchableOpacity onPress={() => {setFiltroStatus('todos'); setOrdenacao('recente')}}>
              <Text style={styles.resetText}>Limpar filtros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyBtn} onPress={() => setModalFiltroVisible(false)}>
              <Check color="#fff" size={20} />
              <Text style={styles.applyBtnText}>Aplicar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}