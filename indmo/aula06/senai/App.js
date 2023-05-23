import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CateScreeen from './source/screens/cateScreen';
import DetalhesScreen from './source/screens/detalhesScreen';
import DetalhesCursosScreen from './source/screens/detalhescursos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CateScreeen"
          component={CateScreeen}
          options={{ title: 'Categorias' }} />
        <Stack.Screen
          name="Cursos"
          component={DetalhesScreen}
          options={{ title: 'Cursos' }} />
        <Stack.Screen
          name="Detalhes"
          component={DetalhesCursosScreen}
          options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}