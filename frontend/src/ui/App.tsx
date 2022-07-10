import { useState } from 'react'
import ChatArea from './ChatArea/ChatArea'
import RecentChats from './RecentChats/RecentChats'

import { EventsOn } from '../../wailsjs/runtime/runtime'
import { ipc } from '../../wailsjs/go/models'
import { GetRecentChats } from '../../wailsjs/go/ipc/Channel'

import './App.css'

let updateRecentChatsCallback: Function = () => {console.log('updateRecentChatsCallback() has not been defined')}
EventsOn('receivedMessage', (data: ipc.SendMessageRequest) => {
  updateRecentChatsCallback()
})

function App() {
  const [recentChatLineItems, setRecentChatLineItems] = useState([] as ipc.RecentChat[]);
  const [activeChatId, setActiveChatId] = useState('')

  updateRecentChatsCallback = async () => {
    setRecentChatLineItems(await GetRecentChats())
  }

  return (
    <div id="App">
      <RecentChats recentChatLineItems={recentChatLineItems} activeChatId={activeChatId} onClick={setActiveChatId} />
      <ChatArea chatId={activeChatId} />
    </div>
  )
}

export default App
