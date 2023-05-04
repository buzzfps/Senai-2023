import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientesScreens from './source/screens/ClientesScreen';
import DetalhesScreen from './source/screens/detalhesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ClientesScreen"
          component={ClientesScreens}
          options={{ title: 'Lista de Clientes' }} />
          <Stack.Screen
            name="Detalhes"
            component={DetalhesScreen}
            options={{ title: 'Detalhes do Cliente'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}