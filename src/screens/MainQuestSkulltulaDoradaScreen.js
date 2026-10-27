
import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { MAIN_QUEST_SKULLTULA } from '../Data/mainQuestSkulltulasDoradas';

const STORAGE_KEY = '@oot_main_quest_skulltula_v1';

export default function MainQuestSkulltulaDoradaScreen() {
  const [completedSteps, setCompletedSteps] = useState({});
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapVisible, setMapVisible] = useState(false);

  // Cargar progreso guardado.
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((data) => {
        if (data) {
          setCompletedSteps(JSON.parse(data));
        }
      })
      .catch((error) => {
        console.warn('Error al cargar progreso:', error);
      });
  }, []);

  // Mantiene el formato de claves de progreso que ya utilizabas.
 const getStepKey = (item, step, index) => {
  const stepId =
    typeof step === 'object' && step.id
      ? step.id
      : `step_${index}`;

  return `${item.id}_${stepId}_${index}`;
};

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
      console.warn('Error al guardar progreso:', error);
    }
  };

  const toggleExpand = (id) => {
    setExpandedSection((current) => current === id ? null : id);
  };

  // Agrupar TODAS las skulltulas por ubicación.
  // Las ubicaciones repetidas no generan regiones duplicadas.
  const regions = useMemo(() => {
    const grouped = new Map();

    MAIN_QUEST_SKULLTULA.forEach((item) => {
      const location = item.location || 'Otras ubicaciones';

      if (!grouped.has(location)) {
        grouped.set(location, []);
      }

      grouped.get(location).push(item);
    });

    return Array.from(grouped.entries()).map(
      ([location, items]) => ({
        id: location,
        location,
        items,
      })
    );
  }, []);

  const selectedRegion = regions.find(
    (region) => region.location === selectedLocation
  );

  // Una skulltula se considera completada cuando todos
  // sus pasos tienen la casilla marcada.
  const isItemCompleted = (item) => {
    const steps = item.steps || [];

    return (
      steps.length > 0 &&
      steps.every((step, index) =>
        !!completedSteps[getStepKey(item, step, index)]
      )
    );
  };

  const completedSkulltulas = MAIN_QUEST_SKULLTULA.filter(
    isItemCompleted
  ).length;

  const totalSkulltulas = MAIN_QUEST_SKULLTULA.length;

  const renderRegion = ({ item }) => {
    const completed = item.items.filter(isItemCompleted).length;
    const total = item.items.length;
    const percentage = total ? (completed / total) * 100 : 0;

    return (
      <TouchableOpacity
        style={styles.regionCard}
        activeOpacity={0.8}
        onPress={() => {
          setSelectedLocation(item.location);
          setExpandedSection(null);
        }}
      >
        <View style={styles.regionIcon}>
          <Text style={styles.regionEmoji}>🕷️</Text>
        </View>

        <Text style={styles.regionTitle}>
          {item.location}
        </Text>

        <Text style={styles.regionCount}>
          {total} {total === 1 ? 'SKULLTULA' : 'SKULLTULAS'}
        </Text>

        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${percentage}%` },
            ]}
          />
        </View>

        <Text style={styles.regionProgress}>
          {completed}/{total} encontradas
        </Text>

        <View style={styles.exploreButton}>
          <Text style={styles.exploreText}>
            VER UBICACIONES ›
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSkulltula = ({ item, index }) => {
    const isExpanded = expandedSection === item.id;
    const steps = item.steps || [];
    const completed = steps.filter((step, idx) =>
      !!completedSteps[getStepKey(item, step, idx)]
    ).length;

    return (
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => toggleExpand(item.id)}
          activeOpacity={0.8}
        >
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>
              {String(index + 1).padStart(2, '0')}
            </Text>
          </View>

          <View style={styles.headerInfo}>
            <Text style={styles.title}>
              {item.title}
            </Text>

            <Text style={styles.location}>
              📍 {item.location}
            </Text>

            <Text style={styles.missionProgress}>
              {isItemCompleted(item)
                ? '✓ COMPLETADA'
                : `${completed}/${steps.length} pasos completados`}
            </Text>
          </View>

          <Text style={styles.expandIcon}>
            {isExpanded ? '−' : '+'}
          </Text>
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.body}>
            <View style={styles.infoPanel}>
              <Text style={styles.sectionLabel}>
                REQUISITO
              </Text>

              <Text style={styles.infoText}>
                {item.requirements || 'Ninguno'}
              </Text>

              <View style={styles.divider} />

              <Text style={styles.sectionLabel}>
                OBJETOS CLAVE
              </Text>

              <Text style={styles.infoText}>
                {item.keyItems?.length
                  ? item.keyItems.join(' · ')
                  : 'Ninguno'}
              </Text>
            </View>

            <View style={styles.stepsHeading}>
              <Text style={styles.stepsHeadingText}>
                CÓMO ENCONTRARLA
              </Text>

              <Text style={styles.stepsCount}>
                {completed}/{steps.length}
              </Text>
            </View>

            {steps.map((step, idx) => {
              const stepKey = getStepKey(item, step, idx);
              const isDone = !!completedSteps[stepKey];

              const textContent =
                typeof step === 'object' ? step.text : step;

              const imageUri =
                typeof step === 'object' ? step.image : null;

              return (
                <View key={`${item.id}_${idx}`} style={styles.stepContainer}>
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
      {/* BOTÓN DE TABLA DE RECOMPENSAS */}
      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => setMapVisible(true)}
        activeOpacity={0.8}
      >
        <Text style={styles.mapButtonText}>
          🏆 TABLA DE RECOMPENSAS
        </Text>
      </TouchableOpacity>

      {/* ENCABEZADO DE LA COLECCIÓN */}
      <View style={styles.collectionPanel}>
        <View style={styles.collectionTop}>
          <View style={styles.trophyBadge}>
            <Text style={styles.trophyEmoji}>🕷️</Text>
          </View>

          <View style={styles.collectionInfo}>
            <Text style={styles.collectionTitle}>
              {selectedRegion
                ? selectedRegion.location
                : 'Skulltulas Doradas'}
            </Text>

            <Text style={styles.collectionSubtitle}>
              {selectedRegion
                ? `${selectedRegion.items.length} ubicaciones en esta región`
                : 'Explora las regiones de Hyrule'}
            </Text>
          </View>
        </View>

        <View style={styles.totalProgressRow}>
          <Text style={styles.totalProgressLabel}>
            PROGRESO TOTAL
          </Text>

          <Text style={styles.totalProgressValue}>
            {completedSkulltulas}/{totalSkulltulas}
          </Text>
        </View>

        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${
                  totalSkulltulas
                    ? (completedSkulltulas / totalSkulltulas) * 100
                    : 0
                }%`,
              },
            ]}
          />
        </View>
      </View>

      {/* NAVEGACIÓN PARA REGRESAR A LAS REGIONES */}
      {selectedRegion && (
        <TouchableOpacity
          style={styles.backRegionButton}
          onPress={() => {
            setSelectedLocation(null);
            setExpandedSection(null);
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.backRegionText}>
            ‹ TODAS LAS REGIONES
          </Text>
        </TouchableOpacity>
      )}

      {/* VISTA DE REGIONES O VISTA DE SKULLTULAS */}
      <FlatList
        key={selectedRegion ? 'skulltulas' : 'regions'}
        style={styles.list}
        data={
          selectedRegion
            ? selectedRegion.items
            : regions
        }
        keyExtractor={(item) => item.id}
        renderItem={
          selectedRegion
            ? renderSkulltula
            : renderRegion
        }
        numColumns={selectedRegion ? 1 : 2}
        columnWrapperStyle={
          selectedRegion ? undefined : styles.regionRow
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        extraData={completedSteps}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No hay skulltulas registradas.
          </Text>
        }
      />

      {/* MODAL DE RECOMPENSAS */}
      <Modal
        visible={mapVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMapVisible(false)}
        statusBarTranslucent
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                🏆 Tabla de Recompensas
              </Text>

              <Pressable
                style={styles.closeButton}
                onPress={() => setMapVisible(false)}
                accessibilityRole="button"
                accessibilityLabel="Cerrar tabla de recompensas"
                hitSlop={8}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </Pressable>
            </View>

            <ScrollView
              style={styles.mapScroll}
              contentContainerStyle={styles.mapContent}
              showsVerticalScrollIndicator
            >
              <Image
                source={require('../../assets/recompensas.png')}
                style={styles.mapImage}
                resizeMode="contain"
                accessibilityLabel="Tabla de recompensas de Skulltulas Doradas"
              />
            </ScrollView>

            <Text style={styles.mapFooter}>
              OCARINA OF TIME • RECOMPENSAS
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    paddingHorizontal: 12,
    paddingTop: 12,
  },

  mapButton: {
    backgroundColor: '#202020',
    borderWidth: 1.5,
    borderColor: '#FFD700',
    borderRadius: 9,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  mapButtonText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.7,
    textAlign: 'center',
  },

  collectionPanel: {
    backgroundColor: '#1d171f',
    borderWidth: 1,
    borderColor: '#63316f',
    borderRadius: 12,
    padding: 13,
    marginBottom: 12,
  },

  collectionTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  trophyBadge: {
    width: 46,
    height: 46,
    backgroundColor: '#38203e',
    borderWidth: 1,
    borderColor: '#7d4390',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  trophyEmoji: {
    fontSize: 23,
  },

  collectionInfo: {
    flex: 1,
  },

  collectionTitle: {
    color: '#e0a1f5',
    fontSize: 17,
    fontWeight: 'bold',
  },

  collectionSubtitle: {
    color: '#b6a8ba',
    fontSize: 11,
    marginTop: 4,
  },

  totalProgressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },

  totalProgressLabel: {
    color: '#c6b3cc',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.8,
  },

  totalProgressValue: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: 'bold',
  },

  progressTrack: {
    height: 6,
    backgroundColor: '#403044',
    borderRadius: 5,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: 5,
  },

  list: {
    flex: 1,
  },

  listContent: {
    paddingBottom: 24,
  },

  regionRow: {
    justifyContent: 'space-between',
    gap: 10,
  },

  regionCard: {
    flex: 1,
    minWidth: 0,
    backgroundColor: '#1b171d',
    borderWidth: 1,
    borderColor: '#62406d',
    borderRadius: 11,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },

  regionIcon: {
    width: 45,
    height: 45,
    backgroundColor: '#322039',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 9,
  },

  regionEmoji: {
    fontSize: 24,
  },

  regionTitle: {
    color: '#f0d8fa',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    minHeight: 34,
    textAlignVertical: 'center',
  },

  regionCount: {
    color: '#d5a5e6',
    fontSize: 9,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 6,
  },

  regionProgress: {
    color: '#b8b0bc',
    fontSize: 10,
    marginTop: 6,
    textAlign: 'center',
  },

  exploreButton: {
    borderTopWidth: 1,
    borderTopColor: '#49354f',
    width: '100%',
    marginTop: 10,
    paddingTop: 9,
    alignItems: 'center',
  },

  exploreText: {
    color: '#FFD700',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    textAlign: 'center',
  },

  backRegionButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginBottom: 6,
  },

  backRegionText: {
    color: '#00FF88',
    fontSize: 12,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#171318',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#472750',
    marginBottom: 10,
    overflow: 'hidden',
  },

  header: {
    minHeight: 86,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b1048',
  },

  numberBadge: {
    width: 36,
    height: 40,
    borderRadius: 7,
    backgroundColor: '#532362',
    borderWidth: 1,
    borderColor: '#9349a7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  numberText: {
    color: '#f0b5ff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  headerInfo: {
    flex: 1,
  },

  title: {
    color: '#d45aff',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
  },

  location: {
    color: '#c3b3ca',
    fontSize: 11,
    marginTop: 3,
  },

  missionProgress: {
    color: '#bfa6c9',
    fontSize: 10,
    marginTop: 5,
  },

  expandIcon: {
    color: '#FFD700',
    fontSize: 24,
    width: 25,
    textAlign: 'center',
    marginLeft: 5,
  },

  body: {
    padding: 12,
    backgroundColor: '#151217',
  },

  infoPanel: {
    backgroundColor: '#211925',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#44334a',
    padding: 11,
  },

  sectionLabel: {
    color: '#FFD700',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    marginBottom: 5,
  },

  infoText: {
    color: '#e2dce5',
    fontSize: 13,
    lineHeight: 19,
  },

  divider: {
    height: 1,
    backgroundColor: '#49354f',
    marginVertical: 10,
  },

  stepsHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 5,
  },

  stepsHeadingText: {
    color: '#e0a1f5',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.7,
  },

  stepsCount: {
    color: '#FFD700',
    fontSize: 11,
    fontWeight: 'bold',
  },

  stepContainer: {
    marginTop: 9,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#201b23',
    borderWidth: 1,
    borderColor: '#38303d',
  },

  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  checkbox: {
    width: 21,
    height: 21,
    borderWidth: 1.5,
    borderColor: '#d45aff',
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
    color: '#c28ad4',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    marginBottom: 4,
  },

  stepText: {
    color: '#eee',
    fontSize: 13,
    lineHeight: 20,
  },

  stepTextDone: {
    color: '#8c8490',
    textDecorationLine: 'line-through',
  },

  stepImage: {
    width: '100%',
    height: 190,
    borderRadius: 7,
    marginTop: 10,
    backgroundColor: '#242024',
  },

  emptyText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 30,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.88)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },

  modalContainer: {
    width: '100%',
    height: '85%',
    backgroundColor: '#151515',
    borderWidth: 1.5,
    borderColor: '#FFD700',
    borderRadius: 12,
    overflow: 'hidden',
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },

  modalTitle: {
    color: '#FFD700',
    fontSize: 17,
    fontWeight: 'bold',
    flex: 1,
  },

  closeButton: {
    padding: 6,
    marginLeft: 8,
  },

  closeButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  mapScroll: {
    flex: 1,
  },

  mapContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },

  mapImage: {
    width: '100%',
    aspectRatio: 1,
  },

  mapFooter: {
    color: '#888',
    fontSize: 10,
    letterSpacing: 1,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
