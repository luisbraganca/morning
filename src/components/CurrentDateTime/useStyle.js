import { useMediaQuery } from 'react-responsive';

export default function useStyle() {
  const keyboardOpen = useMediaQuery({ maxWidth: 720, maxHeight: 720 });

  return {
    root: {
      display: keyboardOpen ? 'none' : 'block',
      width: '100%',
      overflow: 'hidden',
      textShadow: '0px 0px 5px black',
    },
    time: {
      outline: 'none',
      overflow: 'none',
      fontSize: 80,
      fontWeight: 400,
    },
    date: {
      fontSize: 30,
      fontWeight: 400,
    },
  };
}
