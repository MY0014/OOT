// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ onNavigate }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        
        <Text style={styles.subTitle}>THE LEGEND OF ZELDA</Text>
        <Text style={styles.mainTitle}>OCARINA OF TIME</Text>
        <Text style={styles.editionText}>Guia Definitiva 100%</Text>

        <View style={styles.divider} />

        {/* Botón para la Etapa de Niño */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => onNavigate('child')} 
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>🌱 HISTORIA (NIÑO)</Text>
        </TouchableOpacity>

        {/* Botón para la Etapa de Adulto */}
        <TouchableOpacity 
          style={[styles.button, { marginTop: 15 }] } 
          onPress={() => onNavigate('adult')} 
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>⚔️ HISTORIA (ADULTO)</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { marginTop: 15 }] } 
          onPress={() => onNavigate('quest')} 
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>📚 CONTENIDO EXTRA</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { marginTop: 15 }] } 
          onPress={() => onNavigate('fairy')} 
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>🧚 GRANDES HADAS</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { marginTop: 15 }] } 
          onPress={() => onNavigate('heart')} 
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>❤️ CORAZONES</Text>
        </TouchableOpacity>


        <TouchableOpacity 
          style={[styles.button, { marginTop: 15 }] } 
          onPress={() => onNavigate('skulltula')} 
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>🕷️ SKULLTULAS DORADAS</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { marginTop: 15 }] } 
          onPress={() => onNavigate('item')} 
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>🕹️ OBJETOS</Text>
        </TouchableOpacity>

      </View>
      
      <Text style={styles.footer}>OOT Guide • 2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
  },
  subTitle: {
    color: '#aaa',
    fontSize: 14,
    letterSpacing: 3,
    marginBottom: 5,
    fontWeight: '600',
  },
  mainTitle: {
    color: '#FFD700',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  editionText: {
    color: '#00FF66',
    fontSize: 14,
    marginTop: 8,
    fontStyle: 'italic',
  },
  divider: {
    width: '60%',
    height: 1,
    backgroundColor: '#333',
    marginVertical: 30,
  },
  button: {
    backgroundColor: '#1f1f1f',
    borderWidth: 2,
    borderColor: '#FFD700',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFD700',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    color: '#555',
    fontSize: 12,
  }
});