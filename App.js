import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [text, setText] = useState('');
  const [events, setEvents] = useState([]);

  const onAddEvent = () => {
    if (text.length === 0) return;
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text
      }
    ]);
    setText('');
  }

  console.warn('events', events)


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Enter your event' 
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button title='Add' color='#52528C' onPress={onAddEvent}/>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>April Fools</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Coca cola Festival</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Ultra Festival</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Pascua</Text>
        </View>
      </View>
    </View>
  );
}


