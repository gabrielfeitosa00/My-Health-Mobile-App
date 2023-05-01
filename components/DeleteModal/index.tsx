import React from 'react';
import {Text, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import BlueButton from '../BlueButton';
import RedButton from '../RedButton';
import {style} from './style';
interface IDeleteModalProps {
  visible: boolean;
  onDismiss: () => void;
  onConfirm: () => void;
}
export default function DeleteModal({
  visible = false,
  onDismiss,
  onConfirm,
}: IDeleteModalProps) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={style.container}>
        <Text style={style.modalText}>
          Tem certeza que deseja remover essa vacina?
        </Text>
        <View style={style.buttonGroup}>
          <RedButton text="SIM" onPress={onConfirm} />
          <BlueButton text="CANCELAR" onPress={onDismiss} />
        </View>
      </Modal>
    </Portal>
  );
}
