"use client"

import {useOthers} from "../liveblocks.config"

export function CollaborativeApp() {
    const others = useOthers()
    const userCount = others.length

    return (
        <div>
            <h1>Collaborative App</h1>
            <h2>There are {userCount} other users online</h2>
            <ul>
                {others.map(other => (
                    <li key={other.connectionId}>{other.connectionId}</li>
                ))}
            </ul>
        </div>
    )
}