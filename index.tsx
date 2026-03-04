import { StyleSheet, View, Image} from 'react-native';
import { styles } from './src/app/Home/styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { FileterStatus } from '@/types/FilterStatus';

export default function Home() {
  return (

      <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
        
      </View>

      <View style={styles.content}>
        <Filter status={FileterStatus.DONE} isActive={true} />
        <Filter status={FileterStatus.PENDING} isActive={true} />
      </View>
    </View>
  );
}
