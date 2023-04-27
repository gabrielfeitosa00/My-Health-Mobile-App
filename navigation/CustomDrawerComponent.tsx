import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, View} from 'react-native';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text style={{fontSize: 12, color: 'blue', alignSelf: 'center'}}>
          Olá User
        </Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        labelStyle={{color: 'white'}}
        label="Sair"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
