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
  try {
    // Enhanced cache busting to ensure fresh data
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0&cachebust=${timestamp}&rand=${random}&_=${timestamp}&t=${Date.now()}`;
    
    console.log('Fetching from URL:', csvUrl);
    
    const response = await fetch(csvUrl, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'If-Modified-Since': 'Thu, 01 Jan 1970 00:00:00 GMT',
        'User-Agent': 'SalsaStepsApp/1.0'
      }
    });
    
    if (!response.ok) {
      console.log(`Google Sheets request failed with status: ${response.status}`);
      console.log('Response headers:', response.headers);
      console.log('Using fallback data instead');
      return FALLBACK_DATA;
    }
    
    const csvText = await response.text();
    console.log('Raw CSV length:', csvText.length);
    console.log('First 300 chars:', csvText.substring(0, 300));
    console.log('Last 300 chars:', csvText.substring(csvText.length - 300));
    
    // Enhanced logging for debugging
    const lines = csvText.trim().split('\n');
    console.log('Total lines in CSV:', lines.length);
    if (lines.length > 1) {
      console.log('Header line:', lines[0]);
      console.log('First data line:', lines[1]);
      if (lines.length > 2) {
        console.log('Second data line:', lines[2]);
      }
    }
    
    const parsedData = parseCSV(csvText);
    console.log('Successfully parsed', parsedData.length, 'steps from Google Sheets');
    
    // If parsing results in empty data, use fallback
    if (parsedData.length === 0) {
      console.log('Parsed data is empty, using fallback data');
      return FALLBACK_DATA;
    }
    
    // Log sample of parsed data
    console.log('Sample parsed steps:');
    parsedData.slice(0, 3).forEach((step, index) => {
      console.log(`${index + 1}. ${step.stepName} - ${step.link}`);
    });
    
    return parsedData;
  } catch (error) {
    console.log('Network error occurred, using fallback data:', error.message);
    console.log('Full error:', error);
    return FALLBACK_DATA;
  }
}

function parseCSV(csvText: string): SalsaStep[] {
  const lines = csvText.trim().split('\n');
  
  if (lines.length <= 1) {
    console.log('CSV has no data rows');
    return [];
  }
  
  // Skip header row
  const dataLines = lines.slice(1);
  
  console.log('Total data lines to parse:', dataLines.length);
  
  const parsedSteps = dataLines.map((line, index) => {
    // Simple CSV parsing - handles basic cases
    const values = parseCSVLine(line);
    
    const step = {
      level: values[0]?.trim() || '',
      stepName: values[1]?.trim() || '',
      originalCount: values[2]?.trim() || '',
      type: values[3]?.trim() || '',
      link: values[4]?.trim() || '',
    };
    
    // Log each step as it's parsed
    if (index < 5) { // Log first 5 steps
      console.log(`Parsing line ${index + 1}:`, step);
    }
    
    return step;
  }).filter(step => {
    const hasName = !!step.stepName;
    if (!hasName) {
      console.log('Filtered out empty step');
    }
    return hasName;
  });
  
  console.log(`Filtered to ${parsedSteps.length} valid steps`);
  return parsedSteps;
}

function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  values.push(current);
  
  // Clean up quoted values
  return values.map(value => {
    let cleaned = value.trim();
    if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
      cleaned = cleaned.slice(1, -1);
    }
    return cleaned;
  });
  return values;
}