import { RouteProp } from '@react-navigation/native';
import RootStackParamList from '../../../navigations/lib/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'homeScene'>;

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'homeScene'
>;

export type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};
