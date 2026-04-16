import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@/app/Home';
import NewBudget from '@/app/newTela';
import EditBudget from '@/app/editTela';
import BudgetDetails
 from '@/app/BudgetDetails';
const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={Home} options={{title: 'Orçamentos', headerTitleAlign: 'center'}} />
        <Stack.Screen name="newTela" component={NewBudget} options={{headerBackButtonDisplayMode: 'default', title: 'Novo orçamento', headerTitleAlign: 'center'}} />
        <Stack.Screen name="editTela" component={EditBudget} options={{headerBackButtonDisplayMode: 'default', title: 'Editar orçamento', headerTitleAlign: 'center'}} />
        <Stack.Screen name="BudgetDetails" component={BudgetDetails} options={{headerBackButtonDisplayMode: 'default', title: 'Orçamento Selecionado', headerTitleAlign: 'center'}} />
      </Stack.Navigator>  BudgetDetails
    </NavigationContainer>
  );
}