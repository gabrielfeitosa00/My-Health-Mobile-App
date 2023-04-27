import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import {Divider} from 'react-native-paper';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor: '#ADD4D0'}}>
      <View>
        <Text
          style={{
            fontSize: 22,
            color: '#419ED7',
            alignSelf: 'center',
            fontFamily: 'AveriaLibre-Regular',
            marginTop: 10,
          }}>
          Olá User
        </Text>
        <Divider
          style={{
            backgroundColor: '#419ED7',
            width: '85%',
            alignSelf: 'center',
            height: 2,
            marginTop: 20,
            marginBottom: 30,
          }}
          bold={true}
        />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        labelStyle={{
          color: '#419ED7',
          fontSize: 22,
          fontFamily: 'AveriaLibre-Regular',
        }}
        label="Sair"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
