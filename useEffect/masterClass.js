// 1. BASIC USAGE
// ---------------
import React, { useState, useEffect } from 'react';

// The most fundamental use of useEffect is for side effects that need to happen
// after render. Common examples include:
// - DOM mutations
// - API calls
// - Subscriptions
// - Timer operations

function BasicExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Example 1: Effect runs after every render
  useEffect(() => {
    console.log('This runs after every render');
  }); // No dependency array

  // Example 2: Effect runs only when count changes
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
    document.title = `Count: ${count}`;
  }, [count]); // Only re-run if count changes

  // Example 3: Effect runs once on mount
  useEffect(() => {
    console.log('Component mounted');
  }, []); // Empty dependency array = run once
}

// 2. CLEANUP FUNCTIONS
// -------------------
// Cleanup functions prevent memory leaks and clean up side effects

function CleanupExample() {
  // Example 1: WebSocket Cleanup
  useEffect(() => {
    const ws = new WebSocket('wss://example.com');
    
    ws.onmessage = (event) => {
      console.log(event.data);
    };

    // Cleanup: Close WebSocket when component unmounts
    return () => {
      ws.close();
    };
  }, []);

  // Example 2: Event Listener Cleanup
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}

// 3. COMMON PATTERNS
// -----------------

// 3.1 Data Fetching with Loading States
function DataFetchingPattern() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Prevent state updates if component unmounts

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch('https://api.example.com/data');
        const json = await response.json();
        
        if (isMounted) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    // Cleanup function prevents state updates after unmount
    return () => {
      isMounted = false;
    };
  }, []); // Empty array means fetch once on mount
}

// 3.2 Form Handling with Auto-Save
function AutoSaveForm() {
  const [formData, setFormData] = useState({});
  const [saveStatus, setSaveStatus] = useState('idle');

  useEffect(() => {
    // Don't save if form is empty
    if (Object.keys(formData).length === 0) return;

    const timeoutId = setTimeout(async () => {
      setSaveStatus('saving');
      try {
        await saveToServer(formData);
        setSaveStatus('saved');
      } catch (error) {
        setSaveStatus('error');
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [formData]); // Save whenever form data changes
}

// 4. ADVANCED PATTERNS
// -------------------

// 4.1 Debounced Search
function DebouncedSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!searchTerm) return;

    const timeoutId = setTimeout(async () => {
      setIsSearching(true);
      try {
        const response = await fetch(`/api/search?q=${searchTerm}`);
        const data = await response.json();
        setResults(data);
      } finally {
        setIsSearching(false);
      }
    }, 500); // Wait 500ms after last keystroke

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);
}

// 4.2 Previous Value Comparison
function usePrevious(value) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}

function PriceTracker({ price }) {
  const previousPrice = usePrevious(price);
  
  useEffect(() => {
    if (previousPrice && price > previousPrice) {
      console.log('Price increased!');
    }
  }, [price, previousPrice]);
}

// 5. COMMON MISTAKES AND SOLUTIONS
// ------------------------------

// ❌ Mistake 1: Dependencies Missing
function MissingDeps({ userId }) {
  const [user, setUser] = useState(null);

  // Missing userId in deps array - won't update when userId changes
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, []); // Should include userId
}

// ✅ Solution 1: Complete Dependencies
function CorrectDeps({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]); // Correctly includes userId
}

// ❌ Mistake 2: Object/Array Dependencies
function ObjectDependencies() {
  // This will cause infinite loops because {} !== {}
  useEffect(() => {
    doSomething();
  }, [{ id: 1 }]);
}

// ✅ Solution 2: Primitive Dependencies
function CorrectObjectDependencies() {
  const [id] = useState(1);
  
  useEffect(() => {
    doSomething();
  }, [id]); // Use primitive values in deps
}

// 6. BEST PRACTICES
// ----------------

// 6.1 Custom Hook for API Calls
function useApi(url) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setState(prev => ({ ...prev, loading: true }));
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (isMounted) {
          setState({
            data,
            loading: false,
            error: null
          });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: error.message
          });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
}

// 6.2 Separate Effects by Concern
function UserDashboard({ userId }) {
  // Effect 1: Handle user data
  useEffect(() => {
    fetchUserData(userId);
  }, [userId]);

  // Effect 2: Handle notifications
  useEffect(() => {
    const ws = new WebSocket('wss://notifications');
    return () => ws.close();
  }, []);

  // Effect 3: Handle activity tracking
  useEffect(() => {
    const tracker = new ActivityTracker();
    return () => tracker.stop();
  }, []);
}