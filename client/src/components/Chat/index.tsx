import ChatItem from "../ChatItem";

export default function Chat() {
  return (
    <section>
      <section className="mb-6 pb-6 border-b">
        <h2>All</h2>
        <ul>
          <ChatItem />
        </ul>
      </section>
      <section>
        <h2>Online</h2>
        <ul>
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </ul>
      </section>
    </section>
  );
}
