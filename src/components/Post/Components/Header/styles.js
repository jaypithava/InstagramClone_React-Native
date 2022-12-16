import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    margin: 10,
  },
  name: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default styles;
