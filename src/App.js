import React, { useState, useEffect } from 'react';

import bridge from '@vkontakte/vk-bridge';
import {
	View,
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	SplitLayout,
	SplitCol,
	PanelHeader, Root, Epic, Tabbar, TabbarItem
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {useActiveVkuiLocation, useGetPanelForView} from "@vkontakte/vk-mini-apps-router";
import {Icon28NewsfeedOutline, Icon28QuestionOutline, Icon28UserCircleOutline} from "@vkontakte/icons";
import HomePanel from "./panels/HomePanel";
import MyTabbar from "./components/my-tabbar";
import AboutPanel from "./panels/AboutPanel";
import ProfilePanel from "./panels/ProfilePanel";

const App = () => {
	const {view: activeView} = useActiveVkuiLocation()
	const activePanel = useGetPanelForView('default_view')
	return (
		<Epic activeStory={activeView} tabbar={
			<MyTabbar/>
		}>
			<View activePanel={activePanel} id={activeView}>
				<HomePanel nav={'home_panel'}></HomePanel>
				<AboutPanel nav={'about_panel'}></AboutPanel>
				<ProfilePanel nav={'profile_panel'}></ProfilePanel>
			</View>
		</Epic>
	);
}

export default App;
