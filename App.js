// App.js
import React, { useState } from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import MainQuestChildScreen from './src/screens/MainQuestChildScreen';
import MainQuestAdultScreen from './src/screens/MainQuestAdultScreen';
import MainQuestScreen from './src/screens/MainQuestScreen';
import MainQuestFairy from './src/screens/MainQuestFairy';
import MainQuestHeartScreen from './src/screens/MainQuestHeartScreen';
import MainQuestSkulltulaDoradaScreen from './src/screens/MainQuestSkulltulaDoradaScreen';
import MainQuestItemsScreen from './src/screens/MainQuestItemsScreen';

export default function App() {
  // Guardamos el nombre de la pantalla actual ('home', 'child', 'adult')
  const [currentScreen, setCurrentScreen] = useState('home');
  const [modalVisible, setModalVisible] = useState(false); //modal para el mapa

  // Función auxiliar para obtener el título dinámico de la barra superior
  const getScreenTitle = () => {
    switch (currentScreen) {
      case 'child': return 'Etapa de Niño';
      case 'adult': return 'Etapa de Adulto';
      case 'quest': return 'Contenido extra';
      default: return '';
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
        
        {/* Barra superior visible solo si NO estamos en el Home */}
        {currentScreen !== 'home' && (
          <View style={styles.navBar}>
            <TouchableOpacity onPress={() => setCurrentScreen('home')} style={styles.backButton}>
              <Text style={styles.backButtonText}>◀ Menu Principal</Text>
            </TouchableOpacity>
            
            {/* Aquí el título cambia dinámicamente según la pantalla */}
            <Text style={styles.navTitle}>{getScreenTitle()}</Text>
            
            <View style={{ width: 80 }} />
          </View>
        )}

        {/* Renderizado condicional de pantallas */}
        {currentScreen === 'home' && (
          <HomeScreen 
            onNavigate={(screenName) => setCurrentScreen(screenName)} 
          />
        )}

        {currentScreen === 'child' && <MainQuestChildScreen />}
        
        {currentScreen === 'adult' && <MainQuestAdultScreen />}

        {currentScreen === 'quest' && <MainQuestScreen />}

        {currentScreen === 'fairy' && <MainQuestFairy/>}

        {currentScreen === 'heart' && <MainQuestHeartScreen/>}

        {currentScreen === 'skulltula' && <MainQuestSkulltulaDoradaScreen/>}

        {currentScreen === 'item' && <MainQuestItemsScreen/>}

        {/* INICIO MODAL */}

       


         {/* FIN MODAL */}

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#141414',
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  backButtonText: {
    color: '#00FF66',
    fontSize: 13,
    fontWeight: 'bold',
  },
  navTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});