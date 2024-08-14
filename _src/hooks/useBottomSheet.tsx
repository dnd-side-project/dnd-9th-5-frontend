import { atom, useRecoilState } from 'recoil';

const BottomSheetState = atom({
  key: 'BottomSheetState',
  default: false,
});

export default function useBottomSheet() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useRecoilState(BottomSheetState);

  function openBottomSheet() {
    setIsBottomSheetOpen(true);
  }
  function closeBottomSheet() {
    setIsBottomSheetOpen(false);
  }

  return { isBottomSheetOpen, openBottomSheet, closeBottomSheet };
}
