import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    flatListContainer: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    card: {
      backgroundColor: '#6fb7ff',
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
      flex: 1,
      margin: 5,
      alignItems: 'center',
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#fff',
    },
    info: {
      fontSize: 14,
    },
    goToFavoritesButton: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    goToFavoritesText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default styles;