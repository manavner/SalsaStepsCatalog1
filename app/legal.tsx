import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function LegalScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.disclaimerText}>
          This app only provides links to publicly available videos hosted on YouTube. It does not host, stream, or distribute any content directly. All rights belong to the original content creators.
          {'\n\n'}
          We sincerely thank all the creators who shared their knowledge and creativity with the public – your contribution helps us all learn, grow, and enjoy.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
  },
  disclaimerText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
}); 