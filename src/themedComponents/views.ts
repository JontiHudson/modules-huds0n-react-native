import { Pressable, View } from '@huds0n/components';
import { ThemerTypes } from '@huds0n/themer';

export function createThemedViews<cT extends ThemerTypes.CustomTheme>(
  Themer: ThemerTypes.ThemerClass<cT>,
) {
  const $View = Themer.createComponent(View, View.theming.props).addProps({
    style: { borderColor: 'BORDER' },
  });

  const $Container = $View
    .addProps({
      style: { flex: 1 },
    })
    .addPresets({
      absolute: { style: { position: 'absolute' } },
      center: { style: { alignItems: 'center', justifyContent: 'center' } },
      fill: { style: { fill: true } },
      form: {
        style: {
          alignSelf: 'center',
          padding: 'L',
          maxWidth: 'INPUT_WIDTH',
          width: 'FULL',
        },
      },
      row: { style: { flexDirection: 'row' } },
      padded: { style: { padding: 'L' } },
    });

  const $Separator = $View
    .inject(({ size }: { size: ThemerTypes.Spacing<cT> | number }) => ({
      style: { marginTop: size, marginLeft: size },
    }))
    .addProps({ size: 'M' });

  return {
    $Container,

    $Separator,

    $View,

    $Pressable: Themer.createComponent(
      Pressable,
      Pressable.theming.props,
    ).addProps({ style: { borderColor: 'BORDER' } }),
  };
}
