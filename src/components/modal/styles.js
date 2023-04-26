import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        paddingVertical: 20,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      detailContainer: {
        paddingVertical: 20,
      },
      detailMessage: {
        fontSize: 14,
        color: '#212121',
      },
      selectedEvent: {
        fontSize: 14,
        color: '#212121',
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'center',
        marginBottom: 20,
      },
      buttonContainer: {
        width: "80%",
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
});