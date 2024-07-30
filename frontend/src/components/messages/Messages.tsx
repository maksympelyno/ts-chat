import useChatScroll from "../../hooks/useChatScroll";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();

  const ref = useChatScroll(messages) as React.MutableRefObject<HTMLDivElement>;

  return (
    <div className="px-4 flex-1 overflow-auto" ref={ref}>
      {!loading && messages.length === 0 && (
        <p className="text-center flex justify-center items-center text-white">
          Send a message to start the conversation
        </p>
      )}
      {!loading && messages.map((message) => <Message key={message.id} message={message} />)}
    </div>
  );
};
export default Messages;
