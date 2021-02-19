import { createFAB, FABTypes } from '@huds0n/fab';

import { ThemerTypes } from '@huds0n/themer';

export function createThemedFAB<cT extends ThemerTypes.CustomTheme>(
  Themer: ThemerTypes.ThemerClass<cT>,
) {
  return () => {
    const UnthemedFAB = createFAB();

    return Themer.createComponent(UnthemedFAB, UnthemedFAB.theming.props)
      .addProps({
        baseAction: {
          textStyle: {
            color: 'BACKGROUND',
            fontSize: 'NOTE',
          },
          icon: {
            color: 'BACKGROUND',
          },
        },
        FABColor: 'PRIMARY',
        FABIconColor: 'BACKGROUND',
        positionOffsetX: 'L',
        positionOffsetY: 'L',
      })
      .addStatics({
        $setActions: (
          themedActions: ThemerTypes.ThemedProps<
            FABTypes.Action,
            cT,
            typeof UnthemedFAB.theming.action
          >[],
        ) => {
          return UnthemedFAB.setActions(
            themedActions.map((action) =>
              Themer.getProps(UnthemedFAB.theming.action, action),
            ),
          );
        },
        close: UnthemedFAB.close,
        closeAllFABs: UnthemedFAB.closeAllFABs,
        closeOtherFABs: UnthemedFAB.closeOtherFABs,
        DEFAULT_SIZE: UnthemedFAB.DEFAULT_SIZE,
        hide: UnthemedFAB.hide,
        open: UnthemedFAB.open,
        setActions: UnthemedFAB.setActions,
        show: UnthemedFAB.show,
        theming: UnthemedFAB.theming,
      });
  };
}
