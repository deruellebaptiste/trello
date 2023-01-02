import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useModal from './useModal';

test('useModal should return the initial state', () => {
  const { result } = renderHook(() => useModal());
  expect(result.current.isShowing).toBe(false);
});

test('useModal should toggle the modal state', () => {
  const { result } = renderHook(() => useModal());
  expect(result.current.isShowing).toBe(false);
  act(() => result.current.toggle());
  expect(result.current.isShowing).toBe(true);
  act(() => result.current.toggle());
  expect(result.current.isShowing).toBe(false);
});
