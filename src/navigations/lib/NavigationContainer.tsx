import {NavigationContainer as ReactNavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScene from '../../scenes/HomeScene';
import * as SceneKey from '../SceneKey';
import NotesScene from '../../scenes/NotesScene';
import RootStackParamList from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationContainer = () => {
  return (
    <ReactNavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SceneKey.HOME_SCENE} component={HomeScene} />
        <Stack.Screen name={SceneKey.NOTES_SCENE} component={NotesScene} />
      </Stack.Navigator>
    </ReactNavigationContainer>
  );
};

export default NavigationContainer;
