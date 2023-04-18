import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { styles } from './styles';

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


