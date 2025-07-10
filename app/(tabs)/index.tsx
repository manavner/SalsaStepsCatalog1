import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Music, Play, Heart } from 'lucide-react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Music size={80} color="#1DB954" />
          <Text style={styles.title}>Salsa Steps Catalog</Text>
          <Text style={styles.subtitle}>by Avner Man</Text>
        </View>

        <View style={styles.features}>
          <View style={styles.feature}>
            <Play size={24} color="#1DB954" />
            <Text style={styles.featureText}>Learn salsa steps at your own pace</Text>
          </View>
          <View style={styles.feature}>
            <Heart size={24} color="#1DB954" />
            <Text style={styles.featureText}>Organized by skill level</Text>
          </View>
          <View style={styles.feature}>
            <Music size={24} color="#1DB954" />
            <Text style={styles.featureText}>Spanish pronunciation guide</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.getStartedButton}
          onPress={() => router.push('/steps')}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Discover and master salsa dance steps with video tutorials and pronunciation guides
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#B3B3B3',
    textAlign: 'center',
  },
  features: {
    marginBottom: 50,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  featureText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 16,
    flex: 1,
  },
  getStartedButton: {
    backgroundColor: '#1DB954',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 40,
  },
  getStartedText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#B3B3B3',
    textAlign: 'center',
    lineHeight: 20,
  },
});