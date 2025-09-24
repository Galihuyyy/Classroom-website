import { deepOrange, deepPurple } from '@mui/material/colors'
import React from 'react'
import { abil, aca, arya, bima, caca, dimas, f, niken, putra, rama, tino } from './assets'

const useData = () => {
    const motivation = [
        {
            "nama": "putraaa (shoo) ",
            "motivasi": "i lovee you smile in the class, so please smilee everyday",
            "tag": "utaa",
            "image" : putra
        },
        {
            "nama": "f",
            "motivasi": "Maaf tiba-tiba, aku suka kamu. Cuma pengen kamu tahu.",
            "tag": "dia",
            "image" : f
        },
        {
            "nama": "bima sensei",
            "motivasi": "Aku masih belum bisa melupakanmu",
            "tag": "Ndak usah mencoba kalau akhirnya menyerah",
            "image" : bima
        },
        {
            "nama": "MenuruTINOke",
            "motivasi": "Ada kalanya didengar juga bagian dari jalan keluar.",
            "tag": "Dmnarumahituada",
            "image" : tino
        },
        {
            "nama": "Arya",
            "motivasi": "Capek?, semangat untuk para calon-calon sandwich generation ",
            "tag": "calonSG",
            "image" : arya
        },
        {
            "nama": "ccaaa",
            "motivasi": "semangat jalani hari yaa",
            "tag": "semangat",
            "image" : caca
        },
        {
            "nama": "Rama (Bang Al)",
            "motivasi": "Ambil resikonya atau stuck selamanya, No Risk No F82 ///M4",
            "tag": "999Aura",
            "image" : rama
        },
        {
            "nama": "biell",
            "motivasi": "remember why you started",
            "tag": "KeepGoingn",
            "image" : abil
        },
        {
            "nama": "wahyu ardiansyah",
            "motivasi": "semoga masa depanku secerah layar hp ibuku",
            "tag": "kakangA6",
            "image" : aca
        },
        {
            "nama": "kenjayzz gf hyun wook ",
            "motivasi": "KORN once said 'yur na urrr ra da mm da i da brrrr ra...'",
            "tag": "wonglioretiopo",
            "image" : niken
        },
        {
            "nama": "samid ",
            "motivasi": "ha banget kak ",
            "tag": "ternosontek",
            "image" : dimas
        }

    ]

    const avatar = [
		{label:'P', color: '#03AEC6'},
		{label:'F', color: '#01294d'},
		{label:'BS', color: '#0e0548'},
		{label:'M', color: '#141414'},
	]

    const information = [
        {label : 'Orang Pusing', value: 36},
        {label : 'Era Pusing', value: '2023-2026'},
        {label : 'Generasi', value: 'ChatGPT'}
    ]


    return {motivation, avatar, information}
}

export default useData


