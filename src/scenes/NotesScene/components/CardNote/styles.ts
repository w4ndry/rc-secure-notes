import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
  },
  cardContainer: {
    flex: 1,
    paddingVertical: 12,
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    color: '#000',
  },
  note: {
    color: '#000',
    fontSize: 12,
  },
  deleteButton: {
    paddingLeft: 16,
  },
});

export default styles;
