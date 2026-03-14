import { View, Text, Alert, FlatList, ScrollView } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { FilterStatus } from '@/types/FilterStatus';
import { Card } from '@/components/Card';
import { Search, SlidersHorizontal } from "lucide-react-native";
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ModalContato } from '@/components/Modal';


export type Contato = {
  id: string;
  title: string;
  status: number;
  desc: string;
  valor: number;
}

export default function Home() {
  const ContatosData: Contato[] = [
    { id: "1", title: 'Desenvolvimento de aplicativo de loja online', status: FilterStatus.APROVADO, valor: 22300, desc: 'Soluções Tecnologicas Beta' },
    { id: "2", title: 'Consultoria em marketing digital', status: FilterStatus.RASCUNHO, valor: 4000, desc: 'Marketing Wizards' },
    { id: "3", title: 'Serviços de SEO', status: FilterStatus.ENVIADO, valor: 3500, desc: 'SEO Masters' },
    { id: "4", title: 'Criação de conteúdo', status: FilterStatus.RASCUNHO, valor: 2500, desc: 'Content Creators' },
    { id: "5", title: 'Gestão de redes sociais', status: FilterStatus.RECUSADO, valor: 1800, desc: 'Social Experts' },
    { id: "6", title: 'Design de interfaces', status: FilterStatus.APROVADO, valor: 5200, desc: 'UI/UX Designers' },
  ];

  const [contatos, setContatos] = useState<Contato[]>(ContatosData);
  const [pesquisa, setPesquisa] = useState(""); // Estado para a barra de busca
  const [modalVisivel, setModalVisivel] = useState(false);

  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [status, setStatus] = useState<FilterStatus>(FilterStatus.RASCUNHO);
  const [filtroStatus, setFiltroStatus] = useState<FilterStatus | 'todos'>('todos');

  // Estados para o Modal e Criação
  const [titulo, setTitulo] = useState("");
  const [desc, setDescricao] = useState("");
  const [valor, setValor] = useState("");


  function StatusName(status: FilterStatus): string {
    switch (status) {
      case FilterStatus.APROVADO: return "Aprovado";
      case FilterStatus.ENVIADO: return "Enviado";
      case FilterStatus.RASCUNHO: return "Rascunho";
      case FilterStatus.RECUSADO: return "Recusado";
      default: return "";
    }
  }

  async function salvarContatos(lista: Contato[]) {
    try {
      await AsyncStorage.setItem("contatos", JSON.stringify(lista));
    } catch (error) {
      console.log("Erro ao salvar contatos", error);
    }
  }

  async function carregarContatos() {
    try {
      const dados = await AsyncStorage.getItem("contatos");
      if (dados != null) {
        setContatos(JSON.parse(dados));
      }
    } catch (error) {
      console.log("Erro ao carregar contatos", error);
    }
  }

  useEffect(() => {
    carregarContatos();
  }, []);

  function criarContato() {
    if (!titulo || !desc || !valor) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }
    if (editandoId) {
      // editar card
      const listaAtualizada = contatos.map(item =>
        item.id === editandoId
          ? { ...item, title: titulo, desc: desc, valor: Number.parseFloat(valor), status: status }
          : item
      );
      setContatos(listaAtualizada);
      salvarContatos(listaAtualizada);
    } else {
      // criar novo card
      const novoContato: Contato = {
        id: String(Date.now()),
        title: titulo,
        desc: desc,
        valor: Number.parseFloat(valor),
        status: status,
      };
      const novaLista = [...contatos, novoContato];
      setContatos(novaLista);
      salvarContatos(novaLista);
    }

    // Reset geral
    setEditandoId(null);
    setTitulo("");
    setDescricao("");
    setValor("");
    setStatus(FilterStatus.RASCUNHO);
    setModalVisivel(false);
  }

  /* Deletar card */
  function deletarContato(id: string) {
    Alert.alert("Excluir", "Deseja realmente remover este orçamento?", [
      { text: "Não", style: "cancel" },
      {
        text: "Sim",
        onPress: () => {
          const novaLista = contatos.filter(item => item.id !== id);
          setContatos(novaLista);
          salvarContatos(novaLista);
        }
      }
    ]);
  }


  function prepararEdicao(item: Contato) {
    setEditandoId(item.id); // Avisa o app que estamos editando esse ID
    setTitulo(item.title);
    setDescricao(item.desc);
    setValor(item.valor.toString());
    setStatus(item.status);
    setModalVisivel(true);
  }


  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.paddingLeft}>
          <Text style={styles.h1}>Orçamentos</Text>
          <Text style={styles.text}>
            Você tem {contatos.filter(c => c.status === FilterStatus.RASCUNHO).length} itens em rascunho
          </Text>
        </View>
        <View style={styles.right}>
          {/* abre o modal p/ criarContato*/}
          <Button onPress={() => {
            setModalVisivel(true)
            setEditandoId(null); // Limpa o ID de edição
            setTitulo("");       // Limpa os campos
            setDescricao("");
            setValor("");
          }}
            title="+ Novo"
          />
        </View>
      </View>

      <View style={styles.form}>
        <View style={styles.inputs}>
          <View style={styles.inputArea}>
            <Search style={styles.searchIcon} color="#aaa" size={20} />
            <Input
              value={pesquisa}
              onChangeText={setPesquisa}
              style={styles.input}
              placeholder="Pesquisar por título ou cliente"
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              gap: 8,
              paddingHorizontal: 2,
              padding: 8,
              marginVertical: 10,

            }}>
            <Button
              title="Todos"
              onPress={() => setFiltroStatus('todos')}
              style={{ backgroundColor: filtroStatus === 'todos' ? '#6a46eb' : '#ddd', padding:5, borderRadius:10 }}
            />

            <Button
              title="Rascunhos"
              onPress={() => setFiltroStatus(FilterStatus.RASCUNHO)}
              style={{ backgroundColor: filtroStatus === FilterStatus.RASCUNHO ? '#a1a1aa' : '#ddd', padding:5, borderRadius:10 }}
            />

            <Button
              title="Enviados"
              onPress={() => setFiltroStatus(FilterStatus.ENVIADO)}
              style={{ backgroundColor: filtroStatus === FilterStatus.ENVIADO ? '#b8f1fe' : '#ddd', padding:5, borderRadius:10 }}
            />

            <Button
              title="Aprovados"
              onPress={() => setFiltroStatus(FilterStatus.APROVADO)}
              style={{ backgroundColor: filtroStatus === FilterStatus.APROVADO ? '#4ade80' : '#ddd', padding:5, borderRadius:10 }}
            />

            <Button
              title="Recusados"
              onPress={() => setFiltroStatus(FilterStatus.RECUSADO)}
              style={{ backgroundColor: filtroStatus === FilterStatus.RECUSADO ? '#ffb9b9' : '#ddd', padding:5, borderRadius:10 }}
            />
          </ScrollView>
        </View>


        <View style={styles.slidershIcon}>
          <SlidersHorizontal style={{ marginTop: 'auto', marginBottom: 'auto' }} color="#6a46eb" size={20} />
        </View>
      </View>

      <View style={styles.content}>
        <FlatList
          data={contatos.filter(c => {
            const pesquisaMatch = c.title.toLowerCase().includes(pesquisa.toLowerCase()) ||
              c.desc.toLowerCase().includes(pesquisa.toLowerCase());
            const statusMatch = filtroStatus === 'todos' || c.status === filtroStatus;
            return pesquisaMatch && statusMatch;
          })}
          renderItem={({ item }) => (
            <Card
              onDelete={() => deletarContato(item.id)}
              onEdit={() => prepararEdicao(item)}
              title={item.title}
              status={item.status}
              valor={item.valor}
              desc={item.desc}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <ModalContato
        visivel={modalVisivel}
        fechar={() => setModalVisivel(false)}
        onSalvar={criarContato}
        dados={{
          titulo, setTitulo,
          desc, setDesc: setDescricao,
          valor, setValor,
          status, setStatus,
        }}
      />

    </View>
  );
}