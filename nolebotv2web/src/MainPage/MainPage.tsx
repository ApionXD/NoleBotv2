import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import styled from "styled-components";
import { AccessToken } from "../entities/AccessToken";
import { useStateMachine } from "little-state-machine";
import GuildListing from "./GuildListing";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 2rem;
 
  height: 100%;
  color: white;
`

const DiscordButton = styled.button`
  display: inline-block;
  font-family: Whitney, "Open Sans", Helvetica, sans-serif;
  font-weight: 400;
  font-size: 11pt;
  border-radius: 3px;
  cursor: pointer;
  height: 45px;
  width: 250px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  border: 2px solid #7289DA;
  background-color: #7289DA;
  color: white;
`
function MainPage() {
    const {state} = useStateMachine();
    const discordOauthUri = 'https://discord.com/oauth2/authorize?client_id=548200687964520459&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fredirect&response_type=code&scope=identify%20guilds';

    return (
        <Wrapper>
            <a href={discordOauthUri}>
                <DiscordButton>Log in with Discord</DiscordButton>
            </a>

            <div>
                Hi, Nolebot user!
            </div>

            {
                state?.userToken?.access_token ? <GuildListing />
                    : null
            }
        </Wrapper>
    );
}

export default MainPage;
