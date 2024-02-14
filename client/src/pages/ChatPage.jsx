import Chat from "../components/Chat";
import Header from "../components/Header";

function ChatPage(props){
    return(
        <>
        <Header login={false} signup={false}/>
        <Chat socket={props.socket}/>
        </>
    )
}

export default ChatPage;