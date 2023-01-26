import SignIn from '../screens/SignIn';
import ProductList from '../screens/ProductList';
import Cart from '../screens/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {

  const isLogin = useSelector(state => state.appReducer.isLogin)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <>
            <Stack.Screen name="ProductList" options={{
              headerShown: false,
              title: 'Ürün Listesi'
            }} component={ProductList} />
            <Stack.Screen name="Cart"  options={{
              title: 'Sepet'
            }}  component={Cart} />
          </>
        ) : (
          <Stack.Screen name="SignIn" options={{
            headerShown: false,
          }} component={SignIn} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
