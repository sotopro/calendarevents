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
    marginHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#52528C',
    color: '#212121',
  }
});
