import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Volume2, ExternalLink } from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as WebBrowser from 'expo-web-browser';
import { SalsaStep } from '@/types/SalsaStep';

interface StepItemProps {
  step: SalsaStep;
}

export function StepItem({ step }: StepItemProps) {
  const handleTTS = async () => {
    try {
      await Speech.speak(step.stepName, {
        language: 'es-ES',
        rate: 0.8,
        pitch: 1.0,
      });
    } catch (error) {
      Alert.alert('Error', 'Text-to-speech is not available');
    }
  };

  const handleOpenVideo = async () => {
    try {
      if (step.link) {
        await WebBrowser.openBrowserAsync(step.link);
      } else {
        Alert.alert('No Video', 'No video link available for this step');
      }
    } catch (error) {
      Alert.alert('Error', 'Could not open video');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.stepName}>{step.stepName}</Text>
          <TouchableOpacity onPress={handleTTS} style={styles.ttsButton}>
            <Volume2 size={20} color="#1ED760" />
          </TouchableOpacity>
        </View>

        <View style={styles.details}>
          <Text style={styles.detailText}>Type: {step.type}</Text>
          <Text style={styles.detailText}>Count: {step.originalCount}</Text>
        </View>

        {step.link && (
          <TouchableOpacity onPress={handleOpenVideo} style={styles.videoButton}>
            <ExternalLink size={16} color="#FFFFFF" />
            <Text style={styles.videoButtonText}>Watch Video</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    marginBottom: 8,
    padding: 16,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    flex: 1,
    marginRight: 12,
  },
  ttsButton: {
    padding: 8,
    backgroundColor: '#333333',
    borderRadius: 20,
  },
  details: {
    marginBottom: 12,
  },
  detailText: {
    fontSize: 14,
    color: '#B3B3B3',
    marginBottom: 4,
  },
  videoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF0000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  videoButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
});