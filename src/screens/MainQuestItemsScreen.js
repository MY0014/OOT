// src/screens/MainQuestItemsScreen.js

import React, { useState } from 'react';
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

import { MAIN_QUEST_ITEMS } from '../Data/mainQuestItems';

export default function MainQuestItemsScreen() {
  const [modalImage, setModalImage] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const buttons = [
    {
      id: 'inventory',
      title: 'INVENTARIO',
      image: require('../../assets/items/1.png'),
    },
    {
      id: 'usage',
      title: 'USO DE OBJETOS',
      image: require('../../assets/items/2.png'),
    },
  ];

  // Obtener una descripción y una imagen sin cambiar los datos originales.
  const getDescription = (item) =>
    item.description ||
    item.requirements ||
    'Sin descripción disponible.';

  const getObjectImage = (item) => {
    if (item.image) return item.image;

    const firstStepWithImage = item.steps?.find(
      (step) =>
        typeof step === 'object' &&
        step !== null &&
        step.image
    );

    return firstStepWithImage?.image || null;
  };

  const getItemTitle = (item) =>
    item.title ||
    item.name ||
    item.id ||
    'Objeto';

  const getItemLocation = (item) =>
    item.location ||
    'Sin localización disponible.';

  const renderItem = ({ item, index }) => {
    const image = getObjectImage(item);

    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => setSelectedItem(item)}
        accessibilityRole="button"
        accessibilityLabel={`Ver detalles de ${getItemTitle(item)}`}
      >
        <View style={styles.cardContent}>
          {/* Imagen del objeto */}
          <View style={styles.imageContainer}>
            {image ? (
              <Image
                source={image}
                style={styles.objectImage}
                resizeMode="contain"
              />
            ) : (
              <Text style={styles.placeholderText}>
                Sin imagen
              </Text>
            )}
          </View>

          {/* Información del objeto */}
          <View style={styles.objectInfo}>
            <Text style={styles.cardTitle}>
              {getItemTitle(item)}
            </Text>

            <Text style={styles.sectionLabel}>
              LOCALIZACIÓN
            </Text>

            <Text style={styles.infoText}>
              {getItemLocation(item)}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.sectionLabel}>
              DESCRIPCIÓN
            </Text>

            <Text
              style={styles.infoText}
              numberOfLines={5}
            >
              {getDescription(item)}
            </Text>
          </View>

          {/* Indicador para abrir el detalle */}
          <Text style={styles.chevron}>›</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Botones superiores */}
      <View style={styles.buttonsRow}>
        {buttons.map((button) => (
          <TouchableOpacity
            key={button.id}
            style={styles.topButton}
            activeOpacity={0.8}
            onPress={() => setModalImage(button.image)}
          >
            <Text style={styles.topButtonText}>
              {button.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Catálogo de objetos */}
      <FlatList
        data={MAIN_QUEST_ITEMS}
        keyExtractor={(item, index) =>
          String(item.id || item.title || index)
        }
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Todavía no hay objetos registrados.
          </Text>
        }
      />

      {/* Modal para INVENTARIO y USO DE OBJETOS */}
      <Modal
        visible={modalImage !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setModalImage(null)}
        statusBarTranslucent
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                Guía de objetos
              </Text>

              <Pressable
                onPress={() => setModalImage(null)}
                style={styles.closeButton}
                accessibilityRole="button"
                accessibilityLabel="Cerrar imagen"
                hitSlop={8}
              >
                <Text style={styles.closeButtonText}>
                  ✕
                </Text>
              </Pressable>
            </View>

            <ScrollView
              style={styles.modalScroll}
              contentContainerStyle={styles.modalImageContent}
            >
              {modalImage && (
                <Image
                  source={modalImage}
                  style={styles.modalImage}
                  resizeMode="contain"
                />
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Modal de detalle de cada objeto */}
      <Modal
        visible={selectedItem !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedItem(null)}
        statusBarTranslucent
      >
        <View style={styles.modalOverlay}>
          <View style={styles.detailModal}>
            <View style={styles.modalHeader}>
              <Text
                style={styles.modalTitle}
                numberOfLines={2}
              >
                {selectedItem
                  ? getItemTitle(selectedItem)
                  : 'Detalle del objeto'}
              </Text>

              <Pressable
                onPress={() => setSelectedItem(null)}
                style={styles.closeButton}
                accessibilityRole="button"
                accessibilityLabel="Cerrar detalles"
                hitSlop={8}
              >
                <Text style={styles.closeButtonText}>
                  ✕
                </Text>
              </Pressable>
            </View>

            {selectedItem && (
              <ScrollView
                style={styles.detailScroll}
                contentContainerStyle={styles.detailContent}
                showsVerticalScrollIndicator={false}
              >
                {/* Imagen principal */}
                <View style={styles.detailImageContainer}>
                  {getObjectImage(selectedItem) ? (
                    <Image
                      source={getObjectImage(selectedItem)}
                      style={styles.detailImage}
                      resizeMode="contain"
                    />
                  ) : (
                    <Text style={styles.placeholderText}>
                      Sin imagen disponible
                    </Text>
                  )}
                </View>

                <Text style={styles.detailTitle}>
                  {getItemTitle(selectedItem)}
                </Text>

                <View style={styles.goldDivider}>
                  <View style={styles.goldLine} />
                  <Text style={styles.goldDiamond}>◆</Text>
                  <View style={styles.goldLine} />
                </View>

                {/* Localización */}
                <View style={styles.detailSection}>
                  <Text style={styles.sectionLabel}>
                    LOCALIZACIÓN
                  </Text>

                  <Text style={styles.detailText}>
                    {getItemLocation(selectedItem)}
                  </Text>
                </View>

                <View style={styles.divider} />

                {/* Descripción completa */}
                <View style={styles.detailSection}>
                  <Text style={styles.sectionLabel}>
                    DESCRIPCIÓN
                  </Text>

                  <Text style={styles.detailText}>
                    {getDescription(selectedItem)}
                  </Text>
                </View>

                {/* Requisitos, si existen */}
                {selectedItem.requirements &&
                  selectedItem.requirements !== 'Ninguno' && (
                    <>
                      <View style={styles.divider} />

                      <View style={styles.detailSection}>
                        <Text style={styles.sectionLabel}>
                          REQUISITOS
                        </Text>

                        <Text style={styles.detailText}>
                          {selectedItem.requirements}
                        </Text>
                      </View>
                    </>
                  )}

              
                <TouchableOpacity
                  style={styles.returnButton}
                  onPress={() => setSelectedItem(null)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.returnButtonText}>
                    VOLVER A LOS OBJETOS
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>
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

  buttonsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },

  topButton: {
    flex: 1,
    minHeight: 46,
    backgroundColor: '#1A1A1A',
    borderWidth: 1.5,
    borderColor: '#FFD700',
    borderRadius: 9,
    paddingHorizontal: 6,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  topButtonText: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 0.4,
  },

  listContent: {
    paddingTop: 2,
    paddingBottom: 24,
  },

  // Tarjetas del catálogo
  card: {
    backgroundColor: '#171717',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#66551A',
    marginBottom: 14,
    padding: 12,
  },

  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },

  imageContainer: {
    width: 100,
    height: 112,
    flexShrink: 0,
    backgroundColor: '#080808',
    borderWidth: 1,
    borderColor: '#303030',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  objectImage: {
    width: '90%',
    height: '90%',
  },

  placeholderText: {
    color: '#888',
    fontSize: 11,
    textAlign: 'center',
    padding: 8,
  },

  objectInfo: {
    flex: 1,
    minWidth: 0,
  },

  cardTitle: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 21,
    marginBottom: 10,
  },

  sectionLabel: {
    color: '#00FF66',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    marginBottom: 5,
  },

  infoText: {
    color: '#DDDDDD',
    fontSize: 13,
    lineHeight: 19,
  },

  divider: {
    height: 1,
    backgroundColor: '#383838',
    marginVertical: 10,
  },

  chevron: {
    color: '#FFD700',
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: -4,
    marginTop: -5,
  },

  emptyText: {
    color: '#AAAAAA',
    textAlign: 'center',
    marginTop: 30,
  },

  // Modales compartidos
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.90)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },

  modalContainer: {
    width: '100%',
    height: '85%',
    backgroundColor: '#151515',
    borderWidth: 1.5,
    borderColor: '#66551A',
    borderRadius: 12,
    overflow: 'hidden',
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#383838',
  },

  modalTitle: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    paddingRight: 8,
  },

  closeButton: {
    padding: 4,
    minWidth: 32,
    alignItems: 'center',
  },

  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 23,
  },

  modalScroll: {
    flex: 1,
  },

  modalImageContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },

  modalImage: {
    width: '100%',
    height: 500,
  },

  // Detalle ampliado
  detailModal: {
    width: '100%',
    maxWidth: 600,
    height: '90%',
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: '#66551A',
    borderRadius: 14,
    overflow: 'hidden',
  },

  detailScroll: {
    flex: 1,
  },

  detailContent: {
    padding: 16,
    paddingBottom: 24,
  },

  detailImageContainer: {
    width: '100%',
    height: 230,
    backgroundColor: '#080808',
    borderWidth: 1,
    borderColor: '#393226',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  detailImage: {
    width: '100%',
    height: '100%',
  },

  detailTitle: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 12,
  },

  goldDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 22,
  },

  goldLine: {
    height: 1,
    flex: 1,
    backgroundColor: '#8C7010',
  },

  goldDiamond: {
    color: '#FFD700',
    fontSize: 14,
  },

  detailSection: {
    paddingVertical: 5,
  },

  detailText: {
    color: '#E0E0E0',
    fontSize: 14,
    lineHeight: 22,
  },

  additionalSection: {
    marginTop: 18,
    backgroundColor: '#181818',
    borderWidth: 1,
    borderColor: '#49402A',
    borderRadius: 10,
    overflow: 'hidden',
  },

  additionalTitle: {
    color: '#FFD700',
    fontSize: 13,
    fontWeight: 'bold',
    padding: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#383838',
  },

  additionalItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#303030',
    gap: 10,
  },

  additionalImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#080808',
    borderRadius: 8,
  },

  returnButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 9,
    padding: 14,
    alignItems: 'center',
    backgroundColor: '#1B1B1B',
  },

  returnButtonText: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});