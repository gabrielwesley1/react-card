import React from "react";
import BotaoAzul from "../components/Botao";
import CardMusica from "../components/cardMusica";
import Menu from "../components/Menu";

function Musicas() {
    return (
        <>

            <Menu />
            <div class="container">
                <div class="filter">
                    <BotaoAzul texto="Adicionar" />
                </div>
            </div>

            <div class="container">
                <div class="music-boxes">
                    <CardMusica musica="Deixa em off" categoria="Pagode" ano="2000" artista="Turma do pagode"/>
                    <CardMusica musica="Meu amor" categoria="Pagode" ano="1999" artista="Menos é mais"/>
                    <CardMusica musica="Farol das estrelas" categoria="Pagode" ano="2002" artista="Soweto"/>
                    <CardMusica musica="Fala dele" categoria="Pagode" ano="2001" artista="Belo"/>
                    <CardMusica musica="Pé na areia" categoria="PAgode" ano="1992" artista="Thiaguinho"/>
                    <CardMusica musica="Melhor eu ir" categoria="Pagode" ano="2012" artista="Péricles"/>
                    <CardMusica musica="Até o sol quis ver" categoria="Pagode" ano="2020" artista="Ferrugem"/>
                    <CardMusica musica="Insegurança" categoria="Pagode" ano="2019" artista="Pixote"/>
                    <CardMusica musica="Gamei" categoria="Pagode" ano="2018" artista="Exaltassamba"/>
                </div>
            </div>
        </>
    );
}

export default Musicas;