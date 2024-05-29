import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import styles from '../../style/HomeScreenStyle';

const HomeScreen = ({ navigation }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetchEpisodes();
  }, []);

  const fetchEpisodes = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/episode');
      const data = await response.json();
      setEpisodes(data.results);
    } catch (error) {
      console.error('Error fetching episodes:', error);
    }
  };

  const handlePress = (episode) => {
    navigation.navigate('DetailsScreen', { id: episode.id, name: episode.name });
  };

  const navigateToFavorites = () => {
    navigation.navigate('FavoritesList');
  };

  const renderEpisode = ({ item }) => {
    const episodeParts = item.episode.split('E');
    const seasonNumber = parseInt(episodeParts[0].substring(1), 10);
    const episodeNumber = parseInt(episodeParts[1], 10);
    const episodeInfo = `Season ${seasonNumber}, Episode ${episodeNumber}`;

    return (
      <Pressable style={styles.card} onPress={() => handlePress(item)}>
        <Text style={[styles.name, { fontSize: 20 }]}>{item.name}</Text>
        <Text style={[styles.info, { color: 'lightgrey' }]}>{episodeInfo}</Text>
        <Text style={[styles.info, { color: 'lightgrey' }]}>{item.air_date}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={episodes}
        renderItem={renderEpisode}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default HomeScreen;
