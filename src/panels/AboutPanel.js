import React, {useEffect} from 'react';
import {Avatar, Cell, Group, List, Panel, PanelHeader, Paragraph, Title} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

const AboutPanel = () => {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        bridge.send('VKWebAppGetUserInfo', {
            user_ids: '743784474, 743784479'
        }).then((data) => {
            setUsers(data.result);
        });
    }, []);


    return (
        <Panel>
            <PanelHeader>О программе irregular verbs</PanelHeader>
            <Group>
                <Title level={"1"}>О программе</Title>
                <Title level={"3"} style={{ marginBottom: 10, marginTop: 10 }}>Назначение</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at commodi dignissimos, eos in nemo obcaecati quae quia, quidem repellendus reprehenderit tempora! Animi asperiores culpa dolorem, excepturi iure quibusdam rem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, consequatur consequuntur debitis doloribus error facilis, illo impedit ipsa iure porro quaerat quibusdam quidem repellat repellendus, reprehenderit repudiandae sint! Magnam, nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, dolores magni maxime nihil tempora! Ex hic incidunt ipsum magnam perferendis, quae qui similique? Id natus reiciendis sit veniam vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at autem dolore illum rerum, saepe. Aliquid beatae blanditiis dolores ea iure iusto nostrum quod, reiciendis sapiente, sunt tempore veritatis voluptate.</Paragraph>
                <Title level={"3"} style={{marginBottom: 10, marginTop: 10}}>Правила использования</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste modi, quaerat. At consequuntur enim eum eveniet illo necessitatibus nisi odio rerum. Ad aliquid distinctio ducimus ea esse, ex ratione veniam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam consectetur cupiditate eum excepturi fuga, iste, necessitatibus numquam omnis quae quasi quibusdam recusandae reprehenderit rerum similique soluta tempore voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid beatae dicta dignissimos dolore doloribus ea eligendi et itaque nemo non nostrum porro quae quibusdam quidem quos reprehenderit sed velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque, autem beatae culpa doloribus dolorum esse exercitationem iure labore, optio pariatur perspiciatis quae quod, rerum saepe sunt temporibus veritatis voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis consequatur, cumque, doloremque ex exercitationem explicabo facilis hic impedit magnam maxime nihil nobis, porro quis quisquam sequi velit voluptate voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet animi cumque earum esse ipsam, ipsum iusto maiores molestiae nisi nostrum odit perspiciatis placeat quo quos vitae voluptas voluptate voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis cumque ducimus eius eligendi, eos et explicabo fuga incidunt iste molestias nostrum porro quidem ratione reiciendis, sequi soluta ut velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur dolorum ipsam, nisi nostrum quia rem repellat repudiandae similique, tempora vel velit? Accusantium corporis facilis laboriosam modi, perferendis qui sint! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi assumenda atque autem consequatur doloremque, doloribus dolorum earum id labore mollitia officiis perferendis repellendus reprehenderit, sequi sunt tenetur vero voluptates.</Paragraph>
            </Group>
            <Group>
                <Title>Авторы</Title>
                <List>
                    {users.map((user) => (
                        <Cell before={<Avatar src={user.photo_200}/>} subtitle={user.city && user.city.title ? user.city.title : ''}>{user.first_name} {user.last_name}
                            {user.bdate && <div>{user.bdate}</div>}
                        </Cell>
                    ))}
                </List>
            </Group>
        </Panel>
    );
};

export default AboutPanel;