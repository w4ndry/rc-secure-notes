import { RouteProp } from '@react-navigation/native';
import RootStackParamList from '../../../navigations/lib/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NotesFormSceneRouteProp = RouteProp<RootStackParamList, 'notesFormScene'>;

type NotesFormSceneNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'notesFormScene'
>;

export type Props = {
  route: NotesFormSceneRouteProp;
  navigation: NotesFormSceneNavigationProp;
  noteId?: number;
};

export interface IButtonSave {
  onPress: () => void;
}
