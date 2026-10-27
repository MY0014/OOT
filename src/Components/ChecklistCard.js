// src/components/ChecklistCard.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ChecklistCard({ title, subtitle, details, isCompleted, onToggle }) {
  return (
    <TouchableOpacity 
      style={[styles.card, isCompleted && styles.cardCompleted]} 
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <View style={styles.checkboxContainer}>
        <View style={[styles.checkbox, isCompleted && styles.checkboxChecked]} />
      </View>
      
      <View style={styles.content}>
        <Text style={[styles.title, isCompleted && styles.textCompleted]}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        {details && <Text style={styles.details}>{details}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 14,
    marginVertical: 6,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  cardCompleted: {
    backgroundColor: '#121212',
    borderLeftColor: '#757575',
    opacity: 0.6,
  },
  checkboxContainer: {
    justifyContent: 'center',
    marginRight: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  checkboxChecked: {
    backgroundColor: '#4CAF50',
  },
  content: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFD700',
    fontSize: 13,
    marginTop: 2,
  },
  details: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 4,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#888',
  }
});