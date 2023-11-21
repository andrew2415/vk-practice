import React, {useEffect, useState} from 'react';
import {Avatar, Cell, Group, Header, Panel, PanelHeader, Title} from "@vkontakte/vkui";
import {Icon16Notification} from "@vkontakte/icons";
import VerbList from "../components/verb-list";
import bridge from "@vkontakte/vk-bridge";

const HomePanel = () => {
    const [fetchedUser, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
        }
        fetchData();
    }, []);
    return (
        <Panel id={'main'}>
            <PanelHeader>Irregular verbs</PanelHeader>
            <Group align={'center'}>
                <Icon16Notification />
                <Title>Не правильные глаголы</Title>
            </Group>
            <Group header={<Header mode="secondary">Данные пользователя</Header>}>
                <Cell
                    before={fetchedUser?.photo_200 ? <Avatar src={fetchedUser?.photo_200}/> : null}
                    subtitle={fetchedUser?.city && fetchedUser?.city.title ? fetchedUser?.city.title : ''}
                >
                    {`${fetchedUser?.first_name} ${fetchedUser?.last_name}`}
                    {fetchedUser?.bdate && <div>{fetchedUser?.bdate}</div>}
                </Cell>
            </Group>
            <VerbList/>
        </Panel>
    );
};

export default HomePanel;