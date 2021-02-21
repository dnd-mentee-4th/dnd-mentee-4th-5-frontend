import { css } from '@emotion/native';
import React from 'react';
import { Text } from 'react-native';

import ThemeView from '../../templates/ThemeView';

const MyPageScreen: React.FC = () => {
  return (
    <ThemeView
      style={css`
        flex: 1;
      `}
    >
      <Text>검색</Text>
    </ThemeView>
  );
};

export default MyPageScreen;