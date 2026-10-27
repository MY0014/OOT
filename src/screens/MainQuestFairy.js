
import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MAIN_FAIRY } from '../Data/mainFairy';

const STORAGE_KEY = '@oot_main_fairy_v1';

const FAIRY_ART = {
  'Barra de magia y ataque circular': {
    icon: '✨',
    color: '#FFD700',
  },
  'Fuego de Din': {
    icon: '🔥',
    color: '#FF5722',
  },
  'Viento de Farore': {
    icon: '🌀',
    color: '#00FF66',
  },
  'Amor de Nayru': {
    icon: '💎',
    color: '#42A5F5',
  },
  'Incrementar la barra de magia': {
    icon: '🔮',
    color: '#C77DFF',
  },
  'Incrementar el poder defensivo': {
    icon: '🛡️',
    color: '#42A5F5',
  },
};

export default function MainQuestFairy() {
  const [view, setView] = useState('catalog');
  const [selectedFairy, setSelectedFairy] = useState(null);
  const [completedSteps, setCompletedSteps] = useState({});

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((data) => {
        if (data) setCompletedSteps(JSON.parse(data));
      })
      .catch((error) => {
        console.warn('Error cargando el progreso:', error);
      });
  }, []);

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

  const getStepKey = (fairy, step, index) =>
    `${fairy.id}_${step.id || 'step'}_${index}`;

  const getFairyProgress = (fairy) => {
    const steps = fairy.steps || [];

    if (steps.length === 0) return 0;

    return steps.filter((step, index) =>
      completedSteps[getStepKey(fairy, step, index)]
    ).length;
  };

  const completedFairies = useMemo(
    () =>
      MAIN_FAIRY.filter(
        (fairy) =>
          fairy.steps?.length > 0 &&
          getFairyProgress(fairy) === fairy.steps.length
      ).length,
    [completedSteps]
  );

  const openFairy = (fairy) => {
    setSelectedFairy(fairy);
    setView('detail');
  };

  const goBack = () => {
    if (view === 'steps') {
      setView('detail');
    } else {
      setView('catalog');
      setSelectedFairy(null);
    }
  };

  const renderCatalogItem = ({ item }) => {
    const art = FAIRY_ART[item.title] || {
      icon: '✨',
      color: '#FFD700',
    };

    const total = item.steps?.length || 0;
    const done = getFairyProgress(item);
    const isComplete = total > 0 && done === total;
    const firstImage = item.steps?.find(
      (step) => typeof step === 'object' && step.image
    )?.image;

    return (
      <TouchableOpacity
        style={[
          styles.fairyCard,
          isComplete && styles.fairyCardComplete,
        ]}
        activeOpacity={0.85}
        onPress={() => openFairy(item)}
      >
        <View style={styles.fairyImageBox}>
          {firstImage ? (
            <Image
              source={firstImage}
              style={styles.fairyImage}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.fairyEmoji}>{art.icon}</Text>
          )}
        </View>

        <View style={styles.fairyCardInfo}>
          <Text style={styles.fairyTitle}>{item.title}</Text>

          <Text style={styles.location}>
            📍 {item.location || 'Ubicación por definir'}
          </Text>

          <Text style={styles.progressText}>
            {total > 0
              ? `${done}/${total} pasos completados`
              : 'Ver detalles'}
          </Text>

          {total > 0 && (
            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${(done / total) * 100}%`,
                  },
                ]}
              />
            </View>
          )}
        </View>

        <Text
          style={[
            styles.arrow,
            { color: isComplete ? '#00FF66' : '#FFD700' },
          ]}
        >
          {isComplete ? '✓' : '›'}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderStep = (step, index) => {
    const isObject = typeof step === 'object' && step !== null;
    const text = isObject ? step.text : step;
    const image = isObject ? step.image : null;
    const key = getStepKey(selectedFairy, step, index);
    const isDone = !!completedSteps[key];

    return (
      <View key={key} style={styles.stepCard}>
        <View style={styles.stepHeading}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>{index + 1}</Text>
          </View>

          <TouchableOpacity
            style={styles.stepTextContainer}
            onPress={() => toggleStep(key)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.stepText,
                isDone && styles.stepTextDone,
              ]}
            >
              {text || `Paso ${index + 1}`}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.checkbox,
              isDone && styles.checkboxDone,
            ]}
            onPress={() => toggleStep(key)}
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
            source={image}
            style={styles.stepImage}
            resizeMode="contain"
          />
        )}
      </View>
    );
  };

  // VISTA 3: PASOS
  if (view === 'steps' && selectedFairy) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Text style={styles.backText}>‹ DETALLE DE MEJORA</Text>
        </TouchableOpacity>

        <Text style={styles.pageTitle}>PASO A PASO</Text>

        <Text style={styles.subtitle}>
          {selectedFairy.title}
        </Text>

        <FlatList
          style={styles.list}
          data={selectedFairy.steps || []}
          keyExtractor={(step, index) =>
            getStepKey(selectedFairy, step, index)
          }
          renderItem={({ item, index }) => renderStep(item, index)}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              No hay pasos registrados todavía.
            </Text>
          }
        />
      </View>
    );
  }

  // VISTA 2: DETALLE DE MEJORA
  if (view === 'detail' && selectedFairy) {
    const art = FAIRY_ART[selectedFairy.title] || {
      icon: '✨',
      color: '#FFD700',
    };

    const firstImage = selectedFairy.steps?.find(
      (step) => typeof step === 'object' && step.image
    )?.image;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Text style={styles.backText}>‹ GRANDES HADAS</Text>
        </TouchableOpacity>

        <ScrollView
          style={styles.list}
          contentContainerStyle={styles.detailContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.hero}>
            {firstImage ? (
              <Image
                source={firstImage}
                style={styles.heroImage}
                resizeMode="contain"
              />
            ) : (
              <Text style={styles.heroEmoji}>{art.icon}</Text>
            )}

            <Text style={styles.heroTitle}>
              {selectedFairy.title}
            </Text>

            <Text style={styles.heroLocation}>
              📍 {selectedFairy.location || 'Ubicación por definir'}
            </Text>
          </View>

          <View style={styles.sectionDivider}>
            <Text style={styles.sectionDividerText}>✦</Text>
          </View>

          <Text style={styles.sectionTitle}>DESCRIPCIÓN</Text>
          <Text style={styles.bodyText}>
            {selectedFairy.description ||
              selectedFairy.steps?.[0]?.text ||
              'Descripción pendiente.'}
          </Text>

          <View style={styles.infoPanel}>
            <Text style={styles.sectionTitle}>REQUISITO</Text>
            <Text style={styles.bodyText}>
              {selectedFairy.requirements || 'Ninguno'}
            </Text>

            <View style={styles.infoDivider} />

            <Text style={styles.sectionTitle}>OBJETOS CLAVE</Text>
            <Text style={styles.bodyText}>
              {selectedFairy.keyItems?.join(', ') || 'Ninguno'}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.stepsButton}
            onPress={() => setView('steps')}
            activeOpacity={0.85}
          >
            <Text style={styles.stepsButtonText}>
              VER GUÍA PASO A PASO
            </Text>
            <Text style={styles.stepsButtonArrow}>›</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  // VISTA 1: CATÁLOGO
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setView('catalog')}
      >
        <Text style={styles.backText}>‹ MENÚ PRINCIPAL</Text>
      </TouchableOpacity>

      <View style={styles.catalogHeading}>
        <Text style={styles.eyebrow}>THE LEGEND OF ZELDA</Text>
        <Text style={styles.pageTitle}>GRANDES HADAS</Text>
        <Text style={styles.subtitle}>
          Mejoras mágicas para Link, otorgadas por las Grandes Hadas de Hyrule.
        </Text>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryIcon}>✨</Text>
        <View style={styles.summaryInfo}>
          <Text style={styles.summaryTitle}>MEJORAS OBTENIDAS</Text>
          <Text style={styles.summaryCount}>
            {completedFairies}/{MAIN_FAIRY.length}
          </Text>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${
                    MAIN_FAIRY.length
                      ? (completedFairies / MAIN_FAIRY.length) * 100
                      : 0
                  }%`,
                },
              ]}
            />
          </View>
        </View>
      </View>

      <FlatList
        style={styles.list}
        data={MAIN_FAIRY}
        keyExtractor={(item) => item.id}
        renderItem={renderCatalogItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
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
  backButton: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#303630',
    marginBottom: 12,
  },
  backText: {
    color: '#00FF99',
    fontWeight: 'bold',
    fontSize: 14,
  },
  catalogHeading: {
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 14,
  },
  eyebrow: {
    color: '#aaa',
    fontSize: 10,
    letterSpacing: 3,
    marginTop: 4,
  },
  pageTitle: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    color: '#ddd',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111a16',
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 12,
    padding: 12,
    marginBottom: 14,
    gap: 12,
  },
  summaryIcon: {
    fontSize: 36,
  },
  summaryInfo: {
    flex: 1,
  },
  summaryTitle: {
    color: '#00FF99',
    fontSize: 12,
    fontWeight: 'bold',
  },
  summaryCount: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
  },
  progressTrack: {
    height: 7,
    backgroundColor: '#26332c',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 9,
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
    paddingBottom: 20,
  },
  fairyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#101512',
    borderWidth: 1,
    borderColor: '#BFA32A',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    gap: 10,
  },
  fairyCardComplete: {
    borderColor: '#00FF99',
  },
  fairyImageBox: {
    width: 84,
    height: 84,
    borderRadius: 9,
    backgroundColor: '#050807',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fairyImage: {
    width: '100%',
    height: '100%',
  },
  fairyEmoji: {
    fontSize: 38,
  },
  fairyCardInfo: {
    flex: 1,
  },
  fairyTitle: {
    color: '#FFD700',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 21,
  },
  location: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 5,
    lineHeight: 17,
  },
  progressText: {
    color: '#00FF99',
    fontSize: 11,
    marginTop: 8,
  },
  arrow: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 2,
  },
  detailContent: {
    paddingBottom: 24,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 18,
  },
  heroImage: {
    width: '100%',
    height: 190,
    backgroundColor: '#050807',
    borderRadius: 12,
  },
  heroEmoji: {
    fontSize: 95,
    padding: 24,
  },
  heroTitle: {
    color: '#FFD700',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
  },
  heroLocation: {
    color: '#ddd',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 10,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#927719',
    marginVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionDividerText: {
    color: '#FFD700',
    backgroundColor: '#090d0c',
    paddingHorizontal: 12,
    fontSize: 18,
  },
  sectionTitle: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bodyText: {
    color: '#e0e0e0',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 14,
  },
  infoPanel: {
    borderWidth: 1,
    borderColor: '#BFA32A',
    borderRadius: 10,
    backgroundColor: '#101512',
    padding: 14,
    marginTop: 6,
  },
  infoDivider: {
    height: 1,
    backgroundColor: '#3a3a30',
    marginVertical: 12,
  },
  stepsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#153328',
    borderWidth: 1.5,
    borderColor: '#00FF99',
    borderRadius: 10,
    padding: 15,
    marginTop: 18,
  },
  stepsButtonText: {
    color: '#00FF99',
    fontWeight: 'bold',
    fontSize: 13,
  },
  stepsButtonArrow: {
    color: '#FFD700',
    fontSize: 25,
  },
  stepCard: {
    backgroundColor: '#101512',
    borderWidth: 1,
    borderColor: '#4d431c',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  stepHeading: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    color: '#111',
    fontWeight: 'bold',
    fontSize: 15,
  },
  stepTextContainer: {
    flex: 1,
  },
  stepText: {
    color: '#eee',
    fontSize: 14,
    lineHeight: 21,
  },
  stepTextDone: {
    color: '#777',
    textDecorationLine: 'line-through',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#00FF99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: {
    backgroundColor: '#00FF99',
  },
  checkmark: {
    color: '#07110c',
    fontWeight: 'bold',
  },
  stepImage: {
    width: '100%',
    height: 180,
    marginTop: 12,
    borderRadius: 8,
    backgroundColor: '#050807',
  },
  emptyText: {
    color: '#aaa',
    textAlign: 'center',
    padding: 24,
  },
});
