import SignIn from '../screens/SignIn';
import ProductList from '../screens/ProductList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {

  const isLogin = useSelector(state => state.appReducer.isLogin)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <Stack.Screen name="ProductList" component={ProductList} />
        ) : (
          <Stack.Screen name="SignIn" component={SignIn} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
