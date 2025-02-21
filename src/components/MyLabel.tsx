import './MyLabel.css';

interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * allCaps
   */
  allCaps?: boolean;

  /**
   * Color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
   * Font Color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = 'normal',
  allCaps = true,
  color = 'text-primary',
  fontColor = 'red',
}: Props) => {
  return (
    <span className={`${size} ${color} label`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
