import { Button } from '@huds0n/components';
import { ThemerTypes } from '@huds0n/themer';
import { NetworkTypes } from '@huds0n/network-manager';

export function createThemedButton<cT extends ThemerTypes.CustomTheme>(
  Themer: ThemerTypes.ThemerClass<cT>,
) {
  return Themer.createComponent(Button, Button.theming.props)
    .addProps({
      android_ripple: true,
      color: 'PRIMARY',
      disabledStyle: { backgroundColor: 'DISABLED' },
      labelStyle: { color: 'BACKGROUND', fontSize: 'LABEL' },
      spinnerColor: 'BACKGROUND',
      style: {
        alignSelf: 'center',
        borderColor: 'BORDER',
        width: 'BUTTON_WIDTH',
      },
    })
    .inject(
      ({
        outline,
        link,
        submitStatus,
      }: {
        outline?: boolean | ThemerTypes.Color<cT>;
        link?: boolean | ThemerTypes.Color<cT>;
        submitStatus?: NetworkTypes.SubmitStatus;
      }) => {
        if (link) {
          return {
            android_ripple: false,
            color: 'TRANSPARENT',
            disabledLabelStyle: { color: 'DISABLED' },
            disabledStyle: { backgroundColor: 'TRANSPARENT' },
            highlight: false,
            labelStyle: {
              color: link === true ? 'TEXT' : link,
              fontSize: 'NOTE',
              textDecorationLine: 'underline',
            },
            spinnerColor: 'TEXT',
            style: {
              borderWidth: 'NONE',
              minWidth: undefined,
              padding: 'S',
              width: undefined,
            },
          };
        }
        if (outline) {
          const color = outline === true ? 'TEXT' : outline;
          return {
            android_ripple: false,
            color: 'TRANSPARENT',
            disabledLabelStyle: { color: 'DISABLED' },
            disabledStyle: {
              backgroundColor: 'TRANSPARENT',
              borderColor: 'DISABLED',
            },
            feedback: 'fade',
            labelStyle: { color },
            spinnerColor: 'PRIMARY',
            style: {
              borderWidth: 2,
              borderColor: color,
            },
            spinner: submitStatus === 'SUBMITTING',
          };
        }

        return { spinner: submitStatus === 'SUBMITTING' };
      },
    );
}
