import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Card } from '@/components/Card';
import { Search, SlidersHorizontal } from "lucide-react-native";
import { FlatList } from 'react-native';

export interface Contato {
  id: number;
  title: string;
  status: number;
  desc: string;
  valor: number;
}

export default function Home() {
  var contatos = [] as Contato[];

  var contato1 = {id:1, title:'Desenvolvimento de aplicativo de loja online', status:FilterStatus.APROVADO, valor:22300, desc:'Soluções Tecnologicas Beta'} as Contato;
  var contato2 = {id:1, title:'Desenvolvimento de aplicativo de loja online', status:FilterStatus.APROVADO, valor:22300, desc:'Soluções Tecnologicas Beta'} as Contato;
  var contato3 = {id:1, title:'Desenvolvimento de aplicativo de loja online', status:FilterStatus.APROVADO, valor:22300, desc:'Soluções Tecnologicas Beta'} as Contato;
  var contato4 = {id:1, title:'Desenvolvimento de aplicativo de loja online', status:FilterStatus.APROVADO, valor:22300, desc:'Soluções Tecnologicas Beta'} as Contato;
  var contato5 = {id:1, title:'Desenvolvimento de aplicativo de loja online', status:FilterStatus.APROVADO, valor:22300, desc:'Soluções Tecnologicas Beta'} as Contato;
  var contato6 = {id:1, title:'Desenvolvimento de aplicativo de loja online', status:FilterStatus.APROVADO, valor:22300, desc:'Soluções Tecnologicas Beta'} as Contato;

  return (

    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.paddingLeft}>
          <Text style={styles.h1}>Orçamentos</Text>
          <Text style={styles.text}> Você tem 1 item em rascunho </Text>
        </View>
        <View style={styles.right}>
          <Button title="+ Novo" />
        </View>
      </View>


      <View style={styles.form}>
        <View style={styles.inputArea}>
          <Search style={styles.searchIcon} color="#aaa" size={20} />
          <Input style={styles.input} placeholder="Título ou cliente"/>
        </View>
        <View style={styles.slidershIcon}>
        <SlidersHorizontal style={{marginTop:'auto', marginBottom:'auto'}} color="#6a46eb" size={20} />
        </View>
      </View>

      <FlatList
      data={contatos}
      renderItem={({item}) => <Card title={item.title} status={item.status} valor={item.valor} desc={item.desc}></Card>}
      keyExtractor={item => item.id}
      />



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
