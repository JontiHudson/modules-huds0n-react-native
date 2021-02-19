import { Badge, Icon } from '@huds0n/components';
import { ThemerTypes } from '@huds0n/themer';

export function createThemedIcon<cT extends ThemerTypes.CustomTheme>(
  Themer: ThemerTypes.ThemerClass<cT>,
) {
  return {
    $Badge: Themer.createComponent(Badge, Badge.theming.props)
      .addProps({
        ...badgeProps,
        useColorScheme: true,
      })
      .setMemo(true),

    $Icon: Themer.createComponent(Icon, Icon.theming.props)
      .addProps({
        ...iconProps,
        useColorScheme: true,
      })
      .setMemo(true),
  };
}

const badgeProps = {
  color: 'BADGE',
  textColor: 'BACKGROUND',
} as const;

const iconProps = {
  badgeProps: badgeProps,
  containerStyle: {
    borderColor: 'BORDER',
  },
  color: 'TEXT',
  size: 22,
} as const;
