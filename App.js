import { useState } from 'react';
import { Text, View, Button, TextInput, FlatList, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [text, setText] = useState('');
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

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

  const onHandlerEvent = (id) => {
    setModalVisible(true);
    const selectedEvent = events.find(event => event.id === id);
    setSelectedEvent(selectedEvent);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerEvent(item.id)}>
      <Text style={styles.item}>{item.value}</Text>
    </TouchableOpacity>
  )


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
        <FlatList 
          renderItem={renderItem}
          data={events}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
      <Modal visible={modalVisible} animationType='slide'></Modal>
    </View>
  );
}


