import { INoteItem } from '../../../scenes/NotesScene/types';
import * as SceneKey from '../../SceneKey';

type RootStackParamList = {
  [SceneKey.HOME_SCENE]: undefined;
  [SceneKey.NOTES_SCENE]: undefined;
  [SceneKey.NOTES_FORM_SCENE]: { item: INoteItem } | undefined;
};

export default RootStackParamList;
