import {NavigationContainer as ReactNavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScene from '../../scenes/HomeScene';
import * as SceneKey from '../SceneKey';
import NotesScene from '../../scenes/NotesScene';
import RootStackParamList from './types';
import NotesFormScene from '../../scenes/NotesFormScene';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationContainer = () => {
  return (
    <ReactNavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SceneKey.HOME_SCENE}
          component={HomeScene}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SceneKey.NOTES_SCENE}
          component={NotesScene}
          options={{title: 'Notes', animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name={SceneKey.NOTES_FORM_SCENE}
          component={NotesFormScene}
          options={{title: 'Create Note', animation: 'slide_from_right'}}
        />
      </Stack.Navigator>
    </ReactNavigationContainer>
  );
};

export default NavigationContainer;
