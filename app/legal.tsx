import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function LegalScreen() {
  const handlePrivacyPolicyPress = () => {
    Linking.openURL('https://docs.google.com/document/d/1EQ1noSiWgv7MZrJmlGzt-XYJmnOd-D7MrtAQxcENeTU/edit?usp=sharing');
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={handlePrivacyPolicyPress} style={styles.privacyButton}>
          <Text style={styles.privacyLink}>View Privacy Policy</Text>
        </TouchableOpacity>
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
    backgroundColor: '#121212',
  },
  scrollContent: {
    padding: 20,
  },
  privacyButton: {
    marginBottom: 20,
    backgroundColor: '#1DB954',
    borderRadius: 8,
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  privacyLink: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  disclaimerText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ffffff',
  },
}); 