import {
  ThemeTogglerButton,
  ThemeTogglerButtonProps,
} from '@/components/animate-ui/components/buttons/theme-toggler';

// interface ThemeTogglerButtonDemoProps {
//   variant: ThemeTogglerButtonProps['variant'];
//   size: ThemeTogglerButtonProps['size'];
//   direction: ThemeTogglerButtonProps['direction'];
//   system: boolean;
// }

export default function ThemeTogglerButtonDemo({
  variant,
  size,
  direction,
  system,
}) {
  return (
    <ThemeTogglerButton
      variant={variant}
      size={size}
      direction={direction}
      modes={system ? ['light', 'dark'] : ['light', 'dark']}
    />
  );
}