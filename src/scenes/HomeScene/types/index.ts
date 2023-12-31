import { RouteProp } from '@react-navigation/native';
import RootStackParamList from '../../../navigations/lib/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeSceneRouteProp = RouteProp<RootStackParamList, 'homeScene'>;

type HomeSceneNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'homeScene'
>;

export type Props = {
  route: HomeSceneRouteProp;
  navigation: HomeSceneNavigationProp;
};
