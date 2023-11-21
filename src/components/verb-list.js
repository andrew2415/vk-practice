import {Button, FormItem, FormLayout, Group, Header, InfoRow, Input, List} from "@vkontakte/vkui";
import React from "react";
const verbs = require('../data.json');


const VerbList = () => {
    const [search, setSearch] = React.useState('');
    const [activeVerb, setActiveVerb] = React.useState(null);
    const handleSetSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        const verb = verbs.find(v => v.firstForm === search)
        if (verb) {
            setActiveVerb(verb)
        } else {
            setActiveVerb(null)
        }
    }

    return (
        <>
            <Group header={<Header mode={'secondary'}>Глагол</Header>}>
                <FormLayout onSubmit={handleClick}>
                    <FormItem>
                        <Input onChange={handleSetSearch} value={search} placeholder={'Напишите глагол'}/>
                    </FormItem>
                    <FormItem>
                        <Button type={'submit'} style={{width: '100%'}}>Получить</Button>
                    </FormItem>
                </FormLayout>
            </Group>

            <Group header={<Header mode="secondary">Формы глагола</Header>}>
                <List>
                    <InfoRow header={'2-ая форма'}>{activeVerb?.secondForm || "Нет"}</InfoRow>
                    <InfoRow header={'2-ья форма'}>{activeVerb?.thirdForm || "Нет"}</InfoRow>
                    <InfoRow header={'Перевод'}>{activeVerb?.translate || 'Нет'}</InfoRow>
                </List>
            </Group>

        </>
    );
};

export default VerbList;