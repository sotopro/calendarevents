import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "./styles";

const CustomModal = ({ isVisible, animationType, selectedEvent, onCancel, onDelete}) => {
    return (
        <Modal visible={isVisible} animationType={animationType}>
        <View style={styles.container}>
          <Text style={styles.title}>Event Detail</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.detailMessage}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button 
              title='Cancel'
              color='#52528C'
              onPress={onCancel}
            />
            <Button 
            title='Delete'
            color='#52528C'
            onPress={() => onDelete(selectedEvent.id)}
            />
          </View>
        </View>
      </Modal>
    )
};

export default CustomModal;