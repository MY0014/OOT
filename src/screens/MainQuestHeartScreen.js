
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { MAIN_QUEST_HEART } from '../Data/mainQuestHeart';

const STORAGE_KEY = '@oot_main_quest_heart_v1';

export default function MainQuestHeartScreen() {
  const [completedSteps, setCompletedSteps] = useState({});
  const [expandedSection, setExpandedSection] = useState(null);
  const [mapVisible, setMapVisible] = useState(false);

  //para el filtrado y barra de busqueda
  const [heartFilter, setHeartFilter] = useState('all');
  const [searchText, setSearchText] = useState(''); 

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((data) => {
        if (data) setCompletedSteps(JSON.parse(data));
      })
      .catch((error) => {
        console.warn('Error cargando el progreso:', error);
      });
  }, []);

  const getStepKey = (item, step, index) =>
    `${item.id}_${typeof step === 'object' && step.id ? step.id : 'step'}_${index}`;

  const getProgress = (item) => {
    const steps = item.steps || [];
    const completed = steps.filter((step, index) =>
      completedSteps[getStepKey(item, step, index)]
    ).length;

    return { completed, total: steps.length };
  };

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

  const toggleExpand = (id) => {
    setExpandedSection((current) => current === id ? null : id);
  };

  const totalSteps = MAIN_QUEST_HEART.reduce(
    (total, item) => total + (item.steps?.length || 0),
    0
  );

  const completedTotal = MAIN_QUEST_HEART.reduce(
    (total, item) => total + getProgress(item).completed,
    0
  );

  //FILTRADO Y BARRA DE BUSQUEDA

  const filteredHearts = MAIN_QUEST_HEART.filter((item) => {
    const progress = getProgress(item);

    const isComplete =
      progress.total > 0 &&
      progress.completed === progress.total;

    const matchesFilter =
      heartFilter === 'all' ||
      (heartFilter === 'pending' && !isComplete) ||
      (heartFilter === 'completed' && isComplete);

    const query = searchText.trim().toLowerCase();

    const matchesSearch =
      !query ||
      (item.title || '').toLowerCase().includes(query) ||
      (item.location || '').toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });


  const renderItem = ({ item, index }) => {
    const isExpanded = expandedSection === item.id;
    const progress = getProgress(item);
    const isComplete =
      progress.total > 0 && progress.completed === progress.total;

    return (
      <View style={[
        styles.card,
        isComplete && styles.cardComplete,
      ]}>
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
            <Text style={styles.title}>
              {item.title}
            </Text>

            <Text style={styles.location}>
              📍 {item.location || 'Ubicación por definir'}
            </Text>

            {progress.total > 0 && (
              <View style={styles.progressRow}>
                <View style={styles.progressTrack}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${(progress.completed / progress.total) * 100}%`,
                      },
                    ]}
                  />
                </View>

                <Text style={styles.progressLabel}>
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
                  ? item.keyItems.join(', ')
                  : 'Ninguno'}
              </Text>
            </View>

            <View style={styles.stepsHeading}>
              <Text style={styles.stepsHeadingText}>
                RUTA DE OBTENCIÓN
              </Text>
              <View style={styles.headingLine} />
            </View>

            {(item.steps || []).map((step, idx) => {
              const stepKey = getStepKey(item, step, idx);
              const isDone = !!completedSteps[stepKey];

              const textContent =
                typeof step === 'object' ? step.text : step;

              const imageUri =
                typeof step === 'object' ? step.image : null;

              return (
                <View key={stepKey} style={styles.stepContainer}>
                  <View style={styles.stepRow}>
                    <TouchableOpacity
                      style={[
                        styles.checkbox,
                        isDone && styles.checkboxDone,
                      ]}
                      onPress={() => toggleStep(stepKey)}
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
                      <Text style={[
                        styles.stepText,
                        isDone && styles.stepTextDone,
                      ]}>
                        {textContent || `Paso ${idx + 1}`}
                      </Text>
                    </TouchableOpacity>

                    <Text style={styles.stepNumber}>
                      {String(idx + 1).padStart(2, '0')}
                    </Text>
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

            {progress.total > 0 &&
              progress.completed === progress.total && (
                <View style={styles.completeBanner}>
                  <Text style={styles.completeText}>
                    ✓ CORAZÓN COMPLETADO
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
      {/* ENCABEZADO */}
      <View style={styles.pageHeader}>
        <Text style={styles.eyebrow}>
          THE LEGEND OF ZELDA
        </Text>

        <Text style={styles.pageTitle}>
          CORAZONES
        </Text>

        <Text style={styles.subtitle}>
          Encuentra cada pieza de corazón y completa tu aventura.
        </Text>
      </View>

      {/* BOTÓN DEL MAPA */}
      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => setMapVisible(true)}
        activeOpacity={0.8}
      >
        <Text style={styles.mapIcon}>🗺️</Text>

        <View style={styles.mapButtonInfo}>
          <Text style={styles.mapButtonText}>MAPA HYRULE</Text>
          <Text style={styles.mapSubtext}>
            Consulta las ubicaciones
          </Text>
        </View>

        <Text style={styles.mapArrow}>›</Text>
      </TouchableOpacity>

      {/* RESUMEN DE PROGRESO */}
      <View style={styles.summaryCard}>
        <Text style={styles.heartIcon}>♥</Text>

        <View style={styles.summaryInfo}>
          <View style={styles.summaryTitleRow}>
            <Text style={styles.summaryTitle}>
              PROGRESO DE LA GUÍA
            </Text>

            <Text style={styles.summaryCount}>
              {completedTotal}/{totalSteps}
            </Text>
          </View>

          <View style={styles.progressTrack}>
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
      </View>


  {/* FILTROS DE PIEZAS DE CORAZÓN */}
  <View style={styles.filterContainer}>
    <Text style={styles.filterHeading}>
      FILTRAR PIEZAS
    </Text>

    <View style={styles.filterButtons}>
      {[
        { id: 'all', title: 'Todas' },
        { id: 'pending', title: 'Pendientes' },
        { id: 'completed', title: 'Completadas' },
      ].map((filter) => {
        const active = heartFilter === filter.id;

        return (
          <TouchableOpacity
            key={filter.id}
            style={[
              styles.filterButton,
              active && styles.filterButtonActive,
            ]}
            onPress={() => setHeartFilter(filter.id)}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
          >
            <Text
              style={[
                styles.filterButtonText,
                active && styles.filterButtonTextActive,
              ]}
            >
              {filter.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>

    <View style={styles.searchContainer}>
      <Text style={styles.searchIcon}>⌕</Text>

      <TextInput
        style={styles.searchInput}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Buscar por nombre o ubicación..."
        placeholderTextColor="#858585"
        autoCorrect={false}
        returnKeyType="search"
        accessibilityLabel="Buscar piezas de corazón"
      />

      {searchText.length > 0 && (
        <TouchableOpacity
          onPress={() => setSearchText('')}
          style={styles.clearSearchButton}
          accessibilityRole="button"
          accessibilityLabel="Limpiar búsqueda"
        >
          <Text style={styles.clearSearchText}>✕</Text>
        </TouchableOpacity>
      )}
    </View>

    <Text style={styles.resultsText}>
      Mostrando {filteredHearts.length} de {MAIN_QUEST_HEART.length} piezas
    </Text>
  </View>


      {/* LISTADO DE PIEZAS DE CORAZÓN */}
      <FlatList
        style={styles.list}
        data={filteredHearts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
            <View style={styles.emptyFilter}>
              <Text style={styles.emptyFilterIcon}>♡</Text>

              <Text style={styles.emptyText}>
                {searchText.trim()
                  ? 'No se encontraron piezas con esa búsqueda.'
                  : heartFilter === 'completed'
                    ? 'Todavía no has completado ninguna pieza.'
                    : heartFilter === 'pending'
                      ? 'No hay piezas pendientes.'
                      : 'Todavía no hay piezas de corazón registradas.'}
              </Text>

              {(searchText.length > 0 || heartFilter !== 'all') && (
                <TouchableOpacity
                  style={styles.resetFilterButton}
                  onPress={() => {
                    setHeartFilter('all');
                    setSearchText('');
                  }}
                >
                  <Text style={styles.resetFilterText}>
                    LIMPIAR FILTROS
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          }
      />

      {/* MODAL MAPA HYRULE */}
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
              <View style={styles.modalTitleContainer}>
                <Text style={styles.modalTitle}>
                  MAPA HYRULE
                </Text>
                <Text style={styles.modalSubtitle}>
                  Ocarina of Time
                </Text>
              </View>

              <Pressable
                style={styles.closeButton}
                onPress={() => setMapVisible(false)}
                accessibilityRole="button"
                accessibilityLabel="Cerrar mapa"
                hitSlop={8}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </Pressable>
            </View>

            <ScrollView
              style={styles.mapScroll}
              contentContainerStyle={styles.mapContent}
              showsVerticalScrollIndicator
              showsHorizontalScrollIndicator
            >
              <Image
                source={require('../../assets/mapa.png')}
                style={styles.mapImage}
                resizeMode="contain"
                accessibilityLabel="Mapa de Hyrule con ubicaciones de corazones"
              />
            </ScrollView>

            <Text style={styles.mapFooter}>
              MAPA DE UBICACIONES • HYRULE
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
    backgroundColor: '#090d0c',
    paddingHorizontal: 12,
    paddingTop: 8,
  },

  pageHeader: {
    alignItems: 'center',
    paddingVertical: 8,
  },

  eyebrow: {
    color: '#aaa',
    fontSize: 10,
    letterSpacing: 3,
  },

  pageTitle: {
    color: '#FFD700',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },

  subtitle: {
    color: '#bbb',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 8,
  },

  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#151b18',
    borderWidth: 1.5,
    borderColor: '#FFD700',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 11,
    marginBottom: 10,
  },

  mapIcon: {
    fontSize: 25,
    marginRight: 12,
  },

  mapButtonInfo: {
    flex: 1,
  },

  mapButtonText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  mapSubtext: {
    color: '#aaa',
    fontSize: 11,
    marginTop: 3,
  },

  mapArrow: {
    color: '#00FF99',
    fontSize: 28,
  },

  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111613',
    borderWidth: 1,
    borderColor: '#393525',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },

  heartIcon: {
    color: '#F05A78',
    fontSize: 32,
    marginRight: 12,
  },

  summaryInfo: {
    flex: 1,
  },

  summaryTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 6,
  },

  summaryTitle: {
    color: '#00FF99',
    fontSize: 11,
    fontWeight: 'bold',
    flex: 1,
  },

  summaryCount: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: 'bold',
  },

  progressTrack: {
    height: 6,
    backgroundColor: '#2c332e',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 8,
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#00FF99',
    borderRadius: 5,
  },

  list: {
    flex: 1,
  },

  listContent: {
    paddingBottom: 16,
  },

  card: {
    backgroundColor: '#111613',
    borderWidth: 1,
    borderColor: '#594323',
    borderRadius: 11,
    marginBottom: 10,
    overflow: 'hidden',
  },

  cardComplete: {
    borderColor: '#00FF99',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 10,
    backgroundColor: '#151b18',
  },

  numberBadge: {
    width: 37,
    height: 43,
    borderRadius: 8,
    backgroundColor: '#39252b',
    borderWidth: 1,
    borderColor: '#B94764',
    alignItems: 'center',
    justifyContent: 'center',
  },

  numberText: {
    color: '#F05A78',
    fontSize: 14,
    fontWeight: 'bold',
  },

  headerInfo: {
    flex: 1,
  },

  title: {
    color: '#FFD700',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
  },

  location: {
    color: '#bbb',
    fontSize: 11,
    marginTop: 4,
    lineHeight: 16,
  },

  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },

  progressLabel: {
    color: '#00FF99',
    fontSize: 10,
    fontWeight: 'bold',
  },

  expandBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#6A5B2B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  expandIcon: {
    color: '#FFD700',
    fontSize: 21,
    lineHeight: 23,
  },

  body: {
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#3b3321',
  },

  infoPanel: {
    backgroundColor: '#171c19',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#393b30',
    padding: 12,
  },

  sectionLabel: {
    color: '#FFD700',
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 5,
    letterSpacing: 0.5,
  },

  infoText: {
    color: '#ddd',
    fontSize: 12,
    lineHeight: 19,
  },

  divider: {
    height: 1,
    backgroundColor: '#393b30',
    marginVertical: 10,
  },

  stepsHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 18,
    marginBottom: 8,
  },

  stepsHeadingText: {
    color: '#FFD700',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  headingLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#594323',
  },

  stepContainer: {
    backgroundColor: '#151b18',
    borderWidth: 1,
    borderColor: '#303b33',
    borderRadius: 8,
    padding: 10,
    marginBottom: 9,
  },

  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 9,
  },

  checkbox: {
    width: 21,
    height: 21,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#00FF99',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },

  checkboxDone: {
    backgroundColor: '#00FF99',
  },

  checkmark: {
    color: '#07110c',
    fontSize: 13,
    fontWeight: 'bold',
  },

  stepTextContainer: {
    flex: 1,
  },

  stepText: {
    color: '#eee',
    fontSize: 13,
    lineHeight: 20,
  },

  stepTextDone: {
    color: '#858e88',
    textDecorationLine: 'line-through',
  },

  stepNumber: {
    color: '#BFA32A',
    fontSize: 10,
    fontWeight: 'bold',
  },

  stepImage: {
    width: '100%',
    height: 175,
    borderRadius: 7,
    marginTop: 10,
    backgroundColor: '#090d0c',
  },

  completeBanner: {
    backgroundColor: '#103326',
    borderColor: '#00FF99',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 8,
  },

  completeText: {
    color: '#00FF99',
    fontSize: 12,
    fontWeight: 'bold',
  },

  emptyText: {
    color: '#aaa',
    textAlign: 'center',
    padding: 25,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },

  modalContainer: {
    width: '100%',
    height: '85%',
    backgroundColor: '#101512',
    borderWidth: 1.5,
    borderColor: '#FFD700',
    borderRadius: 12,
    overflow: 'hidden',
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#393b30',
  },

  modalTitleContainer: {
    flex: 1,
  },

  modalTitle: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },

  modalSubtitle: {
    color: '#aaa',
    fontSize: 11,
    marginTop: 3,
  },

  closeButton: {
    padding: 5,
    marginLeft: 10,
  },

  closeButtonText: {
    color: '#fff',
    fontSize: 23,
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
    aspectRatio: 659 / 441,
  },

  mapFooter: {
    color: '#999',
    fontSize: 10,
    letterSpacing: 1,
    textAlign: 'center',
    paddingVertical: 10,
  },


  filterContainer: {
    backgroundColor: '#111613',
    borderWidth: 1,
    borderColor: '#393525',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
  },

  filterHeading: {
    color: '#00FF99',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    marginBottom: 9,
  },

  filterButtons: {
    flexDirection: 'row',
    gap: 6,
  },

  filterButton: {
    flex: 1,
    minWidth: 0,
    minHeight: 37,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 3,
    paddingVertical: 8,
    backgroundColor: '#202720',
    borderWidth: 1,
    borderColor: '#39443C',
    borderRadius: 7,
  },

  filterButtonActive: {
    backgroundColor: '#FFD700',
    borderColor: '#FFD700',
  },

  filterButtonText: {
    color: '#CCCCCC',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  filterButtonTextActive: {
    color: '#111111',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#090D0C',
    borderWidth: 1,
    borderColor: '#393B30',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    minHeight: 42,
  },

  searchIcon: {
    color: '#FFD700',
    fontSize: 24,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    minWidth: 0,
    color: '#EEEEEE',
    fontSize: 12,
    paddingVertical: 9,
    outlineStyle: 'none',
  },

  clearSearchButton: {
    paddingHorizontal: 7,
    paddingVertical: 5,
  },

  clearSearchText: {
    color: '#00FF99',
    fontSize: 16,
    fontWeight: 'bold',
  },

  resultsText: {
    color: '#999999',
    fontSize: 10,
    marginTop: 9,
  },

  emptyFilter: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 28,
    backgroundColor: '#111613',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#393525',
  },

  emptyFilterIcon: {
    color: '#FFD700',
    fontSize: 32,
    marginBottom: 8,
  },

  resetFilterButton: {
    marginTop: 14,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 7,
  },

  resetFilterText: {
    color: '#FFD700',
    fontSize: 11,
    fontWeight: 'bold',
  },

});
