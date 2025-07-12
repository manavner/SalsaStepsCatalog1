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
    // Multiple cache busting strategies
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0&cachebust=${timestamp}&rand=${random}&_=${timestamp}`;
    
    console.log('Fetching from URL:', csvUrl);
    
    const response = await fetch(csvUrl, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'If-Modified-Since': 'Thu, 01 Jan 1970 00:00:00 GMT'
      }
    });
    
    if (!response.ok) {
      console.log(`Google Sheets request failed with status: ${response.status}`);
      console.log('Using fallback data instead');
      return FALLBACK_DATA;
    }
    
    const csvText = await response.text();
    console.log('Raw CSV length:', csvText.length);
    console.log('First 300 chars:', csvText.substring(0, 300));
    
    // Look for the specific step in raw data
    const hasEnchufala = csvText.toLowerCase().includes('enchufala con chufala');
    console.log('Raw CSV contains "enchufala con chufala":', hasEnchufala);
    
    const parsedData = parseCSV(csvText);
    
    // If parsing results in empty data, use fallback
    if (parsedData.length === 0) {
      console.log('Parsed data is empty, using fallback data');
      return FALLBACK_DATA;
    }
    
    return parsedData;
  } catch (error) {
    console.log('Network error occurred, using fallback data:', error.message);
    console.log('Using fallback data due to error');
    return FALLBACK_DATA;
  }
}

function parseCSV(csvText: string): SalsaStep[] {
  const lines = csvText.trim().split('\n');
  
  // Skip header row
  const dataLines = lines.slice(1);
  
  console.log('Total data lines to parse:', dataLines.length);
  
  return dataLines.map(line => {
    // Simple CSV parsing - handles basic cases
    const values = parseCSVLine(line);
    
    return {
      level: values[0]?.trim() || '',
      stepName: values[1]?.trim() || '',
      originalCount: values[2]?.trim() || '',
      type: values[3]?.trim() || '',
      link: values[4]?.trim() || '',
    };
  }).filter(step => {
    const hasName = !!step.stepName;
    if (step.stepName.toLowerCase().includes('enchufala con chufala')) {
      console.log('Parsed Enchufala step:', step);
    }
    return hasName;
  }); // Filter out empty rows
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
  return values;
}