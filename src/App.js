import {ChatEngine,} from 'react-chat-engine';
import './App.css';
import ChatFeed  from './components/ChatFeed';
const App = () => {
    return(
    <ChatEngine
        height="100vh"
        projectID="8f6febf3-5099-4e65-b250-fd5ea7407a4a"
        userName="ozzy1"
        userSecret="1234567"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
    )
}
export default App;