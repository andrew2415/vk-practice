import React from 'react';
import {Tabbar, TabbarItem} from "@vkontakte/vkui";
import {Icon28NewsfeedOutline, Icon28QuestionOutline, Icon28UserCircleOutline} from "@vkontakte/icons";
import {useActiveVkuiLocation, useRouteNavigator} from "@vkontakte/vk-mini-apps-router";

const MyTabbar = () => {
    const routerNavigator = useRouteNavigator()
    const {panel: activePanel} = useActiveVkuiLocation()
    return (
        <Tabbar>
        <TabbarItem selected={activePanel === 'home_panel'} text={'Главная'} onClick={() => routerNavigator.push('/')}>
                <Icon28NewsfeedOutline/>
            </TabbarItem >
            <TabbarItem selected={activePanel === 'profile_panel'} onClick={() => routerNavigator.push('/profile')} text={'Профиль'}>
                <Icon28UserCircleOutline/>
            </TabbarItem>
            <TabbarItem selected={activePanel === 'about_panel'} onClick={() => routerNavigator.push('/about')} text={'О программе'}>
                <Icon28QuestionOutline/>
            </TabbarItem>
        </Tabbar>
    );
};

export default MyTabbar;