
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { MAIN_QUEST_CHILD } from '../Data/mainQuestChild';

const STORAGE_KEY = '@oot_main_quest_child_v1';

export default function MainQuestChildScreen() {
  const [completedSteps, setCompletedSteps] = useState({});
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((data) => {
        if (data) setCompletedSteps(JSON.parse(data));
      })
      .catch((error) => {
        console.warn('Error cargando el progreso:', error);
      });
  }, []);

  // Clave única para cada paso, aunque se repitan los ID en la data.
  const getStepKey = (item, step, index) => {
    const stepId =
      typeof step === 'object' && step.id
        ? step.id
        : 'step';

    return `${item.id}_${stepId}_${index}`;
  };

  const getProgress = (item) => {
    const steps = item.steps || [];

    const completed = steps.filter((step, index) => {
      return !!completedSteps[getStepKey(item, step, index)];
    }).length;

    return {
      completed,
      total: steps.length,
    };
  };

  const totalSteps = MAIN_QUEST_CHILD.reduce(
    (sum, item) => sum + (item.steps?.length || 0),
    0
  );

  const completedTotal = MAIN_QUEST_CHILD.reduce(
    (sum, item) => sum + getProgress(item).completed,
    0
  );

  const toggleStep = async (stepKey) => {
    const updated = {
      ...completedSteps,
      [stepKey]: !completedSteps[stepKey],
    };

    setCompletedSteps(updated);

    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );
    } catch (error) {
      console.warn('Error guardando el progreso:', error);
    }
  };


  // Marcar o desmarcar todos los pasos de una misión
  const toggleAllSteps = async (item) => {
    const steps = item.steps || [];

    if (steps.length === 0) return;

    const allCompleted = steps.every((step, index) => {
      const stepKey = getStepKey(item, step, index);
      return !!completedSteps[stepKey];
    });

    const newValue = !allCompleted;
    const updated = { ...completedSteps };

    steps.forEach((step, index) => {
      const stepKey = getStepKey(item, step, index);
      updated[stepKey] = newValue;
    });

    setCompletedSteps(updated);

    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );
    } catch (error) {
      console.warn('Error guardando el progreso:', error);
    }
  };


  const toggleExpand = (id) => {
    setExpandedSection((current) =>
      current === id ? null : id
    );
  };

  const renderItem = ({ item, index }) => {
    const isExpanded = expandedSection === item.id;
    const progress = getProgress(item);

    const isComplete =
      progress.total > 0 &&
      progress.completed === progress.total;

    return (
      <View
        style={[
          styles.card,
          isComplete && styles.cardComplete,
        ]}
      >
        {/* CABECERA DE LA MISIÓN */}
        <TouchableOpacity
          style={styles.cardHeader}
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
            <Text style={styles.cardTitle}>
              {item.title}
            </Text>

            <Text style={styles.location}>
              <Text style={styles.locationPin}>● </Text>
              {item.location || 'Ubicación por definir'}
            </Text>

            {progress.total > 0 && (
              <View style={styles.miniProgressRow}>
                <View style={styles.progressTrack}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${
                          (progress.completed / progress.total) * 100
                        }%`,
                      },
                    ]}
                  />
                </View>

                <Text style={styles.progressCount}>
                  {progress.completed}/{progress.total}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.expandBadge}>
            <Text style={styles.expandIcon}>
              {isExpanded ? '−' : '+'}
            </Text>
          </View>
        </TouchableOpacity>

        {/* CONTENIDO DESPLEGABLE */}
        {isExpanded && (
          <View style={styles.cardBody}>
            <View style={styles.sectionHeading}>
              <Text style={styles.sectionIcon}>✦</Text>
              <Text style={styles.sectionTitle}>
                PREPARACIÓN
              </Text>
            </View>

            <View style={styles.detailsPanel}>
              <Text style={styles.label}>REQUISITO</Text>
              <Text style={styles.detailText}>
                {item.requirements || 'Ninguno'}
              </Text>

              <View style={styles.divider} />

              <Text style={styles.label}>OBJETOS CLAVE</Text>
              <Text style={styles.detailText}>
                {item.keyItems?.length
                  ? item.keyItems.join(', ')
                  : 'Ninguno'}
              </Text>
            </View>

            <View style={styles.routeHeading}>
              <Text style={styles.sectionTitle}>
                RUTA DE LA AVENTURA
              </Text>
              <View style={styles.headingLine} />
            </View>

            {item.steps?.length > 0 && (
              <TouchableOpacity
                style={styles.toggleAllButton}
                onPress={() => toggleAllSteps(item)}
                activeOpacity={0.8}
              >
                <Text style={styles.toggleAllIcon}>
                  {isComplete ? '↶' : '✓'}
                </Text>

                <Text style={styles.toggleAllText}>
                  {isComplete
                    ? 'DESMARCAR TODOS LOS PASOS'
                    : 'MARCAR TODO COMO COMPLETADO'}
                </Text>
              </TouchableOpacity>
            )}


            {(item.steps || []).map((step, idx) => {
              const stepKey = getStepKey(item, step, idx);
              const isDone = !!completedSteps[stepKey];

              const textContent =
                typeof step === 'object' ? step.text : step;

              const imageUri =
                typeof step === 'object' ? step.image : null;

              return (
                <View key={stepKey} style={styles.stepCard}>
                  <View style={styles.stepRow}>
                    <TouchableOpacity
                      style={[
                        styles.checkbox,
                        isDone && styles.checkboxDone,
                      ]}
                      onPress={() => toggleStep(stepKey)}
                      activeOpacity={0.8}
                      accessibilityRole="checkbox"
                      accessibilityState={{ checked: isDone }}
                    >
                      {isDone && (
                        <Text style={styles.checkmark}>✓</Text>
                      )}
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.stepTextContainer}
                      onPress={() => toggleStep(stepKey)}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.stepNumber}>
                        PASO {String(idx + 1).padStart(2, '0')}
                      </Text>

                      <Text
                        style={[
                          styles.stepText,
                          isDone && styles.stepTextDone,
                        ]}
                      >
                        {textContent || 'Continuar la aventura'}
                      </Text>
                    </TouchableOpacity>
                  </View>

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

            {isComplete && (
              <View style={styles.completeBanner}>
                <Text style={styles.completeText}>
                  ✓ MISIÓN COMPLETADA
                </Text>
              </View>
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* INTRODUCCIÓN */}
      <View style={styles.intro}>
        <View style={styles.introDecoration}>
          <View style={styles.decorationLine} />
          <Text style={styles.triforce}>▲</Text>
          <View style={styles.decorationLine} />
        </View>

        <Text style={styles.introTitle}>
          TU AVENTURA COMIENZA
        </Text>

        <Text style={styles.introSubtitle}>
          Explora Hyrule y sigue los pasos del héroe.
        </Text>
      </View>

      {/* PROGRESO GENERAL */}
      <View style={styles.progressPanel}>
        <View style={styles.progressHeader}>
          <View>
            <Text style={styles.progressTitle}>
              PROGRESO DE LA HISTORIA
            </Text>
            <Text style={styles.progressSubtitle}>
              Etapa de niño
            </Text>
          </View>

          <Text style={styles.progressTotal}>
            {completedTotal}/{totalSteps}
          </Text>
        </View>

        <View style={styles.progressTrackLarge}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${
                  totalSteps
                    ? (completedTotal / totalSteps) * 100
                    : 0
                }%`,
              },
            ]}
          />
        </View>
      </View>

      {/* LISTA DE MISIONES */}
      <FlatList
        style={styles.list}
        data={MAIN_QUEST_CHILD}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
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
    backgroundColor: '#0b100d',
    paddingHorizontal: 12,
    paddingTop: 10,
  },

  intro: {
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 14,
  },

  introDecoration: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },

  decorationLine: {
    width: 45,
    height: 1,
    backgroundColor: '#8c722c',
  },

  triforce: {
    color: '#FFD700',
    fontSize: 17,
  },

  introTitle: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    textAlign: 'center',
  },

  introSubtitle: {
    color: '#aab6ac',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },

  progressPanel: {
    backgroundColor: '#141c16',
    borderWidth: 1,
    borderColor: '#344a37',
    borderRadius: 10,
    padding: 13,
    marginBottom: 14,
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },

  progressTitle: {
    color: '#00FF88',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  progressSubtitle: {
    color: '#aab6ac',
    fontSize: 11,
    marginTop: 4,
  },

  progressTotal: {
    color: '#FFD700',
    fontSize: 17,
    fontWeight: 'bold',
  },

  progressTrack: {
    height: 5,
    flex: 1,
    backgroundColor: '#29332b',
    borderRadius: 5,
    overflow: 'hidden',
  },

  progressTrackLarge: {
    height: 7,
    backgroundColor: '#29332b',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 11,
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#00FF88',
    borderRadius: 5,
  },

  list: {
    flex: 1,
  },

  listContent: {
    paddingBottom: 18,
  },

  card: {
    backgroundColor: '#131914',
    borderWidth: 1,
    borderColor: '#344a37',
    borderRadius: 11,
    marginBottom: 11,
    overflow: 'hidden',
  },

  cardComplete: {
    borderColor: '#00FF88',
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 11,
    backgroundColor: '#151d17',
  },

  numberBadge: {
    width: 39,
    height: 45,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#92752b',
    backgroundColor: '#27281b',
    alignItems: 'center',
    justifyContent: 'center',
  },

  numberText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
  },

  headerInfo: {
    flex: 1,
  },

  cardTitle: {
    color: '#00FF88',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
  },

  location: {
    color: '#aab6ac',
    fontSize: 11,
    marginTop: 4,
  },

  locationPin: {
    color: '#FFD700',
    fontSize: 9,
  },

  miniProgressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },

  progressCount: {
    color: '#FFD700',
    fontSize: 10,
    fontWeight: 'bold',
  },

  expandBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#78672c',
    justifyContent: 'center',
    alignItems: 'center',
  },

  expandIcon: {
    color: '#FFD700',
    fontSize: 21,
    lineHeight: 23,
  },

  cardBody: {
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#344a37',
  },

  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 9,
  },

  sectionIcon: {
    color: '#FFD700',
    fontSize: 17,
  },

  sectionTitle: {
    color: '#FFD700',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 0.8,
  },

  detailsPanel: {
    backgroundColor: '#19211b',
    borderWidth: 1,
    borderColor: '#303e32',
    borderRadius: 8,
    padding: 12,
  },

  label: {
    color: '#00FF88',
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    letterSpacing: 0.5,
  },

  detailText: {
    color: '#e1e5e1',
    fontSize: 12,
    lineHeight: 19,
  },

  divider: {
    height: 1,
    backgroundColor: '#354137',
    marginVertical: 10,
  },

  routeHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 18,
    marginBottom: 10,
  },

  headingLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#6b5928',
  },

  stepCard: {
    backgroundColor: '#151c17',
    borderWidth: 1,
    borderColor: '#2f4032',
    borderRadius: 8,
    padding: 11,
    marginBottom: 9,
  },

  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },

  checkbox: {
    width: 21,
    height: 21,
    borderWidth: 1.5,
    borderColor: '#00FF88',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },

  checkboxDone: {
    backgroundColor: '#00FF88',
  },

  checkmark: {
    color: '#0b100d',
    fontSize: 13,
    fontWeight: 'bold',
  },

  stepTextContainer: {
    flex: 1,
  },

  stepNumber: {
    color: '#c6a83d',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    marginBottom: 4,
  },

  stepText: {
    color: '#e4e8e4',
    fontSize: 13,
    lineHeight: 20,
  },

  stepTextDone: {
    color: '#7d8980',
    textDecorationLine: 'line-through',
  },

  stepImage: {
    width: '100%',
    height: 185,
    backgroundColor: '#0d120e',
    borderRadius: 7,
    marginTop: 11,
  },

  completeBanner: {
    borderWidth: 1,
    borderColor: '#00FF88',
    backgroundColor: '#142b1b',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 6,
  },

  completeText: {
    color: '#00FF88',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.6,
  },

  emptyText: {
    color: '#aab6ac',
    textAlign: 'center',
    padding: 24,
  },

  toggleAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 4,
    marginBottom: 8,
    backgroundColor: '#192A1D',
    borderWidth: 1,
    borderColor: '#398052',
    borderRadius: 8,
  },

  toggleAllIcon: {
    color: '#00FF88',
    fontSize: 16,
    fontWeight: 'bold',
  },

  toggleAllText: {
    color: '#00FF88',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    textAlign: 'center',
  },

});
