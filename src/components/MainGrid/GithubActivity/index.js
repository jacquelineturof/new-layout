import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { IoLogoGithub } from "react-icons/io"
import { IoLinkSharp } from "react-icons/io5"

import Heading from '../../UI/Heading'

import classes from './GitHubActivity.module.css'

const PushEvent = ({ pushEvent }) => (
    <li className = { classes.PushEventContainer } key = { pushEvent.id }>
        <p className = { classes.PushEventLabel }>Push</p>
        <div className = { classes.PushEventInfo }>
            <p className = { classes.PushEventOrg }>{ pushEvent.org.login }</p>
            <p className = { classes.PushEventRepo }>{ pushEvent.repo.name }</p>
        </div>
        <IoLinkSharp className = { classes.PushEventIcon } />
    </li>
)

const GithubActivityList = ({ githubList }) => {
    return (
        <ul className = { classes.ListContainer }>
            { githubList.map(githubEvent => {
                let githubEventUI = <PushEvent pushEvent = { githubEvent } />

                return githubEventUI
            })}
        </ul>
    )
}

const GithubActivity = () => {
    const [ githubEntries, setGithubEntries ] = useState([])

    useEffect(() => {
        const fetchGithubData = async () => {
            const indexStart = 0 // starting at 0 should give us the most recent entries
            const indexEnd = 4 // this determines the number of entries

            const response = await axios.get('https://api.github.com/users/jacquelineturof/events')
            setGithubEntries(response.data.slice(indexStart, indexEnd))
        }

        fetchGithubData()
    }, [])

    return (
        <div className = { classes.Container }>
            <div className = { classes.Content }>
                <Heading isLight = { true }>
                    Github Activity
                </Heading>
                
                <div className = { classes.Name }>
                    <IoLogoGithub color = "#ccc" size = { 24 } />
                    <Heading>
                        jacquelineturof
                    </Heading>
                </div>
                
                <GithubActivityList githubList = { githubEntries } />
            </div>
        </div>
    )
}

export default GithubActivity