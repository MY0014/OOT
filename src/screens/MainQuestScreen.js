// src/screens/MainQuestScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { MAIN_QUEST } from '../Data/mainQuest';
import { MAIN_QUEST_BOTTLE } from '../Data/mainQuestBottle';

const STORAGE_KEY = '@oot_main_quest_v1';

const CATEGORY_IMAGES = {
  'Expandir Bolsa de Semillas Deku': require('../../assets/contenido/bolsa.png'),
  'Máscaras': require('../../assets/contenido/mascara.png'),
  'Judías Mágicas': require('../../assets/contenido/judia.png'),
  'Canciones del Ocarina': require('../../assets/contenido/ocarina.png'),
  'Comercio': require('../../assets/contenido/comercio.png'),
  'Botellas': require('../../assets/contenido/botella.png'),
  'Canciones': require('../../assets/contenido/ocarina.png'),
};

export default function MainQuestScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBottle, setSelectedBottle] = useState(null);
  const [completedSteps, setCompletedSteps] = useState({});
  //MODAL PARA APLIAR LAS UBICACIONES DE LOS POE's
  const [selectedPoeIndex, setSelectedPoeIndex] = useState(null);

  // Cargar progreso
  useEffect(() => {
    let mounted = true;

    AsyncStorage.getItem(STORAGE_KEY)
      .then((data) => {
        if (data && mounted) {
          setCompletedSteps(JSON.parse(data));
        }
      })
      .catch((error) => {
        console.warn('Error cargando el progreso:', error);
      });

    return () => {
      mounted = false;
    };
  }, []);

  // Guardar progreso
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

  // Evitar duplicados en las categorías
  const categories = [
    ...MAIN_QUEST.filter(
      (item, index, array) =>
        item.title !== 'Botellas' &&
        array.findIndex(
          (category) => category.title === item.title
        ) === index
    ),
    {
      id: 'category_bottles',
      title: 'Botellas',
      location: 'Varias ubicaciones',
      steps: [],
    },
  ];

  const openCategory = (item) => {
    setSelectedCategory(item);
    setSelectedBottle(null);
  };

  const goBack = () => {
    if (selectedBottle) {
      setSelectedBottle(null);
    } else {
      setSelectedCategory(null);
    }
  };

  // Tarjeta de categoría
  const renderCategory = ({ item }) => {
    const categoryImage = CATEGORY_IMAGES[item.title];

    return (
      <TouchableOpacity
        style={styles.categoryCard}
        activeOpacity={0.8}
        onPress={() => openCategory(item)}
      >
        {categoryImage ? (
          <Image
            source={categoryImage}
            style={styles.categoryImage}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.fallbackIcon}>✨</Text>
        )}

        <Text style={styles.categoryTitle}>
          {item.title}
        </Text>

        <Text style={styles.categoryLocation}>
          📍 {item.location || 'Varias ubicaciones'}
        </Text>

        <Text style={styles.exploreText}>
          EXPLORAR ›
        </Text>
      </TouchableOpacity>
    );
  };

  // Tarjeta de botella

  // Tarjeta de botella o galería especial de los Gran Poe
  const renderBottle = ({ item, index }) => {
    const isPoeGallery = item.id === 'bottle_5';
    const steps = item.steps || [];

    const completedCount = isPoeGallery
      ? 0
      : steps.filter((step, stepIndex) => {
          const key = `${item.id}_${step.id || 'step'}_${stepIndex}`;
          return !!completedSteps[key];
        }).length;

    const progress = steps.length && !isPoeGallery
      ? (completedCount / steps.length) * 100
      : 0;

    return (
      <TouchableOpacity
        style={styles.bottleCard}
        activeOpacity={0.8}
        onPress={() => setSelectedBottle(item)}
      >
        <View style={styles.bottleIconContainer}>
          <Image
            source={CATEGORY_IMAGES['Botellas']}
            style={styles.bottleCardImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.bottleInfo}>
          <Text style={styles.bottleTitle}>
            {isPoeGallery
              ? 'Localización de los Gran Poe'
              : item.title || `Botella ${index + 1}`}
          </Text>

          <Text style={styles.bottleLocation}>
            📍 {isPoeGallery
              ? 'Consulta las 10 ubicaciones'
              : item.location ||
                item.title?.replace(/^botella:\s*/i, '') ||
                'Ubicación por definir'}
          </Text>

          {!isPoeGallery && (
            <>
              <Text style={styles.bottleProgress}>
                {completedCount} de {steps.length} pasos completados
              </Text>

              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${progress}%` },
                  ]}
                />
              </View>
            </>
          )}

          {isPoeGallery && (
            <Text style={styles.bottleProgress}>
              10 imágenes de localización
            </Text>
          )}
        </View>

        <Text style={styles.chevron}>›</Text>
      </TouchableOpacity>
    );
  };


  // Paso de una botella
  const renderBottleStep = ({ item: step, index }) => {
    const stepKey =
      `${selectedBottle.id}_${step.id || 'step'}_${index}`;

    const isDone = !!completedSteps[stepKey];

    return (
      <View
        style={[
          styles.stepCard,
          isDone && styles.stepCardDone,
        ]}
      >
        <TouchableOpacity
          style={styles.stepHeader}
          activeOpacity={0.8}
          onPress={() => toggleStep(stepKey)}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: isDone }}
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

          <Text style={styles.stepNumber}>
            PASO {index + 1}
          </Text>

          <Text
            style={[
              styles.stepStatus,
              isDone && styles.stepStatusDone,
            ]}
          >
            {isDone ? 'COMPLETADO' : 'PENDIENTE'}
          </Text>
        </TouchableOpacity>

        {!!step.text?.trim() && (
          <Text
            style={[
              styles.stepText,
              isDone && styles.stepTextDone,
            ]}
          >
            {step.text}
          </Text>
        )}

        {step.image && (
          <Image
            source={
              typeof step.image === 'string'
                ? { uri: step.image }
                : step.image
            }
            style={styles.stepImage}
            resizeMode="contain"
          />
        )}
      </View>
    );
  };

  // ==========================================
  // VISTA 1: DETALLE DE UNA BOTELLA
  // ==========================================
  if (selectedCategory?.title === 'Botellas' && selectedBottle) {

    // Vista especial: galería de localización de los Gran Poe
    if (selectedBottle.id === 'bottle_5') {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={goBack}
          >
            <Text style={styles.backText}>
              ◀ VOLVER A BOTELLAS
            </Text>
          </TouchableOpacity>

          <View style={styles.detailHeading}>
            <Text style={styles.heading}>
              LOCALIZACIÓN DE LOS GRAN POE
            </Text>

            <Text style={styles.subtitle}>
              Consulta las 10 imágenes para encontrar a los Grandes Poes.
            </Text>
          </View>

          
<>
  <FlatList
    key="poe-gallery"
    style={styles.list}
    data={selectedBottle.steps || []}
    keyExtractor={(item, index) => `poe-${index}`}
    numColumns={2}
    columnWrapperStyle={styles.poeGridRow}
    contentContainerStyle={styles.listContent}
    showsVerticalScrollIndicator={false}
    renderItem={({ item, index }) => (
      <TouchableOpacity
        style={styles.poeImageCard}
        activeOpacity={0.8}
        onPress={() => setSelectedPoeIndex(index)}
      >
        <Text style={styles.poeImageTitle}>
          Ubicación {index + 1}
        </Text>

        <Image
          source={item.image}
          style={styles.poeImage}
          resizeMode="contain"
        />

        <Text style={styles.poeZoomText}>
          🔍 Toca para ampliar
        </Text>
      </TouchableOpacity>
    )}
  />

  <Modal
    visible={selectedPoeIndex !== null}
    transparent
    animationType="fade"
    onRequestClose={() => setSelectedPoeIndex(null)}
  >
    <View style={styles.poeModalOverlay}>
      <TouchableOpacity
        style={styles.poeCloseButton}
        onPress={() => setSelectedPoeIndex(null)}
      >
        <Text style={styles.poeCloseText}>✕ Cerrar</Text>
      </TouchableOpacity>

      {selectedPoeIndex !== null && (
        <>
          <Text style={styles.poeModalTitle}>
            Ubicación {selectedPoeIndex + 1} de {selectedBottle.steps.length}
          </Text>

          <Image
            source={selectedBottle.steps[selectedPoeIndex].image}
            style={styles.poeModalImage}
            resizeMode="contain"
          />

          <View style={styles.poeNavigation}>
            <TouchableOpacity
              style={[
                styles.poeNavButton,
                selectedPoeIndex === 0 && styles.poeNavDisabled,
              ]}
              disabled={selectedPoeIndex === 0}
              onPress={() =>
                setSelectedPoeIndex((current) => current - 1)
              }
            >
              <Text style={styles.poeNavText}>‹ Anterior</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.poeNavButton,
                selectedPoeIndex === selectedBottle.steps.length - 1 &&
                  styles.poeNavDisabled,
              ]}
              disabled={
                selectedPoeIndex === selectedBottle.steps.length - 1
              }
              onPress={() =>
                setSelectedPoeIndex((current) => current + 1)
              }
            >
              <Text style={styles.poeNavText}>Siguiente ›</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  </Modal>
</>

        </View>
      );
    }

    const steps = selectedBottle.steps || [];

    const completedCount = steps.filter((step, index) => {
      const key =
        `${selectedBottle.id}_${step.id || 'step'}_${index}`;
      return !!completedSteps[key];
    }).length;

    const progress = steps.length
      ? (completedCount / steps.length) * 100
      : 0;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={goBack}
        >
          <Text style={styles.backText}>
            ◀ VOLVER A BOTELLAS
          </Text>
        </TouchableOpacity>

        <View style={styles.detailHeading}>
          <Image
            source={CATEGORY_IMAGES['Botellas']}
            style={styles.detailCategoryImage}
            resizeMode="contain"
          />

          <Text style={styles.heading}>
            {selectedBottle.title}
          </Text>

          <Text style={styles.subtitle}>
            {selectedBottle.location ||
              selectedBottle.title.replace(/^botella:\s*/i, '')}
          </Text>
        </View>

        {selectedBottle.requirements &&
          selectedBottle.requirements !== 'Ninguno' && (
            <Text style={styles.requirement}>
              Requisitos: {selectedBottle.requirements}
            </Text>
          )}

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>
            PROGRESO DE ESTA BOTELLA
          </Text>

          <Text style={styles.summaryCount}>
            {completedCount} / {steps.length} pasos completados
          </Text>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                { width: `${progress}%` },
              ]}
            />
          </View>
        </View>

        <FlatList
          key="bottle-steps"
          style={styles.list}
          data={steps}
          keyExtractor={(step, index) =>
            `${selectedBottle.id}_${step.id || 'step'}_${index}`
          }
          renderItem={renderBottleStep}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              Todavía no hay pasos registrados.
            </Text>
          }
        />
      </View>
    );
  }

  // ==========================================
  // VISTA 2: LISTADO DE BOTELLAS
  // ==========================================
  if (selectedCategory?.title === 'Botellas') {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={goBack}
        >
          <Text style={styles.backText}>
            ◀ CONTENIDO EXTRA
          </Text>
        </TouchableOpacity>

        <View style={styles.detailHeading}>
          <Image
            source={CATEGORY_IMAGES['Botellas']}
            style={styles.detailCategoryImage}
            resizeMode="contain"
          />

          <Text style={styles.heading}>BOTELLAS</Text>

          <Text style={styles.subtitle}>
            Descubre cómo conseguir cada botella de Hyrule.
          </Text>
        </View>

        <FlatList
          key="bottles"
          style={styles.list}
          data={MAIN_QUEST_BOTTLE}
          keyExtractor={(item) => item.id}
          renderItem={renderBottle}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              Todavía no hay botellas registradas.
            </Text>
          }
        />
      </View>
    );
  }

  // ==========================================
  // VISTA 3: OTRAS CATEGORÍAS
  // ==========================================
  if (selectedCategory) {
    const steps = selectedCategory.steps || [];
    const categoryImage = CATEGORY_IMAGES[selectedCategory.title];

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={goBack}
        >
          <Text style={styles.backText}>
            ◀ CONTENIDO EXTRA
          </Text>
        </TouchableOpacity>

        <View style={styles.detailHeading}>
          {categoryImage ? (
            <Image
              source={categoryImage}
              style={styles.detailCategoryImage}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.fallbackIcon}>✨</Text>
          )}

          <Text style={styles.heading}>
            {selectedCategory.title}
          </Text>

          <Text style={styles.subtitle}>
            {selectedCategory.location ||
              'Explora los elementos de esta categoría'}
          </Text>
        </View>

        {selectedCategory.requirements &&
          selectedCategory.requirements !== 'Ninguno' && (
            <Text style={styles.requirement}>
              Requisito: {selectedCategory.requirements}
            </Text>
          )}

        <FlatList
          key="category-steps"
          style={styles.list}
          data={steps}
          keyExtractor={(step, index) =>
            `${selectedCategory.id}_${step?.id || index}_${index}`
          }
          renderItem={({ item: step, index }) => {
            const stepKey =
              `${selectedCategory.id}_${step?.id || 'step'}_${index}`;

            const isDone = !!completedSteps[stepKey];

            const text =
              typeof step === 'object' && step !== null
                ? step.text
                : step;

            const image =
              typeof step === 'object' && step !== null
                ? step.image
                : null;

            return (
              <View style={styles.objectCard}>
                <View style={styles.objectHeader}>
                  <View style={styles.objectInfo}>
                    <Text style={styles.objectTitle}>
                      {text?.trim() || `Elemento ${index + 1}`}
                    </Text>

                    <Text style={styles.objectLocation}>
                      📍 {selectedCategory.location ||
                        'Varias ubicaciones'}
                    </Text>
                  </View>

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
                </View>

                {image && (
                  <Image
                    source={
                      typeof image === 'string'
                        ? { uri: image }
                        : image
                    }
                    style={styles.stepImage}
                    resizeMode="contain"
                  />
                )}
              </View>
            );
          }}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              Todavía no hay elementos registrados.
            </Text>
          }
        />
      </View>
    );
  }

  // ==========================================
  // VISTA 4: CATÁLOGO PRINCIPAL
  // ==========================================
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>
        THE LEGEND OF ZELDA
      </Text>

      <Text style={styles.heading}>
        CONTENIDO EXTRA
      </Text>

      <Text style={styles.subtitle}>
        Explora coleccionables, ubicaciones y secretos de Hyrule.
      </Text>

      <FlatList
        key="categories"
        style={styles.list}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No hay categorías registradas.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    paddingHorizontal: 12,
    paddingTop: 12,
  },

  eyebrow: {
    color: '#DDD',
    textAlign: 'center',
    fontSize: 11,
    letterSpacing: 3,
    marginTop: 6,
  },

  heading: {
    color: '#FFD700',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },

  subtitle: {
    color: '#BBB',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },

  list: {
    flex: 1,
  },

  listContent: {
    paddingBottom: 24,
  },

  gridRow: {
    gap: 12,
    marginBottom: 12,
  },

  categoryCard: {
    flex: 1,
    minWidth: 0,
    minHeight: 175,
    padding: 12,
    backgroundColor: '#181818',
    borderWidth: 1.5,
    borderColor: '#FFD700',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  categoryImage: {
    width: 56,
    height: 56,
    maxWidth: '100%',
    marginBottom: 10,
  },

  fallbackIcon: {
    fontSize: 34,
    color: '#FFD700',
    marginBottom: 10,
  },

  categoryTitle: {
    color: '#FFD700',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  categoryLocation: {
    color: '#BBB',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 16,
  },

  exploreText: {
    color: '#98A19C',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 12,
  },

  backButton: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 12,
  },

  backText: {
    color: '#00FF66',
    fontWeight: 'bold',
    fontSize: 13,
  },

  detailHeading: {
    alignItems: 'center',
    paddingVertical: 8,
  },

  detailCategoryImage: {
    width: 64,
    height: 64,
    maxWidth: '100%',
    marginBottom: 6,
  },

  requirement: {
    color: '#FFD700',
    fontSize: 12,
    marginBottom: 12,
  },

  bottleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#49402A',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },

  bottleIconContainer: {
    width: 52,
    height: 58,
    borderRadius: 8,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    overflow: 'hidden',
  },

  bottleCardImage: {
    width: 42,
    height: 42,
    maxWidth: '100%',
  },

  bottleInfo: {
    flex: 1,
  },

  bottleTitle: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
  },

  bottleLocation: {
    color: '#BBB',
    fontSize: 12,
    marginTop: 4,
  },

  bottleProgress: {
    color: '#00FF66',
    fontSize: 10,
    marginTop: 8,
    marginBottom: 5,
  },

  progressTrack: {
    height: 5,
    backgroundColor: '#333',
    borderRadius: 5,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#00FF66',
    borderRadius: 5,
  },

  chevron: {
    color: '#FFD700',
    fontSize: 28,
    marginLeft: 8,
  },

  summaryCard: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#49402A',
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
  },

  summaryTitle: {
    color: '#FFD700',
    fontSize: 11,
    fontWeight: 'bold',
  },

  summaryCount: {
    color: '#00FF66',
    fontSize: 13,
    marginVertical: 8,
  },

  stepCard: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#383838',
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
  },

  stepCardDone: {
    borderColor: '#176B45',
  },

  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },

  stepNumber: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: 'bold',
    flex: 1,
  },

  stepStatus: {
    color: '#888',
    fontSize: 10,
    fontWeight: 'bold',
  },

  stepStatusDone: {
    color: '#00FF66',
  },

  stepText: {
    color: '#DDD',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 10,
  },

  stepTextDone: {
    color: '#999',
  },

  stepImage: {
    width: '100%',
    height: 190,
    backgroundColor: '#242424',
    borderRadius: 8,
  },

  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: '#00FF66',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxDone: {
    backgroundColor: '#00FF66',
  },

  checkmark: {
    color: '#101010',
    fontSize: 16,
    fontWeight: 'bold',
  },

  objectCard: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#393939',
    borderRadius: 10,
    marginBottom: 12,
    padding: 12,
  },

  objectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  objectInfo: {
    flex: 1,
  },

  objectTitle: {
    color: '#59B69E',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 21,
  },

  objectLocation: {
    color: '#BBB',
    fontSize: 12,
    marginTop: 5,
  },

  emptyText: {
    color: '#AAA',
    textAlign: 'center',
    paddingVertical: 30,
  },


  poeGridRow: {
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 12,
  },

  poeImageCard: {
    flex: 1,
    minWidth: 0,
    padding: 8,
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#49402A',
    borderRadius: 10,
    overflow: 'hidden',
  },

  poeImageTitle: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  poeImage: {
    width: '100%',
    height: 145,
    backgroundColor: '#242424',
    borderRadius: 6,
  },

  poeZoomText: {
    color: '#00FF66',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 8,
  },

  poeModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.96)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

  poeCloseButton: {
    position: 'absolute',
    top: 45,
    right: 20,
    zIndex: 10,
    padding: 12,
  },

  poeCloseText: {
    color: '#00FF66',
    fontSize: 16,
    fontWeight: 'bold',
  },

  poeModalTitle: {
    color: '#FFD700',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  poeModalImage: {
    width: '100%',
    height: '55%',
  },

  poeNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 24,
    gap: 12,
  },

  poeNavButton: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: '#242424',
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 10,
    alignItems: 'center',
  },

  poeNavDisabled: {
    opacity: 0.3,
  },

  poeNavText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
  },


});