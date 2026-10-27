// src/screens/MainQuestScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MAIN_QUEST } from '../data/ootData';
import ChecklistCard from '/../Components/ChecklistCard';

const STORAGE_KEY = '@oot_main_quest';

export default function MainQuestScreen() {
  const [completedSteps, setCompletedSteps] = useState({});

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((data) => {
      if (data) setCompletedSteps(JSON.parse(data));
    });
  }, []);

  const toggleStep = (id) => {
    const updated = { ...completedSteps, [id]: !completedSteps[id] };
    setCompletedSteps(updated);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={MAIN_QUEST}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChecklistCard
            title={item.title}
            subtitle={`${item.section} - ${item.location}`}
            details={`Requisito: ${item.requirement}`}
            isCompleted={!!completedSteps[item.id]}
            onToggle={() => toggleStep(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 12,
  },
});