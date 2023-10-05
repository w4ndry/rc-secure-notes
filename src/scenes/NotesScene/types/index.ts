import { RouteProp } from '@react-navigation/native';
import RootStackParamList from '../../../navigations/lib/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NotesSceneRouteProp = RouteProp<RootStackParamList, 'notesScene'>;

type NotesSceneNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'notesScene'
>;

export type Props = {
  route: NotesSceneRouteProp;
  navigation: NotesSceneNavigationProp;
};

export interface INoteItem {
  id: number;
  title: string;
  note: string;
}

export interface IPropsNoteItem {
  item: INoteItem;
}
