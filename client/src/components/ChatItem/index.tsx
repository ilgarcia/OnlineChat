export default function ChatItem() {
  return (
    <li>
      <button className="flex items-center w-full my-2 p-2 bg-white rounded-md shadow">
        <figure>
          <img src="/" alt="img" className="rounded-full"/>
        </figure>
        <div className="w-full ml-3 text-start">
          <h3 className="font-medium">Person</h3>
          <p>Text</p>
        </div>
      </button>
    </li>
  );
}
