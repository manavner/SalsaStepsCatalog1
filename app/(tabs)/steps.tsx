import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, ActivityIndicator, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronRight, Volume2, ExternalLink } from 'lucide-react-native';
import { StepItem } from '@/components/StepItem';
import { SalsaStep } from '@/types/SalsaStep';
import { loadStepsData } from '@/utils/dataLoader';

export default function StepsScreen() {
  const [steps, setSteps] = useState<SalsaStep[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedLevels, setExpandedLevels] = useState<Set<string>>(new Set(['Beginner', 'Intermediate', 'Advanced']));

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      console.log('=== LOADING FRESH DATA ===');
      console.log('Timestamp:', new Date().toISOString());
      const data = await loadStepsData();
      console.log('=== DATA LOADED ===');
      console.log('Total steps loaded:', data.length);
      
      // Log the specific step we're looking for
      const enchufalaStep = data.find(step => 
        step.stepName.toLowerCase().includes('enchufala con chufala')
      );
      if (enchufalaStep) {
        console.log('=== FOUND ENCHUFALA STEP ===');
        console.log('Step name:', enchufalaStep.stepName);
        console.log('Link:', enchufalaStep.link);
        console.log('Full step object:', JSON.stringify(enchufalaStep, null, 2));
      } else {
        console.log('=== ENCHUFALA STEP NOT FOUND ===');
        console.log('Available step names:');
        data.forEach((step, index) => {
          console.log(`${index + 1}. "${step.stepName}"`);
        });
      }
      
      setSteps(data);
    } catch (error) {
      console.warn('Load data error:', error);
      // Don't show alert since we have fallback data
    } finally {
      setLoading(false);
    }
  };

  const filteredSteps = steps.filter(step =>
    step.stepName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedSteps = filteredSteps.reduce((acc, step) => {
    if (!acc[step.level]) {
      acc[step.level] = [];
    }
    acc[step.level].push(step);
    return acc;
  }, {} as Record<string, SalsaStep[]>);

  const toggleLevel = (level: string) => {
    const newExpanded = new Set(expandedLevels);
    if (newExpanded.has(level)) {
      newExpanded.delete(level);
    } else {
      newExpanded.add(level);
    }
    setExpandedLevels(newExpanded);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return '#1DB954';
      case 'Intermediate': return '#1ED760';
      case 'Advanced': return '#FF6B6B';
      default: return '#B3B3B3';
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1DB954" />
        <Text style={styles.loadingText}>Loading dance steps...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Salsa Steps</Text>
        <TouchableOpacity onPress={loadData} style={styles.refreshButton}>
          <Text style={styles.refreshText}>Refresh</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Search size={20} color="#B3B3B3" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search steps..."
          placeholderTextColor="#B3B3B3"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView style={styles.content}>
        {Object.entries(groupedSteps).map(([level, levelSteps]) => (
          <View key={level} style={styles.levelSection}>
            <TouchableOpacity
              style={styles.levelHeader}
              onPress={() => toggleLevel(level)}
            >
              <View style={styles.levelHeaderLeft}>
                {expandedLevels.has(level) ? 
                  <ChevronDown size={20} color="#FFFFFF" /> : 
                  <ChevronRight size={20} color="#FFFFFF" />
                }
                <Text style={[styles.levelTitle, { color: getLevelColor(level) }]}>
                  {level}
                </Text>
                <Text style={styles.levelCount}>({levelSteps.length})</Text>
              </View>
            </TouchableOpacity>

            {expandedLevels.has(level) && (
              <View style={styles.stepsContainer}>
                {levelSteps.map((step, index) => (
                  <StepItem key={index} step={step} />
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191414',
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  refreshButton: {
    backgroundColor: '#1DB954',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  refreshText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    marginHorizontal: 24,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  levelSection: {
    marginBottom: 20,
  },
  levelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#333333',
    borderRadius: 12,
  },
  levelHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  levelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  levelCount: {
    fontSize: 14,
    color: '#B3B3B3',
    marginLeft: 8,
  },
  stepsContainer: {
    marginTop: 8,
  },
});