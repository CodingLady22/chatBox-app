import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow 
            projectId="2d4cb845-c38c-4973-aa67-9b99cc9a22b8"
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
            />
        </div>
    )
}



// Using only react-chat-engine-advanced
/*
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
    '2d4cb845-c38c-4973-aa67-9b99cc9a22b8', 
    props.user.username, 
    props.user.secret
    );
    // return <div className="background">chats...</div>
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
        </div>
    )
}
*/

export default ChatsPage