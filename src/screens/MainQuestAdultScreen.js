
 // src/screens/MainQuestAdultScreen.js
import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MAIN_QUEST_ADULT } from '../Data/mainQuestAdult';

const STORAGE_KEY = '@oot_main_quest_adult_v1';

export default function MainQuestAdultScreen() {
  const [completedSteps, setCompletedSteps] = useState({});
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((data) => {
        if (data) setCompletedSteps(JSON.parse(data));
      })
      .catch((error) => console.warn('Error cargando progreso:', error));
  }, []);

  //DE AQUI
 
  // Marcar o desmarcar un solo paso
  const toggleStep = async (stepId) => {
    const updated = {
      ...completedSteps,
      [stepId]: !completedSteps[stepId],
    };

    setCompletedSteps(updated);

    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );
    } catch (error) {
      console.warn('Error guardando progreso:', error);
    }
  };

  // Marcar o desmarcar todos los pasos de una misión
  const toggleAllSteps = async (item) => {
    const steps = item.steps || [];

    if (steps.length === 0) return;

    const allCompleted = steps.every((step, index) => {
      const stepKey =
        typeof step === 'object' && step.id
          ? `${item.id}_${step.id}`
          : `${item.id}_step_${index}`;

      return !!completedSteps[stepKey];
    });

    const updated = { ...completedSteps };
    const newValue = !allCompleted;

    steps.forEach((step, index) => {
      const stepKey =
        typeof step === 'object' && step.id
          ? `${item.id}_${step.id}`
          : `${item.id}_step_${index}`;

      updated[stepKey] = newValue;
    });

    setCompletedSteps(updated);

    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );
    } catch (error) {
      console.warn('Error guardando progreso:', error);
    }
  };

  // Expandir o contraer una misión
  const toggleExpand = (id) => {
    setExpandedSection((current) =>
      current === id ? null : id
    );
  };


  const totalSteps = useMemo(
    () =>
      MAIN_QUEST_ADULT.reduce(
        (total, item) => total + (item.steps?.length || 0),
        0
      ),
    []
  );
  //HASTA AQUI

  const completedCount = useMemo(
    () =>
      MAIN_QUEST_ADULT.reduce(
        (total, item) =>
          total +
          (item.steps || []).filter((step, index) => {
            const stepKey =
              typeof step === 'object' && step.id
                ? `${item.id}_${step.id}`
                : `${item.id}_step_${index}`;

            return !!completedSteps[stepKey];
          }).length,
        0
      ),
    [completedSteps]
  );

  const progress =
    totalSteps > 0 ? completedCount / totalSteps : 0;

  const renderItem = ({ item, index }) => {
    const isExpanded = expandedSection === item.id;
    const steps = item.steps || [];
    const itemCompleted = steps.filter((step, idx) => {
      const stepKey =
        typeof step === 'object' && step.id
          ? `${item.id}_${step.id}`
          : `${item.id}_step_${idx}`;

      return !!completedSteps[stepKey];
    }).length;

    return (
      <View style={[styles.card, isExpanded && styles.cardExpanded]}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => toggleExpand(item.id)}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityState={{ expanded: isExpanded }}
        >
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>
              {String(index + 1).padStart(2, '0')}
            </Text>
          </View>

          <View style={styles.headerInfo}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.location}>📍 {item.location}</Text>
            <Text style={styles.missionProgress}>
              {itemCompleted}/{steps.length} pasos completados
            </Text>
          </View>

          <Text style={styles.expandIcon}>
            {isExpanded ? '−' : '+'}
          </Text>
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.body}>
            <View style={styles.infoPanel}>
              <Text style={styles.sectionLabel}>REQUISITO</Text>
              <Text style={styles.infoText}>
                {item.requirements || 'Ninguno'}
              </Text>

              <View style={styles.divider} />

              <Text style={styles.sectionLabel}>OBJETOS CLAVE</Text>
              <Text style={styles.infoText}>
                {item.keyItems?.length
                  ? item.keyItems.join(' · ')
                  : 'Ninguno'}
              </Text>
            </View>

            
            <View style={styles.stepsHeading}>
              <Text style={styles.stepsHeadingText}>
                RUTA DE LA AVENTURA
              </Text>

              <Text style={styles.stepsCount}>
                {itemCompleted}/{steps.length}
              </Text>
            </View>

            {steps.length > 0 && (
              <TouchableOpacity
                style={styles.toggleAllButton}
                onPress={() => toggleAllSteps(item)}
                activeOpacity={0.8}
              >
                <Text style={styles.toggleAllIcon}>
                  {itemCompleted === steps.length ? '↶' : '✓'}
                </Text>

                <Text style={styles.toggleAllText}>
                  {itemCompleted === steps.length
                    ? 'DESMARCAR TODOS LOS PASOS'
                    : 'MARCAR TODO COMO COMPLETADO'}
                </Text>
              </TouchableOpacity>
            )}


            {steps.map((step, idx) => {
              const stepKey =
                typeof step === 'object' && step.id
                  ? `${item.id}_${step.id}`
                  : `${item.id}_step_${idx}`;

              const isDone = !!completedSteps[stepKey];
              const textContent =
                typeof step === 'object' ? step.text : step;
              const imageUri =
                typeof step === 'object' ? step.image : null;

              return (
                <View key={stepKey} style={styles.stepContainer}>
                  <TouchableOpacity
                    style={styles.stepRow}
                    onPress={() => toggleStep(stepKey)}
                    activeOpacity={0.75}
                  >
                    <View
                      style={[
                        styles.checkbox,
                        isDone && styles.checkboxDone,
                      ]}
                    >
                      {isDone && (
                        <Text style={styles.checkmark}>✓</Text>
                      )}
                    </View>

                    <View style={styles.stepInfo}>
                      <Text style={styles.stepNumber}>
                        PASO {idx + 1}
                      </Text>
                      <Text
                        style={[
                          styles.stepText,
                          isDone && styles.stepTextDone,
                        ]}
                      >
                        {textContent || 'Sin descripción disponible.'}
                      </Text>
                    </View>
                  </TouchableOpacity>

                  {imageUri && (
                    <Image
                      source={
                        typeof imageUri === 'string'
                          ? { uri: imageUri }
                          : imageUri
                      }
                      style={styles.stepImage}
                      resizeMode="contain"
                    />
                  )}
                </View>
              );
            })}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <Text style={styles.eyebrow}>THE LEGEND OF ZELDA</Text>
        <Text style={styles.screenTitle}>ETAPA DE ADULTO</Text>
        <Text style={styles.subtitle}>
          Domina los templos y recupera Hyrule.
        </Text>
      </View>

      <View style={styles.progressPanel}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>PROGRESO DE LA AVENTURA</Text>
          <Text style={styles.progressValue}>
            {completedCount}/{totalSteps}
          </Text>
        </View>

        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${progress * 100}%` },
            ]}
          />
        </View>

        <Text style={styles.progressCaption}>
          {totalSteps > 0
            ? `${Math.round(progress * 100)}% completado`
            : 'Sin pasos registrados'}
        </Text>
      </View>

      <FlatList
        style={styles.list}
        data={MAIN_QUEST_ADULT}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        extraData={completedSteps}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No hay misiones registradas todavía.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  intro: {
    alignItems: 'center',
    paddingVertical: 14,
  },
  eyebrow: {
    color: '#b8a58a',
    fontSize: 10,
    letterSpacing: 3,
    marginBottom: 6,
  },
  screenTitle: {
    color: '#FFD700',
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
  },
  subtitle: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 6,
    textAlign: 'center',
  },
  progressPanel: {
    backgroundColor: '#1b1713',
    borderWidth: 1,
    borderColor: '#654020',
    borderRadius: 10,
    padding: 13,
    marginBottom: 14,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressLabel: {
    color: '#e58a3a',
    fontSize: 11,
    fontWeight: 'bold',
    flex: 1,
  },
  progressValue: {
    color: '#FFD700',
    fontSize: 13,
    fontWeight: 'bold',
  },
  progressTrack: {
    height: 7,
    backgroundColor: '#39291d',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#e58a3a',
    borderRadius: 5,
  },
  progressCaption: {
    color: '#999',
    fontSize: 10,
    marginTop: 7,
    textAlign: 'right',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#191512',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#39291e',
    marginBottom: 11,
    overflow: 'hidden',
  },
  cardExpanded: {
    borderColor: '#a45c2b',
  },
  header: {
    minHeight: 88,
    paddingHorizontal: 12,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#302014',
  },
  numberBadge: {
    width: 39,
    height: 43,
    borderRadius: 8,
    backgroundColor: '#4b2b17',
    borderWidth: 1,
    borderColor: '#a45c2b',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },
  numberText: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 14,
  },
  headerInfo: {
    flex: 1,
    paddingRight: 6,
  },
  title: {
    color: '#f28a35',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  location: {
    color: '#c0b2a7',
    fontSize: 12,
    marginTop: 3,
  },
  missionProgress: {
    color: '#a8c5a6',
    fontSize: 10,
    marginTop: 5,
  },
  expandIcon: {
    color: '#FFD700',
    fontSize: 25,
    width: 27,
    textAlign: 'center',
  },
  body: {
    padding: 13,
    backgroundColor: '#151311',
  },
  infoPanel: {
    backgroundColor: '#201a15',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#453020',
    padding: 12,
  },
  sectionLabel: {
    color: '#e8aa40',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 5,
  },
  infoText: {
    color: '#e0d8d0',
    fontSize: 13,
    lineHeight: 19,
  },
  divider: {
    height: 1,
    backgroundColor: '#493323',
    marginVertical: 10,
  },
  stepsHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
    marginBottom: 5,
  },
  stepsHeadingText: {
    color: '#f28a35',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 0.7,
  },
  stepsCount: {
    color: '#FFD700',
    fontSize: 11,
    fontWeight: 'bold',
  },
  stepContainer: {
    marginTop: 10,
    padding: 11,
    borderRadius: 8,
    backgroundColor: '#1d1b18',
    borderWidth: 1,
    borderColor: '#35302a',
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkbox: {
    width: 21,
    height: 21,
    borderWidth: 1.5,
    borderColor: '#e58a3a',
    borderRadius: 5,
    marginRight: 10,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: {
    backgroundColor: '#138653',
    borderColor: '#00FF88',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  stepInfo: {
    flex: 1,
  },
  stepNumber: {
    color: '#c78b48',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 4,
  },
  stepText: {
    color: '#eee',
    fontSize: 13,
    lineHeight: 20,
  },
  stepTextDone: {
    color: '#858585',
    textDecorationLine: 'line-through',
  },
  stepImage: {
    width: '100%',
    height: 190,
    borderRadius: 7,
    marginTop: 10,
    backgroundColor: '#24211d',
  },
  emptyText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 30,
  },


  toggleAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 8,
    marginBottom: 4,
    backgroundColor: '#302014',
    borderWidth: 1,
    borderColor: '#A45C2B',
    borderRadius: 8,
  },

  toggleAllIcon: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },

  toggleAllText: {
    color: '#FFD700',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    textAlign: 'center',
  },

});
