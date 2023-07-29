import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend(show => !show);
  }

  function handleSelectedFriend(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend(cur => (cur?.id === friend.id ? null : friend));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          initialFriends={initialFriends}
          selectedFriend={selectedFriend}
          onSelectedFriend={handleSelectedFriend}
        />

        {showAddFriend && <AddFriend />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <SplitBill selectedFriend={selectedFriend} />
    </div>
  );
}

function FriendsList({ initialFriends, onSelectedFriend, selectedFriend }) {
  return (
    <ul>
      {initialFriends.map(friend => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelectedFriend={onSelectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelectedFriend, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h2>{friend.name}</h2>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}E
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}E
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelectedFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function AddFriend() {
  return (
    <form className="form-add-friend">
      <label>👯Friend name</label>
      <input type="text" />

      <label>🌇Image URL</label>
      <input type="text" placeholder="https://i.pravatar.cc/48" />

      <Button>Add</Button>
    </form>
  );
}

function SplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split the bill with {selectedFriend?.name}</h2>

      <label>💲Bill value</label>
      <input type="text" />

      <label>🫵 Your expense</label>
      <input type="text" />

      <label>👯‍♂️ {selectedFriend?.name}'s expense</label>
      <input type="text" disabled />

      <label>💰 Who is paying the bill?</label>
      <select>
        <option>You</option>
        <option>{selectedFriend?.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
