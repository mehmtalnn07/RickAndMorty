import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
    },
    episodeName: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      width: '100%',
    },
    detailsContainer: {
      width: '100%',
      alignItems: 'flex-start',
    },
    info: {
      fontSize: 18,
      color: '#000',
      marginBottom: 5,
    },
    characters: {
      fontSize: 20,
      color: '#000',
      marginTop: 15,
      fontWeight: 'bold',
    },
    characterCard: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: 10,
      borderRadius: 0,
      marginVertical: 5,
      width: 350,
    },
    characterImage: {
      width: 100,
      height: 100,
      borderRadius: 35,
      marginBottom: 10,
    },
    characterDetails: {
      alignItems: 'center',
      marginBottom: 10,
    },
    characterName: {
      fontSize: 16,
      color: '#000',
      marginBottom: 5,
    },
    characterGender: {
      fontSize: 14,
      color: '#666',
    },
    favoriteButton: {
      marginTop: 10,
    },
    error: {
      fontSize: 18,
      color: 'red',
    },
  });

  export default styles;