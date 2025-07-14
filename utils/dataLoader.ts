import { SalsaStep } from '@/types/SalsaStep';

const SHEET_ID = '1lHXna6z1NX3UNEQ-ujRVr3BF8MFY05_z1H7TUKPVuhM';

// Fallback data in case Google Sheets is not accessible
const FALLBACK_DATA: SalsaStep[] = [
  {
    level: 'Beginner',
    stepName: 'Enchufala con chufala',
    originalCount: '8',
    type: 'Turn Pattern',
    link: 'https://www.youtube.com/watch?v=0tuCW9oxx_Y&list=PL8hFYIpg2Jp0aIIUjOAljXCmX7kz-rXyp&index=4'
  },
  {
    level: 'Beginner',
    stepName: 'Basic Step',
    originalCount: '8',
    type: 'Basic',
    link: 'https://www.youtube.com/watch?v=example1'
  },
  {
    level: 'Intermediate',
    stepName: 'Cross Body Lead',
    originalCount: '8',
    type: 'Lead Pattern',
    link: 'https://www.youtube.com/watch?v=example2'
  },
  {
    level: 'Advanced',
    stepName: 'Multiple Spins',
    originalCount: '8',
    type: 'Turn Pattern',
    link: 'https://www.youtube.com/watch?v=example3'
  }
];

export async function loadStepsData(): Promise<SalsaStep[]> {
  console.log('🔄 Starting data load process...');
  
  try {
    // First, let's check if the sheet is publicly accessible
    const testUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit#gid=0`;
    console.log('📋 Sheet URL:', testUrl);
    
    // Try the CSV export URL
    const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;
    console.log('📥 Attempting to fetch CSV from:', csvUrl);
    
    const response = await fetch(csvUrl, {
      method: 'GET',
      headers: {
        'Accept': 'text/csv,text/plain,*/*',
        'User-Agent': 'Mozilla/5.0 (compatible; SalsaApp/1.0)'
      }
    });
    
    console.log('📊 Response status:', response.status);
    console.log('📊 Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      console.error('❌ HTTP Error:', response.status, response.statusText);
      
      // Try to get the response text to see the error
      const errorText = await response.text();
      console.log('❌ Error response body:', errorText.substring(0, 500));
      
      console.log('🔄 Falling back to sample data');
      return FALLBACK_DATA;
    }
    
    const csvText = await response.text();
    console.log('✅ Successfully fetched CSV data');
    console.log('📏 CSV length:', csvText.length);
    
    if (csvText.length < 50) {
      console.log('⚠️ CSV seems too short, content:', csvText);
      return FALLBACK_DATA;
    }
    
    // Show first few lines for debugging
    const lines = csvText.split('\n');
    console.log('📝 Total lines:', lines.length);
    console.log('📝 First 3 lines:');
    lines.slice(0, 3).forEach((line, i) => {
      console.log(`  ${i}: ${line}`);
    });
    
    const parsedData = parseCSV(csvText);
    
    if (parsedData.length === 0) {
      console.log('⚠️ No data parsed, using fallback');
      return FALLBACK_DATA;
    }
    
    console.log('✅ Successfully parsed', parsedData.length, 'steps');
    
    // Show sample of parsed data
    console.log('📋 Sample parsed steps:');
    parsedData.slice(0, 2).forEach((step, i) => {
      console.log(`  ${i + 1}. "${step.stepName}" (${step.level}) - ${step.link}`);
    });
    
    return parsedData;
    
  } catch (error) {
    console.error('💥 Error loading data:', error);
    console.log('🔄 Using fallback data due to error');
    return FALLBACK_DATA;
  }
}

function parseCSV(csvText: string): SalsaStep[] {
  const lines = csvText.trim().split('\n');
  
  if (lines.length <= 1) {
    console.log('⚠️ CSV has no data rows');
    return [];
  }
  
  // Skip header row and parse data
  const dataLines = lines.slice(1);
  console.log('🔍 Parsing', dataLines.length, 'data lines');
  
  const steps: SalsaStep[] = [];
  
  dataLines.forEach((line, index) => {
    if (!line.trim()) {
      console.log(`⏭️ Skipping empty line ${index + 2}`);
      return;
    }
    
    try {
      const columns = parseCSVLine(line);
      
      if (columns.length < 4) {
        console.log(`⚠️ Line ${index + 2} has only ${columns.length} columns:`, columns);
        return;
      }
      
      const step: SalsaStep = {
        level: columns[0]?.trim() || 'Unknown',
        stepName: columns[1]?.trim() || 'Unnamed Step',
        originalCount: columns[2]?.trim() || '8',
        type: columns[3]?.trim() || 'Unknown',
        link: columns[4]?.trim() || ''
      };
      
      // Only include steps with valid names
      if (step.stepName && step.stepName !== 'Unnamed Step') {
        steps.push(step);
        
        if (index < 3) { // Log first few for debugging
          console.log(`✅ Parsed step ${index + 1}:`, {
            name: step.stepName,
            level: step.level,
            link: step.link ? 'Has link' : 'No link'
          });
        }
      }
      
    } catch (parseError) {
      console.log(`❌ Error parsing line ${index + 2}:`, parseError);
    }
  });
  
  console.log(`✅ Successfully parsed ${steps.length} valid steps`);
  return steps;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Handle escaped quotes
        current += '"';
        i++; // Skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  
  // Clean up quoted values
  return result.map(value => {
    if (value.startsWith('"') && value.endsWith('"')) {
      return value.slice(1, -1);
    }
    return value;
  });
}