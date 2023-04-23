import React from 'react'
import * as S from './style'


function SettingPage() {
  return <div>
    <S.TopBar>설정</S.TopBar>
    <S.SettingWrapper>
      <S.SettingMenus>
        <S.SettingModal></S.SettingModal>
      </S.SettingMenus>
    </S.SettingWrapper>
    <S.Nav></S.Nav>
  </div>
}

export default SettingPage
