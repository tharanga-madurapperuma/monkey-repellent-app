import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/screens/home/Home';
import AddNewDevice from './components/screens/addNewDevice/AddNewDevice';
import UserManual from './components/screens/userManual/UserManual';
import About from './components/screens/about/About';
import Contact from './components/screens/contact/Contact';
import DeviceSetup from './components/screens/setupDevice/DeviceSetup';
import DeviceControl from './components/screens/deviceControl/DeviceControl';
import ConnectionChange from './components/screens/connectionChange/ConnectionChange';
//import { FIREBASE_APP } from './firebaseConfig';
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Drawer = createDrawerNavigator();

export default function App() {

  // const FIREBASE_AUTH = getAuth(FIREBASE_APP);
  

  // signInWithEmailAndPassword(FIREBASE_AUTH, "user@gmail.com", 123456)
  // .then((userCredential) => {
  //   const user = userCredential.user;
  //   alert(user.email);
  // })
  // .catch((error) => {
  //   alert(error);
  // });

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen component={Home} name='Home' />
      <Drawer.Screen component={AddNewDevice} name='Add New Device' />
      <Drawer.Screen component={UserManual} name='User Manual' />
      <Drawer.Screen component={DeviceSetup} name='Setup Device' options={{drawerItemStyle: { height: 0 }}}/>
      <Drawer.Screen component={DeviceControl} name='Controlling Device' options={{drawerItemStyle: { height: 0 }}}/>
      <Drawer.Screen component={ConnectionChange} name='Change Connection' options={{drawerItemStyle: { height: 0 }}}/>
      <Drawer.Screen component={About} name='About' />
      <Drawer.Screen component={Contact} name='Contact' />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}