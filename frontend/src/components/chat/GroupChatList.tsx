import GroupChatCard from '@/components/chat/GroupChatCard'
import { useChatStore } from '@/stores/useChatStore'

const GroupChatList = () => {
  const { conversations } = useChatStore()

  if (!conversations) return

  const groupchats = conversations.filter((convo) => convo.type === 'group')

  return (
    <div className="flex-1 overflow-auto p-2 space-y-2">
      {groupchats.map((convo) => (
        <GroupChatCard convo={convo} key={convo._id} />
      ))}
    </div>
  )
}

export default GroupChatList
