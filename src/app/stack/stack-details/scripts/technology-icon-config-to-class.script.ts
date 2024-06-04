import { DeviconSetup } from '../models';

export function technologyIconConfigToClass(
  technologyIcon: DeviconSetup,
): string {
  const { iconName, colored, sufix, wordmark } = technologyIcon;
  const color = colored ? 'colored' : '';
  const wordmarkStyle = wordmark ? '-wordmark' : '';
  return `devicon-${iconName}-${sufix}${wordmarkStyle} ${color}`;
}
