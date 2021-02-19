import { Image } from 'react-native';

import { AnimatedText } from '@huds0n/animations';
import { FadeOverlay, ScrollView } from '@huds0n/components';
import { ThemerTypes } from '@huds0n/themer';

import { createThemedButton } from './buttons';
import { createThemedIcon } from './icon';
import { createThemedFAB } from './fab';
import { createThemedInputs } from './inputs';
import { createThemedScreenManager } from './screenManager';
import { createThemedToast } from './toast';
import { createThemedViews } from './views';

export function createThemedComponents<cT extends ThemerTypes.CustomTheme>(
  Themer: ThemerTypes.ThemerClass<cT>,
) {
  return {
    ...createThemedIcon(Themer),
    ...createThemedInputs(Themer),
    ...createThemedViews(Themer),

    $Button: createThemedButton(Themer),

    $createFAB: createThemedFAB(Themer),

    $FadeOverlay: Themer.createComponent(FadeOverlay, FadeOverlay.theming.props)
      .addProps({ color: 'BACKGROUND', useColorScheme: true })
      .setMemo(true),

    $Image: Themer.createComponent(Image, {
      style: 'viewStyle',
    })
      .addProps({ style: { borderColor: 'BORDER' }, useColorScheme: true })
      .setMemo(true),

    $ScreenManager: createThemedScreenManager(Themer),

    $ScrollView: Themer.createComponent(ScrollView, ScrollView.theming.props),

    $Text: Themer.Text.addProps({
      style: {
        borderColor: 'BORDER',
        color: 'TEXT',
        fontSize: 'BODY',
      },
      useColorScheme: true,
    }).setMemo(true),

    $Toast: createThemedToast(Themer),

    $AnimatedText: Themer.createComponent(
      AnimatedText,
      AnimatedText.theming.props,
    )
      .addProps({
        style: {
          borderColor: 'BORDER',
          color: 'TEXT',
          fontSize: 'BODY',
        },
        useColorScheme: true,
      })
      .setMemo(true),
  };
}
