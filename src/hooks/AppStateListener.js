import { useEffect } from 'react';
import { AppState } from 'react-native';
import { useReset } from '../context/ResetContext';

const AppStateListener = () => {
  const { triggerReset } = useReset();

  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'active') {
        triggerReset();
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AppStateListener;