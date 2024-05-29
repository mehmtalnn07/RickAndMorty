import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, Pressable, Button, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from '../../style/DetailsScreenStyle';

const DetailsScreen = () => {
  const route = useRoute();
  const { id } = route.params;
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchEpisodeDetails();
  }, []);

  const fetchEpisodeDetails = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      const data = await response.json();
      setEpisode(data);
      fetchCharacterDetails(data.characters);
    } catch (error) {
      console.error('Error fetching episode details:', error);
      setLoading(false);
    }
  };

  const fetchCharacterDetails = async (characterUrls) => {
    try {
      const characterPromises = characterUrls.map((url) => fetch(url).then((res) => res.json()));
      const characterData = await Promise.all(characterPromises);
      setCharacters(characterData);
    } catch (error) {
      console.error('Error fetching character details:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddFavorite = (character) => {
    if (favorites.some(favorite => favorite.id === character.id)) {
      removeFavorite(character);
      return;
    }

    Alert.alert(
      'Add to Favorites',
      `Do you want to add ${character.name} to your favorites?`,
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => addToFavorites(character) },
      ],
      { cancelable: false }
    );
  };

  const addToFavorites = (character) => {
    if (favorites.length >= 10) {
      Alert.alert(
        'Limit Exceeded',
        'You can only add up to 10 favorites. To add a new favorite, you need to remove an existing one.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
      return;
    }

    setFavorites([...favorites, character]);
  };

  const removeFavorite = (character) => {
    Alert.alert(
      'Remove from Favorites',
      `Are you sure you want to remove ${character.name} from your favorites?`,
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => removeFromFavorites(character) },
      ],
      { cancelable: false }
    );
  };

  const removeFromFavorites = (character) => {
    setFavorites(favorites.filter(favorite => favorite.id !== character.id));
  };

  const renderEpisodeDetails = () => {
    if (!episode) return null;

    const episodeParts = episode.episode.split('E');
    const seasonNumber = parseInt(episodeParts[0].substring(1), 10);
    const episodeNumber = parseInt(episodeParts[1], 10);
    const episodeInfo = `Season ${seasonNumber}, Episode ${episodeNumber}`;

    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.episodeName}>{episode.name}</Text>
        <Text style={styles.info}>{episodeInfo}</Text>
        <Text style={styles.info}>{episode.air_date}</Text>
        <Text style={styles.characters}>Characters</Text>
        <FlatList
          data={characters}
          renderItem={renderCharacter}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexGrow: 1, width: '100%' }}
        />
      </View>
    );
  };

  const renderCharacter = ({ item }) => {
    const isFavorite = favorites.some(favorite => favorite.id === item.id);
    const favoriteButtonText = isFavorite ? 'Remove from Favorites' : 'Add to Favorites';

    return (
      <Pressable>
        <View style={styles.characterCard}>
          <Image source={{ uri: item.image }} style={styles.characterImage} />
          <View style={styles.characterDetails}>
            <Text style={styles.characterName}>Name: {item.name}</Text>
            <Text style={styles.characterGender}>Gender: {item.gender}</Text>
            <Text style={styles.characterGender}>Status: {item.status}</Text>
            <Text style={styles.characterGender}>Specie: {item.species}</Text>
            <Text style={styles.characterGender}>Origin: {item.origin.name}</Text>
          </View>
          <Button title={favoriteButtonText} onPress={() => handleAddFavorite(item)} style={styles.favoriteButton} />
        </View>
      </Pressable>
    );
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {episode ? (
        renderEpisodeDetails()
      ) : (
        <Text style={styles.error}>Failed to load episode details</Text>
      )}
    </View>
  );
};


export default DetailsScreen;
