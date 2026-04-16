import { styles } from "./styles";
import { View } from "react-native";
import { ViewProps } from "react-native";
import { Input } from "../Input";

type Props = ViewProps & {

}

export function NewBudgetModal({ ...rest }: Props) {
    return (
        <View style={styles.container}>
            {/* Titulo, Descrição, Valor, Status */}
            <Input></Input>

            <Input></Input>

            <Input></Input>
        </View>
    );
}