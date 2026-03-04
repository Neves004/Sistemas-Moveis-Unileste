import { TouchableOpacity, TouchableOpacityProps, Text, View } from "react-native";
import { styles } from "./styles";
import { FilterStatus } from '@/types/FilterStatus'

type Props = TouchableOpacityProps & {
    title: string;
    status: number;
    desc: string;
    valor: number;
}

export function Card({ title, status, desc, valor, ...rest }: Props) {

    const getTag = () => {
        switch (status) {
            case FilterStatus.APROVADO:
                return <View style={styles.aprovado_view}> 
                <View style={styles.aprovado_bolinha}></View> 
                <Text style={styles.aprovado_text}>Aprovado</Text>
                </View>
            case FilterStatus.ENVIADO:
                return <View style={styles.enviado_view}> 
                <View style={styles.enviado_bolinha}></View> 
                <Text style={styles.enviado_text}>Enviado</Text>
                </View>
            case FilterStatus.RASCUNHO:
                return <View style={styles.rascunho_view}> 
                <View style={styles.rascunho_bolinha}></View> 
                <Text style={styles.rascunho_text}>Rascunho</Text>
                </View>
            case FilterStatus.RECUSADO: 
                return <View style={styles.recusado_view}> 
                <View style={styles.recusado_bolinha}></View> 
                <Text style={styles.recusado_text}>Recusado</Text>
                </View>
        }
    }


    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.flexRow}>
                <View style={styles.cutoff}>
                    <Text style={styles.title}>{title}</Text>
                </View>

                <View style={styles.right}>
                    {getTag()}
                </View>
            </View>


            <View style={styles.flexRow}>

                <View style={{paddingLeft:8}}>
                    <Text>{desc}</Text>
                </View>


                <View style={styles.rightRow}>
                    <View style={{paddingRight:8}}>
                    <Text>R$ {valor}</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
}