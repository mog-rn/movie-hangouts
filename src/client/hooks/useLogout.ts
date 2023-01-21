import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setSignOut } from '../features/authSlice';

export const useLogout = (): (() => void) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLogout = async (): Promise<void> => {
      await AsyncStorage.clear();
      await AsyncStorage.removeItem('user');
      dispatch(setSignOut());
    };
    return handleLogout;
  }, [dispatch]);

  
};
