import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your event' style={styles.input} />
        <Button title='Add' color='#52528C' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 55,
    marginHorizontal: 20,
  },
  input: {
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: '#52528C',
    marginRight: 10,
    color: '#212121'
  }
});
