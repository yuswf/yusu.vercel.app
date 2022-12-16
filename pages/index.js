import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Head from 'next/head';
import useSWR from 'swr';

import {setData} from '../stores/Me';

import LoaderComponent from '../components/Loader.component';
import ProfileComponent from '../components/Profile.component';

export default function Home() {
    const dispatch = useDispatch();
    const fetcher = url => fetch(url).then(r => r.json()).then(data => data.data);
    const {data, error} = useSWR('https://api.lanyard.rest/v1/users/' + process.env.id, fetcher);

    if (!data) return <LoaderComponent />

    const avatar = process.env.cdnURL + "/avatars/" + process.env.id + "/" + data.discord_user.avatar;
    const statusToColor = {
        online: '#3ba55c',
        idle: '#faa61a',
        dnd: '#ed4245',
        offline: '#697380'
    };

    dispatch(setData(data));

    return (
        <>
            <Head>
                <title>{data.discord_user.username}#{data.discord_user.discriminator} - yusu</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href={avatar}/>
            </Head>

            <ProfileComponent />
        </>
    )
}