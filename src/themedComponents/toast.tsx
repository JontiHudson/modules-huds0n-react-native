import { Toast } from '@huds0n/toast';

import { ThemerTypes } from '@huds0n/themer';

export function createThemedToast<cT extends ThemerTypes.CustomTheme>(
  Themer: ThemerTypes.ThemerClass<cT>,
) {
  return Themer.createComponent(Toast, Toast.theming.props)
    .addProps({
      defaultMessageProps: {
        backgroundColor: 'GREY',
        contentsColor: 'BACKGROUND',
        messageStyle: {
          fontSize: 'NOTE',
        },
        titleStyle: {
          fontSize: 'BODY',
        },
      },
    })
    .addStatics({
      $display: (
        themedMessage: ThemerTypes.ThemedProps<
          Toast.Message,
          cT,
          typeof Toast.theming.message
        >,
      ) => {
        return Toast.display(
          Themer.getProps(Toast.theming.message, themedMessage),
        );
      },
      hide: Toast.hide,
      State: Toast.State,
      theming: Toast.theming,
      useIsMessageShowing: Toast.useIsMessageShowing,
    });
}
