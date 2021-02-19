import { ScreenManager } from '@huds0n/screen-manager';

import { ThemerTypes } from '@huds0n/themer';

export function createThemedScreenManager<cT extends ThemerTypes.CustomTheme>(
  Themer: ThemerTypes.ThemerClass<cT>,
) {
  return Themer.createComponent(ScreenManager, ScreenManager.theming.props)
    .addProps({
      initialAppearance: {
        backgroundColor: 'BACKGROUND',
        statusBar: 'PRIMARY',
        leftBar: 'BLACK',
        rightBar: 'BLACK',
        bottomBar: 'PRIMARY',
      },
    })
    .addStatics({
      $setAppearance: (
        themedAppearance: ThemerTypes.ThemedProps<
          ScreenManager.Appearance,
          cT,
          typeof ScreenManager.theming.appearance
        >[],
      ) => {
        return ScreenManager.setAppearance(
          Themer.getProps(ScreenManager.theming.appearance, themedAppearance),
        );
      },
      getAppearance: ScreenManager.getAppearance,
      useDimensions: ScreenManager.useDimensions,
      theming: ScreenManager.theming,
    });
}
