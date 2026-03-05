import { StyleSheet, View, Image, Text, ScrollView, Alert } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Card } from '@/components/Card';
import { Search, SlidersHorizontal } from "lucide-react-native";
import { FlatList } from 'react-native';
import { useEffect, useState } from 'react';


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

  let [contatos, setContatos] = useState<Contato[]>(ContatosData);
  let [text, setText] = useState("");

  function StatusName(status: FilterStatus): string {
    switch (status) {
      case FilterStatus.APROVADO:
        return "Aprovado";
      case FilterStatus.ENVIADO:
        return "Enviado";
      case FilterStatus.RASCUNHO:
        return "Rascunho";
      case FilterStatus.RECUSADO:
        return "Recusado";
    }

  }

  let [titulo, setTitulo] = useState("");
  let [desc, setDescricao] = useState("");
  let [valor, setValor] = useState("");

  function criarContato() {

    if (!titulo || !desc || !valor) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    const novoContato: Contato = {
      id: String(contatos.length + 1),
      title: titulo,
      desc: desc,
      valor: Number.parseFloat(valor),
      status: FilterStatus.RASCUNHO
    };

    setContatos([...contatos, novoContato]);

    setTitulo("");
    setDescricao("");
    setValor("");
  }

  return (


    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.paddingLeft}>
          <Text style={styles.h1}>Orçamentos</Text>
          <Text style={styles.text}> Você tem 1 item em rascunho </Text>
        </View>
        <View style={styles.right}>
          <Button onPress={criarContato} title="+ Novo" />
        </View>
      </View>



      <View style={styles.form}>
        <View style={styles.inputs}>
          <View style={styles.inputArea}>
            <Search style={styles.searchIcon} color="#aaa" size={20} />
            <Input value={titulo} onChangeText={(text) => {
              setTitulo(text);
            }} style={styles.input} placeholder="Título" />
          </View>
          <View style={styles.inputArea}>
            <Search style={styles.searchIcon} color="#aaa" size={20} />
            <Input value={desc} onChangeText={(text) => {
              setDescricao(text);
            }} style={styles.input} placeholder="Cliente" />
          </View>

          <View style={styles.inputArea}>
            <Search style={styles.searchIcon} color="#aaa" size={20} />
            <Input value={valor} onChangeText={(text) => {
              setValor(text);
            }} style={styles.input} placeholder="Valor" />
          </View>


        </View>
        <View style={styles.slidershIcon}>
          <SlidersHorizontal style={{ marginTop: 'auto', marginBottom: 'auto' }} color="#6a46eb" size={20} />
        </View>
      </View>

      <View style={styles.content}>
        <FlatList
          data={contatos}
          renderItem={({ item }) => <Card onPress={() =>
            Alert.alert(item.title, ` \n Empresa: ${item.desc} \n Valor:R$ ${item.valor} \n Status: ${StatusName(item.status)} `)
          } title={item.title} status={item.status} valor={item.valor} desc={item.desc}></Card>}
          keyExtractor={(item, index) => item.id + index}
        />
      </View>



      {/*<ScrollView style={styles.content}>

        <Card title='Desenvolvimento de aplicativo de loja online' status={FilterStatus.APROVADO} valor={22300} desc={'Soluções Tecnologicas Beta'}></Card>
        <Card title='Consultoria em marketing digital' status={FilterStatus.RASCUNHO} valor={4000} desc={'Marketing Wizards'}></Card>
        <Card title='Serviços de SEO' status={FilterStatus.ENVIADO} valor={3500} desc={'SEO Masters'}></Card>
        <Card title='Criação de conteúdo' status={FilterStatus.RASCUNHO} valor={2500} desc={'Content Creators'}></Card>
        <Card title='Gestão de redes sociais' status={FilterStatus.RECUSADO} valor={1800} desc={'Social Experts'}></Card>
        <Card title='Design de interfaces' status={FilterStatus.APROVADO} valor={5200} desc={'UI/UX Designers'}></Card>
        <Card title='Desenvolvimento de aplicativo de loja online' status={FilterStatus.APROVADO} valor={1200} desc={'Soluções Tecnologicas Beta'}></Card>
        <Card title='Desenvolvimento de aplicativo de loja online' status={FilterStatus.APROVADO} valor={1200} desc={'Soluções Tecnologicas Beta'}></Card>

      </ScrollView>*/}
    </View>
  );

}
